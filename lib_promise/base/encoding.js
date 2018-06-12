'use strict';

/**
 *
 * @author xiaoxudoo
 * @version V1.0 创建时间：2018-04-19
 */

const { mns } = require('../blink/mns.js');

// ----------------------------------- milink 协议 -------------------------------
const BYTE_SIZE = 1;
const HYHEADER_SOH = ; // 报文头字节
const	HYHEADER_EOT = ; // 报文末字节
const HYHEADER_PACKET_HEAD_LEN = ; // 头部长度
const HYHEADER_EXT_BYTE_SIZE = 0;

function HyHeader(options) {
  this.Version = options.Version || 0; 
  this.Cmd = options.Cmd || 0;
  this.Checksum = options.Checksum || 0; //  uint16
  this.Seq = options.Seq || 0;
  this.HeaderExtLen = options.HeaderExtLen || 0; 
  this.ResponseFlag = options.ResponseFlag || 0; 
  this.ErrCode = options.ErrCode || 0;
  this.Reserved = options.Reserved || 0; 
  this.Length = options.Length || 0;
}

/**
 * @desc 根据请求命令字包装请求头
 * @param cmd: 请求命令字ID
 * @returns {} HyHeader对象
 * @public
 */
function newHyHeader(cmd) {
  const opt = {
    Cmd: cmd,
    Seq: parseInt(Math.random() * 4294967295), // 随机生成一个请求序列，不超过的uint32的最大值
  };
  return new HyHeader(opt);
}

/**
 * @desc pack milink request buffer
 * @param req: 请求的pbBuf
 * @return {Object}
 * @public
 */
HyHeader.prototype.Pack = function(pbBuf) {
  const _this = this;

  this._setLengthByMsg(pbBuf.length);
  const headBuf = this._encode();
  const sendBuf = Buffer.concat([ Buffer.from([ HYHEADER_SOH ]), headBuf, pbBuf, Buffer.from([ HYHEADER_EOT ]) ], this.Length);

  const rst = {
    hy: _this,
    sendBuf,
    error: null,
  };
  return rst;
};

/**
 * @desc unpack milink response buffer
 * @param recvBuf: 响应buffer
 * @return {Object}
 * @public
 */
HyHeader.prototype.Unpack = function(recvBuf) {
  // check
  const rst = {
    pbBuf: null,
    error: null,
  };

  const bufLen = recvBuf.length;
  if (bufLen <= 0) {
    rst.error = new Error('hyheader : receive packet is empty.');
    return rst;
  }

  if (HYHEADER_SOH != recvBuf[0]) {
    rst.error = new Error(`hyheader : packet first char error. ${recvBuf[0]}`);
    return rst;
  }

  if (HYHEADER_EOT != recvBuf[bufLen - 1]) {
    rst.error = new Error(`hyheader : packet last char error. ${recvBuf[bufLen - 1]}`);
    return rst;
  }

  if (bufLen < HYHEADER_PACKET_HEAD_LEN + 1) {
    rst.error = new Error(`receive hyheader packet length is too short. length = ${bufLen}`);
    return rst;
  }

  rst.pbBuf = recvBuf.slice(HYHEADER_PACKET_HEAD_LEN + 1, bufLen - 1);
  return rst;
};

/**
 * @desc encode hyheader, tcp序列为大端序
 * @return {Buffer}
 * @private
 */
HyHeader.prototype._encode = function() {

  console.log(this);

  const hyBuffer = Buffer.alloc(HYHEADER_PACKET_HEAD_LEN);

  hyBuffer.readUInt8(this.Version, 0);
  hyBuffer.writeUInt32BE(this.Cmd, 1);
  hyBuffer.writeUInt16BE(this.Checksum, 5);
  hyBuffer.writeUInt32BE(this.Seq, 7);
  hyBuffer.writeUInt32BE(this.HeaderExtLen, 11);
  hyBuffer.readUInt8(this.ResponseFlag, 15);
  hyBuffer.writeUInt16BE(this.ErrCode, 16);
  // hyBuffer.readUInt8(this.Reserved, 18); 预留字段
  hyBuffer.writeUInt32BE(this.Length, 19);

  return hyBuffer;
};
/**
 * @desc 设置hyheader的Length字段
 * @param l: 字段长度, 不能超过uint32的长度
 * @private
 */
HyHeader.prototype._setLength = function(l) {
  this.Length = l;
};

/**
 * @desc 根据请求pb设置hyheader的Length字段
 * @param pbLen: 请求主体包装成buffer的长度
 * @private
 */
