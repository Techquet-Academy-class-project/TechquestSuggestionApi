import dotenv from "dotenv";
dotenv.config();
import express from "express";
import experience from "./routes/experience.js";
import login from "./routes/login.js";
import register from "./routes/register.js";
const PORT = process.env.PORT;

const app = express();

// built in middleware to handle urlencoded-data(form-data).
app.use(express.urlencoded({ extended: true }));

// built in middleware for json
app.use(express.json());

app.get("/", (req, res) => res.send("Hello world"));
app.use("/experience", experience);
app.use("/login", login);
app.use("/register", register);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
