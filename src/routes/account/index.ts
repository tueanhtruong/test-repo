import { Router } from "express";
import { AccountController } from "../../controllers";
import httpStatus from "http-status";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const controller = new AccountController();
    const email = res.locals?.email;
    const response = await controller.getMe({ email });
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});
router.get("/permission", async (req, res, next) => {
  try {
    const controller = new AccountController();
    const email = res.locals?.email;
    const response = await controller.getMyPermissions({ email });
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

export default router;
