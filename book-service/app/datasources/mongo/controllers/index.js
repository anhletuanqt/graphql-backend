const author = require('./author');
const book = require('./book');

module.exports = {
  ...author,
  ...book,
}