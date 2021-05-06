"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toText = exports.toString = exports.toObject = exports.toNumber = exports.toJSON = exports.toInteger = exports.toDate = exports.toBoolean = exports.toArray = exports.DataTransformerError = void 0;
var DataTransformerError_1 = require("./DataTransformerError");
Object.defineProperty(exports, "DataTransformerError", { enumerable: true, get: function () { return DataTransformerError_1.default; } });
var toArray_1 = require("./toArray");
Object.defineProperty(exports, "toArray", { enumerable: true, get: function () { return toArray_1.default; } });
var toBoolean_1 = require("./toBoolean");
Object.defineProperty(exports, "toBoolean", { enumerable: true, get: function () { return toBoolean_1.default; } });
var toDate_1 = require("./toDate");
Object.defineProperty(exports, "toDate", { enumerable: true, get: function () { return toDate_1.default; } });
var toInteger_1 = require("./toInteger");
Object.defineProperty(exports, "toInteger", { enumerable: true, get: function () { return toInteger_1.default; } });
var toJSON_1 = require("./toJSON");
Object.defineProperty(exports, "toJSON", { enumerable: true, get: function () { return toJSON_1.default; } });
var toNumber_1 = require("./toNumber");
Object.defineProperty(exports, "toNumber", { enumerable: true, get: function () { return toNumber_1.default; } });
var toObject_1 = require("./toObject");
Object.defineProperty(exports, "toObject", { enumerable: true, get: function () { return toObject_1.default; } });
var toString_1 = require("./toString");
Object.defineProperty(exports, "toString", { enumerable: true, get: function () { return toString_1.default; } });
var toText_1 = require("./toText");
Object.defineProperty(exports, "toText", { enumerable: true, get: function () { return toText_1.default; } });
var DataTransformer = {
    toArray: toArray_1.default,
    toBoolean: toBoolean_1.default,
    toDate: toDate_1.default,
    toInteger: toInteger_1.default,
    toJSON: toJSON_1.default,
    toNumber: toNumber_1.default,
    toObject: toObject_1.default,
    toString: toString_1.default,
    toText: toText_1.default,
};
exports.default = DataTransformer;
//# sourceMappingURL=index.js.map