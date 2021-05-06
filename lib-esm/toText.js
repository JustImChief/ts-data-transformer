import { isNaN, isNotEmptyString, isNull, isUndefined } from 'ts-data-validator';
import DataTransformerError from './DataTransformerError';
function toText(value, defaultValue) {
    if (!isUndefined(value) && !isNaN(value) && !isNull(value)) {
        var text = value.toString()
            .replace(/<p>&nbsp;<\/p>/img, '')
            .replace(/&nbsp;/img, ' ')
            .trim();
        if (isNotEmptyString(text)) {
            return text;
        }
    }
    if (!isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError();
}
export default toText;
//# sourceMappingURL=toText.js.map