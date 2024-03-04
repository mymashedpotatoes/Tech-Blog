const router = require('express').Router();

const apiRoutes = require('./api');
const postRoutes = require('./postRoutes');

router.use('/', postRoutes);
router.use('/api', apiRoutes);

module.exports = router;
