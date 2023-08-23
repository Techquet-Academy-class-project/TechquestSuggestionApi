const mongoose = require("mongoose");

const db = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb connected`);
    } catch (error) {
        console.error(error);
    }
};


module.exports = db