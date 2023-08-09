import express from "express";
import { expData } from "../db/dbhandlers.js";
const router = express.Router();

// Retrive all experience from experience
router.get("/", (req, res) => {
  // send only experiences flaged show:true
  const allowed = expData.experiences.filter(({ show }) => show === true);

  res.status(200).json(allowed);
});

// Add a new experience
router.post("/", (req, res) => {
  // ensure text is included
  if (!req.body.text) {
    res.send("Can't add. text is required");
    return;
  }

  let newExp = {
    id: expData.experiences.length + 1,
    text: req.body.text,
    show: true,
  };

  //update json database
  expData.setExperience([...expData.experiences, newExp]);

  console.log(newExp);
  res.status(200).send("success");
});

// Update an experience
router.put("/:id", (req, res) => {
  //find experience that matches the id
  const experience = expData.experiences.find(
    (exp) => exp.id === parseInt(req.params.id)
  );
  if (!experience) {
    res.send(`Experience of ID ${req.params.id} was not Found`);
    return;
  }

  // update show value to given value
  if (req.body.show !== null && req.body.show !== undefined)
    experience.show = req.body.show;
  else {
    res.send(
      'Unable to update. Requires show value true or false to update Eg {"show":false}'
    );
    return;
  }

  // update the json experience
  expData.experiences[experience.id - 1] = experience;
  expData.setExperience(expData.experiences);

  res.send("Success");
});
export default router;
