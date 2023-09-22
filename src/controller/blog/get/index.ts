import { Request, Response, NextFunction } from "express";
import service from "../../../service";
import utils from "../../../utils";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const getBlog = await service.blog.getBlogById(id);
    if (!getBlog) throw new Error(utils.ErrorMessage.INVALID_BLOGID);
    return res.json({ status: 200, getBlog });
  } catch (error) {
    next(error);
  }
};
