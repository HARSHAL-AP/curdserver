const mongoose = require('mongoose');
const connection =mongoose.connect(
  `mongodb+srv://harshalapsunde:harshalapsunde@cluster0.bxl4dwm.mongodb.net/userdb?retryWrites=true&w=majority`
  );
  
  
  
  module.exports={
  connection
  
  
  }