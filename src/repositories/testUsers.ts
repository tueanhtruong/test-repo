import { getRepository } from "typeorm";
import { TestUsers } from "../models";

export interface ITestUser {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

const getTestUsers = async (): Promise<Array<TestUsers>> => {
  const testUserRepository = await getRepository(TestUsers);
  const testUsers = await testUserRepository.find();
  return testUsers;
};

export default {
  getTestUsers,
};
