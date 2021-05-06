var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { isArray, isJSON, isObject, isUndefined } from 'ts-data-validator';
import DataTransformerError from './DataTransformerError';
function toArray(value, defaultValue) {
    if (isArray(value)) {
        return __spreadArray([], value);
    }
    if (isObject(value)) {
        return Object.values(value);
    }
    if (isJSON(value)) {
        try {
            var json = JSON.parse(value);
            return toArray(json, defaultValue);
        }
        catch (e) {
            if (!isUndefined(defaultValue)) {
                return defaultValue;
            }
            throw new DataTransformerError(e);
        }
    }
    if (!isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError();
}
export default toArray;
//# sourceMappingURL=toArray.js.map