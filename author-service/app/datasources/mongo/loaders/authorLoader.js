const _ = require('lodash');
const DataLoader = require('dataloader');
const Author = require('../models/Author');

async function batchAuthorById(keys) {
  const authors = await Author.find({
    _id: { $in: keys },
  }).lean();

  const authorList = _.map(keys, key => {
    const author = _.find(authors, x => x._id.toString() === key);
    return author;
  });

  return authorList;
}

const authorLoader = new DataLoader(keys => batchAuthorById(keys));

module.exports = authorLoader;
