import { Router } from "express";
import { ContentController } from "../../controllers";
import httpStatus from "http-status";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const controller = new ContentController();
    const response = await controller.getContent();
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
    // return res
    //   .status(error?.status || httpStatus.INTERNAL_SERVER_ERROR)
    //   .send({ message: error.message, detail: error.detail });
  }
});

export default router;
