const _ = require('lodash');
const Book = require('../datasources/mongo/models/Book');

async function books(author, args) {
  // const bookOfAuthor = await Book.find({
  //   author: author.id,
  // }).lean();
  // return _.map(bookOfAuthor, x => ({ ...x, id: x._id }));
  return { id: author };
}

module.exports = {
  books,
};
