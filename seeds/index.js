const seedUsers = require('./user-seeds');
const seedProfiles = require('./profile-seeds');
const seedTags = require('./tag-seeds');
const seedProfileTags = require('./profile-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
      await sequelize.sync({ force: true });
      console.log('\n----- DATABASE SYNCED -----\n');
      await seedUsers();
      console.log('\n----- USERS SEEDED -----\n');

      await seedProfiles();
      console.log('\n----- PROFILES SEEDED -----\n');

      await seedTags();
      console.log('\n----- TAGS SEEDED -----\n');

      await seedProfileTags();
      console.log('\n----- PROFILE TAGS SEEDED -----\n');

      process.exit(0);
};

seedAll();