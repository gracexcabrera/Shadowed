const router = require('express').Router();

// const apiRoutes = require('./api');
const homeroutes = require('./homeRoutes');

// router.use('/api', apiRoutes);
router.use('/', homeroutes)

module.exports = router;
