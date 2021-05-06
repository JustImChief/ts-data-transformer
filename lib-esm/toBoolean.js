import { isBoolean, isNumber, isString, isUndefined } from 'ts-data-validator';
import DataTransformerError from './DataTransformerError';
function toBoolean(value, defaultValue) {
    if (isBoolean(value)) {
        return value;
    }
    if (isNumber(value) && (value === 1 || value === 0)) {
        return value === 1;
    }
    if (isString(value) && (value === '1' || value === '0' || value === 'true' || value === 'false')) {
        return value === '1' || value === 'true';
    }
    if (!isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError();
}
export default toBoolean;
//# sourceMappingURL=toBoolean.js.map