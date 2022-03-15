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
exports.TripProfile = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var TripProfile = /** @class */ (function () {
    function TripProfile() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], TripProfile.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], TripProfile.prototype, "createdDate", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], TripProfile.prototype, "updatedDate", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Profile; }, function (profile) { return profile.tripProfile; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "profile_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.Profile)
    ], TripProfile.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_1.Column)("uuid", { name: "profile_id", nullable: false }),
        __metadata("design:type", String)
    ], TripProfile.prototype, "profileId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return _1.CheckIns; }, function (checkIns) { return checkIns.tripProfile; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "check_ins_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.CheckIns)
    ], TripProfile.prototype, "checkIns", void 0);
    __decorate([
        (0, typeorm_1.Column)("uuid", { name: "check_ins_id", nullable: false }),
        __metadata("design:type", String)
    ], TripProfile.prototype, "checkInsId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return _1.TestCovid; }, function (testCovid) { return testCovid.tripProfile; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "test_covid_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.TestCovid)
    ], TripProfile.prototype, "testCovid", void 0);
    __decorate([
        (0, typeorm_1.Column)("uuid", { name: "test_covid_id", nullable: false }),
        __metadata("design:type", String)
    ], TripProfile.prototype, "testCovidId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.ItemStatus; }, function (itemStatus) { return itemStatus.tripProfile; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "test_covid_status_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.ItemStatus)
    ], TripProfile.prototype, "testCovidStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "test_covid_status_id", nullable: false, default: 1 }),
        __metadata("design:type", Number)
    ], TripProfile.prototype, "testCovidStatusId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.ItemStatus; }, function (itemStatus) { return itemStatus.tripProfile; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "vaccine_status_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.ItemStatus)
    ], TripProfile.prototype, "vaccineStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "vaccine_status_id", nullable: false, default: 1 }),
        __metadata("design:type", Number)
    ], TripProfile.prototype, "vaccineStatusId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.ItemStatus; }, function (itemStatus) { return itemStatus.tripProfile; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "check_ins_status_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.ItemStatus)
    ], TripProfile.prototype, "checkInsStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "check_ins_status_id", nullable: false, default: 1 }),
        __metadata("design:type", Number)
    ], TripProfile.prototype, "checkInsStatusId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Trip; }, function (trip) { return trip.tripProfile; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "trip_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.Trip)
    ], TripProfile.prototype, "trip", void 0);
    __decorate([
        (0, typeorm_1.Column)("uuid", { name: "trip_id", nullable: true }),
        __metadata("design:type", String)
    ], TripProfile.prototype, "tripId", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "vaccine-reject-reason",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], TripProfile.prototype, "vaccineRejectReason", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "checkIns-reject-reason",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], TripProfile.prototype, "checkInsRejectReason", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", { name: "test-reject-reason", nullable: true }),
        __metadata("design:type", String)
    ], TripProfile.prototype, "testRejectReason", void 0);
    TripProfile = __decorate([
        (0, typeorm_1.Entity)("trip_profile")
    ], TripProfile);
    return TripProfile;
}());
exports.TripProfile = TripProfile;
