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
exports.VaccineRegistry = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var dose_1 = require("./dose");
var vaccine_type_1 = require("./vaccine_type");
var VaccineRegistry = /** @class */ (function () {
    function VaccineRegistry() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], VaccineRegistry.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "vaccine_url",
            length: 250,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], VaccineRegistry.prototype, "vaccineUrl", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", {
            name: "is_has_vaccinated",
            nullable: true,
            default: null,
        }),
        __metadata("design:type", Boolean)
    ], VaccineRegistry.prototype, "isHasVaccinated", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return dose_1.Dose; }, function (dose) { return dose.vaccineRegistry; }, {
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
            nullable: true,
        }),
        __metadata("design:type", Array)
    ], VaccineRegistry.prototype, "dose", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return vaccine_type_1.VaccineType; }, function (vaccine) { return vaccine.vaccineRegistry; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "vaccine_type_id", referencedColumnName: "id" }]),
        __metadata("design:type", vaccine_type_1.VaccineType)
    ], VaccineRegistry.prototype, "vaccineType", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "vaccine_type_id", nullable: true }),
        __metadata("design:type", Number)
    ], VaccineRegistry.prototype, "vaccineTypeId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return _1.Profile; }, function (profile) { return profile.vaccineRegistry; }, {
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "profile_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.Profile)
    ], VaccineRegistry.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_1.Column)("uuid", { name: "profile_id", nullable: false }),
        __metadata("design:type", String)
    ], VaccineRegistry.prototype, "profileId", void 0);
    VaccineRegistry = __decorate([
        (0, typeorm_1.Entity)("vaccine_registry")
    ], VaccineRegistry);
    return VaccineRegistry;
}());
exports.VaccineRegistry = VaccineRegistry;
