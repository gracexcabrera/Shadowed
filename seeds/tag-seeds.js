const { Tag } = require('../models');

const tagData = [
  {
    name: 'traveling',
  },
  {
    name: 'exercise',
  },
  {
    name: 'cooking',
  },
  {
    name: 'music',
  },
  {
    name: 'photography',
  },
  {
    name: 'pets',
  },
  {
    name: 'movies',
  },
  {
    name: 'art',
  },
  {
    name: 'politics',
  },
  {
    name: 'outdoors',
  },
  {
    name: 'baking',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
