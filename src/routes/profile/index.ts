import { Router } from "express";
import { ProfileController } from "../../controllers";
import httpStatus from "http-status";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const controller = new ProfileController();
    const email = res.locals?.email;
    const response = await controller.getMyProfiles({ email });
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const controller = new ProfileController();
    const id = req.params.id;
    const response = await controller.getProfileById(id);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const controller = new ProfileController();
    const response = await controller.createProfile(req.body);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const controller = new ProfileController();
    const id = req.params.id;
    const response = await controller.updateProfile(id, req.body);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const controller = new ProfileController();
    const id = req.params.id;
    const response = await controller.deleteProfile(id);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
    // return res
    //   .status(error?.data?.status || httpStatus.INTERNAL_SERVER_ERROR)
    //   .send({ message: error?.data?.message, detail: error.details });
  }
});

export default router;
