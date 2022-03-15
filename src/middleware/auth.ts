import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { admin } from "../config/firebase-config";

const auth = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1] || "";
    if (!token)
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: httpStatus["401_MESSAGE"] });
    const decodeValue = await admin?.auth()?.verifyIdToken(token);
    // const user = await admin.auth().getUser(decodeValue.uid);
    if (decodeValue && decodeValue?.email_verified) {
      res.locals.email = decodeValue?.email;
      res.locals.uid = decodeValue.uid;
      return next();
    } else
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: httpStatus["401_MESSAGE"],
        detail: "Your email has not verified yet",
      });
  } catch (err) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ message: httpStatus["401_MESSAGE"] });
  }
  // const token = (req.headers.get as string).split(' ')[1];
};

export default auth;
