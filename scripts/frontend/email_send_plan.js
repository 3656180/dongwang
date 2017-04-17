$(document).ready(function(){
    $issort=false;
    $value='unknown';
    $sort_option='id';
    $sort_direction='up';
    $sort_type='string';
    // $name='unknown';
    // $email='unknown';
    // $start_sendDate='unknown';
    // $end_sendDate='unknown';
    // $start_payDate='unknown';
    // $end_payDate='unknown';


    function set_sort_parameter(issort,sort_option,sort_direction,sort_type){
        $issort=issort;
        $sort_option=sort_option;
        $sort_direction=sort_direction;
        $sort_type=sort_type;
    }
    function set_filter_parameter(name,email,startSendDate,endSendDate,startPayDate,endPayDate){
        $name=name;
        $email=email;
        $start_sendDate=startSendDate;
        $end_sendDate=endSendDate;
        $start_payDate=startPayDate;
        $end_payDate=endPayDate;
    }
    function post_sortORfilter_request () {
        $.ajax( { type : 'POST',
            data : {
                issort:$issort,
                sort_option:$sort_option,//sort option && index
                sort_direction:$sort_direction,//sort direction && value
                sort_type:$sort_type,
                name:$name,
                email:$email,
                start_sendDate:$start_sendDate,
                end_sendDate:$end_sendDate,
                start_payDate:$start_payDate,
                end_payDate:$end_payDate
            },
            url  : host+'wp-content/themes/dongwang/xml/load_xml/load_send_plan_to_sendplan.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                $('#show_list_div_espp').empty();
                $('#show_list_div_espp').append(data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };




        //sort by name
        $('#name_sort_up_espp').on('click', function(){
            set_sort_parameter(true,'recipient','up','string');
            post_sortORfilter_request();
        });
        $('#name_sort_down_espp').on('click', function(){
            set_sort_parameter(true,'recipient','down','string');
            post_sortORfilter_request();
        });
        //sort by email
        $('#email_sort_up_espp').on('click', function(){
            set_sort_parameter(true,'email','up','string');
            post_sortORfilter_request();
        });
        $('#email_sort_down_espp').on('click', function(){
            set_sort_parameter(true,'email','down','string');
            post_sortORfilter_request();
        });
        //sort by sent date
        $('#date_sort_up_espp').on('click', function(){
            set_sort_parameter(true,'send_date','up','number');
            post_sortORfilter_request();
        });
        $('#date_sort_down_espp').on('click', function(){
            set_sort_parameter(true,'send_date','down','number');
            post_sortORfilter_request();
        });
        $('#pay_date_sort_up_espp').on('click', function(){
            set_sort_parameter(true,'payment_date','up','number');
            post_sortORfilter_request();
        });
        $('#pay_date_sort_down_espp').on('click', function(){
            set_sort_parameter(true,'payment_date','down','number');
            post_sortORfilter_request();
        });
        //search
        $('#search_button_espp').on('click', function(){

            $name='unknown';
            $email='unknown';
            $start_sendDate='unknown';
            $end_sendDate='unknown';
            $start_payDate='unknown';
            $end_payDate='unknown';

            if($('#name_input_espp').val()!=''){
                $name=$('#name_input_espp').val();
            }
            if($('#email_input_espp').val()!=''){
                $email=$('#email_input_espp').val();
            }
            if($('#senddate_start_input_espp').val()!==undefined){
                $start_sendDate=$('#senddate_start_input_espp').val();
                alert($start_sendDate);
            }
            if($('#senddate_end_input_espp').val()!=''){
                $end_sendDate=$('#senddate_end_input_espp').val();
            }
            if($('#paydate_start_input_espp').val()!=''){
                $start_payDate=$('#paydate_start_input_espp').val();
            }
            if($('#paydate_end_input_espp').val()!=''){
                $end_payDate=$('#paydate_end_input_espp').val();
            }


            //set_filter_parameter($name,$email,$start_sendDate,$end_sendDate,$start_payDate,$end_payDate);
            post_sortORfilter_request();
        });

});