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
        var testArray=getSendDate(getPaymentDate(payDateInfo),sendPlan);
        var testsring='';
        for(var i=0;i<testArray.length;i++){
            testsring=testsring+i+"th";

            testsring=testArray[i].year;
            testsring=testsring+ testArray[i].month;
            testsring=testsring+ testArray[i].day
        };
        alert(testsring);
        //test
        //alert(addDate({day:1,month:3,year:2013},10).day);

    });
    //------------inset send plan to database
    function InsertSendPlantoDatabase(infoSet){
        var sqlArray=getInsertSql(infoSet.sendInfo,infoSet.patDateInfo,infoSet.SendPlan);
        for(var i=0; i<sqlArray.length;i++){
            posttodatabase(sqlArray[i]);
        }
    }

    //-----------------------post sql query
    function posttodatabase (sql_query) {
        $.ajax( { type : 'POST',
            data : { sql_query:sql_query},
            url  : 'http://localhost:3000/wp-content/themes/dongwang/database/posttodatabase.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                alert("new customer added");
                return data;// <=== VALUE RETURNED FROM FUNCTION.
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
    //---------------get insert sql array
    function getInsertSql(sendInfo,payDateInfo,sendPlan){
        var sendDateArray=getSendDate(getPaymentDate(payDateInfo),sendPlan);
        var sqlArray= new Array();


        for(var i=0; i<sendDateArray.length;i++){
            var sendDate=sendDateArray[i].year+sendDateArray[i].month+sendDateArray[i].day;
            var htmlInfo={  recipient:sendInfo.recipient,
                            paymentAmount:sendInfo.paymentAmount,
                            insuranceNumber:sendInfo.insuranceNumber,
                            sendDate:sendDate,
                            }
            var html=getHtml(htmlInfo);
            var tableName="send_plan_"+sendDateArray[i].year;
            isTableExistAndCreate(tableName);

            var sql="INSERT INTO send_plan_"+sendDateArray[i].year+
                " (recipient,email,paymentAmount,insurance_number,send_date,html,dmin) " +
                "VALUES ("+sendInfo.recipient+")";
            sqlArray.push(sql);
        }
        return sqlArray
    }
    //--------------------check if table exist, if not create one
    function isTableExistAndCreate(tableName) {//check if the send plan table exist, if not exist create one
        var checkTableSql="SELECT COUNT(*)FROM information_schema.tables"+
            "WHERE table_schema='wordpress'"+
            "AND table_name="+tableName+
            "LIMIT 1";
        var isTableExist=posttodatabase(checkTableSql);
        if(isTableExist==0){
            var createTableSql="CREATE TABLE "+tableName+"("+
                "id INT NOT NULL AUTO_INCREMENT,"+
                "recipient VARCHAR(45) NOT NULL,"+
                "email VARCHAR(45) NOT NULL,"+
                "sned_date VARCHAR(45) NOT NULL,"+
                "payment_amount VARCHAR(45) NOT NULL,"+
                "payment_date VARCHAR(45) NOT NULL,"+
                "admin VARCHAR(45) NULL,"+
                "template_id VARCHAR(45) NULL,"+
                "html VARCHAR(45) NOT NULL,"+
                "PRIMARY KEY (id))";
            posttodatabase(createTableSql);
        }

    }
    //--------------------make html content
    function getHtml(htmlInfo){
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

        return {day:newday.day,month:newmonth.month,year:newyear};
    }
    function addDay(day,month,year,days){//passed
        var newday=day-days;
        var resultDay;
        var resultMonth;

        if(newday<=0){
            resultMonth=-1;
            if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
                resultDay=31+newday;
            }
            else if(month==2&&isleapYear(year)){
                resultDay=29+newday;
            }
            else if (month==2){
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

        resultDay=('0' + resultDay).slice(-2);
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
        resultMonth=('0' + resultMonth).slice(-2);
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
    function getSendDate(payDateArray,sendPlan){//pass
        var sendDateArray=new Array();
        var sendDate;
        for(var i=0; i<payDateArray.length; i++){
            if(sendPlan.ismonth==true){
                sendDate=addDate(payDateArray[i],30)
                sendDateArray.push(sendDate);
            }
            if(sendPlan.istwoweeks==true){
                sendDate=addDate(payDateArray[i],14)
                sendDateArray.push(sendDate);
            }
            if(sendPlan.isoneweek==true){
                sendDate=addDate(payDateArray[i],7)
                sendDateArray.push(sendDate);
            }
            if(sendPlan.isthreedays==true){
                sendDate=addDate(payDateArray[i],3)
                sendDateArray.push(sendDate);
            }
            if(sendPlan.istwodays==true){
                sendDate=addDate(payDateArray[i],2)
                sendDateArray.push(sendDate);
            }
            if(sendPlan.isoneday==true){
                sendDate=addDate(payDateArray[i],1)
                sendDateArray.push(sendDate);
            }
        }
        return sendDateArray;
    }

});