const mongoose = require("mongoose");
const RoleType = require("../utils/constant");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
    },
    email :{
        type: String,
        unique:true,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [RoleType.USER, RoleType.MODERATOR],
        default: RoleType.USER
    },
    showProperty:{
        type: Boolean,
        default: true
    },
      dateCreated: {
        type: String,
        default: new Date().toJSON()
    },
    dateUpdated: {
        type: String,
    },

});

userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next()
});

userSchema.methods.isPasswordMatched = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

const User =  mongoose.model("user", userSchema);

module.exports = User

