"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onError = exports.auth = void 0;
var auth_1 = __importDefault(require("./auth"));
exports.auth = auth_1.default;
var errorService_1 = __importDefault(require("./errorService"));
exports.onError = errorService_1.default;
