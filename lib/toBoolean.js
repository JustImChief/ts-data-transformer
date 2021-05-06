"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_validator_1 = require("ts-data-validator");
var DataTransformerError_1 = require("./DataTransformerError");
function toBoolean(value, defaultValue) {
    if (ts_data_validator_1.isBoolean(value)) {
        return value;
    }
    if (ts_data_validator_1.isNumber(value) && (value === 1 || value === 0)) {
        return value === 1;
    }
    if (ts_data_validator_1.isString(value) && (value === '1' || value === '0' || value === 'true' || value === 'false')) {
        return value === '1' || value === 'true';
    }
    if (!ts_data_validator_1.isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError_1.default();
}
exports.default = toBoolean;
//# sourceMappingURL=toBoolean.js.map