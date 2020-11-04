const { Wishlist } = require('../models'); 

const wishListData = [

    {
        id: '1',
        listName: "Birthday",
        userID: "1",
    },
    {
        id: '2',
        listName: "Valentines",
        userID: "2",
    
    },
    {
        id: '3',
        listName: "Christmas",
        userID: "3",
    }
    
    
    ];
    
    const seedWishList = () => Wishlist.bulkCreate(wishListData); 
    
    module.exports = seedWishList; 