HyHeader.prototype._setLengthByMsg = function(pbLen) {
  this._setLength(HYHEADER_PACKET_HEAD_LEN + BYTE_SIZE * 2 + HYHEADER_EXT_BYTE_SIZE + Number(pbLen));
};


// ------------------------------ c2s upstream/downstream 协议 --------------------------------
/**
 * @desc upstream/downstream 是native客户端与服务端约定好的特定请求、响应pb格式。它是milink协议的一部分。
 */

/**
 * @desc pack milink c2s request buffer
 * @param pbBuf: 请求的pbBuf, clientParams: 客户端请求参数
 * @return {Object}
 * @public
 */
HyHeader.prototype.ClientPack = function(pbBuf, clientParams) {

  const rst = {
    hy: null,
    sendBuf: null,
    error: null,
  };

  let ipInfo;
  if (clientParams.ipInfo && clientParams.ipInfo.ipType != undefined) {
    const ipInfoErr = mns.ClientIpInfo.verify(clientParams.ipInfo);
    if (ipInfoErr) {
      rst.error = new Error(ipInfoErr);
      return rst;
    }
    ipInfo = mns.ClientIpInfo.create(clientParams.ipInfo);
  } else {
    ipInfo = mns.ClientIpInfo.create({});
  }
  const busiControl = mns.BusiControl.create({
    SupportComp: clientParams.supportCommp || true,
  });
  const upstream = {
    seq: parseInt(Math.random() * 4294967295),
    qua: clientParams.qua || '',
    serviceCmd: clientParams.serviceCmd,
    deviceInfo:	clientParams.deviceInfo || '',
    ipInfo,
    busiBuff: pbBuf,
    miUin: Number(clientParams.uuid),
    appId: Number(clientParams.appID),
    miUid: clientParams.uuid.toString(),
    busiControl,
  };
  const upstreamErr = mns.UpstreamPacket.verify(upstream);
  if (upstreamErr) {
    rst.error = new Error(upstreamErr);
    return rst;
  }
  const mUpstream = mns.UpstreamPacket.create(upstream);
  const mUpstreamBuffer = mns.UpstreamPacket.encode(mUpstream).finish();
  this._setLengthByMsg(mUpstreamBuffer.length);

  const headBuf = this._encode();
  const sendBuf = Buffer.concat([ Buffer.from([ HYHEADER_SOH ]), headBuf, mUpstreamBuffer, Buffer.from([ HYHEADER_EOT ]) ], this.Length);

  rst.hy = this;
  rst.sendBuf = sendBuf;
  return rst;
};

/**
 * @desc unpack milink c2s response buffer
 * @param recvBuf: 响应buffer
 * @return {Object}
 * @public
 */
HyHeader.prototype.ClientUnpack = function(recvBuf) {
  // check
  const rst = {
    pbBuf: null,
    error: null,
  };

  const bufLen = recvBuf.length;
  if (bufLen <= 0) {
    rst.error = new Error('hyheader : receive packet is empty.');
    return rst;
  }

  if (HYHEADER_SOH != recvBuf[0]) {
    rst.error = new Error(`hyheader : packet first char error. ${recvBuf[0]}`);
    return rst;
  }

  if (HYHEADER_EOT != recvBuf[bufLen - 1]) {
    rst.error = new Error(`hyheader : packet last char error. ${recvBuf[bufLen - 1]}`);
    return rst;
  }

  if (bufLen < HYHEADER_PACKET_HEAD_LEN + 1) {
    rst.error = new Error(`receive hyheader packet length is too short. length = ${bufLen}`);
    return rst;
  }

  try {
    const downstreamBuffer = recvBuf.slice(HYHEADER_PACKET_HEAD_LEN + 1, bufLen - 1);
    const downstreamMessage = mns.DownstreamPacket.decode(downstreamBuffer);
    console.log(downstreamMessage);
    if (downstreamMessage.busiCode != 0) {
      rst.error = new Error('busi error.');
    } else if (downstreamMessage.busiBuff.length == 0) {
      rst.error = new Error('Unpack BusiBuff Is Empty.');
    } else {
      rst.pbBuf = downstreamMessage.busiBuff;
    }
  } catch (e) {
    rst.error = e;
  }
  return rst;
};

// ------------------------------- mlb 协议 --------------------------------------------------
/**
 * @desc mlb协议是与mlb agent约定好的udp通信协议。
 */


