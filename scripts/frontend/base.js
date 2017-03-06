

$(document).ready(function() {
    //var sidebarWidth = $('#menu').outerWidth();
    //hover menu button
    //hover menu button
    //hover menu button
    $('#Menu_button').on('mouseover', function() {

        $('#hamburger').css('transform', 'rotate(90deg)');
        $('#Menu_button_menu').css('width', '250%');
        $('#menu_text').css('opacity', '1');

    });
    $('#Menu_button').on('mouseout', function() {

        $('#hamburger').css('transform', 'rotate(0deg)');
        $('#menu_text').css('opacity', '0');
        $('#Menu_button_menu').css('width', '100%');

    });
    //hover menu button
    //hover menu button
    //hover menu button

    //hover 365 financial button
    //hover 365 financial button
    //hover 365 financial button
    $('#365_financial_button').on('mouseover', function() {

        $('#365_financial_button').css('opacity', '0.8');
        $('#365_financial_icon').css('width', '450%');
        $('#365_financial_icon_text').css('display', 'block');
        $('#365_financial_icon_text').css('opacity', '1');

    });
    $('#365_financial_button').on('mouseout', function() {

        $('#365_financial_button').css('opacity', '0.5');
        $('#365_financial_icon_text').css('display', 'none');
        $('#365_financial_icon_text').css('opacity', '0');
        $('#365_financial_icon').css('width', '100%');

    });
    //hover 365 financial button
    //hover 365 financial button
    //hover 365 financial button

    //hover login button
    //hover login button
    //hover login button
    $('#login_button').on('mouseover', function() {

        $('#login_button').css('opacity', '0.8');
        $('#login_button_back').css('width', '250%');
        $('#login_text').css('opacity', '1');

    });
    $('#login_button').on('mouseout', function() {

        $('#login_button').css('opacity', '1');
        $('#login_text').css('opacity', '0');
        $('#login_button_back').css('width', '100%');

    });
    //hover login button
    //hover login button
    //hover login button



    //hover contact us button
    //hover contact us button
    //hover contact us button
    $('#contact_us_button').on('mouseover',  function() {
        $('#contact_us_button').css('opacity', '0.9');
        $('#contact_us_button').css('width', '15vw');
        $('#contact_us_button').css('transform', 'translateX(2.5vw)');


    });
    $('#contact_us_button').on('mouseout',  function() {
        $('#contact_us_button').css('opacity', '0.7');
        $('#contact_us_button').css('width', '10vw');
        $('#contact_us_button').css('transform', 'translateX(0%)');
    });
    //hover contact us button
    //hover contact us button
    //hover contact us button


    //click contact us button
    //click contact us button
    //click contact us button
    $('#contact_us_button').on('click',  function() {
        $('#contact_us_page').css('transform', 'translateY(0%)');
    });

    //click contact us button
    //click contact us button
    //click contact us button

    //open or back to menu page by click menu button
    $('.main_header').on('click', '#Menu_button', function() {

        $('#menu').css('transform', 'translate3d(0px,0px,0px)');
        $('#add_customer').css('transform', 'translate3d(-100%,0px,0px)');
        $('#login_page').css('transform', 'translate3d(100%,0px,0px)');
        $('#contact_us_page').css('transform', 'translateY(-100%)');
        $('#system_manage_page').css('transform', 'translate3d(-100%,0px,0px)');

        //$('#home-page').css(' overflow-x: hidden');

    });



    //back to menu page by click close button in add customer page
    $('#add_customer').on('click', '#add_customer_close_button', function() {

        $('#add_customer').css('transform', 'translate3d(-100%,0px,0px)');
        $('#menu').css('transform', 'translate3d(0px,0px,0px)');

    });
    //back to homepage by click home-page button
    $('.main_header').on('click', '#365_financial_button', function() {
        //menu page or login page displayed case
        $('#menu').css('transform', 'translate3d(-100%,0px,0px)');
        $('#login_page').css('transform', 'translate3d(100%,0px,0px)');
        $('#contact_us_page').css('transform', 'translateY(-100%)');

        //
        //-------
        $('#main_container_0').css('transform','translateY(0%)');
        $('#main_container_1').css('transform','translateY(100%)');
        //-------
        $('#main_container_2').css('transform','translateY(100%)');
        //-------
        $('#main_container_3').css('transform','translateY(100%)');
        //-------
        $('#main_container_4').css('transform','translateY(100%)');
        //
        var position =$('#menu').css('-webkit-transform');

        //add customer page displayed case
        if(position!="matrix(1, 0, 0, 1, 0, 0)"){
            $('#menu').css('display', 'none');
            $('#add_customer').css('transform', 'translate3d(-100%,0px,0px)');
            $('#menu').css('transform', 'translate3d(-100%,0px,0px)');
            $('#system_manage_page').css('transform', 'translate3d(-100%,0px,0px)');

            setTimeout(function() {
                $('#menu').css('display', 'block');
            }, 600);
        }
    });
    //open login page when click login button
    $('.main_header').on('click', '#login_button', function() {
        $('#contact_us_page').css('transform', 'translateY(-100%)');
        $('#login_page').css('transform', 'translate3d(0px,0px,0px)');
        $('#menu').css('transform', 'translate3d(-100%,0px,0px)');
        //$('#add_customer').css('transform', 'translate3d(-100%,0px,0px)');
        //$('#home-page').css(' overflow-x: hidden');
        //add customer page displayed case
        var position =$('#menu').css('-webkit-transform');
        if(position!="matrix(1, 0, 0, 1, 0, 0)") {
            $('#menu').css('display', 'none');
            $('#add_customer').css('transform', 'translate3d(-100%,0px,0px)');
            $('#menu').css('transform', 'translate3d(-100%,0px,0px)');
            setTimeout(function () {
                $('#menu').css('display', 'block');
            }, 600);
        }
    });


});


 
