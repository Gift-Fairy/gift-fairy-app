$('#user-info').click(function () {

    // input in email inbox
    var user = {};
    user.shoe = $('').val().trim();
    user.pant = $('').val().trim();
    user.shirt = $('').val().trim();
    user.brands = $('').val().trim();

    // adding user details to the wishlist
    $(function () {

    });
});

// Add item button
$("#add-item").on('click', function (event) {
    event.preventDefault();

    var categoryInput = $('#category').val().trim();
    var brand = $('#brand').val().trim();
    var product = $('#product').val().trim();

    console.log(brand, product, categoryInput);

    // add items to the wishlist
    $("<li>").html(brand + ' ' + product).addClass("panel-block").appendTo("#items");

});

// Delete item button
$("#delete").on('click', function (event) {
    event.preventDefault();

    $("<li>").html("");

});

    // Share wishlist email modal
    $("#share-btn").click(function () {
        $(".modal").addClass("is-active");
    });

    $(".modal-close").click(function () {
        $(".modal").removeClass("is-active");
    });

    // wishlist panel toggle
    $(function(){
        $('ul.li.tablinks:first').addClass('is-active');
        $('li.tablinks').click(function() {
            $('li.tablinks').removeClass('is-active');
            $(this).addClass('is-active');
            return true;
        });
        $('.tabcontent:first').show();
    });