const { User } = require('../models'); 

const userData = [

{
    id: '1',
    fullName: 'Devin something',
    email: "bootcamp1@camp.com",
    password: "secret",
    dob: "05/21/1989",
},
{
    id: '2',
    fullName: 'Camp something',
    email: "bootcamp2@camp.com",
    password: "secret",
    dob: "04/21/1989",


},
{
    id: '3',
    fullName: 'Devin something',
    email: "bootcamp3@camp.com",
    password: "secret",
    dob: "02/21/1989",    
}


];

const seedUsers = () => User.bulkCreate(userData); 

module.exports = seedUsers; 