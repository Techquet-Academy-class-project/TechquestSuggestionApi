import express from "express";
import updateJsonFile from "../db/updateJson.js";
import modDB from "../db/moderatorDB.json" assert { type: "json" };

const router = express.Router();

const dbPath = "db/moderatorDB.json";

const data = {
  moderators: modDB,
  setModerator: function (newData) {
    this.moderators = newData;
    updateJsonFile(dbPath, this.moderators);
  },
};

router.post("/", (req, res) => {
  //
  const loginInfo = {
    name: req.body.username || req.body.name,
    password: req.body.password,
  };

  // search for details entered in database
  let foundMod = data.moderators.find(
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
