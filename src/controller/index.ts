import { Router } from "express";
import blog from "./blog";
import auth from "./auth";
import upload from "./upload";
const apirouter = Router();

apirouter.use("/blog", blog);
apirouter.use("/auth", auth);
apirouter.use("/uploadblog", upload);

export default apirouter;
