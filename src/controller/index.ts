import { Router } from "express";
import blog from "./blog";
import auth from "./auth";
import upload from "./upload";
import user from "./user"
const apirouter = Router();

apirouter.use("/blog", blog);
apirouter.use("/auth", auth);
apirouter.use("/uploadblog", upload);
apirouter.use("/user",user)

export default apirouter;
