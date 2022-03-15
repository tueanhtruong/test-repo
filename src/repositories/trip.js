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
exports.GetTripsSort = void 0;
var typeorm_1 = require("typeorm");
var config_1 = require("../config");
var models_1 = require("../models");
var helper_1 = require("../service/trip/helper");
var utils_1 = require("../utils");
var createTrip = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var tripRepo, tripPayload, newTrip;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Trip)];
            case 1:
                tripRepo = _a.sent();
                tripPayload = (0, helper_1.cloneTripRecord)(payload);
                return [4 /*yield*/, tripRepo.save(tripPayload)];
            case 2:
                newTrip = _a.sent();
                return [2 /*return*/, newTrip];
        }
    });
}); };
var updateTrip = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var tripRepo, selectedTrip, updateData, updatedTrip;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Trip)];
            case 1:
                tripRepo = _a.sent();
                return [4 /*yield*/, tripRepo.findOne({ id: payload.id })];
            case 2:
                selectedTrip = _a.sent();
                if ((0, utils_1.isEmpty)(selectedTrip))
                    return [2 /*return*/, null];
                updateData = (0, helper_1.cloneTripRecord)(payload);
                return [4 /*yield*/, tripRepo.save(__assign(__assign({}, selectedTrip), updateData))];
            case 3:
                updatedTrip = _a.sent();
                if ((0, utils_1.isEmpty)(updatedTrip))
                    return [2 /*return*/, null];
                return [2 /*return*/, updatedTrip];
        }
    });
}); };
var getTrips = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var tripRepo, trips;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Trip)];
            case 1:
                tripRepo = _a.sent();
                return [4 /*yield*/, tripRepo
                        .createQueryBuilder("trip")
                        .leftJoinAndSelect("trip.departureProvince", "departureProvince")
                        .leftJoinAndSelect("trip.departureDistrict", "departureDistrict")
                        .leftJoinAndSelect("trip.departureWard", "departureWard")
                        .leftJoinAndSelect("trip.destinationProvince", "destinationProvince")
                        .leftJoinAndSelect("trip.destinationDistrict", "destinationDistrict")
                        .leftJoinAndSelect("trip.destinationWard", "destinationWard")
                        .leftJoinAndSelect("trip.tripStatus", "tripStatus")
                        .leftJoinAndSelect("trip.tripPurpose", "tripPurpose")
                        .leftJoinAndSelect("trip.vehicleType", "vehicleType")
                        .leftJoinAndSelect("trip.tripProfile", "tripProfile")
                        .leftJoinAndSelect("tripProfile.profile", "profile")
                        .leftJoinAndSelect("tripProfile.checkIns", "checkIns")
                        .leftJoinAndSelect("tripProfile.testCovid", "testCovid")
                        .leftJoinAndSelect("tripProfile.testCovidStatus", "testCovidStatus")
                        .leftJoinAndSelect("tripProfile.vaccineStatus", "vaccineStatus")
                        .leftJoinAndSelect("tripProfile.checkInsStatus", "checkInsStatus")
                        .where("trip.primaryTravelerId = :primaryTravelerId", {
                        primaryTravelerId: payload.primaryTravelerId,
                    })
                        .getMany()];
            case 2:
                trips = _a.sent();
                return [2 /*return*/, trips];
        }
    });
}); };
var getTripById = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var tripRepo, trip;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Trip)];
            case 1:
                tripRepo = _a.sent();
                return [4 /*yield*/, tripRepo
                        .createQueryBuilder("trip")
                        .leftJoinAndSelect("trip.departureProvince", "departureProvince")
                        .leftJoinAndSelect("trip.departureDistrict", "departureDistrict")
                        .leftJoinAndSelect("trip.departureWard", "departureWard")
                        .leftJoinAndSelect("trip.destinationProvince", "destinationProvince")
                        .leftJoinAndSelect("trip.destinationDistrict", "destinationDistrict")
                        .leftJoinAndSelect("trip.destinationWard", "destinationWard")
                        .leftJoinAndSelect("trip.tripStatus", "tripStatus")
                        .leftJoinAndSelect("trip.tripPurpose", "tripPurpose")
                        .leftJoinAndSelect("trip.vehicleType", "vehicleType")
                        .leftJoinAndSelect("trip.tripProfile", "tripProfile")
                        .leftJoinAndSelect("tripProfile.profile", "profile")
                        .leftJoinAndSelect("tripProfile.checkIns", "checkIns")
                        .leftJoinAndSelect("tripProfile.testCovid", "testCovid")
                        .leftJoinAndSelect("tripProfile.testCovidStatus", "testCovidStatus")
                        .leftJoinAndSelect("tripProfile.vaccineStatus", "vaccineStatus")
                        .leftJoinAndSelect("tripProfile.checkInsStatus", "checkInsStatus")
                        .leftJoinAndSelect("testCovid.testType", "testType")
                        .leftJoinAndSelect("profile.gender", "gender")
                        .leftJoinAndSelect("profile.province", "province")
                        .leftJoinAndSelect("profile.district", "district")
                        .leftJoinAndSelect("profile.ward", "ward")
                        .leftJoinAndSelect("profile.vaccineRegistry", "vaccineRegistry")
                        .leftJoinAndSelect("vaccineRegistry.dose", "dose")
                        .leftJoinAndSelect("vaccineRegistry.vaccineType", "vaccineType")
                        .where("trip.id = :id", {
                        id: payload.id,
                    })
                        .getOne()];
            case 2:
                trip = _a.sent();
                return [2 /*return*/, trip || null];
        }
    });
}); };
var deleteTrip = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var tripRepo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Trip)];
            case 1:
                tripRepo = _a.sent();
                return [4 /*yield*/, tripRepo
                        .createQueryBuilder()
                        .delete()
                        .from("trip")
                        .where("trip.id = :id", {
                        id: payload.id,
                    })
                        .execute()];
            case 2:
                _a.sent();
                return [2 /*return*/, null];
        }
    });
}); };
/////////////////////////////////// admin trips //////////////////////////////////////
var GetTripsSort;
(function (GetTripsSort) {
    GetTripsSort["DEPARTURE_DATE"] = "departureDate";
    GetTripsSort["STATUS"] = "status";
    GetTripsSort["CREATED_DATE"] = "createdDate";
    GetTripsSort["VEHICLE_TYPE"] = "vehicleType";
    GetTripsSort["VEHICLE_NUMBER"] = "vehicleNumber";
})(GetTripsSort = exports.GetTripsSort || (exports.GetTripsSort = {}));
var getIncomingTrips = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var tripRepo, skip, take, sort, order, status, departureDate, search, query, sortOrder, term;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Trip)];
            case 1:
                tripRepo = _a.sent();
                skip = payload.skip, take = payload.take, sort = payload.sort, order = payload.order, status = payload.status, departureDate = payload.departureDate, search = payload.search;
                query = tripRepo
                    .createQueryBuilder("trip")
                    .leftJoinAndSelect("trip.tripStatus", "tripStatus")
                    .leftJoinAndSelect("trip.tripPurpose", "tripPurpose")
                    .leftJoinAndSelect("trip.vehicleType", "vehicleType")
                    .leftJoinAndSelect("trip.tripProfile", "tripProfile")
                    .leftJoinAndSelect("tripProfile.profile", "profile");
                if (sort) {
                    sortOrder = (0, utils_1.getOrder)(order);
                    switch (sort) {
                        case GetTripsSort.DEPARTURE_DATE:
                            query = query.addOrderBy("trip.departureDate", sortOrder);
                            break;
                        case GetTripsSort.STATUS:
                            query = query.addOrderBy("tripStatus.name", sortOrder);
                            break;
                        case GetTripsSort.CREATED_DATE:
                            query = query.addOrderBy("trip.createdDate", sortOrder);
                            break;
                        case GetTripsSort.VEHICLE_TYPE:
                            query = query.addOrderBy("vehicleType.name", sortOrder);
                            break;
                        case GetTripsSort.VEHICLE_NUMBER:
                            query = query.addOrderBy("trip.vehicleNumber", sortOrder);
                            break;
                    }
                }
                if (status) {
                    status.forEach(function (x, idx) {
                        var _a;
                        query = query.orWhere("tripStatus.key = :key".concat(idx), (_a = {},
                            _a["key".concat(idx)] = x,
                            _a));
                    });
                }
                if (departureDate) {
                    query = query.andWhere("trip.departureDate = :date", {
                        date: departureDate,
                    });
                }
                if (search) {
                    term = "%".concat(search.trim().toLowerCase(), "%");
                    query = query.andWhere("LOWER(CONCAT(profile.firstName, ' ', profile.lastName)) LIKE :search", { search: term });
                }
                query = query.andWhere("trip.tripStatusId != :id", {
                    id: config_1.DRAFT_TRIP_STATUS_ID,
                });
                return [4 /*yield*/, query.skip(skip).take(take).getManyAndCount()];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var updateTripStatus = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var tripRepo, selectedTrip;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Trip)];
            case 1:
                tripRepo = _a.sent();
                return [4 /*yield*/, tripRepo.findOne({ id: payload.id })];
            case 2:
                selectedTrip = _a.sent();
                if ((0, utils_1.isEmpty)(selectedTrip))
                    return [2 /*return*/, null];
                return [2 /*return*/, tripRepo.save(__assign(__assign({}, selectedTrip), { tripStatusId: payload.statusId }))];
        }
    });
}); };
var checkInsTripById = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var tripRepo, selectedTrip;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Trip)];
            case 1:
                tripRepo = _a.sent();
                return [4 /*yield*/, tripRepo.findOne({ id: payload.id })];
            case 2:
                selectedTrip = _a.sent();
                if ((0, utils_1.isEmpty)(selectedTrip))
                    return [2 /*return*/, null];
                return [2 /*return*/, tripRepo.save(__assign(__assign({}, selectedTrip), { tripStatusId: payload.statusId, checkInsDate: payload.checkInsDate }))];
        }
    });
}); };
exports.default = {
    createTrip: createTrip,
    updateTrip: updateTrip,
    getTrips: getTrips,
    deleteTrip: deleteTrip,
    getTripById: getTripById,
    getIncomingTrips: getIncomingTrips,
    updateTripStatus: updateTripStatus,
    checkInsTripById: checkInsTripById,
};
