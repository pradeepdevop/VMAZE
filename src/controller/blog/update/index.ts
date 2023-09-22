import { Request, Response, NextFunction } from "express";
import service from "../../../service";
import utils from "../../../utils";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    payload.id = id;
    const updateBlog = await service.blog.updateBlog(payload);
    if (!updateBlog) throw new Error(utils.ErrorMessage.FAILED_TO_UPDATE_BLOG);
    return res.json({
      status: 200,
      message: utils.SuccessMessage.BLOG_UPDATED_SUCCESSFULLY,
    });
  } catch (error) {
    next(error);
  }
};
