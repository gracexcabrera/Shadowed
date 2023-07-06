const router = require('express').Router();
// const { where } = require('sequelize');
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
// sign up route
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body)
        req.session.save(()=>{
            req.session.user_id= user.id
            req.session.logged_in = true
            res.json(user)
        })
    } catch (error) {
        console.log(error)
    }
})

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

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