import express from "express";
const router = express.Router();
import modDB from "../db/moderatorDB.json" assert { type: "json" };
import updateJsonFile from "../db/updateJson.js";

const dbPath = "db/moderatorDB.json";

const data = {
  moderators: modDB,
  setModerator: function (newData) {
    this.moderators = newData;
    updateJsonFile(dbPath, this.moderators);
  },
};

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
  let isNotUniqueEmail = data.moderators.find(
    (mod) => mod.email === newMod.email
  );
  if (isNotUniqueEmail) {
    return res.status(400).json({
      message: `Email ${isNotUniqueEmail.email} is already used. Use another email instead`,
    });
  }

  // update json database
  data.setModerator([...data.moderators, newMod]);

  res.send(`Successfully registered ${newMod.name}`);
});

export default router;
