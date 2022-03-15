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
exports.GetUsersSort = void 0;
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var utils_1 = require("../utils");
var GetUsersSort;
(function (GetUsersSort) {
    GetUsersSort["EMAIL"] = "email";
    GetUsersSort["ROLE"] = "role";
    GetUsersSort["CREATED_DATE"] = "createdDate";
})(GetUsersSort = exports.GetUsersSort || (exports.GetUsersSort = {}));
var getAccountByEmail = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var accountRepository, account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Account)];
            case 1:
                accountRepository = _a.sent();
                return [4 /*yield*/, accountRepository
                        .createQueryBuilder("account")
                        .leftJoinAndSelect("account.role", "role")
                        .leftJoinAndSelect("role.permission", "permission")
                        .where("account.email = :email", { email: payload.email })
                        .getOne()];
            case 2:
                account = _a.sent();
                if (!account)
                    return [2 /*return*/, null];
                return [2 /*return*/, account];
        }
    });
}); };
var getAccountById = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var accountRepository, account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Account)];
            case 1:
                accountRepository = _a.sent();
                return [4 /*yield*/, accountRepository
                        .createQueryBuilder("account")
                        .leftJoinAndSelect("account.role", "role")
                        .leftJoinAndSelect("account.profile", "profile")
                        .leftJoinAndSelect("profile.gender", "gender")
                        .where("account.id = :id", { id: payload.id })
                        .getOne()];
            case 2:
                account = _a.sent();
                if (!account)
                    return [2 /*return*/, null];
                return [2 /*return*/, account];
        }
    });
}); };
var createAccount = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var accountRepository, newTraveler;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Account)];
            case 1:
                accountRepository = _a.sent();
                return [4 /*yield*/, accountRepository.create({
                        email: payload.email,
                        roleId: payload.roleId,
                    })];
            case 2:
                newTraveler = _a.sent();
                return [4 /*yield*/, accountRepository.save(newTraveler)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var updateAccountPrimaryProfile = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var accountRepository, account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Account)];
            case 1:
                accountRepository = _a.sent();
                return [4 /*yield*/, accountRepository.findOne({ email: payload.email })];
            case 2:
                account = _a.sent();
                if (!account)
                    return [2 /*return*/, null];
                return [4 /*yield*/, accountRepository.save(__assign(__assign({}, account), { primaryProfileId: payload.primaryProfileId }))];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var updateAccountRole = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var accountRepository, account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Account)];
            case 1:
                accountRepository = _a.sent();
                return [4 /*yield*/, accountRepository.findOne({ id: payload.id })];
            case 2:
                account = _a.sent();
                if (!account)
                    return [2 /*return*/, null];
                return [4 /*yield*/, accountRepository.save(__assign(__assign({}, account), { roleId: payload.roleId, isDisabled: (payload === null || payload === void 0 ? void 0 : payload.isDisabled) || false }))];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getAccounts = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var skip, take, sort, order, role, accountRepository, query, sortOrder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                skip = payload.skip, take = payload.take, sort = payload.sort, order = payload.order, role = payload.role;
                return [4 /*yield*/, (0, typeorm_1.getRepository)(models_1.Account)];
            case 1:
                accountRepository = _a.sent();
                query = accountRepository
                    .createQueryBuilder("account")
                    .leftJoinAndSelect("account.role", "role")
                    .leftJoinAndSelect("role.permission", "permission");
                if (sort) {
                    sortOrder = (0, utils_1.getOrder)(order);
                    switch (sort) {
                        case GetUsersSort.EMAIL:
                            query = query.addOrderBy("account.email", sortOrder);
                            break;
                        case GetUsersSort.ROLE:
                            query = query.addOrderBy("role.name", sortOrder);
                            break;
                        case GetUsersSort.CREATED_DATE:
                            query = query.addOrderBy("account.createdDate", sortOrder);
                            break;
                    }
                }
                if (role) {
                    query = query.andWhere("role.name = :name", { name: role });
                }
                return [4 /*yield*/, query.skip(skip).take(take).getManyAndCount()];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.default = {
    getAccountByEmail: getAccountByEmail,
    createAccount: createAccount,
    updateAccountPrimaryProfile: updateAccountPrimaryProfile,
    getAccounts: getAccounts,
    getAccountById: getAccountById,
    updateAccountRole: updateAccountRole,
};
