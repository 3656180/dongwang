$(document).ready(function(){
    $(function(){

        //close button hover functions
        //close button hover functions
        //close button hover functions

        $('#tax_lecture_close_button').on('mouseover',  function() {
            $('#tax_lecture_close_button_cross_X').css('transform', 'rotate(90deg)');
            $('#tax_lecture_close_button_back').css('width', '250%');
            $('#tax_lecture_close_button_text').css('opacity', '1');

        });
        $('#tax_lecture_close_button').on('mouseout',  function() {
            $('#tax_lecture_close_button_cross_X').css('transform', 'rotate(0deg)');
            $('#tax_lecture_close_button_back').css('width', '100%');
            $('#tax_lecture_close_button_text').css('opacity', '0');
        });
        //close button hover functions
        //close button hover functions
        //close button hover functions

        $('#tax_lecture_close_button').on('click',  function() {
            $('#main_container_3').css('transform','translateY(100%)');
            $('#main_container_0').css('transform','translateY(0%)');
        });
    });
});