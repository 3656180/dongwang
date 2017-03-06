$(document).ready(function(){
    $(function(){

        //close button hover functions
        //close button hover functions
        //close button hover functions

        $('#financial_advisor_close_button').on('mouseover',  function() {
            $('#financial_advisor_cross_X').css('transform', 'rotate(90deg)');
            $('#financial_advisor_close_button_close_button_back').css('width', '250%');
            $('#financial_advisor_close_button_close_button_text').css('opacity', '1');

        });
        $('#financial_advisor_close_button').on('mouseout',  function() {
            $('#financial_advisor_cross_X').css('transform', 'rotate(0deg)');
            $('#financial_advisor_close_button_close_button_back').css('width', '100%');
            $('#financial_advisor_close_button_close_button_text').css('opacity', '0');
        });
        //close button hover functions
        //close button hover functions
        //close button hover functions

        $('#financial_advisor_close_button').on('click',  function() {
            $('#main_container_4').css('transform','translateY(100%)');
            $('#main_container_0').css('transform','translateY(0%)');
        });
    });
});