import { Profile } from "../../models";
import { Body, Get, Path, Post, Route, Tags, Put, Delete } from "tsoa";
import { ProfilesService } from "../../service";
import { IProfile } from "../../repositories/profile";

const cloneIProfilePayload = (body: IProfile): IProfile => {
  return {
    firstName: body.firstName,
    lastName: body.lastName,
    phone: body?.phone,
    email: body?.email,
    dateOfBirth: body?.dateOfBirth,
    medicalNumber: body?.medicalNumber,
    medicalUrl: body?.medicalUrl,
    identityNumber: body?.identityNumber,
    identityUrl: body?.identityUrl,
    address: body?.address,
    job: body.job,
    provinceId: body?.provinceId,
    districtId: body?.districtId,
    wardId: body?.wardId,
    isPrimary: body?.isPrimary,
    primaryProfileId: body?.primaryProfileId || null,
    genderId: body?.genderId,
  };
};

@Route("profile")
@Tags("Profile")
export default class ProfileController {
  @Get("/")
  public async getMyProfiles(payload: {
    email: string;
  }): Promise<Profile[] | null> {
    const profileService = new ProfilesService();
    return await profileService.getMyProfiles(payload);
  }
  @Get("/:id")
  public async getProfileById(@Path() id: string): Promise<Profile | null> {
    const profileService = new ProfilesService();
    return await profileService.getProfileById({ id });
  }

  @Post("/")
  public async createProfile(@Body() body: IProfile): Promise<Profile | null> {
    const profileService = new ProfilesService();
    const clonePayload = cloneIProfilePayload(body);
    const profile = await profileService.createProfile(clonePayload);
    return profile;
  }

  @Put("/:id")
  public async updateProfile(
    @Path() id: string,
    @Body() body: IProfile
  ): Promise<Profile | null> {
    const profileService = new ProfilesService();
    const clonePayload = cloneIProfilePayload(body);
    const profile = await profileService.updateProfile({
      id,
      body: clonePayload,
    });
    return profile;
  }
  @Delete("/:id")
  public async deleteProfile(@Path() id: string): Promise<null> {
    const profileService = new ProfilesService();
    return await profileService.deleteProfile({ id });
  }
}
