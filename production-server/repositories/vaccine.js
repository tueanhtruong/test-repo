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
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var utils_1 = require("../utils");
var createVaccineRegistry = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var vaccineRepo, newVaccine, savedVaccine;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.VaccineRegistry)];
            case 1:
                vaccineRepo = _a.sent();
                newVaccine = vaccineRepo.create({
                    profileId: payload.profileId,
                    vaccineTypeId: payload.vaccineTypeId,
                    vaccineUrl: payload.vaccineUrl,
                    isHasVaccinated: payload.isHasVaccinated,
                });
                return [4 /*yield*/, vaccineRepo.save(newVaccine)];
            case 2:
                savedVaccine = _a.sent();
                return [2 /*return*/, savedVaccine];
        }
    });
}); };
var updateVaccineRegistry = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var vaccineRepo, selectedVaccine;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.VaccineRegistry)];
            case 1:
                vaccineRepo = _a.sent();
                return [4 /*yield*/, vaccineRepo.findOne({ id: payload === null || payload === void 0 ? void 0 : payload.id })];
            case 2:
                selectedVaccine = _a.sent();
                if (!selectedVaccine)
                    throw new utils_1.NotFoundError("Can not found vaccine registry data for update");
                return [4 /*yield*/, vaccineRepo.save(__assign(__assign({}, selectedVaccine), { profileId: payload.profileId, vaccineTypeId: payload.vaccineTypeId, vaccineUrl: payload.vaccineUrl, isHasVaccinated: payload.isHasVaccinated }))];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createDose = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var doseRepo, dosed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Dose)];
            case 1:
                doseRepo = _a.sent();
                return [4 /*yield*/, doseRepo.create({
                        vaccineRegistryId: payload.vaccineRegistryId,
                        nthDose: payload.nthDose,
                        doseDate: payload.doseDate,
                        healthFacility: payload.healthFacility,
                    })];
            case 2:
                dosed = _a.sent();
                return [4 /*yield*/, doseRepo.save(dosed)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var updateDose = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var doseRepo, doses;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Dose)];
            case 1:
                doseRepo = _a.sent();
                return [4 /*yield*/, doseRepo.findOne({ id: payload === null || payload === void 0 ? void 0 : payload.id })];
            case 2:
                doses = _a.sent();
                if (!doses)
                    return [2 /*return*/, null];
                doses.doseDate = payload.doseDate;
                doses.healthFacility = payload.healthFacility;
                return [4 /*yield*/, doseRepo.save(doses)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getDoses = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var doseRepo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Dose)];
            case 1:
                doseRepo = _a.sent();
                return [4 /*yield*/, doseRepo.find({ vaccineRegistryId: payload.vaccineRegistryId })];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var deleteDose = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var doseRepo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Dose)];
            case 1:
                doseRepo = _a.sent();
                return [4 /*yield*/, doseRepo
                        .createQueryBuilder()
                        .delete()
                        .from("dose")
                        .where("dose.id = :id", { id: payload.id })
                        .execute()];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.default = {
    createVaccineRegistry: createVaccineRegistry,
    updateVaccineRegistry: updateVaccineRegistry,
    createDose: createDose,
    updateDose: updateDose,
    getDoses: getDoses,
    deleteDose: deleteDose,
};
