import moment from "moment";
import { Trip } from "../../models";
import { tripRepo } from "../../repositories";
import tripProfile from "../../repositories/tripProfile";
import { Order } from "../../utils";
import { checkTripStatusKey } from "./helper";

enum ItemStatusIndex {
  PENDING = 1,
  APPROVED = 2,
  REJECTED = 3,
  CHECKED_IN = 4,
}
enum ItemStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  CHECKED_IN = "CHECKED_IN",
}

export default class AdminTripService {
  public async getIncomingTrips(payload: {
    skip: number;
    take: number;
    order?: Order;
    sort?: string;
    status?: string[];
    departureDate?: string;
    search?: string;
  }): Promise<{ data: Trip[]; total: number }> {
    const [trips, total] = await tripRepo.getIncomingTrips(payload);
    return {
      data: trips,
      total: total,
    };
  }

  public async checkInsTrip(payload: { tripId: string }): Promise<any> {
    return await tripRepo.checkInsTripById({
      id: payload.tripId,
      statusId: ItemStatusIndex.CHECKED_IN,
      checkInsDate: moment().format("YYYY-MM-DD"),
    });
  }

  public async checkTripStatus(payload: { tripId: string }): Promise<any> {
    const selectedTrip = await tripRepo.getTripById({ id: payload.tripId });
    const travelerStatus = selectedTrip?.tripProfile?.map((traveler) => {
      const status = [
        traveler.vaccineStatus?.key,
        traveler.testCovidStatus?.key,
        traveler.checkInsStatus?.key,
      ];
      const isApproveAll = status.every((x) => x === "APPROVED");
      if (isApproveAll) return "APPROVED";

      const hasRejected = status.find((x) => x === "REJECTED");
      if (hasRejected) return "REJECTED";

      const hasPending = status.find((x) => x === "PENDING");
      if (hasPending) return "PENDING";
      return "PENDING";
    });

    const tripStatusIndex = checkTripStatusKey(travelerStatus);

    return await tripRepo.updateTripStatus({
      id: payload.tripId,
      statusId: tripStatusIndex,
    });
  }

  public async updateVaccineStatus(payload: {
    tripId: string;
    travelerId: string;
    status: string;
    rejectReason?: string;
  }): Promise<any> {
    let statusId = null;
    switch (payload.status) {
      case ItemStatus.APPROVED:
        statusId = ItemStatusIndex.APPROVED;
        break;
      case ItemStatus.REJECTED:
        statusId = ItemStatusIndex.REJECTED;
        break;
      default:
        statusId = ItemStatusIndex.PENDING;
        break;
    }
    const res = await tripProfile.updateVaccineStatus({
      vaccineStatusId: statusId,
      id: payload.travelerId,
      rejectReason: payload?.rejectReason,
    });
    return await this.checkTripStatus({ tripId: payload.tripId });
  }
  public async updateTestingStatus(payload: {
    tripId: string;
    travelerId: string;
    status: string;
    rejectReason?: string;
  }): Promise<any> {
    let statusId = null;
    switch (payload.status) {
      case ItemStatus.APPROVED:
        statusId = ItemStatusIndex.APPROVED;
        break;
      case ItemStatus.REJECTED:
        statusId = ItemStatusIndex.REJECTED;
        break;
      default:
        statusId = ItemStatusIndex.PENDING;
        break;
    }
    const res = await tripProfile.updateTestingStatus({
      testStatusId: statusId,
      id: payload.travelerId,
      rejectReason: payload?.rejectReason,
    });
    return await this.checkTripStatus({ tripId: payload.tripId });
  }
  public async updateCheckInsStatus(payload: {
    tripId: string;
    travelerId: string;
    status: string;
    rejectReason?: string;
  }): Promise<any> {
    let statusId = null;
    switch (payload.status) {
      case ItemStatus.APPROVED:
        statusId = ItemStatusIndex.APPROVED;
        break;
      case ItemStatus.REJECTED:
        statusId = ItemStatusIndex.REJECTED;
        break;
      default:
        statusId = ItemStatusIndex.PENDING;
        break;
    }
    const res = await tripProfile.updateCheckInsStatus({
      checkInsStatusId: statusId,
      id: payload.travelerId,
      rejectReason: payload?.rejectReason,
    });
    return await this.checkTripStatus({ tripId: payload.tripId });
  }
}
