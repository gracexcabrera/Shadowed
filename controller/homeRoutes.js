const router = require('express').Router();
const { Profile, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/profile/:id', async (req, res) => {
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