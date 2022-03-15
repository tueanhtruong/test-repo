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
exports.Dose = void 0;
var typeorm_1 = require("typeorm");
var vaccine_registry_1 = require("./vaccine_registry");
var Dose = /** @class */ (function () {
    function Dose() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Dose.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("date", { name: "dose_date", nullable: true }),
        __metadata("design:type", String)
    ], Dose.prototype, "doseDate", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Dose.prototype, "createdDate", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Dose.prototype, "updatedDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", { name: "health_facility", length: 50 }),
        __metadata("design:type", String)
    ], Dose.prototype, "healthFacility", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "nth_dose" }),
        __metadata("design:type", Number)
    ], Dose.prototype, "nthDose", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return vaccine_registry_1.VaccineRegistry; }, function (vaccine) { return vaccine.dose; }, {
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "vaccine_registry_id", referencedColumnName: "id" }]),
        __metadata("design:type", vaccine_registry_1.VaccineRegistry)
    ], Dose.prototype, "vaccineRegistry", void 0);
    __decorate([
        (0, typeorm_1.Column)("uuid", { name: "vaccine_registry_id", nullable: false }),
        __metadata("design:type", String)
    ], Dose.prototype, "vaccineRegistryId", void 0);
    Dose = __decorate([
        (0, typeorm_1.Entity)("dose")
    ], Dose);
    return Dose;
}());
exports.Dose = Dose;
