"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_validator_1 = require("ts-data-validator");
var DataTransformerError_1 = require("./DataTransformerError");
function toObject(value, defaultValue) {
    if (ts_data_validator_1.isObject(value)) {
        return __assign({}, value);
    }
    if (ts_data_validator_1.isArray(value)) {
        return __spreadArray([], value).reduce(function (accumulator, currentValue, currentIndex) {
            var _a;
            return (__assign(__assign({}, accumulator), (_a = {}, _a["" + currentIndex] = currentValue, _a)));
        }, {});
    }
    if (ts_data_validator_1.isJSON(value)) {
        var json = JSON.parse(value);
        return toObject(json, defaultValue);
    }
    if (!ts_data_validator_1.isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError_1.default();
}
exports.default = toObject;
//# sourceMappingURL=toObject.js.map