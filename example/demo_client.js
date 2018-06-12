const Long = require('long');
const { GetViewpointInfoReq } = require('./knights/proto/Viewpoint.js').com.wali.knights.proto;
const { GetViewpointInfoRsp } = require('./knights/proto/Viewpoint.js').com.wali.knights.proto;
// const { SendReplyReq } = require('./knights/proto/comment.js').com.wali.knights.proto;
// const { SendReplyRsp } = require('./knights/proto/comment.js').com.wali.knights.proto;
// const hyClient = require('../lib/blink/hyclient.js');
const hyClient = require('../lib_promise/blink/hyclient.js');
const client = new hyClient();
const uuid = Long.fromInt('9107');
const serviceCmd = 'knights.viewpoint.getViewpointInfo'; // 'knights.comment.sendReply';
const config = {
  port: '11208',
  ip: '10.38.162.143',
  l5ModID: 50028,
  l5CmdID: 1001,
  cmdID: 1,
  clientParams: {
    appID: '20005', // 暂时固定用knights的:20005
    uuid, // 从web上传的接口中获取token，解析token获得
    qua: '', // ''
    serviceCmd, // 客户端接口的命令字
  },
};
// client.InitMlb();
client.AddAddr(config.ip, config.port);

const msg = {
  uuid,
  viewpointId: '9171_1500366669627_8',
  needGameInfo: true,
};

client.GetC2SDataByConfig(config, msg, GetViewpointInfoReq, GetViewpointInfoRsp)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log('>>>' + error);
  });

// const msg = {
//   content: "nihanihao",
//   dataId: "5605085_1521543878335_1",
//   dataType: 8,
//   fromUuid: Long.fromInt(900100106),
//   toUuid: Long.fromInt(5605085),
// }

// client.GetC2SDataByConfig(config, msg, SendReplyReq, SendReplyRsp)
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (error) {
//     console.log(">>>" + error);
//   });
