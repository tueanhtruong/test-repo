import { Get, Route, Tags } from "tsoa";
import { Content } from "../../repositories/content";
import { ContentService } from "../../service";

@Route("content")
@Tags("Content")
export default class ContentController {
  @Get("/")
  public async getContent(): Promise<Content> {
    const contentService = new ContentService();
    return await contentService.getContent();
  }
}
