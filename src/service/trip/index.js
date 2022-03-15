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
var config_1 = require("../../config");
var repositories_1 = require("../../repositories");
var utils_1 = require("../../utils");
var TripService = /** @class */ (function () {
    function TripService() {
        this.getDefaultStatusFromConfig = function (body) {
            var configs = utils_1.ConfigService.getConfig();
            var status = {
                vaccineStatusId: configs.AUTOMATIC_APPROVAL_VACCINATION
                    ? config_1.APPROVED_ITEM_STATUS
                    : config_1.PENDING_ITEM_STATUS,
                testCovidStatusId: !(0, utils_1.isEmpty)(body.testResult) && configs.AUTOMATIC_APPROVAL_TEST_RESULT
                    ? config_1.APPROVED_ITEM_STATUS
                    : config_1.PENDING_ITEM_STATUS,
                checkInsStatusId: !(0, utils_1.isEmpty)(body.checkIns) && configs.AUTOMATIC_APPROVAL_HEALTH_CONDITION
                    ? config_1.APPROVED_ITEM_STATUS
                    : config_1.PENDING_ITEM_STATUS,
            };
            return status;
        };
    }
    TripService.prototype.getTrips = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var account, trips;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.accountRepo.getAccountByEmail({
                            email: payload.email,
                        })];
                    case 1:
                        account = _a.sent();
                        if (!account || !account.primaryProfileId)
                            throw new utils_1.NotFoundError("This Account is not exist or did not complete profile");
                        return [4 /*yield*/, repositories_1.tripRepo.getTrips({
                                primaryTravelerId: account.primaryProfileId,
                            })];
                    case 2:
                        trips = _a.sent();
                        return [2 /*return*/, trips];
                }
            });
        });
    };
    TripService.prototype.getTrip = function (payload) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var trip, updatedURLProfiles;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, repositories_1.tripRepo.getTripById(payload)];
                    case 1:
                        trip = _b.sent();
                        if (!trip)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, Promise.all((_a = trip.tripProfile) === null || _a === void 0 ? void 0 : _a.map(function (n) { return __awaiter(_this, void 0, void 0, function () {
                                var testCovidUrl, identityFile, medicalFile, vaccineFile;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, (0, utils_1.getFileSignedUrl)(n.testCovid.covidTestUrl)];
                                        case 1:
                                            testCovidUrl = (_b.sent())[0];
                                            return [4 /*yield*/, (0, utils_1.getFileSignedUrl)(n.profile.identityUrl)];
                                        case 2:
                                            identityFile = (_b.sent())[0];
                                            return [4 /*yield*/, (0, utils_1.getFileSignedUrl)(n.profile.medicalUrl)];
                                        case 3:
                                            medicalFile = (_b.sent())[0];
                                            return [4 /*yield*/, (0, utils_1.getFileSignedUrl)((_a = n.profile.vaccineRegistry) === null || _a === void 0 ? void 0 : _a.vaccineUrl)];
                                        case 4:
                                            vaccineFile = (_b.sent())[0];
                                            return [2 /*return*/, __assign(__assign({}, n), { testCovid: __assign(__assign({}, n.testCovid), { covidTestUrl: testCovidUrl || "" }), profile: __assign(__assign({}, n.profile), { identityUrl: identityFile || "", medicalUrl: medicalFile || "", vaccineRegistry: n.profile.vaccineRegistry
                                                            ? __assign(__assign({}, n.profile.vaccineRegistry), { vaccineUrl: vaccineFile || "" }) : n.profile.vaccineRegistry }) })];
                                    }
                                });
                            }); }))];
                    case 2:
                        updatedURLProfiles = _b.sent();
                        trip.tripProfile = updatedURLProfiles;
                        return [2 /*return*/, trip];
                }
            });
        });
    };
    TripService.prototype.createTrip = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var tripRecord, tripProfileList;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.tripRepo.createTrip(payload)];
                    case 1:
                        tripRecord = _a.sent();
                        return [4 /*yield*/, Promise.all(payload.tripProfile.map(function (profile) { return __awaiter(_this, void 0, void 0, function () {
                                var checkInsRecord, testCovidRecord, tripProfileRecord;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, repositories_1.checkInsRepo.createCheckInsRecord(profile.checkIns)];
                                        case 1:
                                            checkInsRecord = _a.sent();
                                            return [4 /*yield*/, repositories_1.testCovidRepo.createCovidTestRecord(profile.testCovid)];
                                        case 2:
                                            testCovidRecord = _a.sent();
                                            if ((0, utils_1.isEmpty)(checkInsRecord) || (0, utils_1.isEmpty)(testCovidRecord))
                                                throw new utils_1.InvalidOperationError("Can not create record check_ins and test for traveler Id: ".concat(profile.id));
                                            return [4 /*yield*/, repositories_1.tripProfileRepo.createTripProfile(__assign({ profileId: profile.profileId, checkInsId: (checkInsRecord === null || checkInsRecord === void 0 ? void 0 : checkInsRecord.id) || "", testCovidId: (testCovidRecord === null || testCovidRecord === void 0 ? void 0 : testCovidRecord.id) || "", tripId: tripRecord === null || tripRecord === void 0 ? void 0 : tripRecord.id }, this.getDefaultStatusFromConfig({
                                                    checkIns: checkInsRecord,
                                                    testResult: testCovidRecord,
                                                })))];
                                        case 3:
                                            tripProfileRecord = _a.sent();
                                            return [2 /*return*/, __assign(__assign({}, tripProfileRecord), { checkIns: checkInsRecord, testCovid: testCovidRecord })];
                                    }
                                });
                            }); }))];
                    case 2:
                        tripProfileList = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, tripRecord), { tripProfile: tripProfileList })];
                }
            });
        });
    };
    TripService.prototype.updateTrip = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var tripRecord, tripProfileList;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.tripRepo.updateTrip(payload)];
                    case 1:
                        tripRecord = _a.sent();
                        return [4 /*yield*/, Promise.all(payload.tripProfile.map(function (profile) { return __awaiter(_this, void 0, void 0, function () {
                                var checkInsRecord, testCovidRecord, tripProfileRecord;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, repositories_1.checkInsRepo.updateCheckInsRecord(profile.checkIns)];
                                        case 1:
                                            checkInsRecord = _a.sent();
                                            return [4 /*yield*/, repositories_1.testCovidRepo.updateTestCovidRecord(profile.testCovid)];
                                        case 2:
                                            testCovidRecord = _a.sent();
                                            if ((0, utils_1.isEmpty)(checkInsRecord) && (0, utils_1.isEmpty)(testCovidRecord))
                                                return [2 /*return*/, null];
                                            tripProfileRecord = __assign({ profileId: profile.profileId, checkInsId: (checkInsRecord === null || checkInsRecord === void 0 ? void 0 : checkInsRecord.id) || "", testCovidId: (testCovidRecord === null || testCovidRecord === void 0 ? void 0 : testCovidRecord.id) || "" }, this.getDefaultStatusFromConfig({
                                                checkIns: checkInsRecord,
                                                testResult: testCovidRecord,
                                            }));
                                            return [2 /*return*/, __assign(__assign({}, tripProfileRecord), { checkIns: checkInsRecord, testCovid: testCovidRecord })];
                                    }
                                });
                            }); }))];
                    case 2:
                        tripProfileList = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, tripRecord), { tripProfile: tripProfileList })];
                }
            });
        });
    };
    TripService.prototype.deleteTrip = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var trip, deleteTrip, deleteItemProfileInfo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTrip(payload)];
                    case 1:
                        trip = _a.sent();
                        return [4 /*yield*/, repositories_1.tripRepo.deleteTrip(payload)];
                    case 2:
                        deleteTrip = _a.sent();
                        if (!!!trip) return [3 /*break*/, 4];
                        return [4 /*yield*/, Promise.all(trip.tripProfile.map(function (profile) { return __awaiter(_this, void 0, void 0, function () {
                                var deleteTest, deleteCheckIns;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, repositories_1.testCovidRepo.deleteTestCovid({
                                                id: profile.testCovidId,
                                            })];
                                        case 1:
                                            deleteTest = _a.sent();
                                            return [4 /*yield*/, repositories_1.checkInsRepo.deleteCheckIns({
                                                    id: profile.checkInsId,
                                                })];
                                        case 2:
                                            deleteCheckIns = _a.sent();
                                            return [2 /*return*/, profile];
                                    }
                                });
                            }); }))];
                    case 3:
                        deleteItemProfileInfo = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, null];
                }
            });
        });
    };
    return TripService;
}());
exports.default = TripService;
