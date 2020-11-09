const Book = require('../../models/Book');

async function addBook({ title, author }) {
  try {
    const book = new Book({ title, author });
    await book.save();
    return {
      isSuccess: true,
      message: 'Create book successfully!',
      book,
    };
  } catch (error) {
    return {
      isSuccess: false,
      message: error.message,
    };
  }
}

module.exports = {
  addBook,
};
