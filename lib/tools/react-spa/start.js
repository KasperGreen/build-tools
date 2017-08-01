'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _reactWebpack = require('../../configs/webpack/react.webpack.config');

var _reactWebpack2 = _interopRequireDefault(_reactWebpack);

var _webpackDevserver = require('../../configs/webpack/webpack.devserver.config');

var _webpackDevserver2 = _interopRequireDefault(_webpackDevserver);

var _prepareBuildTools = require('../../configs/prepare.build-tools.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = new _webpackDevServer2.default((0, _webpack2.default)(_reactWebpack2.default), _webpackDevserver2.default);

server.listen(_prepareBuildTools.port, _prepareBuildTools.host, () => {
	console.log(`Launched on ${_prepareBuildTools.socket}`);
});
//# sourceMappingURL=start.js.map