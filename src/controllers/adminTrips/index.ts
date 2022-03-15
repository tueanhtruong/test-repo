// import { Account } from "../../models";
import * as express from "express";
import { Get, Route, Tags, Request, Put } from "tsoa";
import { Trip } from "../../models";
import { AdminTripService, TripService } from "../../service";
import { Order } from "../../utils";

export type IncomingTrip = {
  id?: string;
  departureDate: string;
  isLeavingTrip: boolean;
  departureProvinceId: number;
  departureDistrictId: number;
  departureWardId: number;
  departureAddress: string;
  destinationProvinceId: number;
  destinationDistrictId: number;
  destinationWardId: number;
  destinationAddress: string;
  checkInsDate: string;
  checkOutDate: string;
  tripPurposeId: number;
  vehicleTypeId: number;
  vehicleNumber: string;
  primaryTravelerId: string;
  tripPurpose: string;
  numberOfTraveler: number;
  travelerName: string[];
  status: string;
};

@Route("trip")
@Tags("IncomingTrips")
export default class AdminTripsController {
  @Get("/incoming")
  public async getTrips(
    @Request() request: express.Request
  ): Promise<{ data: IncomingTrip[]; total: number }> {
    const tripService = new AdminTripService();
    const skip = parseInt(request?.query?.skip?.toString() || "");
    const take = parseInt(request?.query?.take?.toString() || "");
    const sort = request?.query?.sort?.toString() || undefined;
    const order = request?.query?.order?.toString() as Order;
    const queryStatus =
      (request?.query?.status as string[] | string) || undefined;
    const search = request?.query?.search?.toString() || undefined;
    const departureDate =
      request?.query?.departureDate?.toString() || undefined;
    const status =
      typeof queryStatus === "string" ? [queryStatus] : queryStatus;

    const { data, total } = await tripService.getIncomingTrips({
      skip: skip,
      take,
      sort,
      order,
      status,
      departureDate,
      search: search?.toLowerCase(),
    });
    return {
      data: data.map((n) => ({
        ...n,
        status: n.tripStatus.key,
        numberOfTraveler: n.tripProfile.length,
        travelerName: n.tripProfile.map(
          (profile) =>
            `${profile.profile.firstName} ${profile.profile.lastName}`
        ),
        tripPurpose: n.tripPurpose.name,
      })),
      total: total,
    };
  }
  @Get("/:id")
  public async getTripById(
    @Request() request: express.Request
  ): Promise<Trip | null> {
    const tripService = new TripService();
    const id = request?.params?.id.toString();
    const trip = await tripService.getTrip({ id });
    return trip;
  }

  @Get("/:id/check-ins")
  public async checkInsTripById(
    @Request() request: express.Request
  ): Promise<Trip | null> {
    const tripService = new AdminTripService();
    const id = request?.params?.id.toString();
    const trip = await tripService.checkInsTrip({ tripId: id });
    return trip;
  }

  @Put("/:tripId/traveler/:travelerId/vaccine-status")
  public async updateTravelerVaccineStatus(
    @Request() request: express.Request
  ): Promise<Trip | null> {
    const tripService = new AdminTripService();
    const tripId = request.params.tripId;
    const travelerId = request.params.travelerId;
    const status = request.body.status;
    const rejectReason = request.body.rejectReason;

    return await tripService.updateVaccineStatus({
      tripId,
      travelerId,
      status,
      rejectReason,
    });
  }
  @Put("/:tripId/traveler/:travelerId/testing-status")
  public async updateTravelerTestingStatus(
    @Request() request: express.Request
  ): Promise<Trip | null> {
    const tripService = new AdminTripService();
    const tripId = request.params.tripId;
    const travelerId = request.params.travelerId;
    const status = request.body.status;
    const rejectReason = request.body.rejectReason;

    return await tripService.updateTestingStatus({
      tripId,
      travelerId,
      status,
      rejectReason,
    });
  }
  @Put("/:tripId/traveler/:travelerId/check-ins-status")
  public async updateTravelerCheckInsStatus(
    @Request() request: express.Request
  ): Promise<Trip | null> {
    const tripService = new AdminTripService();
    const tripId = request.params.tripId;
    const travelerId = request.params.travelerId;
    const status = request.body.status;
    const rejectReason = request.body.rejectReason;

    return await tripService.updateCheckInsStatus({
      tripId,
      travelerId,
      status,
      rejectReason,
    });
  }
}
