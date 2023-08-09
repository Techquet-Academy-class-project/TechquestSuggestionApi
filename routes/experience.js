import express from "express";
import expData from "../db/experienceDB.json" assert { type: "json" };
import updateJsonFile from "../db/updateJson.js";
const router = express.Router();

const dbPath = "db/experienceDB.json";

// Todo - Handling the a state where database is empty
const data = {
  experiences: expData,
  setExperience: function (newData) {
    this.experiences = newData;
    updateJsonFile(dbPath, this.experiences);
  },
};

// Retrive all experience from database
router.get("/", (req, res) => {
  // send only experiences flaged show:true
  const allowed = data.experiences.filter(({ show }) => show === true);

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
    id: data.experiences.length + 1,
    text: req.body.text,
    show: true,
  };

  //update json database
  data.setExperience([...data.experiences, newExp]);

  console.log(newExp);
  res.status(200).send("success");
});

// Update an experience
router.put("/:id", (req, res) => {
  //find experience that matches the id
  const experience = data.experiences.find(
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

  // update the json database
  data.experiences[experience.id - 1] = experience;
  data.setExperience(data.experiences);

  res.send("Success");
});
export default router;
