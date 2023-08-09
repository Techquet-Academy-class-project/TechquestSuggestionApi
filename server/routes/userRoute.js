//IMPORT DEPEMDENCIES
const express = require("express");
const bcrypt = require("bcrypt");
const ModeratorModel = require("../models/Moderator");

const router = express.Router(); //ROUTER
const salt = bcrypt.genSaltSync(10); //HASHED PASSWORD

router.post("/register", async function (req, res) {
  const { name, email, password } = req.body;
  const user = await ModeratorModel.findOne({ name, email, password });

  try {
    if (user) {
      return res.json({ message: "USER ALREADY EXIST" });
    }
    const hashedPassword = bcrypt.hashSync(password, salt); //PASSWORD HASHED
    const newUser = new ModeratorModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ message: "REGISTRATION SUCCESSFUL" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
