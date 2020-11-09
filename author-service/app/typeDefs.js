/* eslint global-require:off, import/no-dynamic-require:off */

const requireGraphQLFile = require('require-graphql-file');

const fs = require('fs');
const path = require('path');

const typeDefs = [];
const typesPath = path.join(__dirname, '/schemas/types');
fs.readdirSync(typesPath).forEach((file) => {
  typeDefs.push(requireGraphQLFile(`./schemas/types/${file}`));
});

const inputsPath = path.join(__dirname, '/schemas/inputs');
fs.readdirSync(inputsPath).forEach((file) => {
  typeDefs.push(requireGraphQLFile(`./schemas/inputs/${file}`));
});

const mutationsPath = path.join(__dirname, '/schemas/mutations');
fs.readdirSync(mutationsPath).forEach((file) => {
  typeDefs.push(requireGraphQLFile(`./schemas/mutations/${file}`));
});

const queriesPath = path.join(__dirname, '/schemas/queries');
fs.readdirSync(queriesPath).forEach((file) => {
  typeDefs.push(requireGraphQLFile(`./schemas/queries/${file}`));
});

const responsesPath = path.join(__dirname, '/schemas/responses');
fs.readdirSync(responsesPath).forEach((file) => {
  typeDefs.push(requireGraphQLFile(`./schemas/responses/${file}`));
});

module.exports = typeDefs;
