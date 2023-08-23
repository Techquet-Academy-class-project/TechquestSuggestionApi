const Experience = require("../model/experience")

const getAllExperience = async (req, res) =>{
  try {
    const experience = await Experience.find({});
     res.status(201).json({ experience })
  } catch (error) {
    res.status(500).json({ msg: error })
  }

}

const createExperience = async (req, res) => {
     try {
       const experience = await Experience.create(req.body)
       res.status(201).json({ experience })
     } catch (error) {
        res.status(500).json({ msg: error })
     } 
};

// const updateExperience = async ( req, res) => {
// try {
//   const experience = await Experience.findOne({})
// } catch (error) {
  
// }
// }

module.exports = {
    getAllExperience,
    createExperience,
}
