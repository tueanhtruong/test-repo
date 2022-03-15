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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
// import { Account } from "../../models";
var express = __importStar(require("express"));
var tsoa_1 = require("tsoa");
var service_1 = require("../../service");
var AdminTripsController = /** @class */ (function () {
    function AdminTripsController() {
    }
    AdminTripsController.prototype.getTrips = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return __awaiter(this, void 0, void 0, function () {
            var tripService, skip, take, sort, order, queryStatus, search, departureDate, status, _p, data, total;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        tripService = new service_1.AdminTripService();
                        skip = parseInt(((_b = (_a = request === null || request === void 0 ? void 0 : request.query) === null || _a === void 0 ? void 0 : _a.skip) === null || _b === void 0 ? void 0 : _b.toString()) || "");
                        take = parseInt(((_d = (_c = request === null || request === void 0 ? void 0 : request.query) === null || _c === void 0 ? void 0 : _c.take) === null || _d === void 0 ? void 0 : _d.toString()) || "");
                        sort = ((_f = (_e = request === null || request === void 0 ? void 0 : request.query) === null || _e === void 0 ? void 0 : _e.sort) === null || _f === void 0 ? void 0 : _f.toString()) || undefined;
                        order = (_h = (_g = request === null || request === void 0 ? void 0 : request.query) === null || _g === void 0 ? void 0 : _g.order) === null || _h === void 0 ? void 0 : _h.toString();
                        queryStatus = ((_j = request === null || request === void 0 ? void 0 : request.query) === null || _j === void 0 ? void 0 : _j.status) || undefined;
                        search = ((_l = (_k = request === null || request === void 0 ? void 0 : request.query) === null || _k === void 0 ? void 0 : _k.search) === null || _l === void 0 ? void 0 : _l.toString()) || undefined;
                        departureDate = ((_o = (_m = request === null || request === void 0 ? void 0 : request.query) === null || _m === void 0 ? void 0 : _m.departureDate) === null || _o === void 0 ? void 0 : _o.toString()) || undefined;
                        status = typeof queryStatus === "string" ? [queryStatus] : queryStatus;
                        return [4 /*yield*/, tripService.getIncomingTrips({
                                skip: skip,
                                take: take,
                                sort: sort,
                                order: order,
                                status: status,
                                departureDate: departureDate,
                                search: search === null || search === void 0 ? void 0 : search.toLowerCase(),
                            })];
                    case 1:
                        _p = _q.sent(), data = _p.data, total = _p.total;
                        return [2 /*return*/, {
                                data: data.map(function (n) { return (__assign(__assign({}, n), { status: n.tripStatus.key, numberOfTraveler: n.tripProfile.length, travelerName: n.tripProfile.map(function (profile) {
                                        return "".concat(profile.profile.firstName, " ").concat(profile.profile.lastName);
                                    }), tripPurpose: n.tripPurpose.name })); }),
                                total: total,
                            }];
                }
            });
        });
    };
    AdminTripsController.prototype.getTripById = function (request) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var tripService, id, trip;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tripService = new service_1.TripService();
                        id = (_a = request === null || request === void 0 ? void 0 : request.params) === null || _a === void 0 ? void 0 : _a.id.toString();
                        return [4 /*yield*/, tripService.getTrip({ id: id })];
                    case 1:
                        trip = _b.sent();
                        return [2 /*return*/, trip];
                }
            });
        });
    };
    AdminTripsController.prototype.checkInsTripById = function (request) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var tripService, id, trip;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tripService = new service_1.AdminTripService();
                        id = (_a = request === null || request === void 0 ? void 0 : request.params) === null || _a === void 0 ? void 0 : _a.id.toString();
                        return [4 /*yield*/, tripService.checkInsTrip({ tripId: id })];
                    case 1:
                        trip = _b.sent();
                        return [2 /*return*/, trip];
                }
            });
        });
    };
    AdminTripsController.prototype.updateTravelerVaccineStatus = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var tripService, tripId, travelerId, status, rejectReason;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tripService = new service_1.AdminTripService();
                        tripId = request.params.tripId;
                        travelerId = request.params.travelerId;
                        status = request.body.status;
                        rejectReason = request.body.rejectReason;
                        return [4 /*yield*/, tripService.updateVaccineStatus({
                                tripId: tripId,
                                travelerId: travelerId,
                                status: status,
                                rejectReason: rejectReason,
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdminTripsController.prototype.updateTravelerTestingStatus = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var tripService, tripId, travelerId, status, rejectReason;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tripService = new service_1.AdminTripService();
                        tripId = request.params.tripId;
                        travelerId = request.params.travelerId;
                        status = request.body.status;
                        rejectReason = request.body.rejectReason;
                        return [4 /*yield*/, tripService.updateTestingStatus({
                                tripId: tripId,
                                travelerId: travelerId,
                                status: status,
                                rejectReason: rejectReason,
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdminTripsController.prototype.updateTravelerCheckInsStatus = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var tripService, tripId, travelerId, status, rejectReason;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tripService = new service_1.AdminTripService();
                        tripId = request.params.tripId;
                        travelerId = request.params.travelerId;
                        status = request.body.status;
                        rejectReason = request.body.rejectReason;
                        return [4 /*yield*/, tripService.updateCheckInsStatus({
                                tripId: tripId,
                                travelerId: travelerId,
                                status: status,
                                rejectReason: rejectReason,
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        (0, tsoa_1.Get)("/incoming"),
        __param(0, (0, tsoa_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AdminTripsController.prototype, "getTrips", null);
    __decorate([
        (0, tsoa_1.Get)("/:id"),
        __param(0, (0, tsoa_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AdminTripsController.prototype, "getTripById", null);
    __decorate([
        (0, tsoa_1.Get)("/:id/check-ins"),
        __param(0, (0, tsoa_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AdminTripsController.prototype, "checkInsTripById", null);
    __decorate([
        (0, tsoa_1.Put)("/:tripId/traveler/:travelerId/vaccine-status"),
        __param(0, (0, tsoa_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AdminTripsController.prototype, "updateTravelerVaccineStatus", null);
    __decorate([
        (0, tsoa_1.Put)("/:tripId/traveler/:travelerId/testing-status"),
        __param(0, (0, tsoa_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AdminTripsController.prototype, "updateTravelerTestingStatus", null);
    __decorate([
        (0, tsoa_1.Put)("/:tripId/traveler/:travelerId/check-ins-status"),
        __param(0, (0, tsoa_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AdminTripsController.prototype, "updateTravelerCheckInsStatus", null);
    AdminTripsController = __decorate([
        (0, tsoa_1.Route)("trip"),
        (0, tsoa_1.Tags)("IncomingTrips")
    ], AdminTripsController);
    return AdminTripsController;
}());
exports.default = AdminTripsController;
