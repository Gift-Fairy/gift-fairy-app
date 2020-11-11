
$(document).ready(function () {
    // hidden elements
    $('#form').show();
    $('#wishlist-container').hide();
    $('#testemail').hide();

    $('#register').on('click', function (event) {
    
    $('#form').hide();
    $('#wishlist-container').show();
    $('#testemail').hide();



        // category input
        $('#cat-btn').on('click', function (event) {
            event.preventDefault();

            var cat0 = $('#cat0').val().trim();
            var cat1 = $('#cat1').val().trim();
            var cat2 = $('#cat2').val().trim();

            console.log(cat0, cat1, cat2);

            if (cat0 != null) { $("#catorigin0").val('').replaceWith(cat0) } else { $("#origin0").hide() };
            if (cat1 != null) { $("#catorigin1").val('').replaceWith(cat1) } else { $("#origin1").hide() };
            if (cat2 != null) { $("#catorigin2").val('').replaceWith(cat2) } else { $("#origin2").hide() };

            createWishlist();

        });
    });

});

function createWishlist() {    // get input from personal preferences section
    $('#details-info').click(function () {

        var user = {};
        user.shoe = $('').val().trim();
        user.pant = $('').val().trim();
        user.shirt = $('').val().trim();
        user.brands = $('').val().trim();

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

        function toggleModalClasses(event) {
            var modalId = event.currentTarget.dataset.modalId;
            var modal = $(modalId);
            modal.toggleClass('is-active');
            $('html').toggleClass('is-clipped');
        };

        $('.save-wishlist').click(toggleModalClasses);
        $('.close-modal').click(toggleModalClasses);

    });

    // // delete items
    // let item = document.querySelector('.panel-block');

    // item.addEventListener('click', () => {
    //     (item.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    //       var $notification = $delete.parentNode;

    //       $delete.addEventListener('click', () => {
    //         $notification.parentNode.removeChild($notification);
    //       });
    //     });
