import { CustomErrorData } from "./CustomErrorData";

export class CustomError extends Error {
  public data: CustomErrorData;
  public details?: unknown;
  public stackArray: string[];

  constructor(data: CustomErrorData, details?: unknown) {
    super(data.message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = data.name;
    this.data = data;
    this.details = details;
    this.stackArray = this.stack
      ? this.stack.split("\n").map((s) => s.trim())
      : [];
  }
}

export class NotFoundError extends CustomError {
  constructor(details?: unknown) {
    super(
      {
        name: "NOT_FOUND_ERROR",
        message: "The requested resource cannot be found.",
        status: 404,
      },
      details
    );
  }
}

export class ForbiddenError extends CustomError {
  constructor(details?: unknown) {
    super(
      {
        name: "FORBIDDEN_ERROR",
        message: "The requested operation is refused.",
        status: 403,
      },
      details
    );
  }
}

export class InvalidOperationError extends CustomError {
  constructor(details?: unknown) {
    super(
      {
        name: "INVALID_OPERATION_ERROR",
        message: "The requested operation cannot be performed.",
        status: 500,
      },
      details
    );
  }
}

export class InvalidParameterError extends CustomError {
  constructor(details?: unknown) {
    super(
      {
        name: "INVALID_PARAMETER_ERROR",
        message: "The parameter is invalid.",
        status: 400,
      },
      details
    );
  }
}
