// import { Account } from "../../models";
import * as express from "express";
import { Get, Route, Tags, Request, Put, Post, Response } from "tsoa";
import { admin } from "../../config/firebase-config";
import { Account } from "../../models";
import { AccountsService } from "../../service";
import { Order } from "../../utils";

export type User = {
  id: string;
  email: string;
  role: string;
  createdDate?: string;
};

@Route("user")
@Tags("Account")
export default class AdminUsersController {
  @Get("/")
  public async getUsers(
    @Request() request: express.Request
  ): Promise<{ data: User[]; total: number }> {
    const accountService = new AccountsService();
    const skip = parseInt(request?.query?.skip?.toString() || "");
    const take = parseInt(request?.query?.take?.toString() || "");
    const sort = request?.query?.sort?.toString() || undefined;
    const order = request?.query?.order?.toString() as Order;
    const role = request?.query?.role?.toString() || undefined;
    const { data, total } = await accountService.getUsers({
      skip: skip,
      take,
      sort,
      order,
      role,
    });
    return {
      data: data.map((n) => ({
        ...n,
        // id: n.id,
        // email: n.email,
        role: n.role.name,
        createdDate: n.createdDate?.toISOString(),
      })),
      total: total,
    };
  }
  @Get("/:id")
  public async getUserById(
    @Request() request: express.Request
  ): Promise<Account | null> {
    const accountService = new AccountsService();
    const id = request?.params?.id.toString();
    const user = await accountService.getUserById({ id });
    return user;
  }

  @Put("/")
  public async updateUserRole(
    @Request() request: express.Request
  ): Promise<Account | null> {
    const accountService = new AccountsService();
    const id = request?.body?.id.toString();
    const roleId = request?.body?.roleId;
    const isDisabled = request?.body?.isDisabled;
    const email = request?.body?.email;
    const userRecord = await admin.auth().getUserByEmail(email);
    const user = await accountService.updateUserRole({
      id,
      roleId,
      uid: userRecord?.uid,
      isDisabled,
    });
    return user;
  }
  @Post("/")
  public async CreateNewUser(
    @Request() request: express.Request
  ): Promise<Account | null> {
    const accountService = new AccountsService();
    const email = request?.body?.email.toString();
    const password = request?.body?.password.toString();
    const roleId = request?.body?.roleId;
    const user = await accountService.createAdminUser({
      email,
      roleId,
      password,
    });
    return user;
  }
}
