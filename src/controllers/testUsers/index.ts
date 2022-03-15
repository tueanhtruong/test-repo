import { TestUsers } from "../../models";
import { Get, Route, Tags } from "tsoa";
import { TestUsersService } from "../../service";

@Route("test-users")
@Tags("TestUsers")
export default class TestUsersController {
  @Get("/")
  public async getTestUsers(): Promise<Array<TestUsers>> {
    const testUserService = new TestUsersService();
    return testUserService.getTestUsers();
  }
}
