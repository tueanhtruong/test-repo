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
exports.TestType = void 0;
var typeorm_1 = require("typeorm");
var test_covid_1 = require("./test_covid");
var TestType = /** @class */ (function () {
    function TestType() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], TestType.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "key",
            length: 50,
            unique: true,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], TestType.prototype, "key", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "name",
            length: 50,
            unique: true,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], TestType.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return test_covid_1.TestCovid; }, function (testCovid) { return testCovid.testType; }),
        __metadata("design:type", test_covid_1.TestCovid)
    ], TestType.prototype, "testCovid", void 0);
    TestType = __decorate([
        (0, typeorm_1.Entity)("test_type")
    ], TestType);
    return TestType;
}());
exports.TestType = TestType;
