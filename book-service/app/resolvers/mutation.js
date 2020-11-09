const { PubSub } = require('apollo-server');

const pubsub = new PubSub();

async function addAuthor(parent, { input }, { dataSources }, info) {

  const { mongo } = dataSources;
  const response = await mongo.addAuthor(input);
  // pubsub.publish('POST_ADDED', { postAdded: response.post });
  return response;
}

async function addBook(parent, { input }, { dataSources }) {
  const { mongo } = dataSources;
  const response = await mongo.addBook(input);
  return response;
}

module.exports = {
  addAuthor,
  addBook,
};
