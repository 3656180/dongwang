// $(document).ready(function(){
//     $('#yes_button_cebu').on('click', function(){
//         var eventIdAndTableName=getQueryVariable('eventIdAndTableName');
//         alert(eventIdAndTableName);
//         postPaymentDoneAPI(eventIdAndTableName);
//     });
//     function getQueryVariable(variable)
//     {
//         var query = window.location.search.substring(1);
//         var vars = query.split("&");
//         for (var i=0;i<vars.length;i++) {
//             var pair = vars[i].split("=");
//             if(pair[0] == variable){return pair[1];}
//         }
//         return(false);
//     }
//     function postPaymentDoneAPI (eventIdAndTableName) {//pass
//
//         $.ajax( { type : 'POST',
//             data : { eventIdAndTableName:eventIdAndTableName},
//             url  : 'http://localhost:3000/wp-content/themes/dongwang/database/payment_done_api.php',              // <=== CALL THE PHP FUNCTION HERE.
//             success: function ( data ) {
//                 //alert("data="+data);
//             },
//             error: function ( xhr ) {
//                 alert( "error" );
//             }
//         });
//     }
// });