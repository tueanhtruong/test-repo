import { Router } from "express";
import { VaccineController } from "../../controllers";
import httpStatus from "http-status";
import routes from "..";
import { InvalidOperationError } from "../../utils";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const controller = new VaccineController();
    const response = await controller.createVaccineRegistry(req.body);
    return res.status(httpStatus.OK).send(response);
  } catch (error: any) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const a = ["fgg"];
  try {
    console.log(a[6].length);
    return res.status(httpStatus.OK).send({ message: a });
  } catch (err) {
    next(err);
    // throw new InvalidOperationError("Test");
  }
});

router.put("/", async (req, res, next) => {
  try {
    const controller = new VaccineController();
    const response = await controller.updateVaccineRegistry(req.body);
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    next(error);
  }
});

export default router;
