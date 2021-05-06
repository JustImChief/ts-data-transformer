"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_validator_1 = require("ts-data-validator");
var DataTransformerError_1 = require("./DataTransformerError");
var toString_1 = require("./toString");
function toNumber(value, defaultValue) {
    var string = toString_1.default(value, null);
    var number = Number(ts_data_validator_1.isNull(string) ? void 0 : string.replace(/,/g, '.'));
    if (ts_data_validator_1.isNumber(number)) {
        return number;
    }
    if (!ts_data_validator_1.isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError_1.default();
}
exports.default = toNumber;
//# sourceMappingURL=toNumber.js.map