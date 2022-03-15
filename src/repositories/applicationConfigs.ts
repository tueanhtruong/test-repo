import { getRepository } from "typeorm";
import { ApplicationConfigs } from "../models";
import { InvalidParameterError } from "../utils";

export interface Config {
  id: number;
  key: string;
  name: string;
  isEnable: boolean;
}

const getAppConfigs = async (): Promise<Config[]> => {
  const configs = await getRepository(ApplicationConfigs).find();
  return configs;
};

const setAppConfig = async (params: {
  key: string;
  isEnable: boolean;
}): Promise<Config> => {
  const configRepo = await getRepository(ApplicationConfigs);

  const selectedConfig = await configRepo.findOne({ key: params.key });

  if (!selectedConfig)
    throw new InvalidParameterError(
      `Can not find the application config has key: ${params.key}`
    );

  return await configRepo.save({
    ...selectedConfig,
    isEnable: params.isEnable,
  });
};

export default { getAppConfigs, setAppConfig };
