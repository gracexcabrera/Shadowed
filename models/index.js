const User = require('./User');
const Profile = require('./Profile');
const ProfileTag = require('./Profile-Tag');

User.hasOne(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Profile.belongsTo(User, {
  foreignKey: 'user_id',
});

Profile.hasMany(Tag, {
  foreignKey: 'profile_id',
  through: ProfileTag
});

Tag.hasMany(Profile, {
  foreignKey: 'tag_id',
  through: ProfileTag
})
module.exports = { User, Profile };
