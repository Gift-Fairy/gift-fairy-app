const router = require('express').Router();
const { User } = require('../models');

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
    res.render('main', {layout: 'loginform'});
});

// router.get('/list/:id', (req, res) =>
// {

// });

module.exports = router;