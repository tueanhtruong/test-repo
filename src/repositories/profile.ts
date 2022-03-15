import { getRepository } from "typeorm";
import { Profile } from "../models";

export interface IProfile {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  medicalNumber: string;
  medicalUrl: string;
  identityNumber: string;
  identityUrl: string;
  address: string;
  job: string;
  provinceId: number;
  districtId: number;
  wardId: number;
  isPrimary: boolean;
  primaryProfileId: string | null;
  id?: string;
  genderId: number;
}

const getProfile = async (payload: { id: string }): Promise<Profile | null> => {
  const profileRepo = await getRepository(Profile);
  const account = await profileRepo
    .createQueryBuilder("profile")
    .leftJoinAndSelect("profile.gender", "gender")
    .leftJoinAndSelect("profile.province", "province")
    .leftJoinAndSelect("profile.district", "district")
    .leftJoinAndSelect("profile.ward", "ward")
    .leftJoinAndSelect("profile.vaccineRegistry", "vaccineRegistry")
    .leftJoinAndSelect("vaccineRegistry.dose", "dose")
    .leftJoinAndSelect("vaccineRegistry.vaccineType", "vaccineType")
    .where("profile.id = :id", { id: payload.id })
    .getOne();
  if (!account) return null;
  return account;
};

const getMyProfiles = async (payload: {
  primaryProfileId: string;
}): Promise<Profile[]> => {
  const profileRepo = await getRepository(Profile);
  const profile = await profileRepo
    .createQueryBuilder("profile")
    .leftJoinAndSelect("profile.gender", "gender")
    .leftJoinAndSelect("profile.province", "province")
    .leftJoinAndSelect("profile.district", "district")
    .leftJoinAndSelect("profile.ward", "ward")
    .leftJoinAndSelect("profile.vaccineRegistry", "vaccineRegistry")
    .leftJoinAndSelect("vaccineRegistry.dose", "dose")
    .leftJoinAndSelect("vaccineRegistry.vaccineType", "vaccineType")
    .where("profile.primaryProfileId = :primaryProfileId", {
      primaryProfileId: payload.primaryProfileId,
    })
    .orWhere("profile.id = :primaryProfileId", {
      primaryProfileId: payload.primaryProfileId,
    })
    .getMany();
  return profile;
};

const createProfile = async (payload: IProfile): Promise<Profile | null> => {
  const profileRepo = await getRepository(Profile);
  const newProfile = profileRepo.create(payload);
  const savedProfile = await profileRepo.save(newProfile);
  return await getProfile({ id: savedProfile.id });
};

const updateProfile = async (payload: {
  id: string;
  body: IProfile;
}): Promise<Profile | null> => {
  const profileRepo = await getRepository(Profile);
  const selectedProfile = await profileRepo.findOne({ id: payload?.id });
  if (!selectedProfile) return null;
  const updatedProfile = await profileRepo.save({
    ...selectedProfile,
    ...payload.body,
  });
  return updatedProfile;
};

const deleteProfile = async (payload: { id: string }): Promise<null> => {
  const profileRepo = await getRepository(Profile);
  await profileRepo
    .createQueryBuilder()
    .delete()
    .from("profile")
    .where("profile.id = :id", {
      id: payload.id,
    })
    .execute();
  return null;
};

const updateVaccineRegistryId = async (payload: {
  id: string;
  vaccineId: string;
}): Promise<Profile | null> => {
  const profileRepo = await getRepository(Profile);
  const selectedProfile = await profileRepo.findOne({ id: payload.id });
  return await profileRepo.save({
    ...selectedProfile,
    vaccineRegistryId: payload.vaccineId,
  });
};

export default {
  getProfile,
  getMyProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
  updateVaccineRegistryId,
};
