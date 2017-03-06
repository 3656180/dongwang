// //---------------test select from database
// $(document).ready(function() {
//     function isEmailExist (sql_query) {
//         $.ajax( {
//             type : 'POST',
//             data : {sql_query:sql_query },
//             url  : 'http://localhost:3000/wp-content/themes/dongwang/database/selectfromdata.php',              // <=== CALL THE PHP FUNCTION HERE.
//             success: function ( data ) {
//                 alert( data );
//                 // <=== VALUE RETURNED FROM FUNCTION.
//             },
//             error: function ( xhr ) {
//                 alert( "error" );
//             }
//         });
//     };
//     //---------------
//     $('.main_header').on('click', '#login_button', function() {
//         // alert("login is clicked");
//         var email = $('#email').val();
//         //var sql_query="SELECT email FROM MyGuests WHERE email LIKE '%"+email+"%'"
//         var sql_query="SELECT email FROM MyGuests WHERE email = 'qwe' ";
//
//         isEmailExist(sql_query);
//
//
//     });
//
//
// });
