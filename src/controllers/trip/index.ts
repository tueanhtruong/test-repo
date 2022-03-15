import { Body, Post, Route, Tags, Put, Get, Delete, Path } from "tsoa";
import { Trip } from "../../models";
import { TripService } from "../../service";
import { TripPayload } from "../../service/trip/helper";

export const cloneTripPayload = (data: TripPayload): TripPayload => ({
  ...data,
});

@Route("trip")
@Tags("Trip")
export default class TripController {
  private get tripService() {
    return new TripService();
  }
  @Post("/")
  public async createTrip(@Body() body: TripPayload): Promise<Trip> {
    const clonePayload = cloneTripPayload(body);
    const trip = await this.tripService.createTrip(clonePayload);
    return trip;
  }
  @Put("/")
  public async updateTrip(@Body() body: TripPayload): Promise<Trip> {
    const clonePayload = cloneTripPayload(body);
    const trip = await this.tripService.updateTrip(clonePayload);
    return trip;
  }
  @Get("/")
  public async getTrips(payload: { email: string }): Promise<Trip[]> {
    const trips = await this.tripService.getTrips(payload);
    return trips;
  }
  @Delete("/:id")
  public async deleteTrip(@Path() id: string): Promise<null> {
    const res = await this.tripService.deleteTrip({ id });
    return res;
  }
  @Get("/:id")
  public async getTrip(@Path() id: string): Promise<Trip | null> {
    const trip = await this.tripService.getTrip({ id });
    if (!trip) return null;
    return trip;
  }
}
