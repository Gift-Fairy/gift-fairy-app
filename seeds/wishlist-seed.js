const { Wishlist } = require('../models'); 

const wishListData = 
[
    {
        id: '1',
        user_id: "1",
    },
    {
        id: '2',
        user_id: "2",
    },
    {
        id: '3',
        user_id: "3",
    }
];

const seedWishList = () => Wishlist.bulkCreate(wishListData); 

module.exports = seedWishList; 