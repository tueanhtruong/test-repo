import { ICheckIns } from "../../repositories/checkIns";
import { ITestCovid } from "../../repositories/testCovid";
import { ITrip } from "../../repositories/trip";
import { ITripProfile } from "../../repositories/tripProfile";

export interface TripPayload {
  id?: string;
  departureDate: string;
  isLeavingTrip: boolean;
  departureProvinceId: number;
  departureDistrictId: number;
  departureWardId: number;
  departureAddress: string;
  destinationProvinceId: number;
  destinationDistrictId: number;
  destinationWardId: number;
  destinationAddress: string;
  checkInsDate: string;
  checkOutDate: string;
  tripPurposeId: number;
  vehicleTypeId: number;
  vehicleNumber: string;
  primaryTravelerId: string;
  tripProfile: TripProfilePayload[];
  tripStatusId?: number;
}
export interface TripProfilePayload {
  id?: string;
  profileId: string;
  testCovid: ITestCovid;
  checkIns: ICheckIns;
}

export const cloneTripRecord = (data: ITrip | TripPayload): ITrip => ({
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
  tripStatusId: data?.tripStatusId || undefined,
});

export const cloneTripProfileRecord = (data: ITripProfile): ITripProfile => ({
  checkInsId: data.checkInsId,
  profileId: data.profileId,
  testCovidId: data.testCovidId,
  tripId: data.tripId,
  id: data?.id || undefined,
});
