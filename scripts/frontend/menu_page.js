

$(document).ready(function() {


    //close menu by click close button in menu page
    $('#menu').on('click', '#menu_close_button', function() {

        $('#menu').css('transform', 'translate3d(-100%,0px,0px)');
    });

    //hover close button in menu page
    //hover close button in menu page
    //hover close button in menu page
    $('#menu_close_button').on('mouseover',  function() {
        $('#cross_X').css('transform', 'rotate(90deg)');
        $('#menu_close_button_back').css('width', '250%');
        $('#menu_close_text').css('opacity', '1');

    });
    $('#menu_close_button').on('mouseout',  function() {
        $('#cross_X').css('transform', 'rotate(0deg)');
        $('#menu_close_button_back').css('width', '100%');
        $('#menu_close_text').css('opacity', '0');

    });
    //hover close button in menu page
    //hover close button in menu page
    //hover close button in menu page


    //open customer information input page by click add customer button in menu page
    $('#menu').on('click', '#add_customer_button', function() {

        $('#add_customer').css('transform', 'translate3d(0px,0px,0px)');
        $('#menu').css('transform', 'translate3d(100%,0px,0px)');

    });
    //open system manage page
    $('#menu').on('click', '#manage_email_button', function() {

        $('#system_manage_page').css('transform', 'translate3d(0px,0px,0px)');
        $('#menu').css('transform', 'translate3d(100%,0px,0px)');

    });
    //hover close button in customer information input page
    //hover close button in customer information input page
    //hover close button in customer information input page
    $('#add_customer_close_button').on('mouseover',  function() {
        $('#cross_X_addpage').css('transform', 'rotate(90deg)');
        $('#add_customer_button_back').css('width', '250%');
        $('#add_customer_close_text').css('opacity', '1');

    });
    $('#add_customer_close_button').on('mouseout',  function() {
        $('#cross_X_addpage').css('transform', 'rotate(0deg)');
        $('#add_customer_button_back').css('width', '100%');
        $('#add_customer_close_text').css('opacity', '0');

    });
    //hover close button in customer information input page
    //hover close button in customer information input page
    //hover close button in customer information input page



});



