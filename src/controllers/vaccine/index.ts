import { VaccineRegistry } from "../../models";
import { Body, Post, Route, Tags, Put } from "tsoa";
import { VaccineService } from "../../service";
import { IVaccine } from "../../repositories/vaccine";

const cloneIVaccinePayload = (body: IVaccine): IVaccine => {
  return {
    id: body?.id || undefined,
    vaccineTypeId: body.vaccineTypeId,
    profileId: body.profileId,
    vaccineUrl: body.vaccineUrl,
    isHasVaccinated: body.isHasVaccinated,
    doses: body.doses.map((x) => ({
      nthDose: x.nthDose,
      doseDate: x.doseDate,
      healthFacility: x.healthFacility,
      vaccineRegistryId: x.vaccineRegistryId || undefined,
      id: x.id || undefined,
    })),
  };
};

@Route("vaccine_registry")
@Tags("VaccineRegistry")
export default class VaccineController {
  @Post("/")
  public async createVaccineRegistry(
    @Body() body: IVaccine
  ): Promise<VaccineRegistry | null> {
    const vaccineService = new VaccineService();
    const clonePayload = cloneIVaccinePayload(body);
    const vaccine = vaccineService.createVaccineRegistry(clonePayload);
    return vaccine;
  }

  @Put("/")
  public async updateVaccineRegistry(
    @Body() body: IVaccine
  ): Promise<VaccineRegistry | null> {
    const vaccineService = new VaccineService();
    const clonePayload = cloneIVaccinePayload(body);
    const vaccine = vaccineService.updateVaccineRegistry(clonePayload);
    return vaccine;
  }
}
