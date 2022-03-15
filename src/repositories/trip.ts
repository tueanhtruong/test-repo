import { getRepository } from "typeorm";
import { DRAFT_TRIP_STATUS_ID } from "../config";
import { Trip } from "../models";
import { cloneTripRecord } from "../service/trip/helper";
import { getOrder, isEmpty, Order } from "../utils";

export interface ITrip {
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
  tripStatusId?: number;
}

const createTrip = async (payload: ITrip): Promise<Trip> => {
  const tripRepo = await getRepository(Trip);
  const tripPayload = cloneTripRecord(payload);
  const newTrip = await tripRepo.save(tripPayload);
  return newTrip;
};

const updateTrip = async (payload: ITrip): Promise<Trip | null> => {
  const tripRepo = await getRepository(Trip);
  const selectedTrip = await tripRepo.findOne({ id: payload.id });
  if (isEmpty(selectedTrip)) return null;
  const updateData = cloneTripRecord(payload);
  const updatedTrip = await tripRepo.save({ ...selectedTrip, ...updateData });
  if (isEmpty(updatedTrip)) return null;
  return updatedTrip;
};

const getTrips = async (payload: {
  primaryTravelerId: string;
}): Promise<Trip[] | null> => {
  const tripRepo = await getRepository(Trip);
  const trips = await tripRepo
    .createQueryBuilder("trip")
    .leftJoinAndSelect("trip.departureProvince", "departureProvince")
    .leftJoinAndSelect("trip.departureDistrict", "departureDistrict")
    .leftJoinAndSelect("trip.departureWard", "departureWard")
    .leftJoinAndSelect("trip.destinationProvince", "destinationProvince")
    .leftJoinAndSelect("trip.destinationDistrict", "destinationDistrict")
    .leftJoinAndSelect("trip.destinationWard", "destinationWard")
    .leftJoinAndSelect("trip.tripStatus", "tripStatus")
    .leftJoinAndSelect("trip.tripPurpose", "tripPurpose")
    .leftJoinAndSelect("trip.vehicleType", "vehicleType")
    .leftJoinAndSelect("trip.tripProfile", "tripProfile")
    .leftJoinAndSelect("tripProfile.profile", "profile")
    .leftJoinAndSelect("tripProfile.checkIns", "checkIns")
    .leftJoinAndSelect("tripProfile.testCovid", "testCovid")
    .leftJoinAndSelect("tripProfile.testCovidStatus", "testCovidStatus")
    .leftJoinAndSelect("tripProfile.vaccineStatus", "vaccineStatus")
    .leftJoinAndSelect("tripProfile.checkInsStatus", "checkInsStatus")
    .where("trip.primaryTravelerId = :primaryTravelerId", {
      primaryTravelerId: payload.primaryTravelerId,
    })
    .getMany();
  return trips;
};

const getTripById = async (payload: { id: string }): Promise<Trip | null> => {
  const tripRepo = await getRepository(Trip);
  const trip = await tripRepo
    .createQueryBuilder("trip")
    .leftJoinAndSelect("trip.departureProvince", "departureProvince")
    .leftJoinAndSelect("trip.departureDistrict", "departureDistrict")
    .leftJoinAndSelect("trip.departureWard", "departureWard")
    .leftJoinAndSelect("trip.destinationProvince", "destinationProvince")
    .leftJoinAndSelect("trip.destinationDistrict", "destinationDistrict")
    .leftJoinAndSelect("trip.destinationWard", "destinationWard")
    .leftJoinAndSelect("trip.tripStatus", "tripStatus")
    .leftJoinAndSelect("trip.tripPurpose", "tripPurpose")
    .leftJoinAndSelect("trip.vehicleType", "vehicleType")
    .leftJoinAndSelect("trip.tripProfile", "tripProfile")
    .leftJoinAndSelect("tripProfile.profile", "profile")
    .leftJoinAndSelect("tripProfile.checkIns", "checkIns")
    .leftJoinAndSelect("tripProfile.testCovid", "testCovid")
    .leftJoinAndSelect("tripProfile.testCovidStatus", "testCovidStatus")
    .leftJoinAndSelect("tripProfile.vaccineStatus", "vaccineStatus")
    .leftJoinAndSelect("tripProfile.checkInsStatus", "checkInsStatus")
    .leftJoinAndSelect("testCovid.testType", "testType")
    .leftJoinAndSelect("profile.gender", "gender")
    .leftJoinAndSelect("profile.province", "province")
    .leftJoinAndSelect("profile.district", "district")
    .leftJoinAndSelect("profile.ward", "ward")
    .leftJoinAndSelect("profile.vaccineRegistry", "vaccineRegistry")
    .leftJoinAndSelect("vaccineRegistry.dose", "dose")
    .leftJoinAndSelect("vaccineRegistry.vaccineType", "vaccineType")
    .where("trip.id = :id", {
      id: payload.id,
    })
    .getOne();
  return trip || null;
};

