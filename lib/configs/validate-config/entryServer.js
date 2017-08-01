'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultValue = 'server.js';
let propType = {};

const isIsomorphic = process.env.ENABLED_ISOMORPHIC === 'true';

if (isIsomorphic) {
	propType = {
		entryServer: _joi2.default.string().trim().min(6).required()
	};
} else {
	propType = {
		entryServer: _joi2.default.string().trim().min(6)
	};
}

exports.default = (entryServer, getDefaultValue = false) => {
	if (getDefaultValue) {
		return defaultValue;
	}
	const { error, value } = _joi2.default.validate({ entryServer }, propType);
	if (error !== null) {
		console.error(error.message);
		console.log(_chalk2.default.bold.yellow(`Current value: "${entryServer}"`));
		console.log(_chalk2.default.bold.cyan(`We are using: "${defaultValue}"`));
		return defaultValue;
	}
	return value.entryServer;
};
//# sourceMappingURL=entryServer.js.map