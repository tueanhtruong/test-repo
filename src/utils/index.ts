import { storage, urlOptions } from "../config/firebase-config";

export const isEmpty = (value: any): boolean =>
  value === undefined ||
  value === null ||
  value === NaN ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value === "") ||
  (Array.isArray(value) && value.length === 0);

export {
  CustomError,
  InvalidOperationError,
  InvalidParameterError,
  ForbiddenError,
  NotFoundError,
} from "./CustomError";
export { CustomErrorData } from "./CustomErrorData";

export { default as ConfigService } from "./configService";

export const getFileSignedUrl = async (filePath: string) => {
  if (!filePath) return [null];
  return await storage.file(filePath).getSignedUrl(urlOptions());
};

export enum Order {
  ASC = "asc",
  DESC = "desc",
}

export const getOrder = (order?: Order) => {
  if (!order) return undefined;

  switch (order) {
    case Order.ASC:
      return "ASC";
    case Order.DESC:
      return "DESC";
    default:
      return "ASC";
  }
};