const deleteTrip = async (payload: { id: string }): Promise<null> => {
  const tripRepo = await getRepository(Trip);
  await tripRepo
    .createQueryBuilder()
    .delete()
    .from("trip")
    .where("trip.id = :id", {
      id: payload.id,
    })
    .execute();
  return null;
};

/////////////////////////////////// admin trips //////////////////////////////////////

export enum GetTripsSort {
  DEPARTURE_DATE = "departureDate",
  STATUS = "status",
  CREATED_DATE = "createdDate",
  VEHICLE_TYPE = "vehicleType",
  VEHICLE_NUMBER = "vehicleNumber",
}

const getIncomingTrips = async (payload: {
  skip: number;
  take: number;
  order?: Order;
  sort?: string;
  status?: string[];
  departureDate?: string;
  search?: string;
}): Promise<[Trip[], number]> => {
  const tripRepo = await getRepository(Trip);
  const { skip, take, sort, order, status, departureDate, search } = payload;
  let query = tripRepo
    .createQueryBuilder("trip")
    .leftJoinAndSelect("trip.tripStatus", "tripStatus")
    .leftJoinAndSelect("trip.tripPurpose", "tripPurpose")
    .leftJoinAndSelect("trip.vehicleType", "vehicleType")
    .leftJoinAndSelect("trip.tripProfile", "tripProfile")
    .leftJoinAndSelect("tripProfile.profile", "profile");

  if (sort) {
    const sortOrder = getOrder(order);
    switch (sort) {
      case GetTripsSort.DEPARTURE_DATE:
        query = query.addOrderBy("trip.departureDate", sortOrder);
        break;
      case GetTripsSort.STATUS:
        query = query.addOrderBy("tripStatus.name", sortOrder);
        break;
      case GetTripsSort.CREATED_DATE:
        query = query.addOrderBy("trip.createdDate", sortOrder);
        break;
      case GetTripsSort.VEHICLE_TYPE:
        query = query.addOrderBy("vehicleType.name", sortOrder);
        break;
      case GetTripsSort.VEHICLE_NUMBER:
        query = query.addOrderBy("trip.vehicleNumber", sortOrder);
        break;
    }
  }

  if (status) {
    status.forEach((x, idx) => {
      query = query.orWhere(`tripStatus.key = :key${idx}`, {
        [`key${idx}`]: x,
      });
    });
  }
  if (departureDate) {
    query = query.andWhere("trip.departureDate = :date", {
      date: departureDate,
    });
  }

  if (search) {
    const term = `%${search.trim().toLowerCase()}%`;
    query = query.andWhere(
      "LOWER(CONCAT(profile.firstName, ' ', profile.lastName)) LIKE :search",
      { search: term }
    );
  }

  query = query.andWhere("trip.tripStatusId != :id", {
    id: DRAFT_TRIP_STATUS_ID,
  });

  return await query.skip(skip).take(take).getManyAndCount();
};

const updateTripStatus = async (payload: {
  id: string;
  statusId: number;
}): Promise<Trip | null> => {
  const tripRepo = await getRepository(Trip);
  const selectedTrip = await tripRepo.findOne({ id: payload.id });
  if (isEmpty(selectedTrip)) return null;
  return tripRepo.save({ ...selectedTrip, tripStatusId: payload.statusId });
};

const checkInsTripById = async (payload: {
  id: string;
  statusId: number;
  checkInsDate: string;
}): Promise<Trip | null> => {
  const tripRepo = await getRepository(Trip);
  const selectedTrip = await tripRepo.findOne({ id: payload.id });
  if (isEmpty(selectedTrip)) return null;
  return tripRepo.save({
    ...selectedTrip,
    tripStatusId: payload.statusId,
    checkInsDate: payload.checkInsDate,
  });
};

export default {
  createTrip,
  updateTrip,
  getTrips,
  deleteTrip,
  getTripById,
  getIncomingTrips,
  updateTripStatus,
  checkInsTripById,
};
