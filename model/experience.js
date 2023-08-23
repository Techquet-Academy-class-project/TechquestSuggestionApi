const mongoose = require("mongoose");

   const experienceSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    showProperty:{
        type: Boolean,
        default: true
    },
    dateCreated: {
        type: String,
        default: new Date().toJSON()
    }
});

const Experience = mongoose.model("experience", experienceSchema);

module.exports = Experience;