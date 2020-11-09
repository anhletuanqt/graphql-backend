const Author = require('../../models/Author');

async function addAuthor({ name }) {
  try {
    const author = new Author({ name });
    await author.save();
    return {
      isSuccess: true,
      message: 'Create author successfully!',
      author,
    };
  } catch (error) {
    return {
      isSuccess: false,
      message: error.message,
    }
  }
}

module.exports = {
  addAuthor,
}