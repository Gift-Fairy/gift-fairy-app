const { Wishitem } = require('../models'); 

const withItemData = [

{
    id: '1',
    itemName: "Shoes",
    listID: "1",
    brandName: "Reebok",
    category: "Shoes"
},
{
    id: '2',
    itemName: "Shirt",
    listID: "2",
    brandName: "Addidas",
    category: "Pants"

},
{
    id: '3',
    itemName: "Pants",
    listID: "3",
    brandName: "Nike",
    category: "Shoes"
}


];

const seedWishListItem = () => Wishitem.bulkCreate(withItemData); 

module.exports = seedWishListItem; 