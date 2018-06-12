const { GetViewpointS2sReq, GetViewpointS2sRsp } = require('./knights/viewpoint').knights.viewpoint;
const hyClient = require('../lib_promise/blink/hyclient.js');

const config = {
  port: '11208',
  ip: '10.38.162.143',
  l5ModID: 50034,
  l5CmdID: 1004,
  cmdID: 1004
}

const msg = {
  viewpointId: "9171_1500366669627_8",
  needUserInfo: true
}

const client = new hyClient();
// client.InitMlb();
client.AddAddr(config.ip, config.port);

client.GetDataByConfig(config, msg, GetViewpointS2sReq, GetViewpointS2sRsp)
  .then(function (data) {
    console.log(data)
  })
  .catch(function (error) {
    console.log(error);
  });
