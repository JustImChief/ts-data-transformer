import { isNull, isNumber, isUndefined } from 'ts-data-validator';
import DataTransformerError from './DataTransformerError';
import toString from './toString';
function toNumber(value, defaultValue) {
    var string = toString(value, null);
    var number = Number(isNull(string) ? void 0 : string.replace(/,/g, '.'));
    if (isNumber(number)) {
        return number;
    }
    if (!isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError();
}
export default toNumber;
//# sourceMappingURL=toNumber.js.map