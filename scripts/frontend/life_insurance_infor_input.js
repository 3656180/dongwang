document.writeln("<script src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js'> </script>")

$(document).ready(function(){
    var gender="先生";//0=mr 1=miss
    var issmoke="否";//0=no 1=yes
    var iscontact=0;//0=no contact 1= message 2=phone 3=email
    var first_name;
    var last_name;
    var phone_number;
    var email_address;
    var age;
    var baoe=0;



    $(function(){//life insurance page functions
        //close life insurance page close button hover functions
        //close life insurance page close button hover functions
        //close life insurance page close button hover functions
        $('#insurance_quote_0_close_button').on('mouseover',  function() {
            $('#insurance_quote_0_close_button_cross_X').css('transform', 'rotate(90deg)');
            $('#insurance_quote_0_close_button_back').css('width', '250%');
            $('#insurance_quote_0_close_text').css('opacity', '1');

        });
        $('#insurance_quote_0_close_button').on('mouseout',  function() {
            $('#insurance_quote_0_close_button_cross_X').css('transform', 'rotate(0deg)');
            $('#insurance_quote_0_close_button_back').css('width', '100%');
            $('#insurance_quote_0_close_text').css('opacity', '0');
        });
        //close life insurance page close button hover functions
        //close life insurance page close button hover functions
        //close life insurance page close button hover functions

        //life insurance page submit button hover functions
        //life insurance page submit button hover functions
        //life insurance page submit button hover functions
        $('#insurance_quote_0_submit_button').on('mouseover',  function() {
            $('#insurance_quote_0_submit_button').css('opacity', '1');

        });
        $('#insurance_quote_0_submit_button').on('mouseout',  function() {
            $('#insurance_quote_0_submit_button').css('opacity', '0.7');
        });
        //life insurance page submit button hover functions
        //life insurance page submit button hover functions
        //life insurance page submit button hover functions

        //select gender function
        //select gender function
        //select gender function
        $('#title_mr').on('click',  function() {
            $('#title_mr').css('background-color', '#42c2f4');
            $('#title_miss').css('background-color', 'white');
            gender="先生";
            //test





            //test
        });
        $('#title_miss').on('click',  function() {
            $('#title_mr').css('background-color', 'white');
            $('#title_miss').css('background-color', '#42c2f4');
            gender="女士";
            //test

            //test
        });
        //select gender function
        //select gender function
        //select gender function

        //select smoke function
        //select smoke function
        //select smoke function
        $('#smoke_yes').on('click',  function() {
            $('#smoke_yes').css('background-color', '#42c2f4');
            $('#smoke_no').css('background-color', 'white');
            issmoke="是";
        });
        $('#smoke_no').on('click',  function() {
            $('#smoke_yes').css('background-color', 'white');
            $('#smoke_no').css('background-color', '#42c2f4');
            issmoke="否";
        });
        //select smoke function
        //select smoke function
        //select smoke function


        //select contact method function
        //select contact method function
        //select contact method function
        $('#message').on('click',  function() {
            $('#message').css('background-color', '#42c2f4');
            $('#phone').css('background-color', 'white');
            $('#email_0').css('background-color', 'white');
            $('#no_contact').css('background-color', 'white');
            iscontact=1;
        });
        $('#phone').on('click',  function() {
            $('#message').css('background-color', 'white');
            $('#phone').css('background-color', '#42c2f4');
            $('#email_0').css('background-color', 'white');
            $('#no_contact').css('background-color', 'white');
            iscontact=2;
        });
        $('#email_0').on('click',  function() {
            $('#message').css('background-color', 'white');
            $('#phone').css('background-color', 'white');
            $('#email_0').css('background-color', '#42c2f4');
            $('#no_contact').css('background-color', 'white');
            iscontact=3;
        });
        $('#no_contact').on('click',  function() {
            $('#message').css('background-color', 'white');
            $('#phone').css('background-color', 'white');
            $('#email_0').css('background-color', 'white');
            $('#no_contact').css('background-color', '#42c2f4');
            iscontact=0;
        });
        //select contact method function
        //select contact method function
        //select contact method function

        //select baoe function
        //select baoe function
        //select baoe function
        $('#_5wan').on('click',  function() {
            setallbaoewhite()
            $('#_5wan').css('background-color', '#42c2f4');
            baoe=5;
        });
        $('#_10wan').on('click',  function() {
            setallbaoewhite()
            $('#_10wan').css('background-color', '#42c2f4');
            baoe=10;
        });
        $('#_20wan').on('click',  function() {
            setallbaoewhite()
            $('#_20wan').css('background-color', '#42c2f4');
            baoe=20;
        });
        $('#_30wan').on('click',  function() {
            setallbaoewhite()
            $('#_30wan').css('background-color', '#42c2f4');
            baoe=30;
        });

        $('#_40wan').on('click',  function() {
            setallbaoewhite()
            $('#_40wan').css('background-color', '#42c2f4');
            baoe=40;
        });
        $('#_50wan').on('click',  function() {
            setallbaoewhite()
            $('#_50wan').css('background-color', '#42c2f4');
            baoe=50;
        });
        $('#_100wan').on('click',  function() {
            setallbaoewhite()
            $('#_100wan').css('background-color', '#42c2f4');
            baoe=100;
        });
        $('#_200wan').on('click',  function() {
            setallbaoewhite()
            $('#_200wan').css('background-color', '#42c2f4');
            baoe=200;
        });
        function setallbaoewhite() {
            $('#_5wan').css('background-color', 'white');
            $('#_10wan').css('background-color', 'white');
            $('#_20wan').css('background-color', 'white');
            $('#_30wan').css('background-color', 'white');
            $('#_40wan').css('background-color', 'white');
            $('#_50wan').css('background-color', 'white');
            $('#_100wan').css('background-color', 'white');
            $('#_200wan').css('background-color', 'white');
        };

        //select baoe function
        //select baoe function
        //select baoe function

        //life insurance submit button
        //life insurance submit button
        //life insurance submit button
        $('#insurance_quote_0_submit_button').on("click", function() {
            first_name=$('#first_name_input_lii').val();
            last_name=$('#last_name_input_lii').val();
            age=$('#age_input').val();
            email_address=$('#email_input').val();
            phone_number=$('#phone_number_input').val();
            var html=first_name+" "+last_name+" "+gender+","+age+"岁，"+"是否吸烟："+issmoke+"，选择保额"+baoe+"万，" +
                "电话：" +phone_number+"，email:"+email_address+"，希望通过"+iscontact+"联系他／她";
            sendquoteemail(html);
        });
        //life insurance submit button
        //life insurance submit button
        //life insurance submit button


    });

    //-----------------------post to email sending php file
    function sendquoteemail (html) {
        $.ajax( { type : 'POST',
            data : { html:html},
            url  : 'http://localhost:3000/wp-content/themes/dongwang/email/testemail.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                //alert(data);               // <=== VALUE RETURNED FROM FUNCTION.
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };

});


