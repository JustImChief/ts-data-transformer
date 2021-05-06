"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_validator_1 = require("ts-data-validator");
var DataTransformerError_1 = require("./DataTransformerError");
function toArray(value, defaultValue) {
    if (ts_data_validator_1.isArray(value)) {
        return __spreadArray([], value);
    }
    if (ts_data_validator_1.isObject(value)) {
        return Object.values(value);
    }
    if (ts_data_validator_1.isJSON(value)) {
        try {
            var json = JSON.parse(value);
            return toArray(json, defaultValue);
        }
        catch (e) {
            if (!ts_data_validator_1.isUndefined(defaultValue)) {
                return defaultValue;
            }
            throw new DataTransformerError_1.default(e);
        }
    }
    if (!ts_data_validator_1.isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError_1.default();
}
exports.default = toArray;
//# sourceMappingURL=toArray.js.map