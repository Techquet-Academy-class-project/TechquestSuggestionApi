//IMPORT DEPEMDENCIES
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ModeratorModel = require("../models/Moderator");

const router = express.Router(); //ROUTER
const salt = bcrypt.genSaltSync(10); //HASHED PASSWORD

//REGISTER ROUTE
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

//LOGIN ROUTE
router.post("/login", async function (req, res) {
  const { name, email, password } = req.body;
  const user = await ModeratorModel.findOne({ name, email, password });

  try {
    if (!user) {
      return res.json({ message: "USER DOESN'T EXIST!" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({ message: "USERNAME OR PASSWORD NOT VALID!" });
    }
    const token = jwt.sign({ id: user_id }, "secret");
    res.json({ token, userID: user.user_id });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
