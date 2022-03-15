import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils";
import httpStatus from "http-status";

const onError = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(httpStatus.BAD_REQUEST).json({
      code: `E__${err.data.name}`,
      message: err.data.message,
      details: err.details,
    });
  }
  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send({ message: err?.message, stack: err?.stack });
};

export default onError;
