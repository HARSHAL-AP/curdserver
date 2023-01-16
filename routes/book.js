const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {BookModel}=require("../model/bookmodel")
const book = Router();


book.get("/get", async (req, res) => {
    let data = await BookModel.find();
    console.log(data);
    res.send(data);
});



book.post("/create", async (req, res) => {
  const payload=req.body;
  try {
    const new_book=new BookModel(payload)
    await new_book.save()
    res.send({msg:"Book Added Sucsessfuly"})
  } catch (error) {
    console.log(error)
    res.send({msg:"Somthing Went Wrong"})
  } 
});


book.patch("/editbook/:bookID", async (req, res) => {
    const bookId = req.params.bookID;
    const payload = req.body;
    try {
      const query = await BookModel.findByIdAndUpdate({ _id: bookId }, payload);
    } catch (error) {
      console.log(error);
      res.send({ err: "Somthing wend Wrong" });
    }
    res.end(`the Book with if ${bookId} has been Edited Sucsessfuly...`);
  });
  
  book.put("/updatebook/:bookID", async(req, res) => {
      const bookId = req.params.bookID;
      const payload = req.body;
      try {
        const query = await BookModel.findOneAndReplace({ _id: bookId }, payload);
      } catch (error) {
        console.log(error);
        res.send({ err: "Somthing wend Wrong" });
      }
      res.end(`the Book with if ${bookId} has been Updated Sucsessfuly...`);
  });
  
  book.delete("/removebook/:bookID", async (req, res) => {
    const bookId = req.params.bookID;
    try {
      const query = await BookModel.findByIdAndDelete({ _id: bookId });
    } catch (error) {
      console.log(error);
      res.send({ err: "Somthing wend Wrong" });
    }
  
    res.end(`the Book with if ${bookId} has been Deleted Sucsessfuly...`);
  });


module.exports={
    book
}