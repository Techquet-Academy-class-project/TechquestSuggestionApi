const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const experiencesRouter = require("./routes/experienceRouter");
const userRouter = require("./routes/userRouter");
const db = require("./config/db");
const { notFound, handleError } = require("./middleware/errorHandler");

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000
app.get("/", (req, res) => {
    res.send("Hello World")
 });

//  API End Points
app.use("/api/v1/", experiencesRouter);

app.use("/api/v1/user", userRouter)


app.use(notFound);
app.use(handleError);

//  Connecting to the Server

 const start= async() =>{
    try {
    await db()
    app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
    } catch (error) {
        console.log("Can't connect to the server");
    }
 };
 start();

