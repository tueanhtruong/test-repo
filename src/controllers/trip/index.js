"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneTripPayload = void 0;
var tsoa_1 = require("tsoa");
var service_1 = require("../../service");
var cloneTripPayload = function (data) { return (__assign({}, data)); };
exports.cloneTripPayload = cloneTripPayload;
var TripController = /** @class */ (function () {
    function TripController() {
    }
    Object.defineProperty(TripController.prototype, "tripService", {
        get: function () {
            return new service_1.TripService();
        },
        enumerable: false,
        configurable: true
    });
    TripController.prototype.createTrip = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var clonePayload, trip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clonePayload = (0, exports.cloneTripPayload)(body);
                        return [4 /*yield*/, this.tripService.createTrip(clonePayload)];
                    case 1:
                        trip = _a.sent();
                        return [2 /*return*/, trip];
                }
            });
        });
    };
    TripController.prototype.updateTrip = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var clonePayload, trip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clonePayload = (0, exports.cloneTripPayload)(body);
                        return [4 /*yield*/, this.tripService.updateTrip(clonePayload)];
                    case 1:
                        trip = _a.sent();
                        return [2 /*return*/, trip];
                }
            });
        });
    };
    TripController.prototype.getTrips = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var trips;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tripService.getTrips(payload)];
                    case 1:
                        trips = _a.sent();
                        return [2 /*return*/, trips];
                }
            });
        });
    };
    TripController.prototype.deleteTrip = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tripService.deleteTrip({ id: id })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    TripController.prototype.getTrip = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var trip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tripService.getTrip({ id: id })];
                    case 1:
                        trip = _a.sent();
                        if (!trip)
                            return [2 /*return*/, null];
                        return [2 /*return*/, trip];
                }
            });
        });
    };
    __decorate([
        (0, tsoa_1.Post)("/"),
        __param(0, (0, tsoa_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], TripController.prototype, "createTrip", null);
    __decorate([
        (0, tsoa_1.Put)("/"),
        __param(0, (0, tsoa_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], TripController.prototype, "updateTrip", null);
    __decorate([
        (0, tsoa_1.Get)("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], TripController.prototype, "getTrips", null);
    __decorate([
        (0, tsoa_1.Delete)("/:id"),
        __param(0, (0, tsoa_1.Path)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], TripController.prototype, "deleteTrip", null);
    __decorate([
        (0, tsoa_1.Get)("/:id"),
        __param(0, (0, tsoa_1.Path)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], TripController.prototype, "getTrip", null);
    TripController = __decorate([
        (0, tsoa_1.Route)("trip"),
        (0, tsoa_1.Tags)("Trip")
    ], TripController);
    return TripController;
}());
exports.default = TripController;
