'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _prepareBuildTools = require('../prepare.build-tools.config');

exports.default = rules => [...rules, {
	test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
	loader: 'file-loader',
	query: {
		name: _prepareBuildTools.isDevelopment ? '[path][name].[ext]?[hash:8]' : '[hash:32].[ext]'
	}
}];
//# sourceMappingURL=rules.webpack.config.js.map