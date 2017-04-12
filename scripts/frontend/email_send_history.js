$(document).ready(function(){
    //post to load_sent_history_to_senthistory.php and load_send_plan_to_sendplan.php
    //functions, called by functions in email_send_history.js and email_send_plan.js
    $issort=false;
    $value='unknown';
    $sort_option='id';
    $sort_direction='up';
    $sort_type='string';

    function set_sort_parameter(issort,sort_option,sort_direction,sort_type){
        $issort=issort;
        $sort_option=sort_option;
        $sort_direction=sort_direction;
        $sort_type=sort_type;
    }
    function set_filter_parameter(value){
        $value=value;
    }
    function post_sortORfilter_request () {

        $.ajax( { type : 'POST',
            data : {
                issort:$issort,
                sort_option:$sort_option,//sort option && index
                sort_direction:$sort_direction,//sort direction && value
                sort_type:$sort_type,
                value:$value
            },
            url  : host+'wp-content/themes/dongwang/xml/load_xml/load_sent_history_to_senthistory.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                $('#show_list_div_eshp').empty();
                $('#show_list_div_eshp').append(data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
    //----------------------------------------------------------------------------------



    $(function(){
        //sort by name
        $('#name_sort_up').on('click', function(){
            set_sort_parameter(true,'recipient','up','string');
            post_sortORfilter_request();
        });
        $('#name_sort_down').on('click', function(){
            set_sort_parameter(true,'recipient','down','string');
            post_sortORfilter_request();
        });
        //sort by email
        $('#email_sort_up').on('click', function(){
            set_sort_parameter(true,'email','up','string');
            post_sortORfilter_request();
        });
        $('#email_sort_down').on('click', function(){
            set_sort_parameter(true,'email','down','string');
            post_sortORfilter_request();
        });
        //sort by sent date
        $('#date_sort_up').on('click', function(){
            set_sort_parameter(true,'send_date','up','number');
            post_sortORfilter_request();
        });
        $('#date_sort_down').on('click', function(){
            set_sort_parameter(true,'send_date','down','number');
            post_sortORfilter_request();
        });
        $('#pay_date_sort_up').on('click', function(){
            set_sort_parameter(true,'payment_date','up','number');
            post_sortORfilter_request();
        });
        $('#pay_date_sort_down').on('click', function(){
            set_sort_parameter(true,'payment_date','down','number');
            post_sortORfilter_request();
        });
        //search
        $('#search_button_eshp').on('click', function(){
            if($('#search_input_eshp').val()!=''){
                set_filter_parameter($('#search_input_eshp').val());
            }
            else{
                set_filter_parameter('unknown');
            }
            post_sortORfilter_request();
        });
    });
});