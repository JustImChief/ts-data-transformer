"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_validator_1 = require("ts-data-validator");
var DataTransformerError_1 = require("./DataTransformerError");
function toJSON(value, defaultValue) {
    try {
        var json = JSON.stringify(value);
        if (ts_data_validator_1.isNotEmptyString(json)) {
            return json;
        }
    }
    catch (e) {
        if (!ts_data_validator_1.isUndefined(defaultValue)) {
            return defaultValue;
        }
        throw new DataTransformerError_1.default();
    }
    if (!ts_data_validator_1.isUndefined(defaultValue)) {
        return defaultValue;
    }
    throw new DataTransformerError_1.default();
}
exports.default = toJSON;
//# sourceMappingURL=toJSON.js.map