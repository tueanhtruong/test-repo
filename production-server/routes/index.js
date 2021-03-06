"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var testUsers_1 = __importDefault(require("./testUsers"));
var account_1 = __importDefault(require("./account"));
var content_1 = __importDefault(require("./content"));
var profile_1 = __importDefault(require("./profile"));
var vaccine_1 = __importDefault(require("./vaccine"));
var trip_1 = __importDefault(require("./trip"));
var adminUsers_1 = __importDefault(require("./adminUsers"));
var adminTrips_1 = __importDefault(require("./adminTrips"));
var applicationConfigs_1 = __importDefault(require("./applicationConfigs"));
var middleware_1 = require("../middleware");
var utils_1 = require("../utils");
var routes = (0, express_1.Router)();
routes.use("/test-users", (0, middleware_1.auth)(), testUsers_1.default);
routes.use("/me", (0, middleware_1.auth)(), account_1.default);
routes.use("/content", content_1.default);
routes.use("/profile", (0, middleware_1.auth)(), profile_1.default);
routes.use("/vaccine-registry", (0, middleware_1.auth)(), vaccine_1.default);
routes.use("/trip", (0, middleware_1.auth)(), trip_1.default);
//////////// Admin ///////////////////
routes.use("/admin/me", (0, middleware_1.auth)(), account_1.default);
routes.use("/admin/content", content_1.default);
routes.use("/admin/user", (0, middleware_1.auth)(), adminUsers_1.default);
routes.use("/admin/trip", (0, middleware_1.auth)(), adminTrips_1.default);
routes.use("/admin/application-configs", (0, middleware_1.auth)(), applicationConfigs_1.default);
routes.use(middleware_1.onError);
utils_1.ConfigService.initialConfig();
exports.default = routes;
