const { Profile } = require('../models');

const profileData = [
    {

    },
];

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;
