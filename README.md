# egg-milink
git@git.n.xiaomi.com:xiaoxudong/milink.git

milink plugin for eggjs

## Install

```bash
$ 
```

## Usage

```js
// {app_root}/config/plugin.js
exports.rpc = {
  enable: true,
  package: 'egg-rpc',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.milink = {
  devMod: false,
  addrs: [
    {
      ip: '',
      port: '',
    }
  ]
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
