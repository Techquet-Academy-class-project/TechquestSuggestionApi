import express from "express";
import { modData } from "../db/dbhandlers.js";
const router = express.Router();

router.post("/", (req, res) => {
  const newMod = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  if (!req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: "name, email and password is required." });
  }

  // ensure unique email
  let isNotUniqueEmail = modData.moderators.find(
    (mod) => mod.email === newMod.email
  );
  if (isNotUniqueEmail) {
    return res.status(400).json({
      message: `Email ${isNotUniqueEmail.email} is already used. Use another email instead`,
    });
  }

  // update json database
  modData.setModerator([...modData.moderators, newMod]);

  res.send(`Successfully registered ${newMod.name}`);
});

export default router;
