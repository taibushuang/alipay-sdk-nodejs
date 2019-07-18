#http 官方sdk 请求的返回值处理有问题，仅处理了200 状态值，本分支增加了 302 状态值的处理。


# Alipay SDK

蚂蚁金服开放平台 SDK

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

[npm-image]: https://img.shields.io/npm/v/alipay-sdk.svg?style=flat-square
[npm-url]: https://npmjs.org/package/alipay-sdk
[travis-image]: https://img.shields.io/travis/alipay/alipay-sdk-nodejs.svg?style=flat-square
[travis-url]: https://travis-ci.org/alipay/alipay-sdk-nodejs
[codecov-image]: https://img.shields.io/codecov/c/github/alipay/alipay-sdk-nodejs.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/alipay/alipay-sdk-nodejs



## 安装
> npm install alipay-sdk


## 使用
```
// TypeScript
import AlipaySdk from 'alipay-sdk';

const alipaySdk = new AlipaySdk({
  // 参考下方 SDK 配置
  appId: '2016123456789012',
  privateKey: fs.readFileSync('./private-key.pem', 'ascii'),
});

const result = await alipaySdk.exec('alipay.system.oauth.token', {
	grantType: 'authorization_code',
	code: 'code',
	refreshToken: 'token'
});
```

## Demo：
- [SDK 配置](https://www.yuque.com/chenqiu/alipay-node-sdk/config-sdk)
- [包含业务参数](https://www.yuque.com/chenqiu/alipay-node-sdk/with_biz_content)
- [不包含业务参数](https://www.yuque.com/chenqiu/alipay-node-sdk/without_biz_content)
- [上传文件](https://www.yuque.com/chenqiu/alipay-node-sdk/file_upload)
- [页面类接口调用](https://www.yuque.com/chenqiu/alipay-node-sdk/page_api)
- [AES 加密](https://www.yuque.com/chenqiu/alipay-node-sdk/aes)
- [通知验签](https://www.yuque.com/chenqiu/alipay-node-sdk/msg_verify)
