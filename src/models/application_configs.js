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
exports.ApplicationConfigs = void 0;
var typeorm_1 = require("typeorm");
var ApplicationConfigs = /** @class */ (function () {
    function ApplicationConfigs() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
        __metadata("design:type", Number)
    ], ApplicationConfigs.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "name",
            length: 50,
            unique: true,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], ApplicationConfigs.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)("character varying", {
            name: "key",
            length: 50,
            unique: true,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], ApplicationConfigs.prototype, "key", void 0);
    __decorate([
        (0, typeorm_1.Column)("boolean", { name: "is_enable", unique: false, nullable: false }),
        __metadata("design:type", Boolean)
    ], ApplicationConfigs.prototype, "isEnable", void 0);
    ApplicationConfigs = __decorate([
        (0, typeorm_1.Entity)("application_configs")
    ], ApplicationConfigs);
    return ApplicationConfigs;
}());
exports.ApplicationConfigs = ApplicationConfigs;
