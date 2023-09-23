import { Request, Response, NextFunction } from "express";
import service from "../../../service";
import utils from "../../../utils";
import { TokenPayload, generateToken } from "../../../helper/jwt";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const user = await service.user.getUser(id)

    if (!user) throw new Error(utils.ErrorMessage.USER_NOT_FOUND);

    return res.json({
      status: 200,
      user,
    });
  } catch (error) {
    next(error);
  }
};
