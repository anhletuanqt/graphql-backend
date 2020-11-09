const { PubSub } = require('apollo-server');
const queryResolver = require('./query');
const mutationResolver = require('./mutation');
const bookResolver = require('./book');
const authorResolver = require('./author');

module.exports = {
  Query: queryResolver,
  Mutation: mutationResolver,
  Book: bookResolver,
  Author: authorResolver,
};
