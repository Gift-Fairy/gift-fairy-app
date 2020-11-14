const router = require('express').Router();
const { User, Wishitem } = require('../models');

// const sequelize = require('../config/connection.js');

router.get('/', (req, res) =>
{
    console.log(req.session.id);
    res.render('main', {layout: "index", loggedin: req.session.loggedin});
});

router.get('/register', (req, res) =>
{
    res.render('main', {layout: "form", loggedin: req.session.loggedin});
});

router.get('/login', (req, res) =>
{
    res.render('main', {layout: 'loginform', loggedin: req.session.loggedin});
});

router.get('/list', (req, res) =>
{
    User.findOne(
    {
        where:
        {
            id: req.session.user_id
        },
        include:
        {
            model: Wishitem,
            attributes:['id', 'brand_name', 'item_name']
        }
    })
    .then(dbUserData =>
    {
        if (!dbUserData) 
        {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        // serialize the data
        const data = dbUserData.get({ plain: true });

        // pass data to template
        res.render('main', {layout: 'fullwishlist', data});
    })
    .catch(err =>
    {
        console.log(err);
        res.render('main', {layout: 'index', loggedin: req.session.loggedin});
    });
});

router.get('/list/:id', (req, res) =>
{
    User.findOne(
    {
        where:
        {
            id: req.params.id
        },
        include:
        {
            model: Wishitem,
            attributes:['id', 'brand_name', 'item_name']
        }
    })
    .then(dbUserData =>
    {
        if (!dbUserData) 
        {
            res.render('main', {layout: 'index', loggedin: req.session.loggedin});
            return;
        }

        // serialize the data
        const data = dbUserData.get({ plain: true });

        // pass data to template
        res.render('main', {layout: 'staticwishlist', data});
    })
    .catch(err =>
    {
        console.log(err);
        res.render('main', {layout: 'index', loggedin: req.session.loggedin});
    });
});

module.exports = router;