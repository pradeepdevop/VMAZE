import { Request, Response, NextFunction } from "express";
import service from "../../../service";
import utils from "../../../utils";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const listBlog = await service.blog.listBlog();

    return res.json({ status: 200, listBlog });
  } catch (error) {
    next(error);
  }
};
