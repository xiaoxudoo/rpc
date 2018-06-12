'use strict';
/**
 * TCP网络
 *
 * @author xiaoxudoo
 * @version V1.0 创建时间：2018-04-19
 */

const net = require('net');

const TCP_READ_TIMEOUT = 1000;
const TCP_WRITE_TIMEOUT = 1000;
const TCP_RECV_BUFSIZE = 1024;
const TCP_SEND_BUFSIZE = 1024;
const HYHEADER_EOT = ; // hyheader报文末字节

/**
 * @desc  向业务服务器请求数据
 * @param {Array} @addrs  Server对象数组
 * @param {Buffer} @reqBuf 请求的hyheader报文buf
 * @return 响应的hyheader报文buf, 错误信息
 * @public
 */
function RequestServer(addrs, reqBuf) {
  return new Promise(function(resolve, reject) {
    connectAndWrite(addrs, reqBuf)
      .then(function(socket) {
        return read(socket);
      })
      .then(function(rspBuf) {
        resolve(rspBuf);
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

/**
 * @desc tcp connect()
 * @param  IP地址数组
 * @return 连接成功的socket, 错误信息
 * @private
 */
function connectAndWrite(addrs, buf) {
  return new Promise(function(resolve, reject) {
    if (addrs.length === 0) {
      reject(new Error('address is empty.'));
    }
    const randAddress = Math.floor(Math.random() * addrs.length);
    const tempAddr = addrs[randAddress];
    addrs[randAddress] = addrs[0];
    addrs[0] = tempAddr;

    const addrLen = addrs.length;
    let counter = 0;
    // 递归连接，直到成功或没有可连接的地址时跳出递归，成功时返回成功的连接。
    const netRecursionConnection = function() {
      const client = net.createConnection(addrs[counter].Port, addrs[counter].IP, () => {
        client.write(buf);
        resolve(client);
      });
      client.on('error', err => {
        console.log('onerror');
        if (counter < addrLen - 1) {
          counter++;
          netRecursionConnection();
        } else {
          console.log(addrs);
          reject(new Error(`tcp connect faild. err = ${err}, ip addresses is ` + addrs.toString()));
        }
      });
    };
    netRecursionConnection();
  });
}

/**
 * @desc tcp read()
 * @param  tcp socket连接
 * @return promise
 */
function read(socket) {
  return new Promise(function(resolve, reject) {
    socket.on('readable', () => {
      let rspBuf;
      let tmpBuf;
      for (; ;) {
        tmpBuf = socket.read();
        if (tmpBuf == null || tmpBuf.length == 0) {
          break;
        }
        if (!rspBuf) {
          rspBuf = tmpBuf;
        } else {
          rspBuf = Buffer.concat([ rspBuf, tmpBuf ]);
        }
        if (HYHEADER_EOT == tmpBuf[tmpBuf.length - 1]) {
          break;
        }
      }
      resolve(rspBuf);
      socket.destroy();
    });
  });
}

module.exports = {
  RequestServer,
};
