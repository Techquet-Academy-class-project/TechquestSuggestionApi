import express from "express";
import Moderator from "../model/moderator.js";
const router = express.Router();

router.post("/", (req, res) => {
  // get req
  const loginInfo = {
    name: req.body.username || req.body.name,
    password: req.body.password,
  };

  //search for details entered in database
  const mod = Moderator.findOne({
    name: loginInfo.name,
  });

  if (!mod) {
    return res.status(404).json({ message: "Moderator not found" });
  } else if (mod.password !== loginInfo.password) {
    return res.status(401).json({ message: "Inccorect password" });
  }

  res.send("Login Successful!");
});

export default router;
