let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let booksSchema = new Schema({
  Title: {
    type: String,
  },
  Subtitle: {
    type: String,
  },
  Author: {
    type: String
  },
  Description: {
    type: String
  },
  Image: {
    type: String
  },
  ID: {
    type: String
  },
});

const Book = mongoose.model('Book', booksSchema);

module.exports = Book
