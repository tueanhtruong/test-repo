import { Get, Route, Tags, Put, Request } from "tsoa";
import { Config } from "../../repositories/applicationConfigs";
import { ApplicationConfigService } from "../../service";
import * as express from "express";
import { ApplicationConfigType } from "../../utils/configService";

@Route("application-configs")
@Tags("ApplicationConfigs")
export default class ApplicationConfigController {
  @Get("/")
  public async getAppConfigs(): Promise<Config[]> {
    const configService = new ApplicationConfigService();
    return await configService.getAppConfigs();
  }
  @Put("/")
  public async setAppConfigs(
    @Request() request: express.Request
  ): Promise<Config> {
    const configService = new ApplicationConfigService();
    const key = String(request.body.key) as keyof ApplicationConfigType;
    const isEnable = Boolean(request.body.isEnable);
    return await configService.setAppConfig({
      key,
      isEnable,
    });
  }
}
