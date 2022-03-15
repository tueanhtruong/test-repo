import { getRepository } from "typeorm";
import { TripProfile } from "../models";
import { isEmpty } from "../utils";

export interface ITripProfile {
  id?: string;
  profileId: string;
  checkInsId: string;
  testCovidId: string;
  tripId: string;
}

const createTripProfile = async (
  payload: ITripProfile
): Promise<TripProfile | null> => {
  const tripProfileRepo = await getRepository(TripProfile);
  const newTripProfile = await tripProfileRepo.save(payload);
  if (isEmpty(newTripProfile)) return null;
  return newTripProfile;
};

const updateTestingStatus = async (payload: {
  testStatusId: number;
  id: string;
  rejectReason?: string;
}): Promise<TripProfile | null> => {
  const tripProfileRepo = await getRepository(TripProfile);
  const selectedProfile = await tripProfileRepo.findOne({ id: payload.id });
  const updatedProfile = await tripProfileRepo.save({
    ...selectedProfile,
    testCovidStatusId: payload.testStatusId,
    testRejectReason: payload?.rejectReason,
  });
  if (isEmpty(updatedProfile)) return null;
  return updatedProfile;
};

const updateVaccineStatus = async (payload: {
  vaccineStatusId: number;
  id: string;
  rejectReason?: string;
}): Promise<TripProfile | null> => {
  const tripProfileRepo = await getRepository(TripProfile);
  const selectedProfile = await tripProfileRepo.findOne({ id: payload.id });
  const updatedProfile = await tripProfileRepo.save({
    ...selectedProfile,
    vaccineStatusId: payload.vaccineStatusId,
    vaccineRejectReason: payload?.rejectReason,
  });
  if (isEmpty(updatedProfile)) return null;
  return updatedProfile;
};

const updateCheckInsStatus = async (payload: {
  checkInsStatusId: number;
  id: string;
  rejectReason?: string;
}): Promise<TripProfile | null> => {
  const tripProfileRepo = await getRepository(TripProfile);
  const selectedProfile = await tripProfileRepo.findOne({ id: payload.id });
  const updatedProfile = await tripProfileRepo.save({
    ...selectedProfile,
    checkInsStatusId: payload.checkInsStatusId,
    checkInsRejectReason: payload?.rejectReason,
  });
  if (isEmpty(updatedProfile)) return null;
  return updatedProfile;
};

const deleteTripProfile = async (payload: { id: string }): Promise<null> => {
  const tripRepo = await getRepository(TripProfile);
  await tripRepo
    .createQueryBuilder()
    .delete()
    .from("tripProfile")
    .where("tripProfile.id = :id", {
      id: payload.id,
    })
    .execute();
  return null;
};

export default {
  createTripProfile,
  updateCheckInsStatus,
  updateTestingStatus,
  updateVaccineStatus,
  deleteTripProfile,
};
