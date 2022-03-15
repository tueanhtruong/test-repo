"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var config_1 = require("../config");
var config = {
    type: "postgres",
    url: config_1.TYPEORM_URL,
    synchronize: config_1.DB_MIGRATION === "safe" ? false : true,
    logging: "all",
    entities: [path_1.default.join(__dirname, "../models/*.{js,ts}")],
    extra: { max: config_1.DB_POOL_SIZE },
};
exports.default = config;
