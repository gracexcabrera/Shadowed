const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tagRoutes = require('./tagsRoutes');

router.use('/users', userRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
