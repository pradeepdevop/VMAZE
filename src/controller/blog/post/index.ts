import { Request, Response, NextFunction } from "express";
import service from "../../../service";
import utils from "../../../utils";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const blogData = await service.blog.createBlob(payload);
    if (!blogData) throw new Error(utils.ErrorMessage.FAILED_TO_POST_BLOG);
    return res.json({
      message: utils.SuccessMessage.BLOG_CREATED_SUCCESSFULLY,
    });
  } catch (error) {
    next(error);
  }
};
