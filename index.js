// dot env configuration
import dotenv from "dotenv";
dotenv.config();
import express from "express";
// routes imports
import experience from "./routes/experience.js";
import login from "./routes/login.js";
import register from "./routes/register.js";
import mongoose from "mongoose";
//setting PORT
const PORT = process.env.PORT || 3500;

const uri = process.env.MDBURI;

const app = express();

// built in middleware to handle urlencoded-data(form-data).
app.use(express.urlencoded({ extended: true }));

// built in middleware for json
app.use(express.json());

// routing

app.get("/", (req, res) => res.send("Hello world"));
app.use("/experience", experience);
app.use("/login", login);
app.use("/register", register);

try {
  await mongoose.connect(uri);
  console.log("Connection Successfull");
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
} catch (error) {
  console.log("Error connecting", error);
}