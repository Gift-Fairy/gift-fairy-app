const router = require('express').Router();
// const sequelize = require('../config/connection.js');

router.get('/', (req, res) =>
{
    console.log(req.session); 
    res.render('main', {layout: "index"});
});

router.get('/register', (req, res) =>
{
    res.render('main', {layout: "form"});
});

router.get('/login', (req, res) =>
{
    res.render('main', {layout: 'form'});
});

module.exports = router;