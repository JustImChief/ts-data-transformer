var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DataTransformerError = /** @class */ (function (_super) {
    __extends(DataTransformerError, _super);
    function DataTransformerError(error) {
        var _this = _super.call(this, typeof error === 'object' ? error.message : error) || this;
        _this.name = 'DataTransformerError';
        return _this;
    }
    return DataTransformerError;
}(Error));
export default DataTransformerError;
//# sourceMappingURL=index.js.map