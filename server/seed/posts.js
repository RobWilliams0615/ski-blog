const db = require('../db');
const Post = require('../models/post');

db.on('error', console.error.bind(console, 'DB connection error:'));

const main = async () => {
  const posts = [
    {
      username: 'DukeNukem89',
      postinfo: 'Really cool image broseph!',
      rating: '5'
    },
    {
      username: 'ToddFerguson21',
      postinfo: 'Powder here is really great',
      rating: '8'
    },
    {
      username: 'TheFowlFlutist',
      postinfo: 'extereme terrain and no AVY mitigation',
      rating: '3'
    }
  ];
  await Post.insertMany(posts);
  consolelog('Created some Posts!');
};

const run = async () => {
  await main();
  db.close();
};

run();
