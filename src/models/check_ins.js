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
exports.CheckIns = void 0;
var typeorm_1 = require("typeorm");
var trip_profile_1 = require("./trip_profile");
var CheckIns = /** @class */ (function () {
    function CheckIns() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], CheckIns.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", { name: "is_coughing", nullable: true }),
        __metadata("design:type", Boolean)
    ], CheckIns.prototype, "isCoughing", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", { name: "is_fever", nullable: true }),
        __metadata("design:type", Boolean)
    ], CheckIns.prototype, "isFever", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", { name: "is_loss_taste", nullable: true }),
        __metadata("design:type", Boolean)
    ], CheckIns.prototype, "isLossOfTaste", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", { name: "is_runny_nose", nullable: true }),
        __metadata("design:type", Boolean)
    ], CheckIns.prototype, "isRunnyNose", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", { name: "is_shortness_breath", nullable: true }),
        __metadata("design:type", Boolean)
    ], CheckIns.prototype, "isShortnessBreath", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", { name: "is_tiredness", nullable: true }),
        __metadata("design:type", Boolean)
    ], CheckIns.prototype, "isTiredness", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", { name: "is_travel_to_other_location", nullable: true }),
        __metadata("design:type", Boolean)
    ], CheckIns.prototype, "isTravelToOtherLocation", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "locations",
            nullable: true,
            length: 250,
        }),
        __metadata("design:type", String)
    ], CheckIns.prototype, "locations", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return trip_profile_1.TripProfile; }, function (tripProfile) { return tripProfile.checkIns; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        __metadata("design:type", trip_profile_1.TripProfile)
    ], CheckIns.prototype, "tripProfile", void 0);
    CheckIns = __decorate([
        (0, typeorm_1.Entity)("check_ins")
    ], CheckIns);
    return CheckIns;
}());
exports.CheckIns = CheckIns;
