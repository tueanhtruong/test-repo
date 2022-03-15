"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
require("reflect-metadata");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var config = __importStar(require("./config"));
var helmet_1 = __importDefault(require("helmet"));
var typeorm_1 = require("typeorm");
var database_1 = __importDefault(require("./utils/database"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)(config.CORS_OPTIONS));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.get("/", function (req, res) {
    res.json({ message: "Welcome to Tue Truong application." });
});
var PORT = config.PORT;
var connectionOptions = __assign({}, database_1.default);
(0, typeorm_1.createConnection)(connectionOptions)
    .then(function (_connection) {
    console.log("_connection: ", _connection.name);
    app.use(routes_1.default);
    app.listen(PORT, function () {
        console.log("Server is running on port", PORT);
    });
})
    .catch(function (err) {
    console.log("err: ", err);
    console.log("Unable to connect to db", err);
    process.exit(1);
});
