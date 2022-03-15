"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APPROVED_ITEM_STATUS = exports.PENDING_ITEM_STATUS = exports.DRAFT_TRIP_STATUS_ID = exports.MEASUREMENT_ID = exports.API_ID = exports.MESSAGING_SENDER_ID = exports.STORAGE_BUCKET = exports.PROJECT_ID = exports.AUTH_DOMAIN = exports.APP_KEY = exports.BUCKET = exports.DB_SEED = exports.DB_POOL_SIZE = exports.DB_MIGRATION = exports.TYPEORM_URL = exports.IS_DEVELOPMENT = exports.NODE_ENV = exports.CORS_OPTIONS = exports.PORT = void 0;
function getOptional(name) {
    return process.env[name] || null;
}
function getRequired(name) {
    var val = getOptional(name);
    if (!val) {
        throw new Error("".concat(name, " environment variable is required."));
    }
    return val;
}
exports.PORT = +(getOptional("PORT") || 8000);
// CORS
exports.CORS_OPTIONS = {
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: function (_origin, callback) { return callback(null, true); },
};
//build
exports.NODE_ENV = getOptional("NODE_ENV") || "development";
exports.IS_DEVELOPMENT = exports.NODE_ENV !== "production";
// PostgreSQL
exports.TYPEORM_URL = getRequired("NODE_TYPEORM_URL");
exports.DB_MIGRATION = getOptional("NODE_DB_MIGRATION") || exports.IS_DEVELOPMENT ? "alter" : "safe";
exports.DB_POOL_SIZE = getOptional("DB_POOL_SIZE") || 30;
exports.DB_SEED = (getOptional("DB_SEED") || "false").toLowerCase() === "true";
//Firebase
exports.BUCKET = getRequired("NODE_BUCKET_FB");
exports.APP_KEY = getRequired("NODE_FIRE_BASE_KEY");
exports.AUTH_DOMAIN = getRequired("NODE_AUTH_DOMAIN");
exports.PROJECT_ID = getRequired("NODE_PROJECT_ID");
exports.STORAGE_BUCKET = getRequired("NODE_BUCKET");
exports.MESSAGING_SENDER_ID = getRequired("NODE_MESSAGING_SENDER_ID");
exports.API_ID = getRequired("NODE_API_ID");
exports.MEASUREMENT_ID = getRequired("NODE_MEASUREMENT_ID");
exports.DRAFT_TRIP_STATUS_ID = 6;
exports.PENDING_ITEM_STATUS = 1;
exports.APPROVED_ITEM_STATUS = 2;
