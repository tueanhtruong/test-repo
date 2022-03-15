import { getRepository } from "typeorm";
import { TestCovid, TestType } from "../models";
import { isEmpty } from "../utils";

export interface ITestCovid {
  id?: string;
  date?: string;
  testTypeId: number;
  covidTestUrl: string;
  hasTestCovid: boolean;
  testDate?: string;
}
export const cloneTestCovidRecord = (data: ITestCovid): ITestCovid => ({
  testDate: data.date,
  testTypeId: data.testTypeId,
  covidTestUrl: data.covidTestUrl,
  hasTestCovid: data.hasTestCovid,
  id: data?.id || undefined,
  date: undefined,
});

const createCovidTestRecord = async (
  data: ITestCovid
): Promise<TestCovid | null> => {
  const testCovidRepo = await getRepository(TestCovid);
  const payload = cloneTestCovidRecord(data);
  const testCovidRecords = await testCovidRepo.save(payload);
  if (isEmpty(testCovidRecords)) return null;
  return testCovidRecords;
};

const updateTestCovidRecord = async (
  data: ITestCovid
): Promise<TestCovid | null> => {
  const testCovidRepo = await getRepository(TestCovid);
  const selectedRecord = await testCovidRepo.findOne({ id: data.id });
  if (isEmpty(selectedRecord)) return null;
  const payload = cloneTestCovidRecord(data);

  const updatedRecord = await testCovidRepo.save({
    ...selectedRecord,
    ...payload,
  });
  return updatedRecord;
};

const deleteTestCovid = async (payload: { id: string }): Promise<null> => {
  const tripRepo = await getRepository(TestCovid);
  await tripRepo.delete({ id: payload.id });
  // await tripRepo
  //   .createQueryBuilder()
  //   .delete()
  //   .from("testCovid")
  //   .where("testCovid.id = :id", {
  //     id: payload.id,
  //   })
  //   .execute();
  return null;
};

export default {
  createCovidTestRecord,
  updateTestCovidRecord,
  deleteTestCovid,
};
