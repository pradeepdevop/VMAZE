import { Request, Response, NextFunction } from "express";
import utils from "../utils";
import { verifyToken } from "../helper/jwt";

export type RequestType = {
  user: any;
} & Request;
export const authenticator = async (
  req: RequestType,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers?.authorization?.replace("Bearer", "");
    if (!token) throw new Error(utils.ErrorMessage.TOKEN_REQUIRED);
    const data: any = await verifyToken(token);
    if (!data.success) throw new Error(utils.ErrorMessage.SESSION_EXPIRED);
    req.user = data.decoded;
    next();
  } catch (error) {
    next(error);
  }
};
