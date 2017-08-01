'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _reactWebpack = require('../../configs/webpack/react.webpack.config');

var _reactWebpack2 = _interopRequireDefault(_reactWebpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bundle() {
	return new Promise((resolve, reject) => {
		(0, _webpack2.default)(_reactWebpack2.default).run((err, stats) => {
			if (err) {
				return reject(err);
			}

			console.info(stats.toString(_reactWebpack2.default.stats));
			return resolve();
		});
	});
}

exports.default = bundle;
//# sourceMappingURL=bundle.js.map