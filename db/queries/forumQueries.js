const Forum = require('../schemas/forumSchema');

const createForum = async (obj, id) => {
  const createdForum = new Forum({
    bug: id,
    title: obj.title,
    author: {
      name: obj.author.name,
      profilePicture: obj.author.profilePicture,
    },
    description: obj.description,
    posts: [],
  });

  try {
    await createdForum.save();
  } catch (err) {
    console.error(err);
  }
};

const addForumPost = async (obj, id) => {
  try {
    await Forum.findOneAndUpdate({ bug: id }, { $push: { posts: obj } });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createForum,
  addForumPost,
};
