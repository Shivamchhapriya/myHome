const mongoose = require("mongoose");
const signUpUserTable = require("../schema/userTableSchema");

const ObjectId = mongoose.Types.ObjectId;



// connect to user table

// create user
const postSignUp = async (req) => {
  try {
    const dt = await signUpUserTable.create(req); 
    console.log(req)
    return { dt: dt, status: 200, message: "success" };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};



  
module.exports = postSignUp;
