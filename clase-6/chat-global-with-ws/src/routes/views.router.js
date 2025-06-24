import { Router } from "express";

const router = Router();

router.get("/chat-ws", (req, res) => res.render("chat"));

export default router;
