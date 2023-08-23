const express = require("express")
const {registerUser, loginUser} = require("../controller/user.controller")

const userRouter = express.Router();

// post route register a user
userRouter.post("/register", registerUser)
//post route for login user
userRouter.post("/login", loginUser)

module.exports = userRouter