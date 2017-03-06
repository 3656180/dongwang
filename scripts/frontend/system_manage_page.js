$(document).ready(function(){

    function loadXmlandappend (url,index,towhichphp) {
        //alert(url);
        if(towhichphp==0){
            $phpurl='http://localhost:3000/wp-content/themes/dongwang/xml/load_xml/load_sent_history_to_popup_smg.php';              // <=== CALL THE PHP FUNCTION HERE.
        }
        else{
            $phpurl='http://localhost:3000/wp-content/themes/dongwang/xml/load_xml/load_send_plan_to_popup_smg.php';              // <=== CALL THE PHP FUNCTION HERE.
        }
        $.ajax( { type : 'POST',
            data : { url:url,
                index:index
            },
            url  : $phpurl,              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert("success");               // <=== VALUE RETURNED FROM FUNCTION.
                $('#pop_up_div_smp').empty();
                $("#pop_up_div_smp").append(data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };









    $(function(){

        $('#main_page_smp').on('click',  function() {
            resetall();
        });
        $('#send_history_smp').on('click',  function() {
            resetall();
            $('#email_send_history_page').css('transform', 'translateX(0px)');
        });

        $('#send_plan_smp').on('click',  function() {
            resetall();
            $('#email_send_plan_page').css('transform', 'translateX(0px)');
        });

        $('#set_email_smp').on('click',  function() {
            resetall();
            $('#set_email_context_page').css('transform', 'translateX(0px)');
        });

        $('#general_set_smp').on('click',  function() {
            resetall();
            $('#general_set_page').css('transform', 'translateX(0px)');
        });
        $('.send_history_list').on('click', function(){
            //alert(jQuery(this).attr("id"));
            $('#pop_up_div_frame_smp').css('transform', 'translateX(0)');

            writeToPopupDiv (jQuery(this).attr("id"),"sent_history.xml",0);
        });
        $('.send_plan_list').on('click', function(){
            //alert(jQuery(this).attr("id"));
            $('#pop_up_div_frame_smp').css('transform', 'translateX(0)');

            writeToPopupDiv (jQuery(this).attr("id"),"send_plan.xml",1);
        });
        $('#close_button_puds').on('click', function(){
            //alert(jQuery(this).attr("id"));
            $('#pop_up_div_frame_smp').css('transform', 'translateX(-100%)');
        });


    });



    function resetall () {
        $('#email_send_history_page').css('transform', 'translateX(-100%)');
        $('#email_send_plan_page').css('transform', 'translateX(-100%)');
        $('#set_email_context_page').css('transform', 'translateX(-100%)');
        $('#general_set_page').css('transform', 'translateX(-100%)');

    };
    function writeToPopupDiv(id,file,towhichphp) {
        var index = id.replace('list_','');
        //alert(index);
        var url = "/wp-content/themes/dongwang/xml/"+file;
       //alert(url);
        loadXmlandappend(url,index,towhichphp);


    };

});