const ByteBuffer = require('byte');
const Transform = require('stream').Transform;
const bb = ByteBuffer.allocate(1024 * 1024);
let id = 0;

//下面来看看实现细节，Encoder 是一个 Transform Stream，它负责将 JS 对象转换成二进制，然后传递给 net.Socket

// encoder
class ProtocolEncoder extends Transform {
  constructor(options) {
    super({ writableObjectMode: true });
  }
  
  writeRequest(req) {
    return this._doTransform('request', req);
  }

  writeResponse(res) {
    return this._doTransform('response', res);
  }
  
  _doTransform(packetType, data) {
    const packetId = id++;
    return new Promise(resolve => {
      this.once(`tranform_${packetType}_${packetId}`, resolve);
      this.write(Object.assign({
        packetId,
        packetType,
      }, data)),
    }).then(([ result ]) => {
      if (result.error) {
        throw result.error;
      }
      return result;
    });
  }
  
  _transform(packet, encoding, callback) {
    const { packetId, packetType, data } = packet;
    const result = {
      packetId,
      packetType,
      data: null,
      error: null,
    };
    try {
      bb.reset();
      bb.put(packetType === 'request' ? 0 : 1);
      bb.putInt(packetId);
      bb.put(1);
      bb.skip(4);
      bb.putRawString(JSON.stringify(data));
      const bodyLength = bb.position() - 10;
      bb.putInt(6, bodyLength);
      result.data = bb.array();
      callback(null, result.data);
    } catch (err) {
      result.error = err;
    }
    this.emit(`tranform_${packetType}_${packetId}`, result);
  }
}

// Decoder 是一个 Writable Stream，它负责接收 net.Socket 传递过来的数据，解码以后抛给业务处理

// decoder
const Writable = require('stream').Writable;
const HEADER_LEN = 10;

class ProtocolDecoder extends Writable {
  constructor(options) {
    super(options);
    this._buf = null;
    this._bufLength = 0;
  }
  
  _write(chunk, encoding, callback) {
    if (this._bufLength > 0) {
      const total = this._bufLength + chunk.length;
      this._buf = Buffer.concat([ this._buf, chunk ], total);
      this._bufLength = total;
    } else {
      this._buf = chunk;
      this._bufLength = chunk.length;
    }
    try {
      let unfinish = false;
      do {
        unfinish = this._decode();
      } while (unfinish);
      callback();
    } catch (err) {
      callback(err);
    }
  }
  
  _decode() {
    if (this._bufLength < HEADER_LEN) {
      return false;
    }
    const bodyLength = this._buf.readInt32BE(6);
    const packetLength = HEADER_LEN + bodyLength;
    if (this._bufLength < packetLength) {
      return false;
    }
    const packet = {
      packetId: this._buf.readInt32BE(1),
      packetType: this._buf[0] === 0 ? 'request' : 'response',
      codec: this._buf[5];
      data: JSON.parse(this._buf.toString('utf8', HEADER_LEN, packetLength)),
    };
    // 这里异步化是为了避免 listener 报错影响到 decoder
    process.nextTick(() => { this.emit(packet.packetType, packet); });
    const restLen = this._bufLength - packetLength;
    this._bufLength = restLen;
    if (restLen) {
      this._buf = this._buf.slice(packetLength);
      return true;
    }
    this._buf = null;
    return false;
  }
}

module.exports = {
  encoder: ProtocolEncoder
}