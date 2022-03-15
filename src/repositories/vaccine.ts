import { getRepository } from "typeorm";
import { profileRepo } from ".";
import { Dose, VaccineRegistry } from "../models";
import { NotFoundError } from "../utils";

export interface IDose {
  doseDate: string;
  healthFacility: string;
  vaccineRegistryId?: string;
  nthDose: number;
  id?: string;
}

export interface IVaccine {
  profileId: string;
  vaccineTypeId: number;
  vaccineUrl: string;
  doses: IDose[];
  id?: string;
  isHasVaccinated: boolean;
}

const createVaccineRegistry = async (
  payload: IVaccine
): Promise<VaccineRegistry> => {
  const vaccineRepo = await getRepository(VaccineRegistry);
  const newVaccine = vaccineRepo.create({
    profileId: payload.profileId,
    vaccineTypeId: payload.vaccineTypeId,
    vaccineUrl: payload.vaccineUrl,
    isHasVaccinated: payload.isHasVaccinated,
  });
  const savedVaccine = await vaccineRepo.save(newVaccine);

  return savedVaccine;
};

const updateVaccineRegistry = async (
  payload: IVaccine
): Promise<VaccineRegistry | undefined> => {
  const vaccineRepo = await getRepository(VaccineRegistry);
  const selectedVaccine = await vaccineRepo.findOne({ id: payload?.id });
  if (!selectedVaccine)
    throw new NotFoundError("Can not found vaccine registry data for update");

  return await vaccineRepo.save({
    ...selectedVaccine,
    profileId: payload.profileId,
    vaccineTypeId: payload.vaccineTypeId,
    vaccineUrl: payload.vaccineUrl,
    isHasVaccinated: payload.isHasVaccinated,
  });
};

const createDose = async (payload: IDose): Promise<Dose> => {
  const doseRepo = await getRepository(Dose);
  const dosed = await doseRepo.create({
    vaccineRegistryId: payload.vaccineRegistryId,
    nthDose: payload.nthDose,
    doseDate: payload.doseDate,
    healthFacility: payload.healthFacility,
  });
  return await doseRepo.save(dosed);
};

const updateDose = async (payload: IDose): Promise<Dose | null> => {
  const doseRepo = await getRepository(Dose);
  let doses = await doseRepo.findOne({ id: payload?.id });
  if (!doses) return null;
  doses.doseDate = payload.doseDate;
  doses.healthFacility = payload.healthFacility;
  return await doseRepo.save(doses);
};

const getDoses = async (payload: {
  vaccineRegistryId: string;
}): Promise<Dose[]> => {
  const doseRepo = await getRepository(Dose);
  return await doseRepo.find({ vaccineRegistryId: payload.vaccineRegistryId });
};

const deleteDose = async (payload: { id: string }) => {
  const doseRepo = await getRepository(Dose);
  return await doseRepo
    .createQueryBuilder()
    .delete()
    .from("dose")
    .where("dose.id = :id", { id: payload.id })
    .execute();
};

export default {
  createVaccineRegistry,
  updateVaccineRegistry,
  createDose,
  updateDose,
  getDoses,
  deleteDose,
};
