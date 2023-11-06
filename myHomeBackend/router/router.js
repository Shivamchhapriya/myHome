const express =  require('express');
const { postSignUpController } = require('../controller/signupController');
const postSignInController = require('../controller/signInController');
const route = express.Router()

// define all  routes
route.post('/signUp',postSignUpController) // add user
route.post('/signIn',postSignInController)   // checkuser

module.exports=route
