$(document).ready(function() {
//close  login page by click close button in  login page
$('#login_page').on('click', '#login_close_button', function() {

    $('#login_page').css('transform', 'translate3d(100%,0px,0px)');

});
//close button hover functions
//close button hover functions
//close button hover functions
$('#login_close_button').on('mouseover',  function() {
    $('#login_close_cross_X').css('transform', 'rotate(90deg)');
    $('#login_close_button_back').css('width', '250%');
    $('#login_close_text').css('opacity', '1');

});
$('#login_close_button').on('mouseout',  function() {
    $('#login_close_cross_X').css('transform', 'rotate(0deg)');
    $('#login_close_button_back').css('width', '100%');
    $('#login_close_text').css('opacity', '0');
});
//close button hover functions
//close button hover functions
//close button hover functions
});
