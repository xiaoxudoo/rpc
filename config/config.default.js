'use strict';

/**
 * egg-milink default config
 * @member Config#milink
 * @property {String} appID - 业务ID
 * @property {String} qua - 请求方的标识，用于统计
 * @property {String} deviceInfo - 请求方设备信息，用于统计
 * @property {Object} ipInfo - 请求IP信息，用于统计
 * @property {uint32} ipInfo.ipType - 1表示IPv4, 2表示IPv6
 * @property {uint32} ipInfo.clientPort - 客户端端口
 * @property {uint32} ipInfo.clientIpV4 - IPV4
 * @property {bytes} ipInfo.clientIpV6 -  IPV6
 * @property {String} devMod - 是否为本地开发模式
 * @property {Array} addrs - 本地开发模式时需要添加的路由地址
 */
exports.milink = {
  appID: '',
  qua: '',
  deviceInfo: '',
  ipInfo: {},
  devMod: false,
  addrs: [
    {
      ip: '',
      port: '',
    }
  ],
};