"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var http_status_1 = __importDefault(require("http-status"));
var onError = function (err, _req, res, next) {
    if (err instanceof utils_1.CustomError) {
        return res.status(http_status_1.default.BAD_REQUEST).json({
            code: "E__".concat(err.data.name),
            message: err.data.message,
            details: err.details,
        });
    }
    return res
        .status(http_status_1.default.INTERNAL_SERVER_ERROR)
        .send({ message: err === null || err === void 0 ? void 0 : err.message, stack: err === null || err === void 0 ? void 0 : err.stack });
};
exports.default = onError;
