<div id="main_div_cebu">
    <div id="text_div_cebu" style="margin: 20% 20% 3% 20%;cursor: default">
        您是否确定已经完成本次缴费，如果确定，请点击确认，您将不会在收到有关本次缴费的任何通知
    </div>
    <div id="yes_button_cebu" style="border: solid 2px;
         width: 5%;margin: 0% 40% 0% 40%; text-align: center; cursor: pointer">确认</div>
</div>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script>
    $(document).ready(function(){
        $('#yes_button_cebu').on('click', function(){
           var eventIdAndTableName=getQueryVariable('eventIdAndTableName');
           //alert(eventIdAndTableName);
           postPaymentDoneAPI(eventIdAndTableName);
        });
        function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
    function postPaymentDoneAPI (eventIdAndTableName) {//pass

        $.ajax( { type : 'POST',
            data : { eventIdAndTableName:eventIdAndTableName},
            url  : 'http://localhost:3000/wp-content/themes/dongwang/database/payment_done_api.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                alert("感谢您按时缴费");
            },
            error: function ( xhr ) {
                alert("感谢您及时缴费");

            }
        });
    }
    });

</script>