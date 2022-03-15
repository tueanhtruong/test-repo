import { applicationConfigRepo } from "../../repositories";
import { Config } from "../../repositories/applicationConfigs";
import { ConfigService } from "../../utils";
import { ApplicationConfigType } from "../../utils/configService";

export default class ApplicationConfigService {
  public async getAppConfigs(): Promise<Config[]> {
    const configs = await applicationConfigRepo.getAppConfigs();
    configs.forEach((x) =>
      this.setConfigService(x.key as keyof ApplicationConfigType, x.isEnable)
    );
    return configs.sort((a, b) => a.id - b.id);
  }

  private setConfigService(key: keyof ApplicationConfigType, value: boolean) {
    switch (key) {
      case "AUTOMATIC_CHECK_IN":
        ConfigService.setCheckInConfig(value);
        break;
      case "AUTOMATIC_APPROVAL_VACCINATION":
        ConfigService.setVaccinationConfig(value);
        break;
      case "AUTOMATIC_APPROVAL_TEST_RESULT":
        ConfigService.setTestResultConfig(value);
        break;
      case "AUTOMATIC_APPROVAL_HEALTH_CONDITION":
        ConfigService.setHealthConditionConfig(value);
        break;
    }
  }

  public async setAppConfig(body: {
    key: keyof ApplicationConfigType;
    isEnable: boolean;
  }): Promise<Config> {
    const config = await applicationConfigRepo.setAppConfig(body);
    this.setConfigService(body.key, body.isEnable);
    return config;
  }
}
