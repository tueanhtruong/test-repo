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
var firebase_config_1 = require("../../config/firebase-config");
var service_1 = require("../../service");
var AdminUsersController = /** @class */ (function () {
    function AdminUsersController() {
    }
    AdminUsersController.prototype.getUsers = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return __awaiter(this, void 0, void 0, function () {
            var accountService, skip, take, sort, order, role, _l, data, total;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        accountService = new service_1.AccountsService();
                        skip = parseInt(((_b = (_a = request === null || request === void 0 ? void 0 : request.query) === null || _a === void 0 ? void 0 : _a.skip) === null || _b === void 0 ? void 0 : _b.toString()) || "");
                        take = parseInt(((_d = (_c = request === null || request === void 0 ? void 0 : request.query) === null || _c === void 0 ? void 0 : _c.take) === null || _d === void 0 ? void 0 : _d.toString()) || "");
                        sort = ((_f = (_e = request === null || request === void 0 ? void 0 : request.query) === null || _e === void 0 ? void 0 : _e.sort) === null || _f === void 0 ? void 0 : _f.toString()) || undefined;
                        order = (_h = (_g = request === null || request === void 0 ? void 0 : request.query) === null || _g === void 0 ? void 0 : _g.order) === null || _h === void 0 ? void 0 : _h.toString();
                        role = ((_k = (_j = request === null || request === void 0 ? void 0 : request.query) === null || _j === void 0 ? void 0 : _j.role) === null || _k === void 0 ? void 0 : _k.toString()) || undefined;
                        return [4 /*yield*/, accountService.getUsers({
                                skip: skip,
                                take: take,
                                sort: sort,
                                order: order,
                                role: role,
                            })];
                    case 1:
                        _l = _m.sent(), data = _l.data, total = _l.total;
                        return [2 /*return*/, {
                                data: data.map(function (n) {
                                    var _a;
                                    return (__assign(__assign({}, n), { 
                                        // id: n.id,
                                        // email: n.email,
                                        role: n.role.name, createdDate: (_a = n.createdDate) === null || _a === void 0 ? void 0 : _a.toISOString() }));
                                }),
                                total: total,
                            }];
                }
            });
        });
    };
    AdminUsersController.prototype.getUserById = function (request) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var accountService, id, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        accountService = new service_1.AccountsService();
                        id = (_a = request === null || request === void 0 ? void 0 : request.params) === null || _a === void 0 ? void 0 : _a.id.toString();
                        return [4 /*yield*/, accountService.getUserById({ id: id })];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    AdminUsersController.prototype.updateUserRole = function (request) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var accountService, id, roleId, isDisabled, email, userRecord, user;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        accountService = new service_1.AccountsService();
                        id = (_a = request === null || request === void 0 ? void 0 : request.body) === null || _a === void 0 ? void 0 : _a.id.toString();
                        roleId = (_b = request === null || request === void 0 ? void 0 : request.body) === null || _b === void 0 ? void 0 : _b.roleId;
                        isDisabled = (_c = request === null || request === void 0 ? void 0 : request.body) === null || _c === void 0 ? void 0 : _c.isDisabled;
                        email = (_d = request === null || request === void 0 ? void 0 : request.body) === null || _d === void 0 ? void 0 : _d.email;
                        return [4 /*yield*/, firebase_config_1.admin.auth().getUserByEmail(email)];
                    case 1:
                        userRecord = _e.sent();
                        return [4 /*yield*/, accountService.updateUserRole({
                                id: id,
                                roleId: roleId,
                                uid: userRecord === null || userRecord === void 0 ? void 0 : userRecord.uid,
                                isDisabled: isDisabled,
                            })];
                    case 2:
                        user = _e.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    AdminUsersController.prototype.CreateNewUser = function (request) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var accountService, email, password, roleId, user;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        accountService = new service_1.AccountsService();
                        email = (_a = request === null || request === void 0 ? void 0 : request.body) === null || _a === void 0 ? void 0 : _a.email.toString();
                        password = (_b = request === null || request === void 0 ? void 0 : request.body) === null || _b === void 0 ? void 0 : _b.password.toString();
                        roleId = (_c = request === null || request === void 0 ? void 0 : request.body) === null || _c === void 0 ? void 0 : _c.roleId;
                        return [4 /*yield*/, accountService.createAdminUser({
                                email: email,
                                roleId: roleId,
                                password: password,
                            })];
                    case 1:
                        user = _d.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    __decorate([
        (0, tsoa_1.Get)("/"),
        __param(0, (0, tsoa_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AdminUsersController.prototype, "getUsers", null);
    __decorate([
        (0, tsoa_1.Get)("/:id"),
        __param(0, (0, tsoa_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AdminUsersController.prototype, "getUserById", null);
    __decorate([
        (0, tsoa_1.Put)("/"),
        __param(0, (0, tsoa_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AdminUsersController.prototype, "updateUserRole", null);
    __decorate([
        (0, tsoa_1.Post)("/"),
        __param(0, (0, tsoa_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AdminUsersController.prototype, "CreateNewUser", null);
    AdminUsersController = __decorate([
        (0, tsoa_1.Route)("user"),
        (0, tsoa_1.Tags)("Account")
    ], AdminUsersController);
    return AdminUsersController;
}());
exports.default = AdminUsersController;
