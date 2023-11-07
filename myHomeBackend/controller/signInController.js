const mongoose = require("mongoose");
const postSignIn  = require("../modal/signinModal");
// const ObjectId = mongoose.Types.ObjectId;
// crete new user account
const postSignInController = async(req,res)=>{
    const {email,password}=req.body;
    const user = {email,password}
    try { 
        const data =await postSignIn(user);
        res.send(data)
    } catch (e) {
        res.send({ status: 400, message: "error" })

    }
}



module.exports = postSignInController;