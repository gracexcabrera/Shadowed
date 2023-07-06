const router =require('express').Router();
const {Tag, Profile, ProfileTag } = require('../../models');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Tag,
                through: ProfileTag}]
        })
        res.json(profile)
    } catch (error) {
        console.log(error)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const profile = await Profile.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json(profile)
    } catch (error) {
        console.log(error)
    }
});

router.delete('/:id'), async (req, res) => {
    try {
        const profile = await Profile.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(profile)
    } catch (error) {
        console.log(error)
    }
}

module.exports = router;