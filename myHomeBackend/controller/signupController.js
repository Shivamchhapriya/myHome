const mongoose = require("mongoose");
const postSignUp = require("../modal/signupModal");
// const ObjectId = mongoose.Types.ObjectId;

// crete new user account
const postSignUpController = async(req,res)=>{
    const {fullName,email,password,confirmPassword}=req.body;
    const user = {fullName,email,password,confirmPassword}
    if(password === confirmPassword){
      const data =await postSignUp(user);
      res.send(data)
    }
    else{
      res.send({ status: 400, message: "confirm Password wrong" })
    }
}



module.exports = {postSignUpController}