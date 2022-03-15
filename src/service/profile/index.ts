import { Profile } from "../../models";
import { accountRepo, profileRepo } from "../../repositories";
import { IProfile } from "../../repositories/profile";
import {
  getFileSignedUrl,
  InvalidOperationError,
  isEmpty,
  NotFoundError,
} from "../../utils";

export default class ProfilesService {
  public async getProfileById(payload: {
    id: string;
  }): Promise<Profile | null> {
    const profile = await profileRepo.getProfile(payload);
    if (!profile) {
      return null;
    }
    return profile;
  }

  public async getMyProfiles(payload: {
    email: string;
  }): Promise<Profile[] | null> {
    const account = await accountRepo.getAccountByEmail({
      email: payload.email,
    });
    if (!account || !account.primaryProfileId)
      throw new NotFoundError(
        "This Account is not exist or did not complete profile"
      );
    const profiles = await profileRepo.getMyProfiles({
      primaryProfileId: account.primaryProfileId,
    });
    if (isEmpty(profiles)) {
      throw new NotFoundError("Can not found your profiles");
      // return null;
    }
    const resolveUrlProfiles = await Promise.all(
      profiles.map(async (x) => {
        let updatedProfile = x;
        if (x.identityUrl) {
          const [identityFile] = await getFileSignedUrl(x.identityUrl);
          updatedProfile.identityUrl = identityFile || "";
        }
        if (x.medicalUrl) {
          const [medicalFile] = await getFileSignedUrl(x.medicalUrl);
          updatedProfile.medicalUrl = medicalFile || "";
        }
        if (x.vaccineRegistry?.vaccineUrl) {
          const [vaccineFile] = await getFileSignedUrl(
            x.vaccineRegistry?.vaccineUrl
          );
          updatedProfile.vaccineRegistry = {
            ...x.vaccineRegistry,
            vaccineUrl: vaccineFile || "",
          };
        }
        return updatedProfile;
      })
    );
    return resolveUrlProfiles;
  }

  public async createProfile(payload: IProfile): Promise<Profile | null> {
    const email = payload.email;
    const isPrimary = payload.isPrimary;
    const newProfile = await profileRepo.createProfile(payload);
    if (!newProfile)
      throw new InvalidOperationError("Can not create your profile");
    if (isPrimary) {
      const account = await accountRepo.getAccountByEmail({ email });
      if (!account) throw new NotFoundError("This Account is not exist");
      else {
        const updatePrimaryIdForAccount =
          await accountRepo.updateAccountPrimaryProfile({
            email,
            primaryProfileId: newProfile.id,
          });
      }
    }
    return newProfile;
  }

  public async updateProfile(payload: {
    id: string;
    body: IProfile;
  }): Promise<Profile | null> {
    const updatedProfile = await profileRepo.updateProfile(payload);
    if (!updatedProfile)
      throw new NotFoundError("Can not found this profiles for update");
    return updatedProfile;
  }

  public async deleteProfile(payload: { id: string }): Promise<null> {
    return await profileRepo.deleteProfile(payload);
  }
}
