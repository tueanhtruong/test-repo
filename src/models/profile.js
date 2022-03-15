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
exports.Profile = void 0;
var typeorm_1 = require("typeorm");
var account_1 = require("./account");
var district_1 = require("./district");
var gender_1 = require("./gender");
var province_1 = require("./province");
var trip_profile_1 = require("./trip_profile");
var vaccine_registry_1 = require("./vaccine_registry");
var ward_1 = require("./ward");
var Profile = /** @class */ (function () {
    function Profile() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Profile.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "first_name",
            length: 50,
            unique: false,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "firstName", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "last_name",
            length: 50,
            unique: false,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "lastName", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "phone_number",
            length: 50,
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "email",
            length: 50,
            unique: true,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)("date", {
            name: "date_of_birth",
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Profile.prototype, "createdDate", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Profile.prototype, "updatedDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "medical_number",
            length: 50,
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "medicalNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "medical_url",
            length: 250,
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "medicalUrl", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "identity_number",
            length: 50,
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "identityNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "identity_url",
            length: 250,
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "identityUrl", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "address",
            length: 250,
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "job",
            length: 50,
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "job", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return province_1.Province; }, function (province) { return province.profile; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "province_id", referencedColumnName: "id" }]),
        __metadata("design:type", province_1.Province)
    ], Profile.prototype, "province", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "province_id", nullable: true }),
        __metadata("design:type", Number)
    ], Profile.prototype, "provinceId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return district_1.District; }, function (district) { return district.profile; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "district_id", referencedColumnName: "id" }]),
        __metadata("design:type", district_1.District)
    ], Profile.prototype, "district", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "district_id", nullable: true }),
        __metadata("design:type", Number)
    ], Profile.prototype, "districtId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ward_1.Ward; }, function (ward) { return ward.profile; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "ward_id", referencedColumnName: "id" }]),
        __metadata("design:type", ward_1.Ward)
    ], Profile.prototype, "ward", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "ward_id", nullable: true }),
        __metadata("design:type", Number)
    ], Profile.prototype, "wardId", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", {
            name: "is_primary",
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "isPrimary", void 0);
    __decorate([
        (0, typeorm_1.Column)("uuid", {
            name: "primary_profile_id",
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], Profile.prototype, "primaryProfileId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return account_1.Account; }, function (account) { return account.profile; }, {
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        }),
        __metadata("design:type", account_1.Account)
    ], Profile.prototype, "account", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return vaccine_registry_1.VaccineRegistry; }, function (vaccine) { return vaccine.profile; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "vaccine_registry_id", referencedColumnName: "id" }]),
        __metadata("design:type", vaccine_registry_1.VaccineRegistry)
    ], Profile.prototype, "vaccineRegistry", void 0);
    __decorate([
        (0, typeorm_1.Column)("uuid", {
            name: "vaccine_registry_id",
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], Profile.prototype, "vaccineRegistryId", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return trip_profile_1.TripProfile; }, function (tripProfile) { return tripProfile.profile; }),
        __metadata("design:type", Array)
    ], Profile.prototype, "tripProfile", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return gender_1.Gender; }, function (gender) { return gender.profile; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "gender_id", referencedColumnName: "id" }]),
        __metadata("design:type", gender_1.Gender)
    ], Profile.prototype, "gender", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "gender_id", nullable: true }),
        __metadata("design:type", Number)
    ], Profile.prototype, "genderId", void 0);
    Profile = __decorate([
        (0, typeorm_1.Entity)("profile")
    ], Profile);
    return Profile;
}());
exports.Profile = Profile;
