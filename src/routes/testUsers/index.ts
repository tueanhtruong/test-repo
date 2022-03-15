import { Router } from "express";
import { TestUsersController } from "../../controllers";
import httpStatus from "http-status";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const controller = new TestUsersController();
    const response = await controller.getTestUsers();
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: error.message, detail: error.detail });
  }
});

export default router;
