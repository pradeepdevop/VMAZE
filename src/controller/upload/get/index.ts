import { Request, Response, NextFunction } from "express";
import service from "../../../service";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const file: any = await service.blog.getBlogById(id);
    const baseString = file.file;
    return res.json({ status: 200, baseString });
  } catch (error) {
    next(error);
  }
};
