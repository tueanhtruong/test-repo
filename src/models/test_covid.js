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
exports.TestCovid = void 0;
var typeorm_1 = require("typeorm");
var test_type_1 = require("./test_type");
var trip_profile_1 = require("./trip_profile");
var TestCovid = /** @class */ (function () {
    function TestCovid() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], TestCovid.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("date", {
            name: "test_date",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], TestCovid.prototype, "testDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "covid_test_url",
            length: 250,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], TestCovid.prototype, "covidTestUrl", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", {
            name: "has_test_covid",
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], TestCovid.prototype, "hasTestCovid", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return test_type_1.TestType; }, function (testType) { return testType.testCovid; }, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "test_type_id", referencedColumnName: "id" }]),
        __metadata("design:type", test_type_1.TestType)
    ], TestCovid.prototype, "testType", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", {
            name: "test_type_id",
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], TestCovid.prototype, "testTypeId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return trip_profile_1.TripProfile; }, function (tripProfile) { return tripProfile.testCovid; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        __metadata("design:type", trip_profile_1.TripProfile)
    ], TestCovid.prototype, "tripProfile", void 0);
    TestCovid = __decorate([
        (0, typeorm_1.Entity)("test_covid")
    ], TestCovid);
    return TestCovid;
}());
exports.TestCovid = TestCovid;
