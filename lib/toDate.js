"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_validator_1 = require("ts-data-validator");
var DataTransformerError_1 = require("./DataTransformerError");
function toDate(value, defaultValue) {
    var date = new Date(value);
    if (ts_data_validator_1.isDate(date)) {
        return date;
    }
    if (!ts_data_validator_1.isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError_1.default();
}
exports.default = toDate;
//# sourceMappingURL=toDate.js.map