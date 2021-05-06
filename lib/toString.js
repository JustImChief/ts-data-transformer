"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_validator_1 = require("ts-data-validator");
var DataTransformerError_1 = require("./DataTransformerError");
var toText_1 = require("./toText");
function toString(value, defaultValue) {
    var string = toText_1.default(value, '')
        .replace(/(<([^>]+)>)/img, '')
        .trim();
    if (ts_data_validator_1.isNotEmptyString(string)) {
        return string;
    }
    if (!ts_data_validator_1.isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError_1.default();
}
exports.default = toString;
//# sourceMappingURL=toString.js.map