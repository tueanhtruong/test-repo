"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidParameterError = exports.InvalidOperationError = exports.ForbiddenError = exports.NotFoundError = exports.CustomError = void 0;
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(data, details) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, data.message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        _this.name = data.name;
        _this.data = data;
        _this.details = details;
        _this.stackArray = _this.stack
            ? _this.stack.split("\n").map(function (s) { return s.trim(); })
            : [];
        return _this;
    }
    return CustomError;
}(Error));
exports.CustomError = CustomError;
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(details) {
        return _super.call(this, {
            name: "NOT_FOUND_ERROR",
            message: "The requested resource cannot be found.",
            status: 404,
        }, details) || this;
    }
    return NotFoundError;
}(CustomError));
exports.NotFoundError = NotFoundError;
var ForbiddenError = /** @class */ (function (_super) {
    __extends(ForbiddenError, _super);
    function ForbiddenError(details) {
        return _super.call(this, {
            name: "FORBIDDEN_ERROR",
            message: "The requested operation is refused.",
            status: 403,
        }, details) || this;
    }
    return ForbiddenError;
}(CustomError));
exports.ForbiddenError = ForbiddenError;
var InvalidOperationError = /** @class */ (function (_super) {
    __extends(InvalidOperationError, _super);
    function InvalidOperationError(details) {
        return _super.call(this, {
            name: "INVALID_OPERATION_ERROR",
            message: "The requested operation cannot be performed.",
            status: 500,
        }, details) || this;
    }
    return InvalidOperationError;
}(CustomError));
exports.InvalidOperationError = InvalidOperationError;
var InvalidParameterError = /** @class */ (function (_super) {
    __extends(InvalidParameterError, _super);
    function InvalidParameterError(details) {
        return _super.call(this, {
            name: "INVALID_PARAMETER_ERROR",
            message: "The parameter is invalid.",
            status: 400,
        }, details) || this;
    }
    return InvalidParameterError;
}(CustomError));
exports.InvalidParameterError = InvalidParameterError;
