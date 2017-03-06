$(document).ready(function(){

    var isInsuranceQuoteDisplay=0;
    var isInsuranceInputDisplay=0;
    var isInsuranceResultDisplay=0;



    $(function(){//insurance select page fucntions


        $('#select_insurance_type_div_close_button').on("click", function() {
            $('#main_container_1').css('transform','translateY(100%)');
            $('#main_container_0').css('transform','translateY(0%)');

        });

        //life insurance button
        //life insurance button
        //life insurance button
        $('#life_insurance_button_div').on("click", function() {
            $('#insurance_quote_0').css('transform','translateY(5%)');
            setTimeout(function() {
                isInsuranceInputDisplay=1;
            }, 10);
        });
        //life insurance button
        //life insurance button
        //life insurance button




        //select insurance page clicked main header is rendered here, because select insurance page is covered by the main header
        //select insurance page clicked main header is rendered here, because select insurance page is covered by the main header
        //select insurance page clicked main header is rendered here, because select insurance page is covered by the main header
        $('#main_header').on("click", function() {
            if(isInsuranceInputDisplay==1){
                $('#insurance_quote_0').css('transform','translateY(100%)');
                isInsuranceInputDisplay=0;
            }
            if(isInsuranceResultDisplay==1){
                $('#insurance_quote_0_result').css('transform','translateY(100%)');
                isInsuranceResultDisplay=0;
            }
        });
        //select insurance page clicked main header is rendered here, because select insurance page is covered by the main header
        //select insurance page clicked main header is rendered here, because select insurance page is covered by the main header
        //select insurance page clicked main header is rendered here, because select insurance page is covered by the main header

        //life insurance button div hover functions
        //life insurance button div hover functions
        //life insurance button div hover functions
        $('#life_insurance_button_div').on("mouseover", function() {
            //$('#life_insurance_button').css('transform','translateY(20%)');
        });
        $('#life_insurance_button_div').on("mouseout", function() {
            //$('#life_insurance_button').css('transform','translateY(65%)');
        });
        //life insurance button div hover functions
        //life insurance button div hover functions
        //life insurance button div hover functions

        //group insurance button div hover functions
        //group insurance button div hover functions
        //group insurance button div hover functions
        $('#group_insurance_button_div').on("mouseover", function() {
            //$('#group_insurance_button').css('transform','translateY(20%)');
        });
        $('#group_insurance_button_div').on("mouseout", function() {
            //$('#group_insurance_button').css('transform','translateY(65%)');
        });
        //group insurance button div hover functions
        //group insurance button div hover functions
        //group insurance button div hover functions

        //illness insurance button div hover functions
        //illness insurance button div hover functions
        //illness insurance button div hover functions
        $('#illness_insurance_button_div').on("mouseover", function() {
            //$('#illness_insurance_button').css('transform','translateY(20%)');
        });
        $('#illness_insurance_button_div').on("mouseout", function() {
            //$('#illness_insurance_button').css('transform','translateY(65%)');
        });
        //illness insurance button div hover functions
        //illness insurance button div hover functions
        //illness insurance button div hover functions

        //general insurance button div hover functions
        //general insurance button div hover functions
        //general insurance button div hover functions
        $('#general_insurance_button_div').on("mouseover", function() {
            //$('#general_insurance_button').css('transform','translateY(20%)');
        });
        $('#general_insurance_button_div').on("mouseout", function() {
            //$('#general_insurance_button').css('transform','translateY(65%)');
        });
        //general insurance button div hover functions
        //general insurance button div hover functions
        //general insurance button div hover functions


        //close select insurance type page close button hover functions
        //close select insurance type page close button hover functions
        //close select insurance type page close button hover functions
        $('#select_insurance_type_div_close_button').on('mouseover',  function() {
            $('#select_insurance_type_div_close_button_cross_X').css('transform', 'rotate(90deg)');
            $('#select_insurance_type_div_close_button_back').css('width', '250%');
            $('#select_insurance_type_div_close_text').css('opacity', '1');

        });
        $('#select_insurance_type_div_close_button').on('mouseout',  function() {
            $('#select_insurance_type_div_close_button_cross_X').css('transform', 'rotate(0deg)');
            $('#select_insurance_type_div_close_button_back').css('width', '100%');
            $('#select_insurance_type_div_close_text').css('opacity', '0');
        });
        //close select insurance type page close button hover functions
        //close select insurance type page close button hover functions
        //close select insurance type page close button hover functions

    });


    $(function(){//life insurance page functions

        $('#insurance_quote_0_close_button').on("click", function() {
            $('#insurance_quote_0').css('transform','translateY(100%)');
            isInsuranceInputDisplay=0;
        });


        //life insurance submit button
        //life insurance submit button
        //life insurance submit button
        $('#insurance_quote_0_submit_button').on("click", function() {
            $('#insurance_quote_0_result').css('transform','translateY(10%)');
            setTimeout(function() {
                isInsuranceResultDisplay=1;
            }, 10);
        });
        //life insurance submit button
        //life insurance submit button
        //life insurance submit button




        //life insurance page clicked
        //life insurance page clicked
        //life insurance page clicked
        $('#insurance_quote_0').on("click", function() {
            if(isInsuranceResultDisplay==1){
                $('#insurance_quote_0_result').css('transform','translateY(100%)');
                isInsuranceResultDisplay=0;
            }
        });
        //life insurance page clicked
        //life insurance page clicked
        //life insurance page clicked



    });

    $(function(){//quote result function
        //life insurance close
        //life insurance close
        //life insurance close
        $('#insurance_quote_0_result_close_button').on("click", function() {
            isInsuranceResultDisplay=0;
            $('#insurance_quote_0_result').css('transform','translateY(100%)');

        });
        //life insurance close
        //life insurance close
        //life insurance close


        //close quote result page close button hover functions
        //close quote result page close button hover functions
        //close quote result page close button hover functions
        $('#insurance_quote_0_result_close_button').on('mouseover',  function() {
            $('#insurance_quote_0_result_close_button_cross_X').css('transform', 'rotate(90deg)');
            $('#insurance_quote_0_result_close_button_back').css('width', '250%');
            $('#insurance_quote_0_result_close_text').css('opacity', '1');

        });
        $('#insurance_quote_0_result_close_button').on('mouseout',  function() {
            $('#insurance_quote_0_result_close_button_cross_X').css('transform', 'rotate(0deg)');
            $('#insurance_quote_0_result_close_button_back').css('width', '100%');
            $('#insurance_quote_0_result_close_text').css('opacity', '0');
        });
        //close quote result page close button hover functions
        //close quote result page close button hover functions
        //close quote result page close button hover functions
    });
});


