'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _prepareBuildTools = require('../prepare.build-tools.config');

exports.default = () => {
	if (_prepareBuildTools.isDevelopment) {
		return [
		// http://gaearon.github.io/react-hot-loader/getstarted/
		`webpack-dev-server/client?${_prepareBuildTools.socket}`, 'webpack/hot/dev-server', 'react-hot-loader/patch', _prepareBuildTools.entry];
	}

	return _prepareBuildTools.entry;
};
//# sourceMappingURL=entry.js.map