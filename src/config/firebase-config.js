"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlOptions = exports.storage = exports.admin = void 0;
var admin = __importStar(require("firebase-admin"));
exports.admin = admin;
// import * as serviceAccount from "./serviceAccountKey.json";
var serviceAccount = require("./serviceAccountKey.json");
var _1 = require(".");
var app_1 = require("firebase/app");
var firebaseConfig = {
    apiKey: _1.APP_KEY,
    authDomain: _1.AUTH_DOMAIN,
    projectId: _1.PROJECT_ID,
    storageBucket: _1.STORAGE_BUCKET,
    messagingSenderId: _1.MESSAGING_SENDER_ID,
    appId: _1.API_ID,
    measurementId: _1.MEASUREMENT_ID,
};
var app = (0, app_1.initializeApp)(firebaseConfig);
// eslint-disable-next-line
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
var storage = admin.storage().bucket(_1.BUCKET);
exports.storage = storage;
var urlOptions = function () { return ({
    version: "v4",
    action: "read",
    expires: Date.now() + 60 * 60 * 15,
}); };
exports.urlOptions = urlOptions;
