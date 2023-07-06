const { ProfileTag } = require('../models');

const profileTagData = [
  {
    profile_id: 1,
    tag_id: 6,
  },
  {
    profile_id: 2,
    tag_id: 11,
  },
  {
    profile_id: 3,
    tag_id: 4,
  },
  {
    profile_id: 4,
    tag_id: 7,
  },
  {
    profile_id: 5,
    tag_id: 9,
  },
];

const seedProfileTags = () => ProfileTag.bulkCreate(profileTagData);

module.exports = seedProfileTags;
