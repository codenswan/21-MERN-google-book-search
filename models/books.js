let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let booksSchema = new Schema({
  Author: {
    type: Array,
  },
  Description: {
    type: String,
  },
  ID: {
    type: String,
  },
  Image: {
    type: String,
  },
  Link: {
    type: String,
  },
  Subtitle: {
    type: String,
  },
  Title: {
    type: String,
  },
  //* "Saved" added here as an additional method (alongside id) to display saved books in the single Bookstable component 
  Saved: {
    type: Boolean,
    default: true,
  },
});

const Book = mongoose.model('Book', booksSchema);

module.exports = Book;
