module.exports = {
  database: process.env.DB_CONNECTION_STRING || 'mongodb://localhost/demo',
  mongoOptions: {
    autoReconnect: true,
    connectTimeoutMS: 30000,
    keepAlive: 1000,
    useNewUrlParser: true,
  },

};
