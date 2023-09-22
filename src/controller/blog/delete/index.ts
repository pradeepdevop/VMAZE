import { Request, Response, NextFunction } from "express";
import service from "../../../service";
import utils from "../../../utils";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleteBlog = await service.blog.deleteBlog(id);
    if (!deleteBlog) throw new Error(utils.ErrorMessage.FAILED_TO_DELETE_BLOG);
    return res.json({
      status: 200,
      message: utils.SuccessMessage.BLOG_DELETED_SUCCESSFULLY,
    });
  } catch (error) {
    next(error);
  }
};
