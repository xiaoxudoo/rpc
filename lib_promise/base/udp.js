'use strict';
/**
 * UDP网络
 *
 * @author xiaoxudoo
 * @version V1.0 创建时间：2018-04-19
 */

const dgram = require('dgram');

/**
 * @desc 向mlb agent 发包，并接收响应数据，返回给回调函数
 * @param {Buffer, String, String} mlb协议包, 端口, IP
 * @public
 */
function WriteAndRead(sendData, port, ip) {
  return new Promise((resolve, reject) => {
    const timeout = 2000; // UDP回包超时时间 单位：毫秒

    const socket = dgram.createSocket({
      type: 'udp4',
    });

    const udpTimeoutWatcher = setTimeout(function() {
      reject(new Error('udp response timeout!!!'));
      socket.close();
    }, timeout);

    // 发包
    socket.send(sendData, 0, sendData.length, port, ip);

    // 监听客户端的回包
    socket.on('message', function(msg) {
      clearTimeout(udpTimeoutWatcher);
      // 执行回调
      resolve(msg);
      // 关闭socket
      socket.close();
    });

    socket.on('error', function(err) {
      reject(new Error(`socket err: ${err}`));
      socket.close();
    });
  });
}

module.exports = {
  WriteAndRead,
};
