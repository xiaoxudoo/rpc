'use strict';

const hyClient = require('./lib_promise/blink/hyclient');

module.exports = app => {
  app.beforeStart(async () => {
    const client = new hyClient();
    if (app.config.milink.devMod) {
      const addrs = app.config.milink.addrs;
      for( let i = 0; i < addrs.length; i++ ){
        client.AddAddr(addrs[i].ip, addrs[i].port);
      }
    } else {
      client.InitMlb();
    }
    // 动态创建 milink连接实例
    app.milink = client;
  });
};
