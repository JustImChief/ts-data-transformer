"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_validator_1 = require("ts-data-validator");
var DataTransformerError_1 = require("./DataTransformerError");
function toText(value, defaultValue) {
    if (!ts_data_validator_1.isUndefined(value) && !ts_data_validator_1.isNaN(value) && !ts_data_validator_1.isNull(value)) {
        var text = value.toString()
            .replace(/<p>&nbsp;<\/p>/img, '')
            .replace(/&nbsp;/img, ' ')
            .trim();
        if (ts_data_validator_1.isNotEmptyString(text)) {
            return text;
        }
    }
    if (!ts_data_validator_1.isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError_1.default();
}
exports.default = toText;
//# sourceMappingURL=toText.js.map