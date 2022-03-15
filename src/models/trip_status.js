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
exports.TripStatus = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var TripStatus = /** @class */ (function () {
    function TripStatus() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], TripStatus.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "name",
            length: 50,
            unique: true,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], TripStatus.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "key",
            length: 50,
            unique: true,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], TripStatus.prototype, "key", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return _1.Trip; }, function (trip) { return trip.tripStatus; }),
        __metadata("design:type", Array)
    ], TripStatus.prototype, "trip", void 0);
    TripStatus = __decorate([
        (0, typeorm_1.Entity)("trip_status")
    ], TripStatus);
    return TripStatus;
}());
exports.TripStatus = TripStatus;
