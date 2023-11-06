const mongoose = require("mongoose");


const SignUpUserSchema = mongoose.Schema(
    // fullName,email,password,confirmPassword
    {
      fullName: { type: String },
      email: { type: String },
      password: { type: String },
    },
    { timestamps: true, strict: false }
  );
  const signUpUserTable = mongoose.model("signUpUser", SignUpUserSchema); 
  module.exports =  signUpUserTable;