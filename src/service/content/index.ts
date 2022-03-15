import { contentRepo } from "../../repositories";
import { Content } from "../../repositories/content";

export default class ContentService {
  public async getContent(): Promise<Content> {
    const content = await contentRepo.getContent();
    return content;
  }
}
