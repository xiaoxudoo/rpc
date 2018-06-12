'use strict';

const LRU = require('lru-cache');
const encoding = require('../base/encoding.js');
const udp = require('../base/udp.js');
const { generateCacheKey } = require('../base/common.js');

// mlb agent address
const MLB_SERVER_ADDRESS = [
  { port: , address: '127.0.0.1' },
  { port: , address: '127.0.0.1' },
  { port: , address: '127.0.0.1' },
];

function Client(options) {
  this.cache = options.cache || null; // 缓存1s
}

// 生成新的mlbClient对象
function New() {
  return new Client({
    cache: new LRU({
      max: 1024,
      maxAge: 1000,
    }),
  });
}

/**
 * @desc 从mlbClient中获取路由
 * @param l5ModID: l5模块ID, l5CmdID: l5命令字ID
 * @return {String} 路由地址
 * @public
 */
Client.prototype.GetRoute = function(l5ModID, l5CmdID) { // ([]string, error)
  return new Promise((resolve, reject) => {
    const cachekey = generateCacheKey(l5ModID, l5CmdID);
    const val = this.cache.get(cachekey);
    if (val) resolve(val);
    this._sendAndRecv(l5ModID, l5CmdID)
      .then(resp => {
        const servers = resp.GetServers();
        if (servers.length > 0) {
          this.cache.set(cachekey, servers);
          resolve(servers);
        } else {
          reject(new Error('get servers faild.'));
        }
      }).catch(function(error) {
        reject(error);
      });
  });
};

/**
 * @desc 从mlbClient中获取路由
 * @param l5ModID: l5模块ID, l5CmdID: l5命令字ID
 * @return {String} 路由地址
 * @private
 */
Client.prototype._sendAndRecv = function(l5ModID, l5CmdID) { // (*encoding.Response, error)
  return new Promise((resolve, reject) => {
    const req = encoding.newRequest(l5ModID, l5CmdID);
    const sendBuf = req.encode();

    // 随机向任一个mlb agent地址发包
    const rnd = Math.floor(Math.random() * MLB_SERVER_ADDRESS.length);
    udp.WriteAndRead(sendBuf, MLB_SERVER_ADDRESS[rnd].port, MLB_SERVER_ADDRESS[rnd].address)
      .then(function(message) {
        if (message.length < 36) {
          reject(new Error('message short error.'));
        }

        const resp = encoding.newResponse();
        const errMsg = resp.decode(message);

        // 如果是Error对象，说明解析错误，传回来的是错误提示。
        if (errMsg instanceof Error) {
          reject(errMsg);
        }

        if (!resp.Check(req)) {
          reject(new Error('seq error'));
        }

        resolve(resp);
      }).catch(function(error) {
        reject(error);
      });
  });
};

module.exports = {
  New,
}
;
