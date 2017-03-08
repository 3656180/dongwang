$(document).ready(function(){
    $issort=false;
    $value=false;
    $sort_option='id';
    $sort_direction='up';
    function set_sort_parameter(issort,sort_option,sort_direction){
        $issort=issort;
        $sort_option=sort_option;
        $sort_direction=sort_direction;
    }
    function set_filter_parameter(value){
        $value=value;
    }
    function post_sortORfilter_request () {

        $.ajax( { type : 'POST',
            data : {
                issort:$issort,
                sort_option:$sort_option,//sort option && index
                sort_direction:$sort_direction,//sort direction && value
                value:$value
            },
            url  : 'http://localhost:3000/wp-content/themes/dongwang/xml/load_xml/load_sent_history_to_senthistory.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                $('#show_list_div_espp').empty();
                $('#show_list_div_espp').append(data);
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };




    $(function(){
        //sort by name
        $('#name_sort_up').on('click', function(){
            set_sort_parameter(true,'recipient','up');
            post_sortORfilter_request();
        });
        $('#name_sort_down').on('click', function(){
            set_sort_parameter(true,'recipient','down');
            post_sortORfilter_request();
        });
        //sort by email
        $('#email_sort_up').on('click', function(){
            set_sort_parameter(true,'email','up');
            post_sortORfilter_request();
        });
        $('#email_sort_down').on('click', function(){
            set_sort_parameter(true,'email','down');
            post_sortORfilter_request();
        });
        //sort by sent date
        $('#date_sort_up').on('click', function(){
            set_sort_parameter(true,'send_date','up');
            post_sortORfilter_request();
        });
        $('#date_sort_down').on('click', function(){
            set_sort_parameter(true,'send_date','down');
            post_sortORfilter_request();
        });
        //search
        $('#search_button_eshp').on('click', function(){
            set_filter_parameter($('#search_input_eshp').val());
            post_sortORfilter_request();
        });
    });
});