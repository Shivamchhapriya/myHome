const mongoose = require("mongoose");
const signUpUserTable = require("../schema/userTableSchema");
// const ObjectId = mongoose.Types.ObjectId;
// crete new user account
const postSignInController = async(req,res)=>{
    const {email,password}=req.body;
    const user = {email,password}
console.log(user)
var login = await signUpUserTable.findOne({email:user.email})
    if(login.password === user.password && login.email === user.email){
        console.log('1111')
        res.send (login)
    }else{
        res.send ("not found")

    }
}



module.exports = postSignInController;