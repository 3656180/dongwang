$(document).ready(function(){

    var isSelfServiceResultDisplay=0;
    var isInsuranceResultDisplay=0;

    function posttoselectinsurancebyid (insurance_num) {
        $.ajax( { type : 'POST',
            data : { insurance_num:insurance_num},
            url  : 'http://localhost:3000/wp-content/themes/dongwang/database/selectinsurancebyid.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
            alert(data);
                $('#ssr_main_div').empty();
                $('#ssr_main_div').append(data);               // <=== VALUE RETURNED FROM FUNCTION.
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
    function refresh_result_page () {
        $.ajax( { type : 'POST',
            data : { },
            url  : 'http://localhost:3000/wp-content/themes/dongwang/templates/self_service_result.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert("new customer added");               // <=== VALUE RETURNED FROM FUNCTION.
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };

    $(function(){


        //self_service_input close
        $('#self_service_input_div_close_button').on("click", function() {
            $('#main_container_2').css('transform','translateY(100%)');
            $('#main_container_0').css('transform','translateY(0%)');

        });

        //self_service_result open
        $('#self_service_submit_button').on("click", function() {
            $('#self_service_result').css('transform','translateY(5%)');
            setTimeout(function() {
                isSelfServiceResultDisplay=1;
            }, 10);

            posttoselectinsurancebyid($('#self_service_input').val());
            // setTimeout(function() {
            //     refresh_result_page();
            //
            // }, 100);

        });
        //self_service_result close
        $('#self_service_result_close_button').on("click", function() {
            isSelfServiceResultDisplay=0;
            $('#self_service_result').css('transform','translateY(100%)');

        });

        $('#self_service_input_div').on("click", function() {
            if(isSelfServiceResultDisplay==1){
                $('#self_service_result').css('transform','translateY(100%)');
                isSelfServiceResultDisplay=0;
            }
        });

        //close button hover functions
        //close button hover functions
        //close button hover functions
        $('#self_service_input_div_close_button').on('mouseover',  function() {
            $('#self_service_input_div_close_button_cross_X').css('transform', 'rotate(90deg)');
            $('#self_service_input_div_close_button_back').css('width', '250%');
            $('#self_service_input_div_close_button_text').css('opacity', '1');

        });
        $('#self_service_input_div_close_button').on('mouseout',  function() {
            $('#self_service_input_div_close_button_cross_X').css('transform', 'rotate(0deg)');
            $('#self_service_input_div_close_button_back').css('width', '100%');
            $('#self_service_input_div_close_button_text').css('opacity', '0');
        });
        //close button hover functions
        //close button hover functions
        //close button hover functions


        //确认 button hover functions
        //确认 button hover functions
        //确认 button hover functions
        $('#self_service_submit_button').on('mouseover',  function() {
            $('#ss_submit_bt_bot_line').css('width', '6%');

        });
        $('#self_service_submit_button').on('mouseout',  function() {
            $('#ss_submit_bt_bot_line').css('width', '0%');
        });
        //确认 button hover functions
        //确认 button hover functions
        //确认 button hover functions

    });


});


