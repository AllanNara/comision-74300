import { Router } from "express";
import userModel from "../models/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json({ status: "success", users });
  } catch (e) {
    console.error({ message: e.message });
    res
      .status(500)
      .json({ status: "Internal server error", message: "View console" });
  }
});

router.get("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await userModel.findById({ _id: uid });
    res.json({ status: "success", user });
  } catch (e) {
    console.error({ message: e.message });
    res
      .status(500)
      .json({ status: "Internal server error", message: "View console" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const newUser = await userModel.create({ first_name, last_name, email });
    res.json({ status: "created", new_user: newUser });
  } catch (e) {
    console.error({ message: e.message });
    res
      .status(500)
      .json({ status: "Internal server error", message: "View console" });
  }
});

router.put("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const { body } = req;

    let response = await userModel.updateOne(
      { _id: uid },
      { $set: { ...body } },
    );
    res.json({ status: "updated", response });
  } catch (e) {
    console.error({ message: e.message });
    res
      .status(500)
      .json({ status: "Internal server error", message: "View console" });
  }
});

router.delete("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const response = await userModel.findByIdAndDelete(uid);
    res.json({ status: "deleted", response });
  } catch (e) {
    console.error({ message: e.message });
    res
      .status(500)
      .json({ status: "Internal server error", message: "View console" });
  }
});

export default router;
