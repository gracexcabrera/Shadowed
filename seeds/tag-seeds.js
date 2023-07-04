const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'traveling',
  },
  {
    tag_name: 'exercise',
  },
  {
    tag_name: 'cooking',
  },
  {
    tag_name: 'music',
  },
  {
    tag_name: 'photography',
  },
  {
    tag_name: 'pets',
  },
  {
    tag_name: 'movies',
  },
  {
    tag_name: 'art',
  },
  {
    tag_name: 'politics',
  },
  {
    tag_name: 'outdoors',
  },
  {
    tag_name: 'baking',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
