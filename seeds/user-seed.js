const { User } = require('../models'); 

const userData = [

{
    id: '1',
    firstName: "Devin",
    lastName: "Tony",
    email: "bootcamp1@camp.com",
    password: "secret",
    dob: "05/21/1989",
},
{
    id: '2',
    firstName: "Devin2",
    lastName: "Tony2",
    email: "bootcamp2@camp.com",
    password: "secret",
    dob: "04/21/1989",


},
{
    id: '3',
    firstName: "Devin3",
    lastName: "Tony3",
    email: "bootcamp3@camp.com",
    password: "secret",
    dob: "02/21/1989",
    
}


];

const seedUsers = () => User.bulkCreate(userData); 

module.exports = seedUsers; 