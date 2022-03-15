import { Router } from "express";
import { TripController } from "../../controllers";
import httpStatus from "http-status";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const controller = new TripController();
    const email = res.locals?.email;
    const response = await controller.getTrips({ email });
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const controller = new TripController();
    const id = req.params.id;
    const response = await controller.getTrip(id);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const controller = new TripController();
    const response = await controller.createTrip(req.body);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const controller = new TripController();
    const id = req.params.id;
    const response = await controller.updateTrip(req.body);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const controller = new TripController();
    const id = req.params.id;
    const response = await controller.deleteTrip(id);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

export default router;
