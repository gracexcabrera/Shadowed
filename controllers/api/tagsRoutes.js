
const router =require('express').Router();
const {Tag, Profile, ProfileTag } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const tags = await Tag.findAll({
            include: [{
                model: Profile,
                through: ProfileTag
            }]
        })
        res.json(tags)
    } catch (error) {
        console.log(error)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tag = await Tag.findOne({
          where: {
            id: req.params.id
          },
          include: [{
            model: Profile,
            through: ProfileTag
          }]
        })
        res.json(tag)
      } catch (error) {
        console.log(error)
      }
});

router.post('/', async (req, res) => {
    try {
      const tag = await Tag.create(req.body)
      res.json(tag)
    } catch (error) {
      console.log(error)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const tag = await Tag.update(req.body, {
        where: {
          id: req.params.id
        },
      })
      res.json(tag)
    } catch (error) {
      console.log(error)
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete on tag by its `id` value
    try {
      const tag = await Tag.destroy({
        where: {
          id: req.params.id
        },
      })
      res.json(tag)
    } catch (error) {
      console.log(error)
    }
  });
  
  module.exports = router;
  