"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneTripProfileRecord = exports.cloneTripRecord = void 0;
var cloneTripRecord = function (data) { return ({
    departureDate: data.departureDate,
    isLeavingTrip: data.isLeavingTrip,
    departureProvinceId: data.departureProvinceId,
    departureDistrictId: data.departureDistrictId,
    departureWardId: data.departureWardId,
    departureAddress: data.departureAddress,
    destinationProvinceId: data.destinationProvinceId,
    destinationDistrictId: data.destinationDistrictId,
    destinationWardId: data.destinationWardId,
    destinationAddress: data.destinationAddress,
    checkInsDate: data.checkInsDate,
    checkOutDate: data.checkOutDate,
    tripPurposeId: data.tripPurposeId,
    vehicleTypeId: data.vehicleTypeId,
    vehicleNumber: data.vehicleNumber,
    primaryTravelerId: data.primaryTravelerId,
    tripStatusId: (data === null || data === void 0 ? void 0 : data.tripStatusId) || undefined,
}); };
exports.cloneTripRecord = cloneTripRecord;
var cloneTripProfileRecord = function (data) { return ({
    checkInsId: data.checkInsId,
    profileId: data.profileId,
    testCovidId: data.testCovidId,
    tripId: data.tripId,
    id: (data === null || data === void 0 ? void 0 : data.id) || undefined,
}); };
exports.cloneTripProfileRecord = cloneTripProfileRecord;
