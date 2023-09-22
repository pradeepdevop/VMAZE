import { Router } from "express";
import createBlog from "./post";
import deleteBlog from "./delete";
import updateBlog from "./update";
import listBlog from "./getlist";
import getBlogById from "./get";

const router = Router();

router.post("/", createBlog);
router.get("/", getBlogById);
router.put("/:id", updateBlog);
router.put("/:id", deleteBlog);
router.get("/", listBlog);

export default router;
