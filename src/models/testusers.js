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
exports.TestUsers = void 0;
var typeorm_1 = require("typeorm");
var TestUsers = /** @class */ (function () {
    function TestUsers() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], TestUsers.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 50, type: "varchar" }),
        __metadata("design:type", String)
    ], TestUsers.prototype, "firstName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 50, type: "varchar" }),
        __metadata("design:type", String)
    ], TestUsers.prototype, "lastName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], TestUsers.prototype, "age", void 0);
    TestUsers = __decorate([
        (0, typeorm_1.Entity)("testusers")
    ], TestUsers);
    return TestUsers;
}());
exports.TestUsers = TestUsers;
