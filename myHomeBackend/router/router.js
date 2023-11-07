const express =  require('express');
const { postSignUpController } = require('../controller/signupController');
const postSignInController = require('../controller/signInController');
const auth = require('../jsonwebtoken/jwtAuth');
const route = express.Router()

// define all  routes
route.post('/signUp',postSignUpController) // add user
route.post('/signIn',postSignInController)   // checkuser
route.post('/checkToken',auth,(req,res)=>{
    res.send("true")
})   

module.exports=route
