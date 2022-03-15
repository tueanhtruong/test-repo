import { getRepository } from "typeorm";
import {
  District,
  Gender,
  Province,
  Role,
  TestType,
  TripPurposes,
  VaccineType,
  VehicleType,
  Ward,
} from "../models";

export interface Content {
  province: Province[];
  district: District[];
  ward: Ward[];
  vaccineProducts: VaccineType[];
  tripPurposes: TripPurposes[];
  vehicleTypes: VehicleType[];
  testTypes: TestType[];
  roles: Role[];
  gender: Gender[];
}

const getContent = async (): Promise<Content> => {
  const province = await getRepository(Province).find();
  const district = await getRepository(District).find();
  const ward = await getRepository(Ward).find();
  const vaccineProducts = await getRepository(VaccineType).find();
  const tripPurposes = await getRepository(TripPurposes).find();
  const vehicleTypes = await getRepository(VehicleType).find();
  const testTypes = await getRepository(TestType).find();
  const roles = await getRepository(Role).find();
  const gender = await getRepository(Gender).find();
  return {
    province,
    district,
    ward,
    vaccineProducts,
    tripPurposes,
    vehicleTypes,
    testTypes,
    roles,
    gender,
  };
};

export default { getContent };
