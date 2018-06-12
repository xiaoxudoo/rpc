# egg-milink
git@git.n.xiaomi.com:xiaoxudong/milink.git

milink是互娱的rpc调用协议，通过protobuf数据格式来定义请求和响应，以私有协议进行tcp网络传输。

这个库实现了milink客户端的nodejs版本，并且封装成了eggjs的插件，在eggjs中开箱即用。

## 依赖说明

### 依赖的 egg 版本

egg-milink 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

## 开启插件

```js
// config/plugin.js
exports.milink = {
  enable: true,
  package: 'egg-milink',
};
```

## 使用场景

使用eggjs ———— nodejs企业级开发框架，作为公司技术架构中的中间层，来转发后台RPC服务，这样服务端设计的接口可以注重在通用服务上，并且可以有效减少沟通成本。

Sam Newman发表了一篇文章，讲述了这种体验者专用API的方式，并将其成为BFF（[Backends for Frontends](https://samnewman.io/patterns/architectural/bff/)）模式。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
