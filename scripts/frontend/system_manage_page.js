$(document).ready(function(){
    //disable all links
    $("a").attr('href','#');
    $(document).on('click',"a", function () {
        event.preventDefault();
    });



    $(function () {

        $('#main_page_smp').on('click', function () {
            resetall();
        });
        $('#send_history_smp').on('click', function () {
            resetall();
            $('#email_send_history_page').css('transform', 'translateX(0px)');
        });

        $('#send_plan_smp').on('click', function () {
            resetall();
            $('#email_send_plan_page').css('transform', 'translateX(0px)');
        });

        $('#set_email_smp').on('click', function () {
            resetall();
            $('#add_email_sned_plan_page').css('transform', 'translateX(0px)');
            $('#double_check_page').css('transform', 'translateY(100%)');
        });

        $('#manage_payment_event_smp').on('click', function () {
            resetall();
            $('#manage_payment_event_page').css('transform', 'translateX(0px)');
        });

        $('#manage_insurance_smp').on('click', function () {
            resetall();
            $('#manage_insurance_page').css('transform', 'translateX(0px)');
            $('#edit_insurance_page').css('transform', 'translateY(100%)');

        });

        $('.send_history_list').on('click', function () {
            //alert(jQuery(this).attr("id"));
            $('#pop_up_div_frame_smp').css('transform', 'translateX(0)');

            writeToPopupDiv(jQuery(this).attr("id"), "unpaid_reminded_events.xml", 0);
        });
        $('.send_plan_list').on('click', function () {
            //alert(jQuery(this).attr("id"));
            $('#pop_up_div_frame_smp').css('transform', 'translateX(0)');

            writeToPopupDiv(jQuery(this).attr("id"), "send_plan.xml", 1);
        });
        $('#close_button_puds').on('click', function () {
            //alert(jQuery(this).attr("id"));
            $('#pop_up_div_frame_smp').css('transform', 'translateX(-100%)');
        });

        //print email list when click 查看详情 button
        $(document).on('click', '#email_list_popup',function () {
            //alert(jQuery(this).attr("id"));
            //$('#pop_up_div_frame_smp').css('transform', 'translateX(0)');
            //alert($('#event_id_div_popup').val());
            writeToPopupDiv($('#event_id_div_popup').val(), "unpaid_reminded_events.xml", 2);
        });

    });


    function resetall() {
        $('#email_send_history_page').css('transform', 'translateX(-100%)');
        $('#email_send_plan_page').css('transform', 'translateX(-100%)');
        $('#add_email_sned_plan_page').css('transform', 'translateX(-100%)');
        $('#general_set_page').css('transform', 'translateX(-100%)');
        $('#manage_payment_event_page').css('transform', 'translateX(-100%)');
        $('#manage_insurance_page').css('transform', 'translateX(-100%)');


    };
    function writeToPopupDiv(id, file, towhichphp) {
        if(towhichphp==2){
            index=id+"?1";
        }
        else{
            var index = id.replace('list_', '');
            if(towhichphp==0){
                var div_id_event='#col_1_unpaid_list_'+index;
                index= $(div_id_event).html();
            }
        }


        //alert(index);
        var url = "/wp-content/themes/dongwang/xml/" + file;
        //alert(url);

        loadXmlandappend(url, index, towhichphp);


    };

    function loadXmlandappend(url, index, towhichphp) {
        //alert(url);
        if (towhichphp == 0||towhichphp == 2) {
            $phpurl = host + 'wp-content/themes/dongwang/xml/load_xml/load_sent_history_to_popup_smg.php';              // <=== CALL THE PHP FUNCTION HERE.
        }
        else {
            $phpurl = host + 'wp-content/themes/dongwang/xml/load_xml/load_send_plan_to_popup_smg.php';              // <=== CALL THE PHP FUNCTION HERE.
        }
        $.ajax({
            type: 'POST',
            data: {
                url: url,
                index: index
            },
            url: $phpurl,              // <=== CALL THE PHP FUNCTION HERE.
            success: function (data) {
                //alert("success");               // <=== VALUE RETURNED FROM FUNCTION.
                $('#pop_up_div_smp').empty();
                $("#pop_up_div_smp").append(data);
            },
            error: function (xhr) {
                alert("error");
            }
        });
    };
});