const MLB_REQ_HEAD_BODY_CMD = 23; // uint32
const MLB_REQ_HEAD_PACKAGE_LEN = 32;
const MLB_RESQ_HEAD_LEN = 36;
const MLB_RESP_SERVER_ADDRESS_LEN = 10;
const MLB_RESP_EMPTY_ROUTE_LEN = 28;

/*
 *	mlb请求包定义
 */
function Request(options) {
  this.bodyCmd = options.bodyCmd || 0; // uint32
  this.packetLength = options.packetLength || 0; // uint32
  this.seq = options.seq || 0; // uint32
  this.rtn = options.rtn || 0; // uint32
  this.flow = options.flow || 0; // uint32
  this.modID = options.modID || 0; // uint32
  this.cmdID = options.cmdID || 0; // uint32
  this.tid = options.tid || 0; // uint32
}

/**
 * @desc 生成mlb协议请求对象
 * @public
 */
function newRequest(modID, cmdID) {
  return new Request({
    bodyCmd: MLB_REQ_HEAD_BODY_CMD,
    packetLength: MLB_REQ_HEAD_PACKAGE_LEN,
    seq: parseInt(Math.random() * 4294967295),
    rtn: 0,
    flow: 0,
    modID,
    cmdID,
    tid: 0,
  });
}

/**
 * @desc 编码mlb请求包
 * @public
 */
Request.prototype.encode = function() {

  const BUFFER_OFFSET = 0;
  const FIELD_LENGTH = 4;

  console.log(this);

  const requestBuffer = Buffer.alloc(FIELD_LENGTH * 8);
  requestBuffer.writeUInt32LE(this.bodyCmd, BUFFER_OFFSET);
  requestBuffer.writeUInt32LE(this.packetLength, BUFFER_OFFSET + 1 * FIELD_LENGTH);
  requestBuffer.writeUInt32LE(this.seq, BUFFER_OFFSET + 2 * FIELD_LENGTH);
  requestBuffer.writeUInt32LE(this.rtn, BUFFER_OFFSET + 3 * FIELD_LENGTH);
  requestBuffer.writeUInt32LE(this.flow, BUFFER_OFFSET + 4 * FIELD_LENGTH);
  requestBuffer.writeUInt32LE(this.modID, BUFFER_OFFSET + 5 * FIELD_LENGTH);
  requestBuffer.writeUInt32LE(this.cmdID, BUFFER_OFFSET + 6 * FIELD_LENGTH);
  requestBuffer.writeUInt32LE(this.tid, BUFFER_OFFSET + 7 * FIELD_LENGTH);

  return requestBuffer;
};

/*
 *	mlb返回包定义
 */
function Response(options) {
  this.BodyType = options.BodyType || 0; // uint32
  this.PacketLength = options.PacketLength || 0; // uint32
  this.Seq = options.Seq || 0; // uint32
  this.Rtn = options.Rtn || 0; // uint32
  this.Flow = options.Flow || 0; // uint32
  this.ModID = options.ModID || 0; // uint32
  this.CmdID = options.CmdID || 0; // uint32
  this.NextRebuildTime = options.CmdID || 0; // uint32
  this.ExpireTime = options.ExpireTime || 0; // uint32
  this._servers = options._servers || []; // new Servers
}

/**
 * @desc 生成mlb协议响应对象
 * @public
 */
function newResponse() {
  return new Response({});
}

/**
 * @desc 解码mlb响应包
 * @param {Buffer} 响应Buffer
 * @return {Object} Response 对象
 * @public
 */
