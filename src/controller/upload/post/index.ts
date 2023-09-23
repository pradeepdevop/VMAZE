import { Request, Response, NextFunction } from "express";
import fs from "fs"
import service from "../../../service"

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const path = req["file"]?.path
    const saveBuffer = fs.readFileSync(`${path}`, { encoding: "base64" })
    console.log(saveBuffer)
    await service.blog.uploadbuff(id,saveBuffer)
    return res.json({ message: "upload successfully" });
  } catch (error) {
    next(error);
  }
};
