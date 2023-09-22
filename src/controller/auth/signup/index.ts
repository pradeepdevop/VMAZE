import { Request, Response, NextFunction } from "express";
import utils from "../../../utils";
import service from "../../../service";
import { UserType } from "../../../model/user";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload: UserType = req.body;
    const checkEmail = await utils.emailverify(payload.email as string);
    if (checkEmail) throw new Error(utils.ErrorMessage.EMAIL_ALREADY_EXIST);
    const password = await utils.generatePassword(payload.password as string);
    payload.password = password;
    const createUser = await service.auth.signup(payload);
    if (!createUser) throw new Error(utils.ErrorMessage.FAILED_TO_CREATE_USER);
    return res.json({
      status: 200,
      message: utils.SuccessMessage.USER_CREATED_SUCCESSFULLY,
    });
  } catch (error) {
    next(error);
  }
};
