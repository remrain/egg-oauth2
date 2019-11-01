# egg-oauth2

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-oauth2.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@remrain/egg-oauth2
[travis-image]: https://img.shields.io/travis/remrain/egg-oauth2.svg?style=flat-square
[travis-url]: https://travis-ci.org/remrain/egg-oauth2
[codecov-image]: https://img.shields.io/codecov/c/github/remrain/egg-oauth2.svg?style=flat-square
[codecov-url]: https://codecov.io/github/remrain/egg-oauth2?branch=master
[david-image]: https://img.shields.io/david/remrain/egg-oauth2.svg?style=flat-square
[david-url]: https://david-dm.org/remrain/egg-oauth2
[snyk-image]: https://snyk.io/test/npm/egg-oauth2/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-oauth2
[download-image]: https://img.shields.io/npm/dm/egg-oauth2.svg?style=flat-square
[download-url]: https://npmjs.org/package/@remrain/egg-oauth2

<!--
Description here.
-->

## Install

```bash
$ npm i egg-oauth2 --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.oauth2 = {
  enable: true,
  package: 'egg-oauth2',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.oauth2 = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/remrain/egg-oauth2/issues).

## License

[MIT](LICENSE)
