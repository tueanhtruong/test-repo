import { getRepository } from "typeorm";
import { Role } from "../models";

export interface IRole {
  id?: string;
  key: string;
  name: string;
}

const getRoles = async (): Promise<Array<Role>> => {
  const roleRepository = await getRepository(Role);
  const roles = await roleRepository.find();
  return roles;
};

const getRole = async (payload: { key: string }): Promise<Role> => {
  const roleRepository = await getRepository(Role);
  const role = await roleRepository.findOne({ key: payload.key });
  if (!role) {
    const newRole = await insertRole({
      key: payload.key,
      name: payload.key?.toLowerCase(),
    });
    return newRole;
  }
  return role;
};

const insertRole = async (payload: IRole): Promise<Role> => {
  const roleRepository = await getRepository(Role);
  const newRole = await roleRepository.create({
    name: payload.name,
    key: payload.key,
  });
  const updateRole = await roleRepository.save(newRole);
  return updateRole;
};

export default { getRole, getRoles, insertRole };
