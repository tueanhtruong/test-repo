import { Router } from "express";
import { AdminTripsController } from "../../controllers";
import httpStatus from "http-status";

const router = Router();

router.get("/incoming", async (req, res, next) => {
  try {
    const controller = new AdminTripsController();
    const response = await controller.getTrips(req);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const controller = new AdminTripsController();
    const response = await controller.getTripById(req);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.put("/:id/check-ins", async (req, res, next) => {
  try {
    const controller = new AdminTripsController();
    const response = await controller.checkInsTripById(req);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.put(
  "/:tripId/traveler/:travelerId/vaccine-status",
  async (req, res, next) => {
    try {
      const controller = new AdminTripsController();
      const response = await controller.updateTravelerVaccineStatus(req);
      return res.status(httpStatus.OK).send(response);
    } catch (error: any) {
      next(error);
    }
  }
);
router.put(
  "/:tripId/traveler/:travelerId/testing-status",
  async (req, res, next) => {
    try {
      const controller = new AdminTripsController();
      const response = await controller.updateTravelerTestingStatus(req);
      return res.status(httpStatus.OK).send(response);
    } catch (error: any) {
      next(error);
    }
  }
);
router.put(
  "/:tripId/traveler/:travelerId/check-ins-status",
  async (req, res, next) => {
    try {
      const controller = new AdminTripsController();
      const response = await controller.updateTravelerCheckInsStatus(req);
      return res.status(httpStatus.OK).send(response);
    } catch (error: any) {
      next(error);
    }
  }
);

export default router;
