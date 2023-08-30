import express from "express";
import Moderator from "../model/moderator.js";
const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: "name, email and password is required." });
  }

  const newMod = await Moderator.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.send(`Successfully registered ${newMod.name}`);
});

export default router;
