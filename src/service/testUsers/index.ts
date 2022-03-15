import { TestUsers } from "../../models";
import { testUsersRepo } from "../../repositories";

export default class TestUsersService {
  public async getTestUsers(): Promise<Array<TestUsers>> {
    return testUsersRepo.getTestUsers();
  }
}
