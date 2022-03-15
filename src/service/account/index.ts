import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "@firebase/auth";
import { auth } from "firebase-admin";
import { admin } from "../../config/firebase-config";
import { Account, Permission } from "../../models";
import { accountRepo, roleRepo } from "../../repositories";
import {
  InvalidOperationError,
  isEmpty,
  NotFoundError,
  Order,
} from "../../utils";

export default class AccountsService {
  public async getAccount(payload: { email: string }): Promise<Account> {
    const account = await accountRepo.getAccountByEmail(payload);
    if (!account) {
      const role = await roleRepo.getRole({ key: "TRAVELER" });
      const newAccount = await accountRepo.createAccount({
        email: payload.email,
        role: role,
        roleId: role.id,
      });
      return newAccount;
    }

    return account;
  }
  public async getPermission(payload: {
    email: string;
  }): Promise<Permission[]> {
    const account = await accountRepo.getAccountByEmail(payload);
    if (!account) {
      throw new NotFoundError("Cant not found your account");
    }

    return account.role?.permission;
  }
  /////////////////////// Admin ///////////////////////
  public async getUsers(payload: {
    skip: number;
    take: number;
    order?: Order;
    sort?: string;
    role?: string;
  }): Promise<{ data: Account[]; total: number }> {
    const [accounts, total] = await accountRepo.getAccounts(payload);

    return {
      data: accounts,
      total: total,
    };
  }

  public async getUserById(payload: { id: string }): Promise<Account> {
    const account = await accountRepo.getAccountById(payload);
    if (!account) {
      throw new NotFoundError("Can not found your user account");
    }
    return account;
  }

  public async updateUserRole(payload: {
    id: string;
    roleId: number;
    uid: string;
    isDisabled?: boolean;
  }): Promise<Account> {
    if (typeof payload?.isDisabled === "boolean") {
      try {
        await admin
          .auth()
          .updateUser(payload.uid, { disabled: payload?.isDisabled });
      } catch (err) {
        throw err;
      }
    }
    const account = await accountRepo.updateAccountRole(payload);
    if (!account) {
      throw new NotFoundError("Can not found your user account");
    }
    return account;
  }
  public async createAdminUser(payload: {
    email: string;
    roleId: number;
    password: string;
  }): Promise<Account> {
    const firebaseUserProps = await createUserWithEmailAndPassword(
      getAuth(),
      payload.email,
      payload.password
    );
    const auth = getAuth();
    if (auth?.currentUser) await sendEmailVerification(auth.currentUser);
    else throw new InvalidOperationError("Can not create user account");
    const account = await accountRepo.createAccount({
      email: payload.email,
      roleId: payload.roleId,
    });
    if (!account) {
      throw new InvalidOperationError("Can not create user account");
    }
    return account;
  }
}
