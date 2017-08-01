'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultValue = ['static'];
let propType = {};

const isIsomorphic = process.env.ENABLED_ISOMORPHIC === 'true';

if (isIsomorphic) {
	propType = {
		staticDirs: _joi2.default.array().items(_joi2.default.string().trim().min(1).required()).min(1).required()
	};
} else {
	propType = {
		staticDirs: _joi2.default.array().items(_joi2.default.string().trim().min(1).required()).min(1)
	};
}

exports.default = (staticDirs, getDefaultValue = false) => {
	if (getDefaultValue) {
		return defaultValue;
	}

	var _Joi$validate = _joi2.default.validate({ staticDirs }, propType);

	const error = _Joi$validate.error,
	      value = _Joi$validate.value;

	if (error !== null) {
		console.error(error.message);
		console.log(_chalk2.default.bold.yellow(`Current value: "${staticDirs}"`));
		console.log(_chalk2.default.bold.cyan(`We are using: "${defaultValue}"`));
		return defaultValue;
	}
	return value.staticDirs;
};
//# sourceMappingURL=staticDirs.js.map