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
exports.District = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var profile_1 = require("./profile");
var province_1 = require("./province");
var ward_1 = require("./ward");
var District = /** @class */ (function () {
    function District() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], District.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", { name: "name", length: 50 }),
        __metadata("design:type", String)
    ], District.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return province_1.Province; }, function (province) { return province.district; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "province_id", referencedColumnName: "id" }]),
        __metadata("design:type", province_1.Province)
    ], District.prototype, "province", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "province_id", nullable: false }),
        __metadata("design:type", Number)
    ], District.prototype, "provinceId", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ward_1.Ward; }, function (ward) { return ward.district; }),
        __metadata("design:type", Array)
    ], District.prototype, "ward", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return profile_1.Profile; }, function (profile) { return profile.district; }),
        __metadata("design:type", Array)
    ], District.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return _1.Trip; }, function (trip) { return trip.departureDistrict; }),
        __metadata("design:type", Array)
    ], District.prototype, "departureTrip", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return _1.Trip; }, function (trip) { return trip.destinationDistrict; }),
        __metadata("design:type", Array)
    ], District.prototype, "destinationTrip", void 0);
    District = __decorate([
        (0, typeorm_1.Entity)("district")
    ], District);
    return District;
}());
exports.District = District;
