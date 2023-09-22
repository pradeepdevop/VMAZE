import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    return res.json({ message: "upload successfully" });
  } catch (error) {
    next(error);
  }
};
