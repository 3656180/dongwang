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
    $status='unknown';

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
                status:$status
            },
            url  : host+'wp-content/themes/dongwang/xml/load_xml/load_xml_to_manage_insurance_page.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                $('#show_list_div_mip').empty();
                $('#show_list_div_mip').append(data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };

        //
    function getMonthAndDay(date){
        var month=date.substring(4,6);
        var day=date.substring(6,8);
        if(month[0]=='0'){
            month=month[1];
        }
        if(day[0]=='0'){
            day=day[1];
        }
        return {month:month,day:day}
    }

    function getReminderOption(reminderOption){
        var result=reminderOption.split('-');
        return{month:parseInt(result[0]),twoweeks:parseInt(result[1]),oneweek:parseInt(result[2]),
            threedays:parseInt(result[3]),twodays:parseInt(result[4]),oneday:parseInt(result[5])}
    }
    function getSendOption(sendOption){
        var result=sendOption.split('-');
        return{email:parseInt(result[0]),phone:parseInt(result[1]),wechat:parseInt(result[2])}
    }

    function writeToEditInsurance(param) {
        var index = param.replace('list_', '');
        var id='#mip_name_'+index;
        //alert($(id).text());
        $('#recipient_input_eip').val( $('#mip_name_'+index).text().replace(/\s/g, ''));
        $('#email_input_eip').val( $('#mip_email_'+index).text().replace(/\s/g, ''));
        $('#phone_number_input_eip').val( $('#mip_phone_number_'+index).text().replace(/\s/g, ''));
        $('#wehcat_number_input_eip').val( $('#mip_wechat_'+index).text().replace(/\s/g, ''));
        $('#payment_amount_input_eip').val( $('#mip_payment_amount_'+index).text().replace(/\s/g, ''));
        $('#insurance_number_input_eip').val( $('#mip_insurance_number_'+index).text().replace(/\s/g, ''));
        $('#send_period_start_eip').val( $('#mip_start_date_'+index).text().replace(/\s/g, ''));
        $('#send_period_end_eip').val( $('#mip_end_date_'+index).text().replace(/\s/g, ''));
        $('#send_period_end_eip').val( $('#mip_end_date_'+index).text().replace(/\s/g, ''));
        $('#insurance_type_eip').val( $('#mip_insurance_type_'+index).text().replace(/\s/g, ''));
        if($('#mip_insurance_type_'+index).text().replace(/\s/g, '')=='房屋保险'){
            //alert($('#mip_insurance_info_'+index).text().replace(/\s/g, ''));
            $('#home_insurance_usability_eip').css('display','block');
            $('#insured_address_eip').css('display','block');
            $('#home_insurance_usability_eip').val($('#mip_insurance_info_'+index).text().split('?')[0]);
            $('#insured_address_input_eip').val($('#mip_insurance_info_'+index).text().split('?')[1]);
        }
        $('#pay_frequency_eip').val($('#mip_frequency_'+index).text().replace(/\s/g, ''));
        var date=getMonthAndDay($('#mip_payment_date_'+index).text().replace(/\s/g, ''));
        $('#pay_date_month_eip').val( date.month);
        $('#pay_date_day_eip').val( date.day);
        var reminderOption=getReminderOption($('#mip_reminder_option_'+index).text().replace(/\s/g, ''))
        $('#check_box_month_eip').prop('checked', reminderOption.month);
        $('#check_box_twoweeks_eip').prop('checked', reminderOption.twoweeks);
        $('#chesck_box_oneweek_eip').prop('checked', reminderOption.oneweek);
        $('#chesck_box_threedays_eip').prop('checked', reminderOption.threedays);
        $('#chesck_box_twodays_eip').prop('checked', reminderOption.twodays);
        $('#chesck_box_oneday_eip').prop('checked', reminderOption.oneday);
        $('#admin_cc_list_input_eip').val( $('#mip_cc_list_'+index).text().replace(/\s/g, ''));
        var sendOption=getSendOption($('#mip_send_option_'+index).text().replace(/\s/g, ''));
        $('#chesck_box_email_eip').prop('checked', sendOption.email);
        $('#chesck_box_message_eip').prop('checked', sendOption.phone);
        $('#chesck_box_wechat_eip').prop('checked', sendOption.wechat);
        $('#insurance_id_box').val( $('#mip_id_'+index).text().replace(/\s/g, ''));

    };

    $(document).on('click','.insurance_list', function () {
        //alert(jQuery(this).attr("id"));
        $('#edit_insurance_page').css('transform', 'translateY(0)');
        writeToEditInsurance(jQuery(this).attr("id"));
        //writeToPopupDiv(jQuery(this).attr("id"), "send_plan.xml", 1);
    });




    //-------------------------
    $('#id_sort_up_mip').on('click', function(){
        set_sort_parameter('id','up','string');
        post_sortORfilter_request();
    });
    $('#id_sort_down_mip').on('click', function(){
        set_sort_parameter('id','down','string');
        post_sortORfilter_request();
    });
    $('#name_sort_up_mip').on('click', function(){
        set_sort_parameter('name','up','string');
        post_sortORfilter_request();
    });
    $('#name_sort_down_mip').on('click', function(){
        set_sort_parameter('name','down','string');
        post_sortORfilter_request();
    });
    $('#email_sort_up_mip').on('click', function(){
        set_sort_parameter('email','up','string');
        post_sortORfilter_request();
    });
    $('#email_sort_down_mip').on('click', function(){
        set_sort_parameter('email','down','string');
        post_sortORfilter_request();
    });
    $('#phone_number_up_mip').on('click', function(){
        set_sort_parameter('phone_number','up','number');
        post_sortORfilter_request();
    });
    $('#phone_number_down_mip').on('click', function(){
        set_sort_parameter('phone_number','down','number');
        post_sortORfilter_request();
    });
    $('#wechat_up_mip').on('click', function(){
        set_sort_parameter('wechat','up','string');
        post_sortORfilter_request();
    });
    $('#wechat_down_mip').on('click', function(){
        set_sort_parameter('wechat','down','string');
        post_sortORfilter_request();
    });
    $('#pay_date_sort_up_mip').on('click', function(){
        set_sort_parameter('payment_date','up','number');
        post_sortORfilter_request();
    });
    $('#pay_date_sort_down_mip').on('click', function(){
        set_sort_parameter('payment_date','down','number');
        post_sortORfilter_request();
    });
    $('#insurance_number_up_mip').on('click', function(){
        set_sort_parameter('insurance_num','up','string');
        post_sortORfilter_request();
    });
    $('#insurance_number_down_mip').on('click', function(){
        set_sort_parameter('insurance_num','down','number');
        post_sortORfilter_request();
    });
    $('#payment_amount_up_mip').on('click', function(){
        set_sort_parameter('payment_amount','up','number');
        post_sortORfilter_request();
    });
    $('#payment_amount_down_mip').on('click', function(){
        set_sort_parameter('payment_amount','down','number');
        post_sortORfilter_request();
    });
    $('#insurance_type_up_mip').on('click', function(){
        set_sort_parameter('insurance_type','up','string');
        post_sortORfilter_request();
    });
    $('#insurance_type_down_mip').on('click', function(){
        set_sort_parameter('insurance_type','down','string');
        post_sortORfilter_request();
    });

    $('#event_status_up_mip').on('click', function(){
        set_sort_parameter('event_status','up','string');
        post_sortORfilter_request();
    });
    $('#event_status_down_mip').on('click', function(){
        set_sort_parameter('event_status','down','string');
        post_sortORfilter_request();
    });
    $('#search_button_mip').on('click', function(){
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
        $status='unknown';


        if($('#id_input_mip').val()!=''){
            $id=$('#id_input_mip').val();
        }
        if($('#name_input_mip').val()!=''){
            $name=$('#name_input_mip').val();
        }
        if($('#email_input_mip').val()!=''){
            $email=$('#email_input_mip').val();
        }
        if($('#phone_number_input_mip').val()!=''){
            $phone_number=$('#phone_number_input_mip').val();
        }
        if($('#wechat_input_mip').val()!=''){
            $wechat=$('#wechat_input_mip').val();
        }
        if($('#paydate_start_input_mip').val()!=''){
            $start_payDate=$('#paydate_start_input_mip').val();
            $start_payDate=set_date_format($start_payDate);
        }
        if($('#paydate_end_input_mip').val()!=''){
            $end_payDate=$('#paydate_end_input_mip').val();
            $end_payDate=set_date_format($end_payDate);
        }
        if($('#insurance_number_input_mip').val()!=''){
            $insurance_number=$('#insurance_number_input_mip').val();
        }
        if($('#insurance_type_input_mip').val()!=''){
            $insurance_type=$('#insurance_type_input_mip').val();
        }
        if($('#event_status_input_mip').val()!=''){
            $event_status=$('#event_status_input_mip').val();
        }


        post_sortORfilter_request();
    });

});
