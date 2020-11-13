const router = require('express').Router();
const { User, Wishitem } = require('../models');

// const sequelize = require('../config/connection.js');

router.get('/', (req, res) =>
{
    console.log(req.session.id); 
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
        console.log(data.wishitems);

        // pass data to template
        res.render('main', {layout: 'fullwishlist', data});
    })
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    })
});

// router.get('/list/:id', (req, res) =>
// {

// });

module.exports = router;