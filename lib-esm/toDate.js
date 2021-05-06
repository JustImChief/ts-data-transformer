import { isDate, isUndefined } from 'ts-data-validator';
import DataTransformerError from './DataTransformerError';
function toDate(value, defaultValue) {
    var date = new Date(value);
    if (isDate(date)) {
        return date;
    }
    if (!isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError();
}
export default toDate;
//# sourceMappingURL=toDate.js.map