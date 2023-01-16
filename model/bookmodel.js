const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  rating: Number,
  lang: String,
  type: String,
  author: String,
});

const BookModel = mongoose.model("movie", bookSchema);

module.exports = {
  BookModel,
};
