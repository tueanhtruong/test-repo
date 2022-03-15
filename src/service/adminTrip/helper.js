"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTripStatusKey = void 0;
var TripStatusIndex;
(function (TripStatusIndex) {
    TripStatusIndex[TripStatusIndex["PROCESSING"] = 1] = "PROCESSING";
    TripStatusIndex[TripStatusIndex["READY"] = 2] = "READY";
    TripStatusIndex[TripStatusIndex["REJECTED"] = 3] = "REJECTED";
})(TripStatusIndex || (TripStatusIndex = {}));
var checkTripStatusKey = function (status) {
    var isApproveAll = status === null || status === void 0 ? void 0 : status.every(function (x) { return x === "APPROVED"; });
    if (isApproveAll)
        return TripStatusIndex.READY;
    var hasRejected = status === null || status === void 0 ? void 0 : status.find(function (x) { return x === "REJECTED"; });
    if (hasRejected)
        return TripStatusIndex.REJECTED;
    var hasPending = status === null || status === void 0 ? void 0 : status.find(function (x) { return x === "PENDING"; });
    if (hasPending)
        return TripStatusIndex.PROCESSING;
    return TripStatusIndex.PROCESSING;
};
exports.checkTripStatusKey = checkTripStatusKey;
