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
exports.Ward = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var district_1 = require("./district");
var profile_1 = require("./profile");
var province_1 = require("./province");
var Ward = /** @class */ (function () {
    function Ward() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Ward.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 50, type: "varchar" }),
        __metadata("design:type", String)
    ], Ward.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return province_1.Province; }, function (province) { return province.district; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "province_id", referencedColumnName: "id" }]),
        __metadata("design:type", province_1.Province)
    ], Ward.prototype, "province", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "province_id", nullable: false }),
        __metadata("design:type", Number)
    ], Ward.prototype, "provinceId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return district_1.District; }, function (district) { return district.ward; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "district_id", referencedColumnName: "id" }]),
        __metadata("design:type", district_1.District)
    ], Ward.prototype, "district", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "district_id", nullable: false }),
        __metadata("design:type", Number)
    ], Ward.prototype, "districtId", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return profile_1.Profile; }, function (profile) { return profile.ward; }),
        __metadata("design:type", Array)
    ], Ward.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return _1.Trip; }, function (trip) { return trip.departureWard; }),
        __metadata("design:type", Array)
    ], Ward.prototype, "departureTrip", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return _1.Trip; }, function (trip) { return trip.destinationWard; }),
        __metadata("design:type", Array)
    ], Ward.prototype, "destinationTrip", void 0);
    Ward = __decorate([
        (0, typeorm_1.Entity)("ward")
    ], Ward);
    return Ward;
}());
exports.Ward = Ward;
