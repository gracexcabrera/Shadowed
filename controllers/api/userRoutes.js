const router = require('express').Router();
const { where } = require('sequelize');
const { User, Profile, Tag, ProfileTag } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
    include: [Profile, {
    model: Tag,
    through: ProfileTag}]
        })
        res.json(users)
    } catch (error) {
        console.log(error)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            },
            include: [Profile, {
                model: Tag,
                through: ProfileTag}]
        })
        res.json(user)
    } catch (error) {
        console.log(error)
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const user = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json(user)
    } catch (error) {
        console.log(error)
    }
});

router.delete('/:id'), async (req, res) => {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = router;