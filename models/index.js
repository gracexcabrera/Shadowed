const User = require('./User');
const Profile = require('./Profile');
const ProfileTag = require('./Profile-Tag');
const Tag = require('./Tag')

User.hasOne(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Profile.belongsTo(User, {
  foreignKey: 'user_id',
});

Profile.belongsToMany(Tag, {
  foreignKey: 'profile_id',
  through: ProfileTag
});

Tag.belongsToMany(Profile, {
  foreignKey: 'tag_id',
  through: ProfileTag
})
module.exports = { User, Profile, ProfileTag, Tag };
