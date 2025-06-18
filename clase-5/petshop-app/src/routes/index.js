import { Router } from "express";
import usersRouter from "./users.router.js";
import petsRouter from "./pets.router.js";

const router = Router();

router.use("/users", usersRouter)
router.use("/pets", petsRouter)

export default router
