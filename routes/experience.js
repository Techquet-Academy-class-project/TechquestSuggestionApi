import express from "express";
const router = express.Router();
import Experience from "../model/experience.js";

// Retrive all experience from experience
router.get("/", async (req, res) => {
  // send only experiences flaged show:true
  const allowed = await Experience.find({ show: true }, "text show").exec();

  res.status(200).json(allowed);
});

// Add a new experience
router.post("/", async (req, res) => {
  // ensure text is included
  if (!req.body.text) {
    res.send("Can't add. text is required");
    return;
  }

  const newExp = await Experience.create({
    // id: expData.experiences.length + 1,
    text: req.body.text,
    show: true,
  });

  // console.log(newExp);
  res.status(200).json({ message: "Review added successfuly" });
});

// Update an experience
router.put("/:id", async (req, res) => {
  //
  const expFound = await Experience.findById(req.params.id);
  if (expFound) {
    await expFound.updateOne({ show: req.body.show });
  }

  res.send("Success");
});
export default router;
