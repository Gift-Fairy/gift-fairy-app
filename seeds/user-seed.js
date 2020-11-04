const { User } = require('../models'); 

const userData = [

{
    id: '1',
    email: "bootcamp1@camp.com",
    password: "secret",
},
{
    id: '2',
    email: "bootcamp2@camp.com",
    password: "secret",

},
{
    id: '3',
    email: "bootcamp3@camp.com",
    password: "secret",
}


];

const seedUsers = () => User.bulkCreate(userData); 

module.exports = seedUsers; 