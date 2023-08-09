//IMPORT DEPEMDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3001;

//MIDDLEWARE IMPLEMENTATION
app.use(cors()); //FIX API REQUEST ERROR
app.use(express.json()); //CONVERTS DATA TO JSON

//IMPORTING ROUTER
const userRouter = require("./routes/userRoute");
app.use("/auth", userRouter);

//CONNECT TO DATABASE MANAGER
mongoose.connect(
  "mongodb+srv://tosin:tosin123@experience.haia9dp.mongodb.net/experience?retryWrites=true&w=majority"
);

//SERVER RUNNING ON PORT
app.listen(PORT, () => {
  console.log("SERVER RUNNING ON PORT 3001....");
});
