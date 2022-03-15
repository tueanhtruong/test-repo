import { APPROVED_ITEM_STATUS, PENDING_ITEM_STATUS } from "../../config";
import { Trip } from "../../models";
import {
  tripRepo,
  accountRepo,
  checkInsRepo,
  testCovidRepo,
  tripProfileRepo,
} from "../../repositories";
import {
  ConfigService,
  getFileSignedUrl,
  InvalidOperationError,
  isEmpty,
  NotFoundError,
} from "../../utils";
import { TripPayload } from "./helper";

export default class TripService {
  public async getTrips(payload: { email: string }) {
    const account = await accountRepo.getAccountByEmail({
      email: payload.email,
    });
    if (!account || !account.primaryProfileId)
      throw new NotFoundError(
        "This Account is not exist or did not complete profile"
      );
    const trips = await tripRepo.getTrips({
      primaryTravelerId: account.primaryProfileId,
    });
    return trips as Trip[];
  }

  public async getTrip(payload: { id: string }) {
    const trip = await tripRepo.getTripById(payload);
    if (!trip) return null;
    const updatedURLProfiles = await Promise.all(
      trip.tripProfile?.map(async (n) => {
        const [testCovidUrl] = await getFileSignedUrl(n.testCovid.covidTestUrl);
        const [identityFile] = await getFileSignedUrl(n.profile.identityUrl);
        const [medicalFile] = await getFileSignedUrl(n.profile.medicalUrl);
        const [vaccineFile] = await getFileSignedUrl(
          n.profile.vaccineRegistry?.vaccineUrl
        );
        return {
          ...n,
          testCovid: {
            ...n.testCovid,
            covidTestUrl: testCovidUrl || "",
          },
          profile: {
            ...n.profile,
            identityUrl: identityFile || "",
            medicalUrl: medicalFile || "",
            vaccineRegistry: n.profile.vaccineRegistry
              ? {
                  ...n.profile.vaccineRegistry,
                  vaccineUrl: vaccineFile || "",
                }
              : n.profile.vaccineRegistry,
          },
        };
      })
    );
    trip.tripProfile = updatedURLProfiles;
    return trip as Trip;
  }

  private getDefaultStatusFromConfig = (body: {
    checkIns: any;
    testResult: any;
  }) => {
    const configs = ConfigService.getConfig();
    const status = {
      vaccineStatusId: configs.AUTOMATIC_APPROVAL_VACCINATION
        ? APPROVED_ITEM_STATUS
        : PENDING_ITEM_STATUS,
      testCovidStatusId:
        !isEmpty(body.testResult) && configs.AUTOMATIC_APPROVAL_TEST_RESULT
          ? APPROVED_ITEM_STATUS
          : PENDING_ITEM_STATUS,
      checkInsStatusId:
        !isEmpty(body.checkIns) && configs.AUTOMATIC_APPROVAL_HEALTH_CONDITION
          ? APPROVED_ITEM_STATUS
          : PENDING_ITEM_STATUS,
    };
    return status;
  };

  public async createTrip(payload: TripPayload) {
    const tripRecord = await tripRepo.createTrip(payload);
    const tripProfileList = await Promise.all(
      payload.tripProfile.map(async (profile) => {
        const checkInsRecord = await checkInsRepo.createCheckInsRecord(
          profile.checkIns
        );
        const testCovidRecord = await testCovidRepo.createCovidTestRecord(
          profile.testCovid
        );
        if (isEmpty(checkInsRecord) || isEmpty(testCovidRecord))
          throw new InvalidOperationError(
            `Can not create record check_ins and test for traveler Id: ${profile.id}`
          );
        const tripProfileRecord = await tripProfileRepo.createTripProfile({
          profileId: profile.profileId,
          checkInsId: checkInsRecord?.id || "",
          testCovidId: testCovidRecord?.id || "",
          tripId: tripRecord?.id,
          ...this.getDefaultStatusFromConfig({
            checkIns: checkInsRecord,
            testResult: testCovidRecord,
          }),
        });
        return {
          ...tripProfileRecord,
          checkIns: checkInsRecord,
          testCovid: testCovidRecord,
        };
      })
    );
    return {
      ...tripRecord,
      tripProfile: tripProfileList,
    } as Trip;
  }
  public async updateTrip(payload: TripPayload) {
    const tripRecord = await tripRepo.updateTrip(payload);
    const tripProfileList = await Promise.all(
      payload.tripProfile.map(async (profile) => {
        const checkInsRecord = await checkInsRepo.updateCheckInsRecord(
          profile.checkIns
        );
        const testCovidRecord = await testCovidRepo.updateTestCovidRecord(
          profile.testCovid
        );
        if (isEmpty(checkInsRecord) && isEmpty(testCovidRecord)) return null;
        // throw new InvalidOperationError(
        //   `Can not update record check_ins and test for traveler Id: ${profile.id}`
        // );
        const tripProfileRecord = {
          profileId: profile.profileId,
          checkInsId: checkInsRecord?.id || "",
          testCovidId: testCovidRecord?.id || "",
          ...this.getDefaultStatusFromConfig({
            checkIns: checkInsRecord,
            testResult: testCovidRecord,
          }),
        };
        return {
          ...tripProfileRecord,
          checkIns: checkInsRecord,
          testCovid: testCovidRecord,
        };
      })
    );
    return {
      ...tripRecord,
      tripProfile: tripProfileList,
    } as Trip;
  }
  public async deleteTrip(payload: { id: string }) {
    const trip = await this.getTrip(payload);
    const deleteTrip = await tripRepo.deleteTrip(payload);
    if (!!trip) {
      const deleteItemProfileInfo = await Promise.all(
        trip.tripProfile.map(async (profile) => {
          const deleteTest = await testCovidRepo.deleteTestCovid({
            id: profile.testCovidId,
          });
          const deleteCheckIns = await checkInsRepo.deleteCheckIns({
            id: profile.checkInsId,
          });
          return profile;
        })
      );
    }
    return null;
  }
}
