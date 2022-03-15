import { ApplicationConfigService } from "../service";

export type ApplicationConfigType = {
  AUTOMATIC_CHECK_IN: boolean | null;
  AUTOMATIC_APPROVAL_VACCINATION: boolean | null;
  AUTOMATIC_APPROVAL_TEST_RESULT: boolean | null;
  AUTOMATIC_APPROVAL_HEALTH_CONDITION: boolean | null;
};
let _config: ApplicationConfigType = {
  AUTOMATIC_APPROVAL_HEALTH_CONDITION: null,
  AUTOMATIC_APPROVAL_TEST_RESULT: null,
  AUTOMATIC_APPROVAL_VACCINATION: null,
  AUTOMATIC_CHECK_IN: null,
};

const getConfig = () => _config;

const initialConfig = async () => {
  const service = new ApplicationConfigService();
  const configs = await service.getAppConfigs();
  return configs;
};

const setCheckInConfig = (value: boolean) =>
  (_config.AUTOMATIC_CHECK_IN = value);
const setTestResultConfig = (value: boolean) =>
  (_config.AUTOMATIC_APPROVAL_TEST_RESULT = value);
const setVaccinationConfig = (value: boolean) =>
  (_config.AUTOMATIC_APPROVAL_VACCINATION = value);
const setHealthConditionConfig = (value: boolean) =>
  (_config.AUTOMATIC_APPROVAL_HEALTH_CONDITION = value);

export default {
  getConfig,
  setCheckInConfig,
  setTestResultConfig,
  setVaccinationConfig,
  setHealthConditionConfig,
  initialConfig,
};
