$(document).ready(function () {
    $('#profile-container').hide();
    $('#wishlist-container').hide();
});

// Check for registration event
$('#register').on('click', createProfile);

function createProfile() {
    // hide form section
    $('#form').hide();
    $('#wishlist-container').hide();
    // show profile container
    $("#profile-container").show();

    // +Create and add id for profile functionality
    $('#').on('click', function (event) {
        event.preventDefault();
        
    });

    
    // Check for click on create wishlist1
    $('#profile1').on('click', createWishlist);

    // Check for click on create wishlist2
    $('#profile2').on('click', createWishlist);
    
    // Check for click on create wishlist3
    $('#profile3').on('click', createWishlist);

    // Check for click on create wishlist4
    $('#profile4').on('click', createWishlist);

    // Check for click on create wishlist5
    $('#profile5').on('click', createWishlist);

    // Check for click on create wishlist6
    $('#profile6').on('click', createWishlist);
}

function createWishlist() {
    // hide form section + profile container
    $('#form').hide();
    $("#profile-container").show();
    // show wishlist container
    $('#wishlist-container').hide();

    // +Create and add id
    $('#').on('click', function (event) {
        event.preventDefault();
        
    });

    // Check for registration event
    $('#wishlist').on('submit', createWishlist);
}