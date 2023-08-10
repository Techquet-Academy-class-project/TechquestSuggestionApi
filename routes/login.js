import express from "express";
import { modData } from "../db/dbhandlers.js";
const router = express.Router();

router.post("/", (req, res) => {
  //
  const loginInfo = {
    name: req.body.username || req.body.name,
    password: req.body.password,
  };

  // search for details entered in database
  let foundMod = modData.moderators.find(
    (mod) => mod.name.toLowerCase() == loginInfo.name.toLowerCase()
  );
  if (!foundMod) {
    return res.status(404).json({ message: "Moderator not found" });
  } else if (foundMod.password !== loginInfo.password) {
    return res.status(404).json({ message: "Incorrect password" });
  }

  //Todo - An handler to actually keep the moderator logged in

  res.send("Login Successful!");
});

export default router;
