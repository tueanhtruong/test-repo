import { Router } from "express";
import { ApplicationConfigController } from "../../controllers";
import httpStatus from "http-status";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const controller = new ApplicationConfigController();
    const response = await controller.getAppConfigs();
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const controller = new ApplicationConfigController();
    const response = await controller.setAppConfigs(req);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

export default router;
