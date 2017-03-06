$(document).ready(function(){
    $(function(){

    //close button hover functions
    //close button hover functions
    //close button hover functions

            $('#contact_us_close_button').on('mouseover',  function() {
                $('#contact_us_close_button_cross_X').css('transform', 'rotate(90deg)');
                $('#contact_us_close_button_back').css('width', '250%');
                $('#contact_us_close_button_text').css('opacity', '1');

            });
            $('#contact_us_close_button').on('mouseout',  function() {
                $('#contact_us_close_button_cross_X').css('transform', 'rotate(0deg)');
                $('#contact_us_close_button_back').css('width', '100%');
                $('#contact_us_close_button_text').css('opacity', '0');
            });
    //close button hover functions
    //close button hover functions
    //close button hover functions

            $('#contact_us_close_button').on('click',  function() {
                $('#contact_us_page').css('transform', 'translateY(-100%)');
            });
    });
});