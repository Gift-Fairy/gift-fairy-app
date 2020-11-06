const { Wishitem } = require('../models'); 

const withItemData = [

{
    id: '1',
    itemName: "Shoes",
    listID: "1",
},
{
    id: '2',
    itemName: "Shirt",
    listID: "2",

},
{
    id: '3',
    itemName: "Pants",
    listID: "3",
}


];

const seedWishListItem = () => Wishitem.bulkCreate(withItemData); 

module.exports = seedWishListItem; 