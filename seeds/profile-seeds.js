const { Profile } = require('../models');

const profileData = [
  {
    profile_name: 'Cecilia Ryan',
    bio: 'Animal lover 🐶🐱 and nature enthusiast 🌳',
    gender: 'female',
    sexuality: 'straight',
    likes: 32,
    user_id: 1,
  },
  {
    profile_name: '',
    bio: 'Pastry chef 🧁and coffee enthusiast ☕',
    gender: '',
    sexuality: 'pansexual',
    likes: 28,
    user_id: 2,
  },
  {
    profile_name: '',
    bio: 'Not looking for a partner, just looking to connect with people and make new friends!',
    gender: 'female',
    sexuality: 'asexual',
    likes: 15,
    user_id: 3,
  },
  {
    profile_name: '',
    bio: 'Looking for someone to watch every Harry Potter movie with',
    gender: 'non-binary',
    sexuality: 'bisexual',
    likes: 30,
    user_id: 4,
  },
  {
    profile_name: '',
    bio: 'Im not really good at bios 🤷‍♂️',
    gender: 'male',
    sexuality: 'straight',
    likes: 5,
    user_id: 5,
  },
];

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;
