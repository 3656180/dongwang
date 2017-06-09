$(document).ready(function(){
    var frequency="annually";
    //set all checkbox checked by default
    $( "#check_box_month").prop('checked', true);
    $( "#check_box_twoweeks").prop('checked', true);
    $( "#chesck_box_oneweek").prop('checked', true);
    $( "#chesck_box_threedays").prop('checked', true);
    $( "#chesck_box_twodays").prop('checked', true);
    $( "#chesck_box_oneday").prop('checked', true);
    $( "#chesck_box_email").prop('checked', true);
    $( "#chesck_box_message").prop('checked', true);
    $( "#chesck_box_wechat").prop('checked', true);



    $('#pay_frequency_annually').on('click', function(){
        $('#pay_frequency_annually').css('background-color', 'white');
        $('#pay_frequency_monthly').css('background-color', 'gainsboro');
        $('#pay_date_month_div_aesp').css('display', 'block');
        $('#month_aesp').css('display', 'block');
        $('#twomonth_aesp').css('display', 'block');
        frequency="annually";
    });
    $('#pay_frequency_monthly').on('click', function(){
        $('#pay_frequency_monthly').css('background-color', 'white');
        $('#pay_frequency_annually').css('background-color', 'gainsboro');
        $('#pay_date_month_div_aesp').css('display', 'none');
        $('#month_aesp').css('display', 'none');
        $('#twomonth_aesp').css('display', 'none');
        frequency="monthly";

    });

     $('#insurance_type_aesp').on('change','#insurance_type',function(){
        //alert('called');
        var value=$('#insurance_type').val();
        //alert(value);
        if(value=='房屋保险'){
            $('#home_insurance_usability').css('display', 'block');
            $('#insured_address').css('display', 'block');
        }
        else{
            $('#home_insurance_usability').css('display', 'none');
            $('#insured_address').css('display', 'none');
        }
    });

    $('#pay_date_month_div_aesp').on('change','#pay_date_month_aesp',function(){
        //alert('called');
        var value=$('#pay_date_month_aesp').val();
        //alert(value);
        if(value=='1'||value=='3'||value=='5'||value=='7'||value=='8'||value=='10'||value=='12'){
            $('#option_30').css('display', 'block');
            $('#option_31').css('display', 'block');
        }
        else if(value=='2'){
            $('#option_30').css('display', 'none');
            $('#option_31').css('display', 'none');
        }
        else{
            $('#option_30').css('display', 'block');
            $('#option_31').css('display', 'none');
        }
    });

    //-----------double check page functions
    $('#back_button_dcp').on('click', function(){
        $('#double_check_page').css('transform', 'translateY(100%)');

    });

    $('#submit_button_dcp').on('click', function(){
        var isSendEmial='0';
        var isSendMessage='0';
        var isSendWechat='0';
        if ($('#chesck_box_email').is(':checked')){
            isSendEmial='1';
        }
        if ($('#chesck_box_message').is(':checked')){
            isSendMessage='1';
        }
        if ($('#chesck_box_wechat').is(':checked')){
            isSendWechat='1';
        }
        var sendOption=isSendEmial+'-'+isSendMessage+'-'+isSendWechat;

        var sendInfo={  recipient:$('#recipient_input_aesp').val(),
                        email:$('#email_address_input_asep').val(),
                        phoneNumber:$('#phone_number_input_asep').val(),
                        wechat:$('#wehcat_number_input_asep').val(),
                        paymentAmount:$('#payment_amount_input_asep').val(),
                        insuranceNumber:$('#insurance_number_input_asep').val(),
                        insuranceType:$('#insurance_type').val(),
                        homeinsuranceUsability:$('#home_insurance_usability').val(),
                        insuredAdress:$('#insured_address_input_asep').val(),
                        cc_list:$('#admin_cc_list_input_asep').val(),
                        sendOption:sendOption,
                        insurance_company:$('#insurance_company_input_asep').val()
                    }
        var payDateInfo={
                        startDate:$('#send_period_start_aesp').val(),
                        endDate:$('#send_period_end_aesp').val(),
                        payDateMonth:$('#pay_date_month_aesp').val(),
                        payDateDay:$('#pay_date_day_aesp').val(),
                        frequency:frequency
                    };
        var sendPlan={  ismonth:$('#check_box_month').is(':checked'),
                        istwoweeks:$('#check_box_twoweeks').is(':checked'),
                        isoneweek:$('#chesck_box_oneweek').is(':checked'),
                        isthreedays:$('#chesck_box_threedays').is(':checked'),
                        istwodays:$('#chesck_box_twodays').is(':checked'),
                        isoneday:$('#chesck_box_oneday').is(':checked')
                    };
        var infoSet={
                        sendInfo:sendInfo,
                        payDateInfo:payDateInfo,
                        sendPlan:sendPlan
                    }
                     // alert($('#recipient_input_aesp').val());
        alert('添加完毕');
        $('#double_check_page').css('transform', 'translateY(100%)');
        InsertToDatabase(sendInfo,payDateInfo,sendPlan);
        setTimeout(
            function()
            {
                //function in edit_insurance_event.js
                refreshPage('load_xml_to_manage_payment_event.php','#show_list_div_mpep');
                refreshPage('load_xml_to_manage_insurance_page.php','#show_list_div_mip');
                refreshPage('load_send_plan_to_sendplan.php','#show_list_div_espp');
                refreshPage('load_sent_history_to_senthistory.php','#show_list_div_eshp');
            }, 500);
    });


    //-----------

    $('#submit_button_aesp').on('click', function(){

        if($('#recipient_input_aesp').val()==''){
            alert("Recipient name could not be empty!")
            return;
        }
        if(!(validateEmail($('#email_address_input_asep').val()))){
            alert("Invalid email address!")
            return;
        }
        if($('#payment_amount_input_asep').val()==''){
            alert("Payment amount could not be empty!")
            return;
        }
        if($('#insurance_number_input_asep').val()==''){
            alert("Insurance number could not be empty!")
            return;
        }
        if($('#send_period_start_aesp').val()==''){
            alert("Start date could not be empty!")
            return;
        }
        if($('#send_period_end_aesp').val()==''){
            alert("End date could not be empty!")
            return;
        }
        if($('#admin_cc_list_input_asep').val()==''){
            alert("CC list could not be empty!")
            return;
        }
        $('#double_check_page').css('transform', 'translateY(0px)');
        $('#recipient_dcp').html($('#recipient_input_aesp').val());
        $('#email_dcp').html($('#email_address_input_asep').val());
        $('#phone_number_dcp').html($('#phone_number_input_asep').val());
        $('#wechat_dcp').html($('#wehcat_number_input_asep').val());
        $('#payment_amount_dcp').html($('#payment_amount_input_asep').val());
        $('#insurance_number_dcp').html($('#insurance_number_input_asep').val());
        $('#send_period_dcp').html($('#send_period_start_aesp').val()+"至"+$('#send_period_end_aesp').val());
        $('#insurance_type_dcp').html($('#insurance_type').val());
        $('#insurance_company_dcp').html($('#insurance_company_input_asep').val());
        $('#payment_frequency_dcp').html(frequency);
        $('#payment_date_dcp').html($('#pay_date_month_aesp').val()+"月"+$('#pay_date_day_aesp').val()+"日");
        if(frequency=='monthly'){
            $('#payment_date_dcp').html($('#pay_date_day_aesp').val()+"号");
        }
        var reminderOptionText=getReminderOptionText({
            ismonth:$('#check_box_month').is(':checked'),
            istwoweeks:$('#check_box_twoweeks').is(':checked'),
            isoneweek:$('#chesck_box_oneweek').is(':checked'),
            isthreedays:$('#chesck_box_threedays').is(':checked'),
            istwodays:$('#chesck_box_twodays').is(':checked'),
            isoneday:$('#chesck_box_oneday').is(':checked')
        });

        $('#reminder_time_dcp').html(reminderOptionText);
        $('#cc_list_dcp').html($('#admin_cc_list_input_asep').val());
        var sendOptionText=getSendOptionText({
            isemail:$('#chesck_box_email').is(':checked'),
            isphone:$('#chesck_box_message').is(':checked'),
            iswechat:$('#chesck_box_wechat').is(':checked')
        });
        $('#reminder_method_dcp').html(sendOptionText);

    });
});


    //---------------get insert sql array
    function InsertToDatabase(sendInfo,payDateInfo,sendPlan){
        var paymentDateArray=getPaymentDate(payDateInfo);
        var currentDate=getCurrentDate();
        var insuranceInfo='';
        var emails='';
        var reminderOption=getReminderOption(sendPlan);
        if(sendInfo.insuranceType=='房屋保险'){
            insuranceInfo=sendInfo.homeinsuranceUsability+"?"+sendInfo.insuredAdress;
        }
        emails=emails+sendInfo.email+',';//add customer's email to email list;
        emails=emails+sendInfo.cc_list;//emails list contain customer's email which is the

        var payDate=payDateInfo.payDateMonth;
        if(parseInt(payDateInfo.payDateMonth)<10){
            payDate='0'+payDateInfo.payDateMonth;
        }
        if(parseInt(payDateInfo.frequency)=='monthly'){
            payDate='00';
        }
        if(parseInt(payDateInfo.payDateDay)<10){
            payDate=payDate+'0'+payDateInfo.payDateDay;
        }
        else{
            payDate=payDate+payDateInfo.payDateDay;
        }

        var sql="INSERT INTO insurance (name,email,phone_number,wechat," +
            "payment_amount,payment_date,insurance_number,admin,status,insurance_type,start_date,end_date," +
            "payment_frequency,reminder_option,send_option,cc_list,insurance_info)" +
            "VALUES ('"+sendInfo.recipient+"','"+sendInfo.email+"','"+ sendInfo.phoneNumber+
            "','"+sendInfo.wechat+"','"+sendInfo.paymentAmount+"','"+payDate+
            "','"+ sendInfo.insuranceNumber+ "','dwang','新添加','"+sendInfo.insuranceType+"','"+
            payDateInfo.startDate+"','"+payDateInfo.endDate+"','"+payDateInfo.frequency+"','"+
            reminderOption+"','"+sendInfo.sendOption+"','"+sendInfo.cc_list+"','"+insuranceInfo+"')";
        console.log(sql);
        insertToInsuranceTable(sql,paymentDateArray,currentDate,insuranceInfo,emails,
            function(currentInsuranceId,paymentDateArray,currentDate,insuranceInfo,emails) {
            //for loop of PAYMENT event table
            for(var i=0; i<paymentDateArray.length;i++){
                //alert('i='+i);
                var paymentDate='';
                var resultday=('0' + paymentDate+paymentDateArray[i].day).slice(-2);
                var resultmonth=('0' + paymentDate+paymentDateArray[i].month).slice(-2);
                var resultyear=paymentDateArray[i].year;
                paymentDate=paymentDate+resultyear;
                paymentDate=paymentDate+resultmonth;
                paymentDate=paymentDate+resultday;
                //alert(paymentDate);s
                var sql="INSERT INTO payment_event (recipient,email,phone_number,wechat," +
                    "payment_amount,payment_date,insurance_number,admin,event_status,insurance_type," +
                    "insurance_info,insurance_id)" +
                    "VALUES ('"+sendInfo.recipient+"','"+emails+"','"+ sendInfo.phoneNumber+
                    "','"+sendInfo.wechat+"','"+sendInfo.paymentAmount+"','"+paymentDate+
                    "','"+ sendInfo.insuranceNumber+ "','dwang','未支付?"+currentDate+"','"+
                    sendInfo.insuranceType+"','"+insuranceInfo+"',"+currentInsuranceId+")";
                var sendDateArray=getSendDate(paymentDateArray[i],sendPlan);
                //alert(sql);
                insertToDatabase(sql,sendDateArray,paymentDate,
                function(currentPayEventId,sendDateArray,paymentDate) {
                    //for loop of SEND EMAIL event table
                    for(var j=0; j<sendDateArray.length;j++) {
                        var sendDate = '';
                        sendDate = sendDate + sendDateArray[j].year;
                        sendDate = sendDate + sendDateArray[j].month;
                        sendDate = sendDate + sendDateArray[j].day;
                        var htmlInfo={  recipient:sendInfo.recipient,
                            paymentAmount:sendInfo.paymentAmount,
                            insuranceNumber:sendInfo.insuranceNumber,
                            paymentDate:paymentDate,
                            sendDate:sendDate,
                            insuranceType:sendInfo.insuranceType,
                            homeinsuranceUsability:sendInfo.homeinsuranceUsability,
                            insuredAdress:sendInfo.insuredAdress,
                            eventId:currentPayEventId,
                            tableName:"send_plan_"+sendDateArray[j].year,
                            insuranceCompany:sendInfo.insurance_company
                        }
                        var htmlAndText=getHtml(htmlInfo);

                        var sql="INSERT INTO send_plan_"+sendDateArray[j].year+
                            " (recipient,email,send_date,html,text,event_id,phone_number,wechat,send_option) " +
                            "VALUES ('"+sendInfo.recipient+"','"+emails+"','"+sendDate+
                            "','"+htmlAndText.html+"','"+htmlAndText.text+"',"+currentPayEventId+",'"+sendInfo.phoneNumber+
                            "','"+sendInfo.wechat+"','"+sendInfo.sendOption+"')";

                        var tableName="send_plan_"+sendDateArray[j].year;
                        validateTableandInsert(tableName,sql);//check if SEND EMAIL table exist.
                        var tableName="sent_history_"+sendDateArray[j].year;
                        validateTableandInsert(tableName,'0');//check if SEND HISTORY table exist.
                    }
                });
            }
        });
    }
    //get reminder option
    function  getReminderOption(sendPlan) {
        var reminderOption='';
        if(sendPlan.ismonth==true)
            reminderOption=reminderOption+"1-";
        else
            reminderOption=reminderOption+"0-";
        if(sendPlan.istwoweeks==true)
            reminderOption=reminderOption+"1-";
        else
            reminderOption=reminderOption+"0-";
        if(sendPlan.isoneweek==true)
            reminderOption=reminderOption+"1-";
        else
            reminderOption=reminderOption+"0-";
        if(sendPlan.isthreedays==true)
            reminderOption=reminderOption+"1-";
        else
            reminderOption=reminderOption+"0-";
        if(sendPlan.istwodays==true)
            reminderOption=reminderOption+"1-";
        else
            reminderOption=reminderOption+"0-";
        if(sendPlan.isoneday==true)
            reminderOption=reminderOption+"1";
        else
            reminderOption=reminderOption+"0";
        return reminderOption;
    }
    //get reminder option text
    function  getReminderOptionText(sendPlan) {
        var reminderOption='';
        if(sendPlan.ismonth==true)
            reminderOption=reminderOption+"[提前一个月]";
        if(sendPlan.istwoweeks==true)
            reminderOption=reminderOption+",[提前两星期]";
        if(sendPlan.isoneweek==true)
            reminderOption=reminderOption+",[提前一星期]";
        if(sendPlan.isthreedays==true)
            reminderOption=reminderOption+",[提前三天]";
        if(sendPlan.istwodays==true)
            reminderOption=reminderOption+",[提前两天]";
        if(sendPlan.isoneday==true)
            reminderOption=reminderOption+",[提前一天]";
        return reminderOption;
    }
    //get send option text
    function  getSendOptionText(sendPlan) {
        var sendOption='';
        if(sendPlan.isemail==true)
            sendOption=sendOption+"[邮件]";
        if(sendPlan.isphone==true)
            sendOption=sendOption+",[短信]";
        if(sendPlan.iswechat==true)
            sendOption=sendOption+",[微信]";
        return sendOption;
    }
    //validate email
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    //--------------------get current date in yyyymmdd
    function getCurrentDate(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd='0'+dd
        }
        if(mm<10) {
            mm='0'+mm
        }
        return yyyy+mm+dd;
    }

    //--------------------add days to date functions
    function addDate(paymentDate,days){//passed
        var year=parseInt(paymentDate.year);
        var month=parseInt(paymentDate.month);
        var day=parseInt(paymentDate.day);


        var newday=addDay(day,month,year,days);
        var newmonth=addMonth(month,newday.month);
        var newyear=year+newmonth.year;



        var resultyear=newyear;
        var resultmonth=newmonth.month;
        var resultday=newday.day;

        resultday=('0' + resultday).slice(-2);
        resultmonth=('0' + resultmonth).slice(-2);
        return {day:resultday,month:resultmonth,year:resultyear};
    }
    function addDay(day,month,year,days){//passed
        var newday=day-days;
        var resultDay;
        var resultMonth;

        if(newday<=0){
            resultMonth=-1;
            if(month==2||month==4||month==6||month==8||month==9||month==11||month==1){
                resultDay=31+newday;
            }
            else if(month==3&&isleapYear(year)){
                resultDay=29+newday;
            }
            else if (month==3){
                resultDay=28+newday;
            }
            else{
                resultDay=30+newday;
            }
        }
        else{
            if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
                resultDay=newday%31;
                resultMonth=parseInt(newday/31);
            }
            else if(month==2&&isleapYear(year)){
                resultDay=newday%29;
                resultMonth=parseInt(newday/29);
            }
            else if (month==2){
                resultDay=newday%28;
                resultMonth=parseInt(newday/28);
            }
            else{
                resultDay=newday%30;
                resultMonth=parseInt(newday/30);
            }
            // resultMonth=0;
            // resultDay=newday;
        }
        return {day:resultDay,month:resultMonth};
    }

    function addMonth(month,months){//passed
        var newmonth=month+months;
        var resultYear;
        var resultMonth;
        if(newmonth==0){
            resultYear=-1;
            resultMonth=12;
        }
        else if(newmonth==13){
            resultYear=1;
            resultMonth=1;
        }
        else{
            resultYear=0;
            resultMonth=newmonth;
        };
        return {month:resultMonth,year:resultYear};
    }

    function isleapYear(year)//passed
    {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    //-------------------calculate payment dates fucntions
    function getPaymentDate(payDateInfo){//passed test
        var dateTemp=payDateInfo.startDate.split('-');
        var startYear=dateTemp[0];
        var startMonth=dateTemp[1];

        dateTemp=payDateInfo.endDate.split('-');
        var endYear=dateTemp[0];
        var endMonth=dateTemp[1];

        var payDateArray=new Array();

        if(payDateInfo.frequency=='monthly'){
            for(var currentYear=startYear; currentYear<=endYear;currentYear++){
                if(currentYear!=startYear&&currentYear!=endYear){
                    for(var currentMonth=1;currentMonth<=12;currentMonth++){
                        var resultDayAndMonth=setPaymentDate(payDateInfo.payDateDay,currentMonth);
                        payDateArray.push({year:currentYear,month:resultDayAndMonth.month,
                            day:resultDayAndMonth.day});
                    }
                }
                else if(currentYear==startYear&&currentYear==endYear){
                    for(var currentMonth=startMonth; currentMonth<=endMonth;currentMonth++){
                        var resultDayAndMonth=setPaymentDate(payDateInfo.payDateDay,currentMonth);
                        payDateArray.push({year:currentYear,month:resultDayAndMonth.month,
                            day:resultDayAndMonth.day});
                    }
                }
                else if(currentYear==startYear){
                    for(var currentMonth=startMonth; currentMonth<=12;currentMonth++){
                        var resultDayAndMonth=setPaymentDate(payDateInfo.payDateDay,currentMonth);
                        payDateArray.push({year:currentYear,month:resultDayAndMonth.month,
                            day:resultDayAndMonth.day});
                    }
                }
                else{
                    for(var currentMonth=1; currentMonth<=endMonth;currentMonth++){
                        var resultDayAndMonth=setPaymentDate(payDateInfo.payDateDay,currentMonth);
                        payDateArray.push({year:currentYear,month:resultDayAndMonth.month,
                            day:resultDayAndMonth.day});
                    }
                }
            }
        }
        else if(payDateInfo.frequency=='annually'){
            for(var currentYear=startYear; currentYear<=endYear; currentYear++){
                payDateArray.push({year:currentYear,month:payDateInfo.payDateMonth,
                                    day:payDateInfo.payDateDay});
            }
        }
        else;

        return payDateArray;
    }
    //-------------------set proper date
    function setPaymentDate(day,month) {
        var resultDay=day;
        var resultMonth=month;
        if(day==31){
            if(month==4||month==6||month==9||month==11){
                resultDay=1;
                resultMonth=month+1;
            }
        }
        if(day==29||day==30||day==31){
            if(month==2){
                resultDay=1;
                resultMonth=month+1;
            }
        }


        return {day:resultDay,month:resultMonth}
    }
    //---------------calculate send date function
    function getSendDate(payDate,sendPlan){//pass
        var sendDateArray=new Array();
        var sendDate;
            if(sendPlan.ismonth==true){
                sendDate=addDate(payDate,30)
                sendDateArray.push(sendDate);
            }
            if(sendPlan.istwoweeks==true){
                sendDate=addDate(payDate,14)
                sendDateArray.push(sendDate);
            }
            if(sendPlan.isoneweek==true){
                sendDate=addDate(payDate,7)
                sendDateArray.push(sendDate);
            }
            if(sendPlan.isthreedays==true){
                sendDate=addDate(payDate,3)
                sendDateArray.push(sendDate);
            }
            if(sendPlan.istwodays==true){
                sendDate=addDate(payDate,2)
                sendDateArray.push(sendDate);
            }
            if(sendPlan.isoneday==true){
                sendDate=addDate(payDate,1)
                sendDateArray.push(sendDate);
            }

            for(var i=0; i<=7;i++){
                sendDate=addDate(payDate,-i)
                sendDateArray.push(sendDate);
            }
        return sendDateArray;
    }


    //--------------------check if table exist, if not create one
    function validateTableandInsert(tableName,insertSql) {//pass
        var checkTableSql="SELECT COUNT(*)FROM information_schema.tables "+
            "WHERE table_schema='wordpress' "+
            "AND table_name = '"+tableName+"'";
        // var isTableExist=posttodatabase(checkTableSql,'count_table');
        // alert('isTableExist='+isTableExist);

        checkIfTableExist(checkTableSql,function(output){
            //alert('isTableExist='+output);
            if(output==0){//if table does not exist create one
                var createTableSql="CREATE TABLE "+tableName+"("+
                    "id INT NOT NULL AUTO_INCREMENT,"+
                    "recipient VARCHAR(45) NOT NULL DEFAULT 0,"+
                    "email VARCHAR(1000) NOT NULL,"+
                    "phone_number VARCHAR(45) NOT NULL DEFAULT 0,"+
                    "wechat VARCHAR(45) NOT NULL DEFAULT 0,"+
                    "send_date VARCHAR(45) NOT NULL DEFAULT 0,"+
                    "html VARCHAR(2000) NOT NULL DEFAULT 0,"+
                    "text VARCHAR(2000) NOT NULL DEFAULT 0,"+
                    "event_id INT(10) NOT NULL DEFAULT 0,"+
                    "send_option VARCHAR(45) DEFAULT 0,"+
                    "PRIMARY KEY (id))";
                postToDatabase(createTableSql);
            }
            if(insertSql!='0'){
                postToDatabase(insertSql);
            }
        });
    }
    //-----------------------post sql query
    function checkIfTableExist (sql_query,handleData) {//pass
        $.ajax( { type : 'POST',
            data : { sql_query:sql_query},
            url  : host+'wp-content/themes/dongwang/database/check_if_table_exist.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert("data="+data);
                handleData(data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
    function insertToInsuranceTable (sql_query,paymentDateArray,currentDate,insuranceInfo,emails,handleData) {//pass

        $.ajax( { type : 'POST',
            data : { sql_query:sql_query},
            url  : host+'wp-content/themes/dongwang/database/insert_to_database.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert("data="+data);
                handleData(data,paymentDateArray,currentDate,insuranceInfo,emails);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };

    function insertToDatabase (sql_query,sendDateArray,paymentDate,handleData) {//pass
        $.ajax( { type : 'POST',
            data : { sql_query:sql_query},
            url  : host+'wp-content/themes/dongwang/database/insert_to_database.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert("data="+data);
                handleData(data,sendDateArray,paymentDate);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };

    function postToDatabase (sql_query) {//pass
        $.ajax( { type : 'POST',
            data : { sql_query:sql_query},
            url  : host+'wp-content/themes/dongwang/database/posttodatabase.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert("data="+data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
//--------------------make html content
function getHtml(htmlInfo){//pass
    var hidedInsuranceNumber=hideInsuranceNumber(htmlInfo.insuranceNumber);
    var url=host+"wp-content/themes/dongwang/cancel_event_by_url/cancel_event_by_url.php" +
        "?eventIdAndTableName="+htmlInfo.eventId+"-"+htmlInfo.tableName;
    url=url.replace(/\s/g, '');
    var paymentDate=htmlInfo.paymentDate[0]+htmlInfo.paymentDate[1]+htmlInfo.paymentDate[2]+
        htmlInfo.paymentDate[3]+"年"+htmlInfo.paymentDate[4]+htmlInfo.paymentDate[5]+
        "月"+htmlInfo.paymentDate[6]+htmlInfo.paymentDate[7]+"日";

    var html= "<head>缴费通知</head>"+
        "<p>尊敬的"+htmlInfo.recipient +"先生/女士</p>"+
        "<p>感谢您通过我们公司购买"+htmlInfo.insuranceCompany+"公司的"+htmlInfo.insuranceType +
        "，保单号为"+hidedInsuranceNumber+
        "按照合同规定，请您于"+paymentDate+"之前向"+htmlInfo.insuranceCompany+"公司缴付"+
        "共计$"+htmlInfo.paymentAmount +"（加币）的保费"+
        "请您提前做好资金准备按时缴付，以免延误引起保单失效。</p>"+
        "<p>如果您对缴付保费的具体流程需要帮助，请随时联系我们。 </p>"+
        "<p>客户服务部</p>"+
        "<p>365财富规划公司</p>"+
        "<p>电话：778-712-6616</p>"+
        "<p>网站: http://www.365financial.ca</p>"+
        "<p>地址：6180-4000 No. 3 Road, Richmond, B.C. Canada V6X 0J8 </p>"+
        "<p>如果您已完成付款请点击[<a href="+url+">已付款</a>]," +
        "您将不会再收到有关本次缴费的通知</p>";
    var text="缴费通知:"+
        "尊敬的"+htmlInfo.recipient +"先生/女士"+
        "感谢您通过我们公司购买"+htmlInfo.insuranceCompany+"公司的"+htmlInfo.insuranceType +
        "，保单号为"+hidedInsuranceNumber+
        "按照合同规定，请您于"+paymentDate+"之前向"+htmlInfo.insuranceCompany+"公司缴付"+
        "共计$"+htmlInfo.paymentAmount +"（加币）的保费"+
        "请您提前做好资金准备按时缴付，以免延误引起保单失效。"+
        "如果您对缴付保费的具体流程需要帮助，请随时联系我们。"+
        "[客户服务部],[365财富规划公司],[电话：778-712-6616],[地址：6180-4000 No. 3 Road, Richmond, B.C. Canada V6X 0J8 ]"+
        "如果您已完成付款请点击下面的链接，您将不会再收到关于本次交费的提醒" + url;
    if(htmlInfo.insuranceType=='房屋保险'){
        html= "<head>缴费通知</head>"+
            "<p>尊敬的"+htmlInfo.recipient +"先生/女士</p>"+
            "<p>感谢您通过我们公司购买"+htmlInfo.insuranceCompany+"公司的"+htmlInfo.insuranceType +
            "，保单号为"+hidedInsuranceNumber+
            "房屋用途为"+htmlInfo.homeinsuranceUsability+"，受保地址："+htmlInfo.insuredAdress+
            "按照合同规定，请您于"+paymentDate+"之前向"+htmlInfo.insuranceCompany+"公司缴付"+
            "共计$"+htmlInfo.paymentAmount +"（加币）的保费"+
            "请您提前做好资金准备按时缴付，以免延误引起保单失效。</p>"+
            "<p>如果您对缴付保费的具体流程需要帮助，请随时联系我们。 </p>"+
            "<p>客户服务部</p>"+
            "<p>365财富规划公司</p>"+
            "<p>电话：778-712-6616</p>"+
            "<p>网站: http://www.365financial.ca</p>"+
            "<p>地址：6180-4000 No. 3 Road, Richmond, B.C. Canada V6X 0J8 </p>"+
            "<p>如果您已完成付款请点击[<a href="+url+">已付款</a>]," +
            "您将不会再收到有关本次缴费的通知</p>";
        text= "缴费通知:"+
            "尊敬的"+htmlInfo.recipient +"先生/女士"+
            "感谢您通过我们公司购买"+htmlInfo.insuranceCompany+"公司的"+htmlInfo.insuranceType +
            "，保单号为"+hidedInsuranceNumber+
            "房屋用途为"+htmlInfo.homeinsuranceUsability+"，受保地址："+htmlInfo.insuredAdress+
            "按照合同规定，请您于"+paymentDate+"之前向"+htmlInfo.insuranceCompany+"公司缴付"+
            "共计$"+htmlInfo.paymentAmount +"（加币）的保费"+
            "请您提前做好资金准备按时缴付，以免延误引起保单失效。"+
            "如果您对缴付保费的具体流程需要帮助，请随时联系我们。"+
            "[客户服务部],[365财富规划公司],[电话：778-712-6616],[地址：6180-4000 No. 3 Road, Richmond, B.C. Canada V6X 0J8 ]"+
            "如果您已完成付款请点击下面的链接，您将不会再收到关于本次交费的提醒" + url;
    }

    if(htmlInfo.sendDate>=htmlInfo.paymentDate){
        html= "<head>缴费通知</head>"+
            "<p>尊敬的"+htmlInfo.recipient +"先生/女士</p>"+
            "<p>感谢您通过我们公司购买"+htmlInfo.insuranceCompany+"公司的"+htmlInfo.insuranceType +
            "，保单号为"+hidedInsuranceNumber+
            "按照合同规定，请您于"+paymentDate+"之前向"+htmlInfo.insuranceCompany+"公司缴付"+
            "共计$"+htmlInfo.paymentAmount +"（加币）的保费</p>"+
            "<p>您已经逾期未还款，请务必尽快缴费, 超过宽限期还未缴款，后果自负</p>" +
            "<p>如果您对缴付保费的具体流程需要帮助，请随时联系我们。 </p>"+
            "<p>客户服务部</p>"+
            "<p>365财富规划公司</p>"+
            "<p>电话：778-712-6616</p>"+
            "<p>网站: http://www.365financial.ca</p>"+
            "<p>地址：6180-4000 No. 3 Road, Richmond, B.C. Canada V6X 0J8 </p>"+
            "<p>如果您已完成付款请点击[<a href="+url+">已付款</a>]," +
            "您将不会再收到有关本次缴费的通知</p>";
        text= "缴费通知:"+
            "尊敬的"+htmlInfo.recipient +"先生/女士"+
            "感谢您通过我们公司购买"+htmlInfo.insuranceCompany+"公司的"+htmlInfo.insuranceType +
            "，保单号为"+hidedInsuranceNumber+
            "按照合同规定，请您于"+paymentDate+"之前向"+htmlInfo.insuranceCompany+"公司缴付"+
            "共计$"+htmlInfo.paymentAmount +"（加币）的保费"+
            "您已经逾期未还款，请务必尽快缴费, 超过宽限期还未缴款，后果自负" +
            "如果您对缴付保费的具体流程需要帮助，请随时联系我们。"+
            "[客户服务部],[365财富规划公司],[电话：778-712-6616],[地址：6180-4000 No. 3 Road, Richmond, B.C. Canada V6X 0J8 ]"+
            "如果您已完成付款请点击下面的链接，您将不会再收到关于本次交费的提醒" + url;
        if(htmlInfo.insuranceType=='房屋保险') {
            html = "<head>缴费通知</head>" +
                "<p>尊敬的" + htmlInfo.recipient + "先生/女士</p>" +
                "<p>感谢您通过我们公司购买"+htmlInfo.insuranceCompany+"公司的"+htmlInfo.insuranceType +
                "，保单号为"+hidedInsuranceNumber+
                "按照合同规定，请您于"+paymentDate+"之前向"+htmlInfo.insuranceCompany+"公司缴付"+
                "共计$"+htmlInfo.paymentAmount +"（加币）的保费</p>"+
                "<p>您已经逾期未还款，请务必尽快缴费, 超过宽限期还未缴款，后果自负</p>" +
                "<p>如果您对缴付保费的具体流程需要帮助，请随时联系我们。 </p>"+
                "<p>客户服务部</p>"+
                "<p>365财富规划公司</p>"+
                "<p>电话：778-712-6616</p>"+
                "<p>网站: http://www.365financial.ca</p>"+
                "<p>地址：6180-4000 No. 3 Road, Richmond, B.C. Canada V6X 0J8 </p>"+
                "<p>如果您已完成付款请点击[<a href="+url+">已付款</a>]," +
                "您将不会再收到有关本次缴费的通知</p>";
            text = "缴费通知:" +
                "尊敬的" + htmlInfo.recipient + "先生/女士" +
                "感谢您通过我们公司购买"+htmlInfo.insuranceCompany+"公司的"+htmlInfo.insuranceType +
                "，保单号为"+hidedInsuranceNumber+
                "房屋用途为" + htmlInfo.homeinsuranceUsability + "，受保地址：" + htmlInfo.insuredAdress +
                "按照合同规定，请您于"+paymentDate+"之前向"+htmlInfo.insuranceCompany+"公司缴付"+
                "共计$"+htmlInfo.paymentAmount +"（加币）的保费"+
                "您已经逾期未还款，请务必尽快缴费, 超过宽限期还未缴款，后果自负" +
                "如果您对缴付保费的具体流程需要帮助，请随时联系我们。"+
                "[客户服务部],[365财富规划公司],[电话：778-712-6616],[地址：6180-4000 No. 3 Road, Richmond, B.C. Canada V6X 0J8 ]"+
                "如果您已完成付款请点击下面的链接，您将不会再收到关于本次交费的提醒" + url;
        }

    }
    return {html:html,text:text};
}
//----------hide insurance number funrtion
function hideInsuranceNumber(insuranceNumber){
    var length=insuranceNumber.length;
    var hidedLength=length-4;
    var hidedPart="";
    var displayedPart="";
    for(var i=0; i<hidedLength; i++){
        hidedPart=hidedPart+"*";
    }
    for(var i=hidedLength; i<length; i++){
        displayedPart=displayedPart+insuranceNumber[i];
    }

    return hidedPart+displayedPart;
}