"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var typeorm_1 = require("typeorm");
var profile_1 = require("./profile");
var role_1 = require("./role");
var Account = /** @class */ (function () {
    function Account() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Account.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Account.prototype, "createdDate", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Account.prototype, "updatedDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", { name: "email", length: 50, unique: true }),
        __metadata("design:type", String)
    ], Account.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return role_1.Role; }, function (role) { return role.account; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "role_id", referencedColumnName: "id" }]),
        __metadata("design:type", role_1.Role)
    ], Account.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "role_id", nullable: false }),
        __metadata("design:type", Number)
    ], Account.prototype, "roleId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return profile_1.Profile; }, function (profile) { return profile.account; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "primary_profile_id", referencedColumnName: "id" }]),
        __metadata("design:type", profile_1.Profile)
    ], Account.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_1.Column)("uuid", { name: "primary_profile_id", unique: true, nullable: true }),
        __metadata("design:type", Object)
    ], Account.prototype, "primaryProfileId", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", { name: "is_disabled", default: false }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "isDisabled", void 0);
    Account = __decorate([
        (0, typeorm_1.Entity)("account")
    ], Account);
    return Account;
}());
exports.Account = Account;
