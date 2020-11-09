const { PubSub } = require('apollo-server');

const pubsub = new PubSub();

const postAdded = {
  subscribe: () => pubsub.asyncIterator(['POST_ADDED']),
};

module.exports = {
  postAdded,
};
