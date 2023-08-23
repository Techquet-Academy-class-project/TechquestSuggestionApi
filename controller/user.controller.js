const {generateToken} = require("../config/jwt");
const User = require("../model/user");
const asyncHandler = require("express-async-handler")

const registerUser = asyncHandler(async (req, res) =>{
    // Get the mail from the req.body, check if it exists or not
    const email = req.body.email;
    const findUser = await User.findOne({email});
    if (!findUser){
        // create a user
    const createUser = await User.create(req.body)
     res.status(200).json({ status:true, 
        message: "User Created successfully",
        data: createUser })
    }else{
       throw new Error("user already exist")
    }
   });

const loginUser = asyncHandler(async (req, res) => {
     const {email, password} = req.body;
    //    check if user exist or not
    const findUser = await User.findOne({email: email});
    if(findUser && (await findUser.isPasswordMatched(password))){
        res.status(200).json({
            status: true,
            message: "Logged in successfully",
            token: generateToken(findUser?._id),
            
        });
    }else{
        throw new Error("invalid credentials")
    }
     });

     const getAllUsers = asyncHandler(async (req, res) =>{
        try {
            const allUsers = await User.find();
            res.status(200).json({
                 status: true,
            message: "fetched all users successfully",
            data: allUsers
            })
        } catch (error) {
             throw new Error(error)
        }
     })

module.exports = {
    registerUser,
    loginUser, 
    getAllUsers
}