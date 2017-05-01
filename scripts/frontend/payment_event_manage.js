$(document).ready(function(){
    $sort_option='id';
    $sort_direction='up';
    $sort_type='string';
    $id='unknown';
    $name='unknown';
    $email='unknown';
    $phone_number='unknown';
    $wechat='unknown';
    $start_payDate='unknown';
    $end_payDate='unknown';
    $insurance_number='unknown';
    $payment_amount='unknown';
    $insurance_type='unknown';
    $event_status='unknown';

    function set_sort_parameter(sort_option,sort_direction,sort_type){
        $sort_option=sort_option;
        $sort_direction=sort_direction;
        $sort_type=sort_type;
    }

    function set_date_format(date){
        date=date.split("-");
        return date[0]+date[1]+date[2];
    }
    function post_sortORfilter_request () {
        //alert($start_payDate);
        $.ajax( { type : 'POST',
            data : {
                sort_option:$sort_option,//sort option && index
                sort_direction:$sort_direction,//sort direction && value
                sort_type:$sort_type,
                id:$id,
                name:$name,
                email:$email,
                phone_number:$phone_number,
                wechat:$wechat,
                start_payDate:$start_payDate,
                end_payDate:$end_payDate,
                insurance_number:$insurance_number,
                payment_amount:$payment_amount,
                insurance_type:$insurance_type,
                event_status:$event_status
            },
            url  : host+'wp-content/themes/dongwang/xml/load_xml/load_xml_to_manage_payment_event.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                $('#show_list_div_mpep').empty();
                $('#show_list_div_mpep').append(data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
    function postToDatabase (sql_query,status,event_id) {//pass
        $.ajax( { type : 'POST',
            data : { sql_query:sql_query},
            url  : host+'wp-content/themes/dongwang/database/posttodatabase.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                alert("事件ID为:"+event_id+"的支付事件状态已修改为["+status.split('?')[0]+
                        "],修改日期为["+status.split('?')[1]+"]");
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
//-------------------------
    $('#id_sort_up_mpep').on('click', function(){
        set_sort_parameter('id','up','string');
        post_sortORfilter_request();
    });
    $('#id_sort_down_mpep').on('click', function(){
        set_sort_parameter('id','down','string');
        post_sortORfilter_request();
    });
    $('#name_sort_up_mpep').on('click', function(){
        set_sort_parameter('name','up','string');
        post_sortORfilter_request();
    });
    $('#name_sort_down_mpep').on('click', function(){
        set_sort_parameter('name','down','string');
        post_sortORfilter_request();
    });
    $('#email_sort_up_mpep').on('click', function(){
        set_sort_parameter('email','up','string');
        post_sortORfilter_request();
    });
    $('#email_sort_down_mpep').on('click', function(){
        set_sort_parameter('email','down','string');
        post_sortORfilter_request();
    });
    $('#phone_number_up_mpep').on('click', function(){
        set_sort_parameter('phone_number','up','number');
        post_sortORfilter_request();
    });
    $('#phone_number_down_mpep').on('click', function(){
        set_sort_parameter('phone_number','down','number');
        post_sortORfilter_request();
    });
    $('#wechat_up_mpep').on('click', function(){
        set_sort_parameter('wechat','up','string');
        post_sortORfilter_request();
    });
    $('#wechat_down_mpep').on('click', function(){
        set_sort_parameter('wechat','down','string');
        post_sortORfilter_request();
    });
    $('#pay_date_sort_up_mpep').on('click', function(){
        set_sort_parameter('payment_date','up','number');
        post_sortORfilter_request();
    });
    $('#pay_date_sort_down_mpep').on('click', function(){
        set_sort_parameter('payment_date','down','number');
        post_sortORfilter_request();
    });
    $('#insurance_number_up_mpep').on('click', function(){
        set_sort_parameter('insurance_num','up','string');
        post_sortORfilter_request();
    });
    $('#insurance_number_down_mpep').on('click', function(){
        set_sort_parameter('insurance_num','down','number');
        post_sortORfilter_request();
    });
    $('#payment_amount_up_mpep').on('click', function(){
        set_sort_parameter('payment_amount','up','number');
        post_sortORfilter_request();
    });
    $('#payment_amount_down_mpep').on('click', function(){
        set_sort_parameter('payment_amount','down','number');
        post_sortORfilter_request();
    });
    $('#insurance_type_up_mpep').on('click', function(){
        set_sort_parameter('insurance_type','up','string');
        post_sortORfilter_request();
    });
    $('#insurance_type_down_mpep').on('click', function(){
        set_sort_parameter('insurance_type','down','string');
        post_sortORfilter_request();
    });

    $('#event_status_up_mpep').on('click', function(){
        set_sort_parameter('event_status','up','string');
        post_sortORfilter_request();
    });
    $('#event_status_down_mpep').on('click', function(){
        set_sort_parameter('event_status','down','string');
        post_sortORfilter_request();
    });
    $('#search_button_mpep').on('click', function(){
        $id='unknown';
        $name='unknown';
        $email='unknown';
        $phone_number='unknown';
        $wechat='unknown';
        $start_payDate='unknown';
        $end_payDate='unknown';
        $insurance_number='unknown';
        $payment_amount='unknown';
        $insurance_type='unknown';
        $event_status='unknown';


        if($('#id_input_mpep').val()!=''){
            $id=$('#id_input_mpep').val();
        }
        if($('#name_input_mpep').val()!=''){
            $name=$('#name_input_mpep').val();
        }
        if($('#email_input_mpep').val()!=''){
            $email=$('#email_input_mpep').val();
        }
        if($('#phone_number_input_mpep').val()!=''){
            $phone_number=$('#phone_number_input_mpep').val();
        }
        if($('#wechat_input_mpep').val()!=''){
            $wechat=$('#wechat_input_mpep').val();
        }
        if($('#paydate_start_input_mpep').val()!=''){
            $start_payDate=$('#paydate_start_input_mpep').val();
            $start_payDate=set_date_format($start_payDate);
        }
        if($('#paydate_end_input_mpep').val()!=''){
            $end_payDate=$('#paydate_end_input_mpep').val();
            $end_payDate=set_date_format($end_payDate);
        }
        if($('#insurance_number_input_mpep').val()!=''){
            $insurance_number=$('#insurance_number_input_mpep').val();
        }
        if($('#insurance_type_input_mpep').val()!=''){
            $insurance_type=$('#insurance_type_input_mpep').val();
        }
        if($('#event_status_input_mpep').val()!=''){
            $event_status=$('#event_status_input_mpep').val();
        }


        post_sortORfilter_request();
    });
    $(document).on('click', '.status_change_button',function () {
        //compute event_id
        //alert("test");

        $element_id=jQuery(this).attr("id").replace('change_button_','');
        $year_id="#payment_date_"+$element_id;
        $event_id='#id_'+$element_id;
        $event_id=parseInt($($event_id).text());
        $year=$($year_id).text().replace(/\s/g, '').substring(0, 4);;
        changePaymentStatus(jQuery(this).text(),$event_id,$year);

    });

    function changePaymentStatus(innertext,event_id,year) {
        var date = new Date();
        $date=""+date.getFullYear()+""+('0' + (date.getMonth()+1)).slice(-2)+
            ""+('0' + date.getDate()).slice(-2);
        //set event status
        if(innertext=="设为已支付"){
            $status="已支付?"+$date;
            $eventIdAndTableName=event_id+"-"+"send_plan_"+year;
            postToPaymentDondAPI($eventIdAndTableName);
        }
        else{
            $status="未支付?"+$date;
            editSendEvent($event_id);//MOVE SEND EVENT FROM CANCELED EMAIL TO SEND PLAN

        }
        $sql="UPDATE payment_event SET event_status='"+$status+"'WHERE id="+event_id;
        postToDatabase($sql,$status,event_id)
        //post_sortORfilter_request ();//refresh the page
        //set sql query

    }
    function editSendEvent(event_id){
        $.ajax( { type : 'POST',
            data : { event_id:event_id},
            url  : host+'wp-content/themes/dongwang/database/edit_send_event.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert(data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    }
    function postToPaymentDondAPI(eventIdAndTableName) {//1281-send_plan_2017

        $.ajax( { type : 'POST',
            data : { eventIdAndTableName:eventIdAndTableName},
            url  : host+'wp-content/themes/dongwang/database/payment_done_api.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert(data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    }
    // $('.payment_event_list').on('click', function () {
    //     //alert(jQuery(this).attr("id"));
    //     $('#edit_payment_event_page').css('transform', 'translateY(0)');
    //     writeToEditPaymentevent(jQuery(this).attr("id"));
    //     //writeToPopupDiv(jQuery(this).attr("id"), "send_plan.xml", 1);
    // });
    // function writeToEditPaymentevent(id) {
    //     var index = id.replace('list_', '');
    //     var id='#name_'+index;
    //     //alert($(id).text());
    //     $('#recipient_input_epep').val( $(id).text());
    // };
});
