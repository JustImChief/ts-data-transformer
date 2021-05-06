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
import { isArray, isJSON, isObject, isUndefined } from 'ts-data-validator';
import DataTransformerError from './DataTransformerError';
function toObject(value, defaultValue) {
    if (isObject(value)) {
        return __assign({}, value);
    }
    if (isArray(value)) {
        return __spreadArray([], value).reduce(function (accumulator, currentValue, currentIndex) {
            var _a;
            return (__assign(__assign({}, accumulator), (_a = {}, _a["" + currentIndex] = currentValue, _a)));
        }, {});
    }
    if (isJSON(value)) {
        var json = JSON.parse(value);
        return toObject(json, defaultValue);
    }
    if (!isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError();
}
export default toObject;
//# sourceMappingURL=toObject.js.map