// import signUpUserTable from "../schema/userTableSchema";
const mongoose = require("mongoose");
const signUpUserTable = require("../schema/userTableSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const postSignIn = async (req) => {
  try {
    let login = await signUpUserTable.findOne({ email: req.email });
    if (login.password === req.password && login.email === req.email) {
      // delete login.password;
      const createJwt = jwt.sign({ id: login._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      
      var data ={login,token: createJwt};
      console.log(data);

      return { data: data, status: 200, message: "success" };
    } else {
      return {
        data: "user not found",
        status: 400,
        message: "wrong id and password",
      };
    }
  } catch (error) {
    return { status: 400, message: error.message };
  }
};

module.exports = postSignIn;
