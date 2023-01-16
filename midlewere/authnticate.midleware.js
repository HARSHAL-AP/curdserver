const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authanticate=(req,res,next)=>{
  const token=req.headers.authorization
  if(token){
    const decode=jwt.verify(token,"masai")
    if(decode){
        next()
    }
    else{
        res.send("Please Login First...")
    }
  }
  else{

    res.send("Please Login First")
  }
}


module.exports={

    authanticate
}