const _ = require('lodash');
const Author = require('../../models/Author');

async function getAuthors() {
  const authors = await Author.find({}).lean();
  return _.map(authors, x => ({ ...x, id: x._id }));
}

module.exports = {
  getAuthors,
};
