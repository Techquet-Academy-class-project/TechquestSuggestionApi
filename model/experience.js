import { Schema, model } from "mongoose";

const experienceSchema = new Schema({
  text: String,
  show: {
    type: Boolean,
    default: true,
  },
});

const Experience = model("Experience", experienceSchema);
export default Experience;
