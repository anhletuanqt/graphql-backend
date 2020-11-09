const mongoose = require('mongoose');

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: String,
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
