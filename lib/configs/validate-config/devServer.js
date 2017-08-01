'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultValue = {
	contentBase: 'dist'
};
const propType = {
	devServer: _joi2.default.object().keys({
		contentBase: _joi2.default.string().trim().min(3).required()
	}).required()
};

exports.default = (devServer, getDefaultValue = false) => {
	if (getDefaultValue) {
		return defaultValue;
	}

	const { error, value } = _joi2.default.validate({ devServer }, propType);

	if (error !== null) {
		console.error(error.message);
		console.log(_chalk2.default.bold.yellow(`Current value: "${JSON.stringify(devServer, null, 2)}"`));
		console.log(_chalk2.default.bold.cyan(`We are using: "${JSON.stringify(defaultValue, null, 2)}"`));
		return defaultValue;
	}
	return value.devServer;
};
//# sourceMappingURL=devServer.js.map