const router = require('express').Router();

const apiRoutes = require('./api');
const postRoutes = require('./postRoutes');
const dashboardRoutes = require('./dashboardRoutes.js');


router.use('/', postRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;
