const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.use((req, res) =>
{
    res.status(404).end();
    // console.log('not found');
    // console.log(req);
});

module.exports = router;