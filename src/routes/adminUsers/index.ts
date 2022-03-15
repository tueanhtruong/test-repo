import { Router } from "express";
import { AdminUsersController } from "../../controllers";
import httpStatus from "http-status";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const controller = new AdminUsersController();
    const response = await controller.getUsers(req);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const controller = new AdminUsersController();
    const response = await controller.getUserById(req);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});
router.put("/", async (req, res, next) => {
  try {
    const controller = new AdminUsersController();
    const response = await controller.updateUserRole(req);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const controller = new AdminUsersController();
    const response = await controller.CreateNewUser(req);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

export default router;
