import { Schema, model } from "mongoose";

const moderatorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Moderator = model("Moderator", moderatorSchema);

export default Moderator;
