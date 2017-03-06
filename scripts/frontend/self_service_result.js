$(document).ready(function(){
    $(function(){

        //close button hover functions
        //close button hover functions
        //close button hover functions

        $('#self_service_result_close_button').on('mouseover',  function() {
            $('#self_service_result_close_button_cross_X').css('transform', 'rotate(90deg)');
            $('#self_service_result_close_button_back').css('width', '250%');
            $('#self_service_result_close_button_text').css('opacity', '1');

        });
        $('#self_service_result_close_button').on('mouseout',  function() {
            $('#self_service_result_close_button_cross_X').css('transform', 'rotate(0deg)');
            $('#self_service_result_close_button_back').css('width', '100%');
            $('#self_service_result_close_button_text').css('opacity', '0');
        });
        //close button hover functions
        //close button hover functions
        //close button hover functions

        $('#self_service_result_close_button').on('click',  function() {
            $('#self_service_result').css('transform','translateY(5%)');
            $('#self_service_result').css('transform','translateY(100%)');
        });
    });
});