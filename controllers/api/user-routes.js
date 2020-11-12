const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Wishitem } = require('../../models');

//get all users
router.get('/', (req, res) => 
{
  User.findAll(
  {
    attributes: { exclude: ['password'] }
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => 
  {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/wish/:id', (req, res) =>
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
      attributes: 
      [
        'brand_name',
        'item_name'
      ]
    }
  })
  .then(dbUserData =>
  {
    res.json(dbUserData);
  })
  .catch(err =>
  {
    res.status(500).json(err);
  });
});
  
// post a new user
router.post('/', (req, res) => {
  // expects 
  User.create(
  {
    full_name: req.body.full_name,
    email: req.body.email,
    password: req.body.password,
    dob: req.body.dob
  })
  .then(dbUserData => 
  {
    req.session.save(() => 
    {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;
      res.json(dbUserData);
    });
  })
  .catch(err => 
  {
    console.log(err);
    res.status(500).json(err);
  });
});

//login route 
router.post('/login', (req, res) => {
    // expects {email, and password}
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'Invalid Credentials' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Invalid Credentials!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;
    
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

//log out route 
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).json({ message: 'Logged Out' }).end();
    }
  });
  
  //update route 

  router.put('/:id', (req, res) => {
  
//updating whats passed through 
    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'Invalid Credentials' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



  module.exports = router;
