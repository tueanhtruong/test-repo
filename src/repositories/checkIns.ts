import { getRepository } from "typeorm";
import { CheckIns } from "../models";
import { isEmpty } from "../utils";

export interface ICheckIns {
  id?: string;
  isCoughing: boolean;
  isFever: boolean;
  isLossOfTaste: boolean;
  isRunnyNose: boolean;
  isShortnessBreath: boolean;
  isTiredness: boolean;
  isTravelToOtherLocation: boolean;
  locations: string;
}
export const cloneCheckInsRecord = (data: ICheckIns): ICheckIns => ({
  isCoughing: data.isCoughing,
  isFever: data.isFever,
  isLossOfTaste: data.isLossOfTaste,
  isRunnyNose: data.isRunnyNose,
  isShortnessBreath: data.isShortnessBreath,
  isTiredness: data.isTiredness,
  isTravelToOtherLocation: data.isTravelToOtherLocation,
  locations: data.locations,
});

const createCheckInsRecord = async (
  data: ICheckIns
): Promise<CheckIns | null> => {
  const checkInsRepo = await getRepository(CheckIns);
  const payload = cloneCheckInsRecord(data);
  const checkInsRecords = await checkInsRepo.save(payload);
  if (isEmpty(checkInsRecords)) return null;
  return checkInsRecords;
};

const updateCheckInsRecord = async (
  data: ICheckIns
): Promise<CheckIns | null> => {
  const checkInsRepo = await getRepository(CheckIns);
  const selectedRecords = await checkInsRepo.findOne({ id: data.id });
  if (isEmpty(selectedRecords)) return null;
  const payload = cloneCheckInsRecord(data);
  const checkInsRecord = await checkInsRepo.save({
    ...selectedRecords,
    ...payload,
  });
  return checkInsRecord;
};

const deleteCheckIns = async (payload: { id: string }): Promise<null> => {
  const tripRepo = await getRepository(CheckIns);
  await tripRepo.delete({ id: payload.id });
  // .createQueryBuilder()
  // .delete()
  // .from("checkIns")
  // .where("checkIns.id = :id", {
  //   id: payload.id,
  // })
  // .execute();
  return null;
};

export default {
  createCheckInsRecord,
  updateCheckInsRecord,
  deleteCheckIns,
};
