$(document).ready(function(){
    $('#close_button_eip').on('click', function () {
        $('#edit_insurance_page').css('transform', 'translateY(100%)');
    });

    $('#submit_button_eip').on('click', function () {
        var isSendEmial='0';
        var isSendMessage='0';
        var isSendWechat='0';
        if ($('#chesck_box_email_eip').is(':checked')){
            isSendEmial='1';
        }
        if ($('#chesck_box_message_eip').is(':checked')){
            isSendMessage='1';
        }
        if ($('#chesck_box_wechat_eip').is(':checked')){
            isSendWechat='1';
        }
        var sendOption=isSendEmial+'-'+isSendMessage+'-'+isSendWechat;
        if (confirm("是否确认修改？") == true) {
            var sendInfo={
                recipient:$('#recipient_input_eip').val(),
                email:$('#email_input_eip').val(),
                phoneNumber:$('#phone_number_input_eip').val(),
                wechat:$('#wehcat_number_input_eip').val(),
                paymentAmount:$('#payment_amount_input_eip').val(),
                insuranceNumber:$('#insurance_number_input_eip').val(),
                insuranceType:$('#insurance_type_eip').val(),
                homeinsuranceUsability:$('#home_insurance_usability_eip').val(),
                insuredAdress:$('#insured_address_input_eip').val(),
                cc_list:$('#admin_cc_list_input_eip').val(),
                sendOption:sendOption
            }
            var payDateInfo={
                startDate:$('#send_period_start_aesp').val(),
                endDate:$('#send_period_end_aesp').val(),
                payDateMonth:$('#pay_date_month_aesp').val(),
                payDateDay:$('#pay_date_day_aesp').val(),
                frequency:$('#pay_frequency_eip').val(),
            };
            var sendPlan={  ismonth:$('#check_box_month').is(':checked'),
                istwoweeks:$('#check_box_twoweeks').is(':checked'),
                isoneweek:$('#chesck_box_oneweek').is(':checked'),
                isthreedays:$('#chesck_box_threedays').is(':checked'),
                istwodays:$('#chesck_box_twodays').is(':checked'),
                isoneday:$('#chesck_box_oneday').is(':checked')
            };
            //deleteSelectedInsurance( $('#insurance_id_box').val());
            InsertToDatabase(sendInfo,payDateInfo,sendPlan);
        }
    });

    $('#delete_button_eip').on('click', function () {
        if (confirm("是否确认删除？") == true) {
            deleteSelectedInsurance( $('#insurance_id_box').val());
        }
    });
    $('#cancel_button_eip').on('click', function () {
        $('#edit_insurance_page').css('transform', 'translateY(100%)');
    });
});

function deleteSelectedInsurance(insurancId){

    $.ajax( { type : 'POST',
        data : {
            insurancId:insurancId//sort option && index
        },
        url  : host+'wp-content/themes/dongwang/database/delete_insurance_api.php',              // <=== CALL THE PHP FUNCTION HERE.
        success: function ( data ) {
        },
        error: function ( xhr ) {
            alert( "error" );
        }
    });
};