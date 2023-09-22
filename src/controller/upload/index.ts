import { Router } from "express";
import multer from "multer";
import fs from "fs";
import uploadController from "./post";

const router = Router();

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dirExist = fs.existsSync("lib/files");
    if (!dirExist) {
      fs.mkdirSync("lib/files", { recursive: true });
    }
    // const filePath: any =
    cb(null, "lib/files");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadType = multer({
  storage: storage,
  limits: { fileSize: 3 * 1024 * 1024 },
});

router.post("/upload", uploadType.single("file"), uploadController);
export default router;
