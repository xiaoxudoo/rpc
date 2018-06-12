'use strict';
/**
 *
 * @author xiaoxudoo
 * @version V1.0 创建时间：2018-04-19
 */

const mlb = require('../mlb/mlbclient.js');
const encoding = require('../base/encoding.js');
const tcp = require('../base/tcp.js');

/**
 * @desc hyClient 类，包含一个mlbclient对象，用于管理路由
 */
function hyClient(options) {
  this.Cm = new Map(); // 长连接时维护一个cache client Map, 预留字段
  this.mlbcli = null; // mlb manager
  this.enableMlb = false; // 是否开启mlb manager, bool
  this.addrs = []; // 可用的地址
  this.Timeout = options && options.Timeout || 1000; // 连接超时时间ms, 预留字段
  this.RetryNum = options && options.RetryNum || 1; // 尝试连接次数, 预留字段
}

/**
	type MiLinkConfig struct {
		L5ModID    uint32
		L5CmdID    uint32
		cmdID      uint32
	}
*/

/**
 * @desc hyClient 通过配置获取server端数据
 * @param miLinkConfig 配置参数, message: json 格式的请求数据, protoRequest: 请求pb, protoResponse: 响应pb
 * @return {Promise} 响应内容对象, 响应buffer和错误信息
 * @public
 */
hyClient.prototype.GetDataByConfig = function(miLinkConfig, message, protoRequest, protoResponse) {
  return new Promise((resolve, reject) => {
    const err = protoRequest.verify(message);
    if (err) return reject(new Error(err));
    // 1. 编码请求数据（同步）
    const req = protoRequest.encode(message).finish();
    const packRst = encoding.newHyHeader(miLinkConfig.cmdID).Pack(req); // hy, reqBuf, err

    if (packRst.err != null) {
      reject(err);
    }

    function _getDataFromAddr(addrs) {
      // tcp短连接 发包获取数据(异步)
      tcp.RequestServer(addrs, packRst.sendBuf)
        .then(function(respBuf) {
          // 解码响应数据（同步）
          const unpackRst = packRst.hy.Unpack(respBuf);
          if (unpackRst.error != null) {
            reject(unpackRst.error);
          } else {
            try {
              const response = protoResponse.decode(unpackRst.pbBuf);
              resolve(response);
            } catch (e) {
              reject(e);
            }
          }
        }).catch(function(error) {
          reject(error);
        });
    }

    if (this.enableMlb) {
      // 获取路由信息（异步） callback hell start....
      this.mlbcli.GetRoute(miLinkConfig.l5ModID, miLinkConfig.l5CmdID)
        .then(function(addrs) {
          return _getDataFromAddr(addrs);
        }).catch(function(error) {
          reject(error);
        });
    } else {
      if (this.addrs.length > 0) {
        return _getDataFromAddr(this.addrs);
      }
      reject(new Error('addrs empty.'));

    }
  });
};

/**
 * @desc hyClient 获取server端数据
 * @param l5ModID: l5模块ID, l5CmdID: l5命令字ID, cmdID: 请求命令字ID, req: 请求的pbBuf
 * @return {Promise} 响应内容对象, 响应buffer和错误信息
 * @public
 */
hyClient.prototype.GetData = function(l5ModID, l5CmdID, cmdID, req) {
  return new Promise((resolve, reject) => {
    // 1. 编码请求数据（同步）
    const packRst = encoding.newHyHeader(cmdID).Pack(req); // hy, reqBuf, err

    if (packRst.err != null) {
      reject(err);
    }

    function _getDataFromAddr(addrs) {
      // tcp短连接 发包获取数据(异步)
      tcp.RequestServer(addrs, packRst.sendBuf)
        .then(function(respBuf) {
          // 解码响应数据（同步）
          const unpackRst = packRst.hy.Unpack(respBuf);
          if (unpackRst.error != null) {
            reject(unpackRst.error);
          } else {
            resolve(unpackRst.pbBuf);
          }
        }).catch(function(error) {
          reject(error);
        });
    }

    if (this.enableMlb) {
      // 获取路由信息（异步） callback hell start....
      this.mlbcli.GetRoute(l5ModID, l5CmdID)
        .then(function(addrs) {
          return _getDataFromAddr(addrs);
        }).catch(function(error) {
          reject(error);
        });
    } else {
      if (this.addrs.length > 0) {
        return _getDataFromAddr(this.addrs);
      }
      reject(new Error('addrs empty.'));

    }
  });
};

/**
 * @desc hyClient 通过配置获取server端c2s数据
 * @param miLinkC2SConfig 配置参数, message: json 格式的请求数据, protoRequest: 请求pb, protoResponse: 响应pb
 * @return {Promise} 响应内容对象, 响应buffer和错误信息
 * @public
 */
hyClient.prototype.GetC2SDataByConfig = function(miLinkC2SConfig, message, protoRequest, protoResponse) {
  return new Promise((resolve, reject) => {
    const clientParams = miLinkC2SConfig.clientParams;
    if (!clientParams.appID) {
      return reject(new Error('appID is null.'));
    }
    if (!clientParams.uuid && clientParams.uuid != 0) {
      return reject(new Error('uuid is null.'));
    }
    if (!clientParams.serviceCmd) {
      return reject(new Error('serviceCmd is null.'));
    }
    if (miLinkC2SConfig.cmdID != undefined && Number(miLinkC2SConfig.cmdID) != 1) {
      return reject(new Error('cmdID error.'));
    }
    const err = protoRequest.verify(message);
    if (err) return reject(new Error(err));

    // 1. 编码请求数据（同步）
    const req = protoRequest.encode(message).finish();
    const packRst = encoding.newHyHeader(miLinkC2SConfig.cmdID).ClientPack(req, miLinkC2SConfig.clientParams); // hy, reqBuf, err
    if (packRst.error != null) {
      return reject(packRst.error);
    }
    function _getDataFromAddr(addrs) {
      // tcp短连接 发包获取数据(异步)
      tcp.RequestServer(addrs, packRst.sendBuf)
        .then(function(respBuf) {
          // 解码响应数据（同步）
          const unpackRst = packRst.hy.ClientUnpack(respBuf);
          if (unpackRst.error != null) {
            reject(unpackRst.error);
          } else {
            try {
              const response = protoResponse.decode(unpackRst.pbBuf);
              resolve(response);
            } catch (e) {
              reject(e);
            }
          }
        }).catch(error => {
          reject(error);
        });
    }

    if (this.enableMlb) {
      // 获取路由信息（异步） callback hell start....
      this.mlbcli.GetRoute(miLinkC2SConfig.l5ModID, miLinkC2SConfig.l5CmdID)
        .then(function(addrs) {
          return _getDataFromAddr(addrs);
        }).catch(function(error) {
          reject(error);
        });
    } else {
      if (this.addrs.length > 0) {
        return _getDataFromAddr(this.addrs);
      }
      reject(new Error('addrs empty.'));

    }
  });
};

/**
 * @desc InitMlb init mlb
 * @public
 */
hyClient.prototype.InitMlb = function() {
  this.enableMlb = true;
  this.mlbcli = mlb.New();
};

/**
 * @desc AddAddr if not use mlb call add addr
 * @param {Server} @addr Server对象
 * @public
 */
hyClient.prototype.AddAddr = function(ip, port) {
  if (ip && port) {
    this.addrs.push(encoding.newServer(ip, port));
  } else {
    console.log(new Error('address type error.'));
  }
};


module.exports = hyClient;
