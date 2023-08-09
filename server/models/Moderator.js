//IMPORT DEPEMDENCIES
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

//SCHEMA IMPLEMENTATION
const ModeratorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// const ExperienceSchema = new Schema{
//   text : String
//   show :  [default should be true]
// }

//EXPORT THE MODEL
const ModeratorModel = model("moderator", ModeratorSchema);
module.exports = ModeratorModel;
