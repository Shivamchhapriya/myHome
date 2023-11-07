const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signUpUserTable = require("../schema/userTableSchema");

 const  auth =  (req, res, next)=>  {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).send('Access denied. No token provided.');
    }
  
    jwt.verify(token,process.env.SECRET_KEY,  async (err, userId) => {
      if (err) {
        return res.status(403).send('Invalid token.');
      }
      let Id =userId.id;
      let findUser = await signUpUserTable.findOne({_id : Id});
      if(findUser) {
          next();
      }
      else{
        return res.status(400).send('user not found.');
      }
      console.log("findUser");
    });
  }

  module.exports = auth;