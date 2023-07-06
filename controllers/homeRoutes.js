const router = require('express').Router();
// const { Profile, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        res.render("homepage")

    } catch (error) {
        res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render("login")

    } catch (error) {
        res.status(500).json(err);
    }
})

router.get('/create', withAuth, async (req, res) => {
    try {
        res.render("createprofile")

    } catch (error) {
        res.status(500).json(err);
    }
})

router.get('/profile/:id',withAuth, async (req, res) => {
    try {
        const profileData = await Profile.findByPk({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }
            ]
        });
        const profile = profileData.get({ plain: true });

        res.render('profile', {
            ...profile,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(err);
    }
})

module.exports = router