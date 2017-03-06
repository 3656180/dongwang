$(document).ready(function(){
    $(function(){
        $(document).on('click', '.send_history_list', function(){
            //alert(jQuery(this).attr("id"));
            writeToPopupDiv (jQuery(this).attr("id"))
        });
    });
    function writeToPopupDiv (id) {
        var test=document.getElementById('col_1_list_0').value;
        //alert(id+test);


        $("#pop_up_div_eshp").append("" +
            "<p>收件人："+$('#col_1_'+id+'').val()+"</p>");
    };
});