

$(document).ready(function() {
    //-----------------------post sql query
    function posttodatabase (sql_query) {
        $.ajax( { type : 'POST',
            data : { sql_query:sql_query},
            url  : 'http://localhost:3000/wp-content/themes/dongwang/database/posttodatabase.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                alert("new customer added");               // <=== VALUE RETURNED FROM FUNCTION.
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
//function validateEmail($email):  check if the customer already exsit by checking the pk email,
// if not exist add new customer to the database by calling posttodatabase function
    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( $email );
    }
    //-------------
    function isEmailExist (sql_query_isexsit,sql_query_insert) {
        $.ajax( {
            type : 'POST',
            data : {sql_query:sql_query_isexsit },
            url  : 'http://localhost:3000/wp-content/themes/dongwang/database/isEmailExist.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert( data );
                if(data=="false"){

                    alert("email is exist");

                }
                else {
                    // <=== VALUE RETURNED FROM FUNCTION.
                    posttodatabase(sql_query_insert);

                }
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };
   //------------



    //-----------
    $('#add_customer').on('click', '#submit_button', function () {
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var phone_number = $('#phone_number').val();
        var address = $('#address').val();
        var city = $('#city').val();
        var post_code = $('#post_code').val();
        var additional_information_input_field = $('#additional_information_input_field').val();

        if(!validateEmail(email)||email==""){//validate email format

            alert("email address is invalid");
        }
        else {
            var sql_query_isexsit="SELECT email FROM Customers WHERE email = '"+email+"' ";
            var sql_query_insert = "INSERT INTO Customers (firstname, lastname, email) " +
                "VALUES ('" + first_name + "', '" + last_name + "','" + email + "')";
            isEmailExist(sql_query_isexsit,sql_query_insert);
        }

    });

});




