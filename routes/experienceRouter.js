const express = require("express");
const {getAllExperience, createExperience} = require("../controller/experience.controller")

const experiencesRouter = express.Router();



// get all Experience route
experiencesRouter.get("/getAllExperience", getAllExperience)

// post experience route
experiencesRouter.post("/createExperience", createExperience)


module.exports = experiencesRouter