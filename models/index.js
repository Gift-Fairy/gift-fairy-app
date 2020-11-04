const User = require('./User.js');
const Wishlist = require('./Wishlist.js');
const Wishitem = require('./Wishitem.js');

// create associations
User.hasMany(Wishlist,
{
    foreignKey: 'userID'
});

Wishlist.belongsTo(User,
{
    foreignKey: 'userID'
});

Wishlist.hasMany(Wishitem,
{
    foreignKey: 'listID'
});

Wishitem.belongsTo(Wishlist,
{
    foreignKey: 'listID'
});

module.exports = { User, Wishlist, Wishitem };