Response.prototype.decode = function(buf) {

  const FIELD_LENGTH = 4;

  const BodyTypeBuf = buf.slice(0, 1 * FIELD_LENGTH);
  const PacketLengthBuf = buf.slice(1 * FIELD_LENGTH, 2 * FIELD_LENGTH);
  const SeqBuf = buf.slice(2 * FIELD_LENGTH, 3 * FIELD_LENGTH);
  const RtnBuf = buf.slice(3 * FIELD_LENGTH, 4 * FIELD_LENGTH);
  const FlowBuf = buf.slice(4 * FIELD_LENGTH, 5 * FIELD_LENGTH);
  const ModIDBuf = buf.slice(5 * FIELD_LENGTH, 6 * FIELD_LENGTH);
  const CmdIDBuf = buf.slice(6 * FIELD_LENGTH, 7 * FIELD_LENGTH);
  const NextRebuildTimeBuf = buf.slice(7 * FIELD_LENGTH, 8 * FIELD_LENGTH);
  const ExpireTimeBuf = buf.slice(8 * FIELD_LENGTH, 9 * FIELD_LENGTH);
  const serversBuf = buf.slice(9 * FIELD_LENGTH, buf.length);

  const BodyType = BodyTypeBuf.readUInt32LE(0);
  const PacketLength = PacketLengthBuf.readUInt32LE(0);
  const Seq = SeqBuf.readUInt32LE(0);
  const Rtn = RtnBuf.readUInt32LE(0);
  const Flow = FlowBuf.readUInt32LE(0);
  const ModID = ModIDBuf.readUInt32LE(0);
  const CmdID = CmdIDBuf.readUInt32LE(0);
  const NextRebuildTime = NextRebuildTimeBuf.readUInt32LE(0);
  const ExpireTime = ExpireTimeBuf.readUInt32LE(0);

  this.BodyType = BodyType;
  this.PacketLength = PacketLength;
  this.Seq = Seq;
  this.Rtn = Rtn;
  this.Flow = Flow;
  this.ModID = ModID;
  this.CmdID = CmdID;
  this.NextRebuildTime = NextRebuildTime;
  this.ExpireTime = ExpireTime;

  if (this.PacketLength <= MLB_RESQ_HEAD_LEN) {
    if (MLB_RESP_EMPTY_ROUTE_LEN == this.PacketLength) {
      return new Error(`modID = ${this.ModID}, CmdID = ${this.CmdID} route ip is empty.`);
    }
    return new Error(`recieve response data length is too short. length = ${this.PacketLength}`);
  }

  const serverPackageLen = this.PacketLength - MLB_RESQ_HEAD_LEN;
  const serverNum = serverPackageLen / MLB_RESP_SERVER_ADDRESS_LEN;
  if (serverPackageLen % MLB_RESP_SERVER_ADDRESS_LEN != 0) {
    return new Error(`resp data[server] length is error. len = ${serverPackageLen}"`);
  }

  const servers = Server._decode(serversBuf, serverNum);
  if (servers) this._servers = servers;
  console.log(this);
  return true;
};

/**
 * @desc 判断响应序列号是否与请求序列号一致
 * @param {Request} mlb请求对象
 * @return {bool}
 * @public
 */
Response.prototype.Check = function(req) {
  if (this.Seq === req.seq) {
    return true;
  }
  return false;
};

/**
 * @desc 返回响应对象中的_servers
 * @return {Array}
 * @public
 */
Response.prototype.GetServers = function() {
  return this._servers;
};


/*
 *	Server 构造函数
 */
function Server(options) {
  this.IP = options.IP || ''; // uint32
  this.Port = options.Port || 0; // uint16
  this.CallNumber = options.CallNumber || 0; // uint32
}


/**
 * @desc 生成Server对象
 * @public
 */
function newServer(ip, port) {
  return new Server({
    IP: ip,
    Port: port,
  });
}

/**
 * @desc 解码一段buffer 为 Server对象
 * @param {Buffer} Server Buffer
 * @return {Object} Server 对象
 * @private
 */
Server.prototype.decode = function(serverBuf) {

  const IPBuf = serverBuf.slice(0, 4);
  const PortBuf = serverBuf.slice(4, 6);
  const CallNumberBuf = serverBuf.slice(6, 10);

  if (IPBuf.length != 4) {
    console.log('ip length error');
    return false;
  }

  const IP = `${IPBuf[0].toString()}.${IPBuf[1].toString()}.${IPBuf[2].toString()}.${IPBuf[3].toString()}`;
  const Port = PortBuf.readUInt16LE(0);
  const CallNumber = CallNumberBuf.readUInt32LE(0);

  this.IP = IP;
  this.Port = Port;
  this.CallNumber = CallNumber;

  return true;
};

/**
 * @desc Server静态方法: 解码mlb响应buffer中的_servers部分
 * @param {Buffer, number} buffer, 路由数目
 * @returns {Array} Server 对象数组
 * @private
 */
Server._decode = function(buf, num) {

  const servers = [];

  for (let i = 0; i < num; i++) {
    const s = new Server({});
    if (s.decode(buf.slice(i * MLB_RESP_SERVER_ADDRESS_LEN, (i + 1) * MLB_RESP_SERVER_ADDRESS_LEN))) servers.push(s);
  }

  return servers;
};


module.exports = {
  newHyHeader,
  newRequest,
  newResponse,
  newServer,
};
