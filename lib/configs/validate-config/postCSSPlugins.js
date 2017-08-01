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
	isolation: false,
	reset: {
		"display": "block",
		"boxSizing": "borderBox"
	}
};
const propType = {
	isolation: _joi2.default.boolean().required(),
	reset: _joi2.default.object().required()
};

exports.default = (css, getDefaultValue = false) => {

	if (getDefaultValue) {
		return defaultValue;
	}

	var _Joi$validate = _joi2.default.validate(css, propType);

	const error = _Joi$validate.error,
	      value = _Joi$validate.value;


	if (error !== null) {
		console.error(error.message);
		console.log(_chalk2.default.bold.yellow(`Current value: "${JSON.stringify(css, null, 2)}"`));
		console.log(_chalk2.default.bold.cyan(`We are using: "${JSON.stringify(defaultValue, null, 2)}"`));
		return defaultValue;
	}

	return value;
};
//# sourceMappingURL=postCSSPlugins.js.map