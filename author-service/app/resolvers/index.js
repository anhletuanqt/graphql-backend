const queryResolver = require('./query');
const mutationResolver = require('./mutation');
const authorResolver = require('./author');

module.exports = {
  Query: queryResolver,
  Mutation: mutationResolver,
  Author: authorResolver,
};
