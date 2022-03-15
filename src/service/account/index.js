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
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("@firebase/auth");
var repositories_1 = require("../../repositories");
var utils_1 = require("../../utils");
var AccountsService = /** @class */ (function () {
    function AccountsService() {
    }
    AccountsService.prototype.getAccount = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var account, role, newAccount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.accountRepo.getAccountByEmail(payload)];
                    case 1:
                        account = _a.sent();
                        if (!!account) return [3 /*break*/, 4];
                        return [4 /*yield*/, repositories_1.roleRepo.getRole({ key: "TRAVELER" })];
                    case 2:
                        role = _a.sent();
                        return [4 /*yield*/, repositories_1.accountRepo.createAccount({
                                email: payload.email,
                                role: role,
                                roleId: role.id,
                            })];
                    case 3:
                        newAccount = _a.sent();
                        return [2 /*return*/, newAccount];
                    case 4: return [2 /*return*/, account];
                }
            });
        });
    };
    AccountsService.prototype.getPermission = function (payload) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, repositories_1.accountRepo.getAccountByEmail(payload)];
                    case 1:
                        account = _b.sent();
                        if (!account) {
                            throw new utils_1.NotFoundError("Cant not found your account");
                        }
                        return [2 /*return*/, (_a = account.role) === null || _a === void 0 ? void 0 : _a.permission];
                }
            });
        });
    };
    /////////////////////// Admin ///////////////////////
    AccountsService.prototype.getUsers = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, accounts, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, repositories_1.accountRepo.getAccounts(payload)];
                    case 1:
                        _a = _b.sent(), accounts = _a[0], total = _a[1];
                        return [2 /*return*/, {
                                data: accounts,
                                total: total,
                            }];
                }
            });
        });
    };
    AccountsService.prototype.getUserById = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.accountRepo.getAccountById(payload)];
                    case 1:
                        account = _a.sent();
                        if (!account) {
                            throw new utils_1.NotFoundError("Can not found your user account");
                        }
                        return [2 /*return*/, account];
                }
            });
        });
    };
    AccountsService.prototype.updateUserRole = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositories_1.accountRepo.updateAccountRole(payload)];
                    case 1:
                        account = _a.sent();
                        if (!account) {
                            throw new utils_1.NotFoundError("Can not found your user account");
                        }
                        return [2 /*return*/, account];
                }
            });
        });
    };
    AccountsService.prototype.createAdminUser = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var firebaseUserProps, auth, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, auth_1.createUserWithEmailAndPassword)((0, auth_1.getAuth)(), payload.email, payload.password)];
                    case 1:
                        firebaseUserProps = _a.sent();
                        auth = (0, auth_1.getAuth)();
                        if (!(auth === null || auth === void 0 ? void 0 : auth.currentUser)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, auth_1.sendEmailVerification)(auth.currentUser)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw new utils_1.InvalidOperationError("Can not create user account");
                    case 4: return [4 /*yield*/, repositories_1.accountRepo.createAccount({
                            email: payload.email,
                            roleId: payload.roleId,
                        })];
                    case 5:
                        account = _a.sent();
                        if (!account) {
                            throw new utils_1.InvalidOperationError("Can not create user account");
                        }
                        return [2 /*return*/, account];
                }
            });
        });
    };
    return AccountsService;
}());
exports.default = AccountsService;
