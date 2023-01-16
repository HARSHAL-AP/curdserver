const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
 user_name:String,
 email:String,
 dOB:String,
 role:String,
 location:String,
 pass:String
})
const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}