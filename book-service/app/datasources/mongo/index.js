const mongoose = require('mongoose');
const config = require('./config');

require('./models');

const controllers = require('./controllers');

mongoose.connect(config.database, config.mongoOptions, (err) => {
  if (err) {
    logger.info(`connection to database ${config.database} failed ${err}`);
  } else {
    logger.info('hello from mongodb');
  }
});


module.exports = controllers;
