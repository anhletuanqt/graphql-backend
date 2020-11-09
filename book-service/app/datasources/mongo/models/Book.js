const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'author',
  },
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;
