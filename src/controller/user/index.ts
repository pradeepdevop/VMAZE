import { Router } from "express";
import getUser from "./get";

const router = Router();

router.get("/:id", getUser);

export default router;
