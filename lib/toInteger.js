"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_validator_1 = require("ts-data-validator");
var DataTransformerError_1 = require("./DataTransformerError");
var toNumber_1 = require("./toNumber");
var toString_1 = require("./toString");
function toInteger(value, defaultValue) {
    var number = toNumber_1.default(value, null);
    if (ts_data_validator_1.isNumber(number)) {
        return Number.parseInt(toString_1.default(number), 10);
    }
    if (!ts_data_validator_1.isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError_1.default();
}
exports.default = toInteger;
//# sourceMappingURL=toInteger.js.map