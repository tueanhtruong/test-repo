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
var repositories_1 = require("../../repositories");
var utils_1 = require("../../utils");
var ProfilesService = /** @class */ (function () {
    function ProfilesService() {
    }
    ProfilesService.prototype.getProfileById = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.profileRepo.getProfile(payload)];
                    case 1:
                        profile = _a.sent();
                        if (!profile) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, profile];
                }
            });
        });
    };
    ProfilesService.prototype.getMyProfiles = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var account, profiles, resolveUrlProfiles;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.accountRepo.getAccountByEmail({
                            email: payload.email,
                        })];
                    case 1:
                        account = _a.sent();
                        if (!account || !account.primaryProfileId)
                            throw new utils_1.NotFoundError("This Account is not exist or did not complete profile");
                        return [4 /*yield*/, repositories_1.profileRepo.getMyProfiles({
                                primaryProfileId: account.primaryProfileId,
                            })];
                    case 2:
                        profiles = _a.sent();
                        if ((0, utils_1.isEmpty)(profiles)) {
                            throw new utils_1.NotFoundError("Can not found your profiles");
                            // return null;
                        }
                        return [4 /*yield*/, Promise.all(profiles.map(function (x) { return __awaiter(_this, void 0, void 0, function () {
                                var updatedProfile, identityFile, medicalFile, vaccineFile;
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            updatedProfile = x;
                                            if (!x.identityUrl) return [3 /*break*/, 2];
                                            return [4 /*yield*/, (0, utils_1.getFileSignedUrl)(x.identityUrl)];
                                        case 1:
                                            identityFile = (_c.sent())[0];
                                            updatedProfile.identityUrl = identityFile || "";
                                            _c.label = 2;
                                        case 2:
                                            if (!x.medicalUrl) return [3 /*break*/, 4];
                                            return [4 /*yield*/, (0, utils_1.getFileSignedUrl)(x.medicalUrl)];
                                        case 3:
                                            medicalFile = (_c.sent())[0];
                                            updatedProfile.medicalUrl = medicalFile || "";
                                            _c.label = 4;
                                        case 4:
                                            if (!((_a = x.vaccineRegistry) === null || _a === void 0 ? void 0 : _a.vaccineUrl)) return [3 /*break*/, 6];
                                            return [4 /*yield*/, (0, utils_1.getFileSignedUrl)((_b = x.vaccineRegistry) === null || _b === void 0 ? void 0 : _b.vaccineUrl)];
                                        case 5:
                                            vaccineFile = (_c.sent())[0];
                                            updatedProfile.vaccineRegistry = __assign(__assign({}, x.vaccineRegistry), { vaccineUrl: vaccineFile || "" });
                                            _c.label = 6;
                                        case 6: return [2 /*return*/, updatedProfile];
                                    }
                                });
                            }); }))];
                    case 3:
                        resolveUrlProfiles = _a.sent();
                        return [2 /*return*/, resolveUrlProfiles];
                }
            });
        });
    };
    ProfilesService.prototype.createProfile = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var email, isPrimary, newProfile, account, updatePrimaryIdForAccount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = payload.email;
                        isPrimary = payload.isPrimary;
                        return [4 /*yield*/, repositories_1.profileRepo.createProfile(payload)];
                    case 1:
                        newProfile = _a.sent();
                        if (!newProfile)
                            throw new utils_1.InvalidOperationError("Can not create your profile");
                        if (!isPrimary) return [3 /*break*/, 5];
                        return [4 /*yield*/, repositories_1.accountRepo.getAccountByEmail({ email: email })];
                    case 2:
                        account = _a.sent();
                        if (!!account) return [3 /*break*/, 3];
                        throw new utils_1.NotFoundError("This Account is not exist");
                    case 3: return [4 /*yield*/, repositories_1.accountRepo.updateAccountPrimaryProfile({
                            email: email,
                            primaryProfileId: newProfile.id,
                        })];
                    case 4:
                        updatePrimaryIdForAccount = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, newProfile];
                }
            });
        });
    };
    ProfilesService.prototype.updateProfile = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedProfile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.profileRepo.updateProfile(payload)];
                    case 1:
                        updatedProfile = _a.sent();
                        if (!updatedProfile)
                            throw new utils_1.NotFoundError("Can not found this profiles for update");
                        return [2 /*return*/, updatedProfile];
                }
            });
        });
    };
    ProfilesService.prototype.deleteProfile = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.profileRepo.deleteProfile(payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ProfilesService;
}());
exports.default = ProfilesService;
