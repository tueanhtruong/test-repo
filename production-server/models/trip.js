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
exports.Trip = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var Trip = /** @class */ (function () {
    function Trip() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Trip.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Trip.prototype, "createdDate", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Trip.prototype, "updatedDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("date", {
            name: "departure_date",
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Trip.prototype, "departureDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", {
            name: "is_leaving_trip",
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Trip.prototype, "isLeavingTrip", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Province; }, function (province) { return province.departureTrip; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "departure_province_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.Province)
    ], Trip.prototype, "departureProvince", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "departure_province_id", nullable: true }),
        __metadata("design:type", Number)
    ], Trip.prototype, "departureProvinceId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.District; }, function (district) { return district.departureTrip; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "departure_district_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.District)
    ], Trip.prototype, "departureDistrict", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "departure_district_id", nullable: true }),
        __metadata("design:type", Number)
    ], Trip.prototype, "departureDistrictId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Ward; }, function (ward) { return ward.departureTrip; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "departure_ward_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.Ward)
    ], Trip.prototype, "departureWard", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "departure_ward_id", nullable: true }),
        __metadata("design:type", Number)
    ], Trip.prototype, "departureWardId", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "departure_address",
            length: 250,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Trip.prototype, "departureAddress", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Province; }, function (province) { return province.destinationTrip; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "destination_province_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.Province)
    ], Trip.prototype, "destinationProvince", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "destination_province_id", nullable: true }),
        __metadata("design:type", Number)
    ], Trip.prototype, "destinationProvinceId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.District; }, function (district) { return district.destinationTrip; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "destination_district_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.District)
    ], Trip.prototype, "destinationDistrict", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "destination_district_id", nullable: true }),
        __metadata("design:type", Number)
    ], Trip.prototype, "destinationDistrictId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Ward; }, function (ward) { return ward.destinationTrip; }, {
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "destination_ward_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.Ward)
    ], Trip.prototype, "destinationWard", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", { name: "destination_ward_id", nullable: true }),
        __metadata("design:type", Number)
    ], Trip.prototype, "destinationWardId", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "destination_address",
            length: 250,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Trip.prototype, "destinationAddress", void 0);
    __decorate([
        (0, typeorm_1.Column)("date", {
            name: "check_ins_date",
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Trip.prototype, "checkInsDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("date", {
            name: "check_out_date",
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Trip.prototype, "checkOutDate", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.TripStatus; }, function (tripStatus) { return tripStatus.trip; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "trip_status_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.TripStatus)
    ], Trip.prototype, "tripStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "trip_status_id", nullable: false, default: 1 }),
        __metadata("design:type", Number)
    ], Trip.prototype, "tripStatusId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.TripPurposes; }, function (tripPurpose) { return tripPurpose.trip; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "trip_purpose_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.TripPurposes)
    ], Trip.prototype, "tripPurpose", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "trip_purpose_id", nullable: true }),
        __metadata("design:type", Number)
    ], Trip.prototype, "tripPurposeId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.VehicleType; }, function (vehicleType) { return vehicleType.trip; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "vehicle_type_id", referencedColumnName: "id" }]),
        __metadata("design:type", _1.VehicleType)
    ], Trip.prototype, "vehicleType", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "vehicle_type_id", nullable: true }),
        __metadata("design:type", Number)
    ], Trip.prototype, "vehicleTypeId", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "vehicle_number",
            length: 50,
            unique: false,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Trip.prototype, "vehicleNumber", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return _1.TripProfile; }, function (tripProfile) { return tripProfile.trip; }, {
            onUpdate: "CASCADE",
            onDelete: "DEFAULT",
        }),
        __metadata("design:type", Array)
    ], Trip.prototype, "tripProfile", void 0);
    __decorate([
        (0, typeorm_1.Column)("uuid", {
            name: "primary_traveler_id",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Trip.prototype, "primaryTravelerId", void 0);
    Trip = __decorate([
        (0, typeorm_1.Entity)("trip")
    ], Trip);
    return Trip;
}());
exports.Trip = Trip;
