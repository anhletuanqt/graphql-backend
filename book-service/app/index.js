require('./global');

const { ApolloServer, gql } = require('apollo-server-express');
const { buildFederatedSchema } = require('@apollo/federation');
const express = require('express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const dataSources = require('./datasources');
const loaders = require('./datasources/mongo/loaders');

const app = express();

const server = new ApolloServer({
  schema: buildFederatedSchema([{
    typeDefs: gql`${typeDefs}`,
    resolvers,
  }]),
  dataSources,
  context: {
    loaders,
  },
  formatError: (error) => {
    logger.error(error);
    return error;
  },
  playground: true,
});

server.applyMiddleware({ app });

const port = 6777;
app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  // console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`);
});
