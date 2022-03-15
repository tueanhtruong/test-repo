import { Account, Permission } from "../../models";
import { Get, Route, Tags } from "tsoa";
import { AccountsService } from "../../service";

@Route("me")
@Tags("Account")
export default class AccountController {
  @Get("/")
  public async getMe(payload: { email: string }): Promise<Account> {
    const accountService = new AccountsService();
    return await accountService.getAccount(payload);
  }
  @Get("/permission")
  public async getMyPermissions(payload: {
    email: string;
  }): Promise<Permission[]> {
    const accountService = new AccountsService();
    return await accountService.getPermission(payload);
  }
}
