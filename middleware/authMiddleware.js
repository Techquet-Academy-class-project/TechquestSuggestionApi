const User = require("../model/user");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async(req, res, next) => {
    

    next()
})


module.exports = {authMiddleware}