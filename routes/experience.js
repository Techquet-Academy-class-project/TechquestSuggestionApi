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
  //find experience that matches the id
  // const experience = expData.experiences.find(
  //   (exp) => exp.id === parseInt(req.params.id)
  // );
  // if (!experience) {
  //   res.send(`Experience of ID ${req.params.id} was not Found`);
  //   return;
  // }

  //
  const expFound = await Experience.findById(req.params.id);
  if (expFound) {
    await expFound.updateOne({ show: req.body.show });
  }

  // update show value to given value
  // if (req.body.show !== null && req.body.show !== undefined)
  //   experience.show = req.body.show;
  // else {
  //   res.send(
  //     'Unable to update. Requires show value true or false to update Eg {"show":false}'
  //   );
  //   return;
  // }

  // // update the json experience
  // expData.experiences[experience.id - 1] = experience;
  // expData.setExperience(expData.experiences);

  res.send("Success");
});
export default router;

// const article = await Blog.findById("62472b6ce09e8b77266d6b1b").exec();
// console.log(article);

// const article = await Blog.findById("62472b6ce09e8b77266d6b1b", "title slug content").exec();
// console.log(article);

// const blog = await Blog.deleteOne({ author: "Jesse Hall" })
// console.log(blog)

// const blog = await Blog.deleteMany({ author: "Jesse Hall" })
// console.log(blog)

// Instead of using a standard find method
// const blogFind = await Blog.findOne({ author: "Jesse Hall" });

// // Use the equivalent where() method
// const blogWhere = await Blog.where("author").equals("Jesse Hall");
// console.log(blogWhere)
