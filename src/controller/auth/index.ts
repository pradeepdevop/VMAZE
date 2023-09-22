import { Router } from "express";
import login from "./login";
import signup from "./signup";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
