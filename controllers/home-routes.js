const router = require('express').Router();
const nodemailer = require('nodemailer');

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

router.post('/email', (req, res) =>
{
    let email = req.body.email;
    let link = req.body.link;
    let name = req.body.name;

    let transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:
        {
            user: 'giftfairy.nodemail@gmail.com',
            pass: 'p2t4-giftfairy'
        }
    });

    let message = 
    {
        from: 'giftfairy.nodemail@gmail.com',
        to: email,
        subject: `Gift Fairy: ${name} has shared their wishlist with you`,
        text: link
    };

    transporter.sendMail(message, (err, data) =>
    {
        if(err)
        {
            console.log('Error: ', err);
            res.sendStatus(400).json();
        }
        else
        {
            console.log('Success');
            res.send(200);
        }
    });
});

// router.get('/login', (req, res) =>
// {
//     res.render('main', {layout: 'form'});
// });

module.exports = router;