import { isNumber, isUndefined } from 'ts-data-validator';
import DataTransformerError from './DataTransformerError';
import toNumber from './toNumber';
import toString from './toString';
function toInteger(value, defaultValue) {
    var number = toNumber(value, null);
    if (isNumber(number)) {
        return Number.parseInt(toString(number), 10);
    }
    if (!isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError();
}
export default toInteger;
//# sourceMappingURL=toInteger.js.map