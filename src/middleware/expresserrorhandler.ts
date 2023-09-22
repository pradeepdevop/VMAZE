import { Request, Response, NextFunction } from "express";
import utils from "../utils";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  let errorResponse: {
    statusCode: number;
    displayMessage: string;
    ErrorMessage: string;
    errorCode: string;
    errors: any;
  };
  if (err.errors) {
    errorResponse = {
      statusCode: err.status,
      errorCode: "INVALID_REQUEST_BODY",
      displayMessage: "Invalid Request Body",
      ErrorMessage: "Invalid Request Body",
      errors: err?.errors ?? [],
    };
  } else {
    errorResponse = {
      ...utils.errorHandler(err.message),
      errors: err?.errors ?? [],
      errorCode: err.message,
    };
  }
  res.status(errorResponse?.statusCode || 500).json(errorResponse);
  next();
};
