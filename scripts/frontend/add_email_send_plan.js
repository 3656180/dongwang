$(document).ready(function(){
    var frequency="monthly";
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
    $('#submit_button_aesp').on('click', function(){


        var sendInfo={  recipient:$('#recipient_input_aesp').val(),
                        email:$('#email_address_input_asep').val(),
                        paymentAmount:$('#payment_amount_input_asep').val(),
                        insuranceNumber:$('#insurance_number_input_asep').val()
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
        $sql="";
        //posttodatabase ($sql);
        //test
        // var testArray=getPaymentDate({startDate:'2013-09-12',
        //                                  endDate:'2014-08-22',
        //                                  payDateMonth:'1,',
        //                                  payDateDay:'1',
        //                                  frequency:'monthly'});
        // var testsring='';
        // for(var i=0;i<testArray.length;i++){
        //             testsring=testsring+i+"th";
        //             testsring=testsring+testArray[i].year;
        //             testsring=testsring+ testArray[i].month;
        //             testsring=testsring+ testArray[i].day;
        //         }
        // alert(testsring);
        // for(var i=0;i<testArray.length;i++){
        //
        //     var testArray2=getSendDate(testArray[i],{ismonth:false,
        //                                              istwoweeks:false,
        //                                              isoneweek:false,
        //                                              isthreedays:true,
        //                                              istwodays:false,
        //                                              isoneday:false,
        //                                          })
        //     //alert(testArray2[0].day);
        //     for(var i=0;i<testArray2.length;i++){
        //         testsring=testsring+i+"th";
        //         testsring=testsring+testArray2[i].year;
        //         testsring=testsring+ testArray2[i].month;
        //         testsring=testsring+ testArray2[i].day;
        //     }
        //
        // };
        // alert(testsring);
        //test
        // var testsring='';
        // var testArray2=getSendDate({year:2012,month:01,day:12},
        //                             {ismonth:true, istwoweeks:true,
        //                              isoneweek:true, isthreedays:true,
        //                              istwodays:true, isoneday:true})
        //
        //         for(var i=0;i<testArray2.length;i++){
        //             testsring=testsring+i+"th";
        //             testsring=testsring+testArray2[i].year;
        //             testsring=testsring+ testArray2[i].month;
        //             testsring=testsring+ testArray2[i].day;
        //         }
        //
        //     alert(testsring);

       //  var name='dwang';
       // insertToDatabase("INSERT INTO payment_event (recipient,email,phone_number," +
       //     "payment_amount,payment_date,insurance_number,admin,event_status)" +
       //     "VALUES ('"+name+"','test@email.com','1111111111','1111','2012','1111','dwang','1')");

        //
        InsertToDatabase(
            {recipient:'dong',
                email:'test@gmail.com',
                paymentAmount:'1000',
                insuranceNumber:'11111',
                phoneNumber:'2222222222'},
            {startDate:'2013-11-12',
                endDate:'2014-02-22',
                payDateMonth:'1,',
                payDateDay:'1',
                frequency:'monthly'},
            {   ismonth:false,
                istwoweeks:false,
                isoneweek:false,
                isthreedays:true,
                istwodays:true,
                isoneday:true,
            }
        );

    });











    //---------------get insert sql array
    function InsertToDatabase(sendInfo,payDateInfo,sendPlan){
        var paymentDateArray=getPaymentDate(payDateInfo);
        //var sqlArray= new Array();
        //for loop of PAYMENT event table
        //alert('paymentDateArray length'+paymentDateArray.length);
        for(var i=0; i<paymentDateArray.length;i++){
            //alert('i='+i);
            var paymentDate='';
            var resultday=('0' + paymentDate+paymentDateArray[i].day).slice(-2);
            var resultmonth=('0' + paymentDate+paymentDateArray[i].month).slice(-2);
            var resultyear=paymentDateArray[i].year;
            paymentDate=paymentDate+resultyear;
            paymentDate=paymentDate+resultmonth;
            paymentDate=paymentDate+resultday;
            //alert(paymentDate);
            var sql="INSERT INTO payment_event (recipient,email,phone_number," +
                "payment_amount,payment_date,insurance_number,admin,event_status)" +
                "VALUES ('"+sendInfo.recipient+"','"+sendInfo.email+"','"+ sendInfo.phoneNumber+
                "','"+sendInfo.paymentAmount+"','"+paymentDate+ "','"+ sendInfo.insuranceNumber+
                "','dwang','1')";
            var sendDateArray=getSendDate(paymentDateArray[i],sendPlan);

            insertToDatabase(sql,sendDateArray,function(currentPayEventId,sendDateArray) {


                //for loop of SEND EMAIL event table
                for(var j=0; j<sendDateArray.length;j++) {
                    var sendDate = '';
                    sendDate = sendDate + sendDateArray[j].year;
                    sendDate = sendDate + sendDateArray[j].month;
                    sendDate = sendDate + sendDateArray[j].day;
                    var htmlInfo={  recipient:sendInfo.recipient,
                        paymentAmount:sendInfo.paymentAmount,
                        insuranceNumber:sendInfo.insuranceNumber,
                        sendDate:sendDate,
                    }
                    var html=getHtml(htmlInfo);
                    var tableName="send_plan_"+sendDateArray[j].year;
                    isTableExistAndCreate(tableName);
                    //sql for SEND EMAIL event table

                    var sql="INSERT INTO send_plan_"+sendDateArray[j].year+
                        " (recipient,email,send_date,html,event_id) " +
                        "VALUES ('"+sendInfo.recipient+"','"+sendInfo.email+"','"+sendDate+
                        "','"+html+"',"+currentPayEventId+")";

                    postToDatabase(sql);
                }

            });

        }
    }
    //--------------------check if table exist, if not create one
    function isTableExistAndCreate(tableName) {//pass
        var checkTableSql="SELECT COUNT(*)FROM information_schema.tables "+
            "WHERE table_schema='wordpress' "+
            "AND table_name = '"+tableName+"'";
        // var isTableExist=posttodatabase(checkTableSql,'count_table');
        // alert('isTableExist='+isTableExist);

        checkIfTableExist(checkTableSql,function(output){
            //alert('isTableExist='+output);
            if(output==0){
                var createTableSql="CREATE TABLE "+tableName+"("+
                    "id INT NOT NULL AUTO_INCREMENT,"+
                    "recipient VARCHAR(45) NOT NULL,"+
                    "email VARCHAR(45) NOT NULL,"+
                    "send_date VARCHAR(45) NOT NULL,"+
                    "html VARCHAR(1000) NOT NULL,"+
                    "cc_list VARCHAR(450),"+
                    "event_id INT(10) NOT NULL,"+
                    "PRIMARY KEY (id))";
                postToDatabase(createTableSql);
            }

        });

    }
    //--------------------make html content
    function getHtml(htmlInfo){//pass
        var html= "<head>缴费通知</head>"+
            "<p>尊敬的"+htmlInfo.recipient +"先生/女士</p>"+
            "<p>您所购买的xx保险，保单号后四位为"+htmlInfo.insuranceNumber+
            "需要于"+htmlInfo.sendDate+"之前缴纳"+
            "共计$"+htmlInfo.paymentAmount +"保费"+
            "请您提前做好准备，避免延误缴费时间</p>"+
            "<p>如有任何疑问请致电xxx-xxx-xxxx</p>"+
            "<p>王栋</p>"+
            "<p></p>";

        return html;
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
            resultMonth=0;
            resultDay=newday;
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
                        payDateArray.push({year:currentYear,month:currentMonth,
                                            day:payDateInfo.payDateDay});
                    }
                }
                else if(currentYear==startYear&&currentYear==endYear){
                    for(var currentMonth=startMonth; currentMonth<=endMonth;currentMonth++){
                        payDateArray.push({year:currentYear,month:currentMonth,
                            day:payDateInfo.payDateDay});
                    }
                }
                else if(currentYear==startYear){
                    for(var currentMonth=startMonth; currentMonth<=12;currentMonth++){
                        payDateArray.push({year:currentYear,month:currentMonth,
                            day:payDateInfo.payDateDay});
                    }
                }
                else{
                    for(var currentMonth=1; currentMonth<=endMonth;currentMonth++){
                        payDateArray.push({year:currentYear,month:currentMonth,
                                            day:payDateInfo.payDateDay});
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
        return sendDateArray;
    }

    //-----------------------post sql query
    function checkIfTableExist (sql_query,handleData) {//pass
        $.ajax( { type : 'POST',
            data : { sql_query:sql_query},
            url  : 'http://localhost:3000/wp-content/themes/dongwang/database/check_if_table_exist.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert("data="+data);
                handleData(data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };

    function insertToDatabase (sql_query,sendDateArray,handleData) {//pass
        $.ajax( { type : 'POST',
            data : { sql_query:sql_query},
            url  : 'http://localhost:3000/wp-content/themes/dongwang/database/insert_to_database.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert("data="+data);
                handleData(data,sendDateArray);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
    function postToDatabase (sql_query) {//pass
        $.ajax( { type : 'POST',
            data : { sql_query:sql_query},
            url  : 'http://localhost:3000/wp-content/themes/dongwang/database/posttodatabase.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert("data="+data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
});