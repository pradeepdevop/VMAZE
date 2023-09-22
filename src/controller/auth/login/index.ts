import { Request, Response, NextFunction } from "express";
import service from "../../../service";
import utils from "../../../utils";
import { TokenPayload, generateToken } from "../../../helper/jwt";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const user = await service.auth.signin(payload.email);

    if (!user) throw new Error(utils.ErrorMessage.USER_NOT_FOUND);
    const checkPassword = await utils.verifyPassword(
      payload.password,
      user?.password as string
    );

    if (!checkPassword) throw new Error(utils.ErrorMessage.INCORRECT_PASSWORD);
    const tokenPayload: TokenPayload = {
      email: user.email as string,
      password: user.password as string,
    };

    const { token } = await generateToken(tokenPayload);

    return res.json({
      status: 200,
      message: utils.SuccessMessage.LOGIN_SUCCESSFULL,
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};
