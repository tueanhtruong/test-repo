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
var moment_1 = __importDefault(require("moment"));
var repositories_1 = require("../../repositories");
var tripProfile_1 = __importDefault(require("../../repositories/tripProfile"));
var helper_1 = require("./helper");
var ItemStatusIndex;
(function (ItemStatusIndex) {
    ItemStatusIndex[ItemStatusIndex["PENDING"] = 1] = "PENDING";
    ItemStatusIndex[ItemStatusIndex["APPROVED"] = 2] = "APPROVED";
    ItemStatusIndex[ItemStatusIndex["REJECTED"] = 3] = "REJECTED";
    ItemStatusIndex[ItemStatusIndex["CHECKED_IN"] = 4] = "CHECKED_IN";
})(ItemStatusIndex || (ItemStatusIndex = {}));
var ItemStatus;
(function (ItemStatus) {
    ItemStatus["PENDING"] = "PENDING";
    ItemStatus["APPROVED"] = "APPROVED";
    ItemStatus["REJECTED"] = "REJECTED";
    ItemStatus["CHECKED_IN"] = "CHECKED_IN";
})(ItemStatus || (ItemStatus = {}));
var AdminTripService = /** @class */ (function () {
    function AdminTripService() {
    }
    AdminTripService.prototype.getIncomingTrips = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, trips, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, repositories_1.tripRepo.getIncomingTrips(payload)];
                    case 1:
                        _a = _b.sent(), trips = _a[0], total = _a[1];
                        return [2 /*return*/, {
                                data: trips,
                                total: total,
                            }];
                }
            });
        });
    };
    AdminTripService.prototype.checkInsTrip = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.tripRepo.checkInsTripById({
                            id: payload.tripId,
                            statusId: ItemStatusIndex.CHECKED_IN,
                            checkInsDate: (0, moment_1.default)().format("YYYY-MM-DD"),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdminTripService.prototype.checkTripStatus = function (payload) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var selectedTrip, travelerStatus, tripStatusIndex;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, repositories_1.tripRepo.getTripById({ id: payload.tripId })];
                    case 1:
                        selectedTrip = _b.sent();
                        travelerStatus = (_a = selectedTrip === null || selectedTrip === void 0 ? void 0 : selectedTrip.tripProfile) === null || _a === void 0 ? void 0 : _a.map(function (traveler) {
                            var _a, _b, _c;
                            var status = [
                                (_a = traveler.vaccineStatus) === null || _a === void 0 ? void 0 : _a.key,
                                (_b = traveler.testCovidStatus) === null || _b === void 0 ? void 0 : _b.key,
                                (_c = traveler.checkInsStatus) === null || _c === void 0 ? void 0 : _c.key,
                            ];
                            var isApproveAll = status.every(function (x) { return x === "APPROVED"; });
                            if (isApproveAll)
                                return "APPROVED";
                            var hasRejected = status.find(function (x) { return x === "REJECTED"; });
                            if (hasRejected)
                                return "REJECTED";
                            var hasPending = status.find(function (x) { return x === "PENDING"; });
                            if (hasPending)
                                return "PENDING";
                            return "PENDING";
                        });
                        tripStatusIndex = (0, helper_1.checkTripStatusKey)(travelerStatus);
                        return [4 /*yield*/, repositories_1.tripRepo.updateTripStatus({
                                id: payload.tripId,
                                statusId: tripStatusIndex,
                            })];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    AdminTripService.prototype.updateVaccineStatus = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var statusId, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statusId = null;
                        switch (payload.status) {
                            case ItemStatus.APPROVED:
                                statusId = ItemStatusIndex.APPROVED;
                                break;
                            case ItemStatus.REJECTED:
                                statusId = ItemStatusIndex.REJECTED;
                                break;
                            default:
                                statusId = ItemStatusIndex.PENDING;
                                break;
                        }
                        return [4 /*yield*/, tripProfile_1.default.updateVaccineStatus({
                                vaccineStatusId: statusId,
                                id: payload.travelerId,
                                rejectReason: payload === null || payload === void 0 ? void 0 : payload.rejectReason,
                            })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, this.checkTripStatus({ tripId: payload.tripId })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdminTripService.prototype.updateTestingStatus = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var statusId, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statusId = null;
                        switch (payload.status) {
                            case ItemStatus.APPROVED:
                                statusId = ItemStatusIndex.APPROVED;
                                break;
                            case ItemStatus.REJECTED:
                                statusId = ItemStatusIndex.REJECTED;
                                break;
                            default:
                                statusId = ItemStatusIndex.PENDING;
                                break;
                        }
                        return [4 /*yield*/, tripProfile_1.default.updateTestingStatus({
                                testStatusId: statusId,
                                id: payload.travelerId,
                                rejectReason: payload === null || payload === void 0 ? void 0 : payload.rejectReason,
                            })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, this.checkTripStatus({ tripId: payload.tripId })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdminTripService.prototype.updateCheckInsStatus = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var statusId, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statusId = null;
                        switch (payload.status) {
                            case ItemStatus.APPROVED:
                                statusId = ItemStatusIndex.APPROVED;
                                break;
                            case ItemStatus.REJECTED:
                                statusId = ItemStatusIndex.REJECTED;
                                break;
                            default:
                                statusId = ItemStatusIndex.PENDING;
                                break;
                        }
                        return [4 /*yield*/, tripProfile_1.default.updateCheckInsStatus({
                                checkInsStatusId: statusId,
                                id: payload.travelerId,
                                rejectReason: payload === null || payload === void 0 ? void 0 : payload.rejectReason,
                            })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, this.checkTripStatus({ tripId: payload.tripId })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AdminTripService;
}());
exports.default = AdminTripService;
