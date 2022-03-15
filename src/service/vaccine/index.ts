import { VaccineRegistry } from "../../models";
import { profileRepo, vaccineRepo } from "../../repositories";
import { IVaccine } from "../../repositories/vaccine";
import { InvalidOperationError, isEmpty } from "../../utils";

export default class VaccineService {
  public async createVaccineRegistry(
    payload: IVaccine
  ): Promise<VaccineRegistry | null> {
    const vaccine = await vaccineRepo.createVaccineRegistry(payload);
    if (!vaccine) {
      return null;
    }

    const saveDoses = await Promise.all(
      payload.doses.map(async (dose) => {
        return await vaccineRepo.createDose({
          doseDate: dose.doseDate,
          healthFacility: dose.healthFacility,
          vaccineRegistryId: vaccine.id,
          nthDose: dose.nthDose,
        });
      })
    );

    const updateVaccineToProfile = await profileRepo.updateVaccineRegistryId({
      id: payload.profileId,
      vaccineId: vaccine.id,
    });

    return { ...vaccine, dose: saveDoses };
  }

  public async updateVaccineRegistry(
    payload: IVaccine
  ): Promise<VaccineRegistry | null> {
    const vaccine = await vaccineRepo.updateVaccineRegistry(payload);
    if (!vaccine) {
      throw new InvalidOperationError("Error happen in update Vaccine info");
    }

    const currentDose = await vaccineRepo.getDoses({
      vaccineRegistryId: vaccine.id,
    });

    const filterDose = await Promise.all(
      currentDose?.map(async (dox) => {
        if (!payload.doses.some((x) => x?.id === dox.id))
          return await vaccineRepo.deleteDose({ id: dox.id });
        else return dox;
      })
    );

    const updatedDoes = await Promise.all(
      payload.doses.map(async (dose) => {
        // const uDose = await vaccineRepo.updateDose(dose);
        if (dose?.id) return await vaccineRepo.updateDose(dose);
        else
          return await vaccineRepo.createDose({
            doseDate: dose.doseDate,
            healthFacility: dose.healthFacility,
            vaccineRegistryId: vaccine.id,
            nthDose: dose.nthDose,
          });
      })
    );

    return { ...vaccine, dose: updatedDoes };
  }
}
