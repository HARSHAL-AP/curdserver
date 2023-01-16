const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/usermodel");
const user = Router();

user.get("/user", async (req, res) => {
  let data = await UserModel.find();
  console.log(data);
  res.send(data);
});
user.get("/admin", async (req, res) => {
  let data = await UserModel.find();
  console.log(data);
  res.send(data);
});

user.post("/register", async (req, res) => {
  let { email, pass, user_name, dOB, location } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, secured_password) => {
      if (err) {
        console.log(err);
      } else {
        const newuser = new UserModel({
          email,
          pass: secured_password,
          user_name,
          dOB,
          location,
        });
        await newuser.save();
        console.log(newuser);
        res.send({msg:"USer added sucsessfully"});
      }
    });
  } catch (error) {
    res.send("Error i registering the useer");
    console.log(error);
  }
});

user.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, (err, result) => {
        if (result) {
          var token = jwt.sign({ cource: "backend" }, "masai");
          res.send({ msg: "Login Sucsessfull", token: token , uid:{...user}});
        } else {
          res.send({msg:"Wrog Credintial"});
        }
      });
    } else {
      res.send({msg:"Wrog Credintial"});
    }
  } catch (error) {
    res.send({msg:"Wrog Credintial"});
    console.log(error);
  }
  
});

module.exports = user;
