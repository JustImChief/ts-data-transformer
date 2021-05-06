import { isNotEmptyString, isUndefined } from 'ts-data-validator';
import DataTransformerError from './DataTransformerError';
function toJSON(value, defaultValue) {
    try {
        var json = JSON.stringify(value);
        if (isNotEmptyString(json)) {
            return json;
        }
    }
    catch (e) {
        if (!isUndefined(defaultValue)) {
            return defaultValue;
        }
        throw new DataTransformerError();
    }
    if (!isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError();
}
export default toJSON;
//# sourceMappingURL=toJSON.js.map