import { getRepository } from "typeorm";
import { Account, Role } from "../models";
import { getOrder, Order } from "../utils";

export interface IAccount {
  id?: string;
  email: string;
  role?: Role;
  roleId: number;
}

export enum GetUsersSort {
  EMAIL = "email",
  ROLE = "role",
  CREATED_DATE = "createdDate",
}

const getAccountByEmail = async (payload: {
  email: string;
}): Promise<Account | null> => {
  const accountRepository = await getRepository(Account);
  const account = await accountRepository
    .createQueryBuilder("account")
    .leftJoinAndSelect("account.role", "role")
    .leftJoinAndSelect("role.permission", "permission")
    .where("account.email = :email", { email: payload.email })
    .getOne();
  if (!account) return null;
  return account;
};

const getAccountById = async (payload: {
  id: string;
}): Promise<Account | null> => {
  const accountRepository = await getRepository(Account);
  const account = await accountRepository
    .createQueryBuilder("account")
    .leftJoinAndSelect("account.role", "role")
    .leftJoinAndSelect("account.profile", "profile")
    .leftJoinAndSelect("profile.gender", "gender")
    .where("account.id = :id", { id: payload.id })
    .getOne();
  if (!account) return null;
  return account;
};

const createAccount = async (payload: IAccount): Promise<Account> => {
  const accountRepository = await getRepository(Account);
  const newTraveler = await accountRepository.create({
    email: payload.email,
    roleId: payload.roleId,
  });
  return await accountRepository.save(newTraveler);
};

const updateAccountPrimaryProfile = async (payload: {
  email: string;
  primaryProfileId: string;
}): Promise<Account | null> => {
  const accountRepository = await getRepository(Account);
  const account = await accountRepository.findOne({ email: payload.email });
  if (!account) return null;
  return await accountRepository.save({
    ...account,
    primaryProfileId: payload.primaryProfileId,
  });
};
const updateAccountRole = async (payload: {
  id: string;
  roleId: number;
  isDisabled?: boolean;
}): Promise<Account | null> => {
  const accountRepository = await getRepository(Account);
  const account = await accountRepository.findOne({ id: payload.id });
  if (!account) return null;

  return await accountRepository.save({
    ...account,
    roleId: payload.roleId,
    isDisabled: payload?.isDisabled || false,
  });
};

const getAccounts = async (payload: {
  skip: number;
  take: number;
  order?: Order;
  sort?: string;
  role?: string;
}): Promise<[Account[], number]> => {
  const { skip, take, sort, order, role } = payload;
  const accountRepository = await getRepository(Account);
  let query = accountRepository
    .createQueryBuilder("account")
    .leftJoinAndSelect("account.role", "role")
    .leftJoinAndSelect("role.permission", "permission");
  if (sort) {
    const sortOrder = getOrder(order);
    switch (sort) {
      case GetUsersSort.EMAIL:
        query = query.addOrderBy("account.email", sortOrder);
        break;
      case GetUsersSort.ROLE:
        query = query.addOrderBy("role.name", sortOrder);
        break;
      case GetUsersSort.CREATED_DATE:
        query = query.addOrderBy("account.createdDate", sortOrder);
        break;
    }
  }

  if (role) {
    query = query.andWhere("role.name = :name", { name: role });
  }

  return await query.skip(skip).take(take).getManyAndCount();
};

export default {
  getAccountByEmail,
  createAccount,
  updateAccountPrimaryProfile,
  getAccounts,
  getAccountById,
  updateAccountRole,
};
