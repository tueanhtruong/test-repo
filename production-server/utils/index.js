"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = exports.Order = exports.getFileSignedUrl = exports.ConfigService = exports.NotFoundError = exports.ForbiddenError = exports.InvalidParameterError = exports.InvalidOperationError = exports.CustomError = exports.isEmpty = void 0;
var firebase_config_1 = require("../config/firebase-config");
var isEmpty = function (value) {
    return value === undefined ||
        value === null ||
        value === NaN ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value === "") ||
        (Array.isArray(value) && value.length === 0);
};
exports.isEmpty = isEmpty;
var CustomError_1 = require("./CustomError");
Object.defineProperty(exports, "CustomError", { enumerable: true, get: function () { return CustomError_1.CustomError; } });
Object.defineProperty(exports, "InvalidOperationError", { enumerable: true, get: function () { return CustomError_1.InvalidOperationError; } });
Object.defineProperty(exports, "InvalidParameterError", { enumerable: true, get: function () { return CustomError_1.InvalidParameterError; } });
Object.defineProperty(exports, "ForbiddenError", { enumerable: true, get: function () { return CustomError_1.ForbiddenError; } });
Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function () { return CustomError_1.NotFoundError; } });
var configService_1 = require("./configService");
Object.defineProperty(exports, "ConfigService", { enumerable: true, get: function () { return __importDefault(configService_1).default; } });
var getFileSignedUrl = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!filePath)
                    return [2 /*return*/, [null]];
                return [4 /*yield*/, firebase_config_1.storage.file(filePath).getSignedUrl((0, firebase_config_1.urlOptions)())];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getFileSignedUrl = getFileSignedUrl;
var Order;
(function (Order) {
    Order["ASC"] = "asc";
    Order["DESC"] = "desc";
})(Order = exports.Order || (exports.Order = {}));
var getOrder = function (order) {
    if (!order)
        return undefined;
    switch (order) {
        case Order.ASC:
            return "ASC";
        case Order.DESC:
            return "DESC";
        default:
            return "ASC";
    }
};
exports.getOrder = getOrder;
