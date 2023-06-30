const { Tag } = require('../models');

const tagData = [
    {

}
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
