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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneTestCovidRecord = void 0;
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var utils_1 = require("../utils");
var cloneTestCovidRecord = function (data) { return ({
    testDate: data.date,
    testTypeId: data.testTypeId,
    covidTestUrl: data.covidTestUrl,
    hasTestCovid: data.hasTestCovid,
    id: (data === null || data === void 0 ? void 0 : data.id) || undefined,
    date: undefined,
}); };
exports.cloneTestCovidRecord = cloneTestCovidRecord;
var createCovidTestRecord = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var testCovidRepo, payload, testCovidRecords;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.TestCovid)];
            case 1:
                testCovidRepo = _a.sent();
                payload = (0, exports.cloneTestCovidRecord)(data);
                return [4 /*yield*/, testCovidRepo.save(payload)];
            case 2:
                testCovidRecords = _a.sent();
                if ((0, utils_1.isEmpty)(testCovidRecords))
                    return [2 /*return*/, null];
                return [2 /*return*/, testCovidRecords];
        }
    });
}); };
var updateTestCovidRecord = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var testCovidRepo, selectedRecord, payload, updatedRecord;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.TestCovid)];
            case 1:
                testCovidRepo = _a.sent();
                return [4 /*yield*/, testCovidRepo.findOne({ id: data.id })];
            case 2:
                selectedRecord = _a.sent();
                if ((0, utils_1.isEmpty)(selectedRecord))
                    return [2 /*return*/, null];
                payload = (0, exports.cloneTestCovidRecord)(data);
                return [4 /*yield*/, testCovidRepo.save(__assign(__assign({}, selectedRecord), payload))];
            case 3:
                updatedRecord = _a.sent();
                return [2 /*return*/, updatedRecord];
        }
    });
}); };
var deleteTestCovid = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var tripRepo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.TestCovid)];
            case 1:
                tripRepo = _a.sent();
                return [4 /*yield*/, tripRepo.delete({ id: payload.id })];
            case 2:
                _a.sent();
                // await tripRepo
                //   .createQueryBuilder()
                //   .delete()
                //   .from("testCovid")
                //   .where("testCovid.id = :id", {
                //     id: payload.id,
                //   })
                //   .execute();
                return [2 /*return*/, null];
        }
    });
}); };
exports.default = {
    createCovidTestRecord: createCovidTestRecord,
    updateTestCovidRecord: updateTestCovidRecord,
    deleteTestCovid: deleteTestCovid,
};
