$(document).ready(function () {
    $('#profile-container').hide();
    $('#wishlist-container').hide();
});

// Check for registration event
$('#personal-details').on('click', createProfile);

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