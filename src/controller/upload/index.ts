import { Router } from "express";
import multer from "multer";
import fs from "fs";
import uploadController from "./post";
import getImage from "./get";

const router = Router();

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dirExist = fs.existsSync("src/files");
    if (!dirExist) {
      fs.mkdirSync("src/files", { recursive: true });
    }
    // const filePath: any =
    cb(null, "src/files");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadType = multer({
  storage: storage,
  limits: { fileSize: 3 * 1024 * 1024 },
});

router.post("/upload/:id", uploadType.single("file"), uploadController);
router.get("/:id", getImage);

export default router;
