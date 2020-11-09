async function __resolveReference(author, { loaders }) {
  const { authorLoader } = loaders;
  const oneAuthor = await authorLoader.load(author.id);
  return {
    ...oneAuthor,
    id: oneAuthor._id,
  };
}

module.exports = {
  __resolveReference,
};
