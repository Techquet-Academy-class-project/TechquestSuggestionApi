// create instance of local database
import expJson from "../db/experienceDB.json" assert { type: "json" };
import modJson from "../db/moderatorDB.json" assert { type: "json" };
import updateJsonFile from "../db/updateJson.js";

// Exprience Database
const expDbPath = "db/experienceDB.json";

// Todo - Handling the a state where database is empty
const expData = {
  experiences: expJson,
  setExperience: function (newData) {
    this.experiences = newData;
    updateJsonFile(expDbPath, this.experiences);
  },
};

// Moderator Database
const modDbPath = "db/moderatorDB.json";

const modData = {
  moderators: modJson,
  setModerator: function (newData) {
    this.moderators = newData;
    updateJsonFile(modDbPath, this.moderators);
  },
};

export { modData, expData };
