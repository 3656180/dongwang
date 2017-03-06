$(document).ready(function(){
//-----------------
    function login (username,password) {
        $.ajax( { type : 'POST',
            data : {username:username,
                    password:password},
            url  : 'http://localhost:3000/wp-content/themes/dongwang/login/login_session.php',              // <=== CALL THE PHP FUNCTION HERE.
            success: function ( data ) {
                alert(data);
                var result = $.trim(data);//replace the fucking space that you can't see
                if(result=='1'){
                    login_welcome();
                    updatelogin_button();
                }              // <=== VALUE RETURNED FROM FUNCTION.
            },
            error: function ( xhr ) {
                alert( "error" );
            }
        });
    };

    function login_welcome() {
        $('#login_page').css('transform', 'translate3d(-100%,0px,0px)');
        $('#welcome_page').css('transform', 'translate3d(0px,0px,0px)');
        var delay=3000; //1 second

        setTimeout(function() {
            $('#welcome_page').css('transform', 'translate3d(-100%,0px,0px)');
        }, delay);
        setTimeout(function() {
        $('#login_page').css('display', 'none');
        $('#welcome_page').css('display', 'none');;
        $('#login_page').css('transform', 'translate3d(100%,0px,0px)');
        $('#welcome_page').css('transform', 'translate3d(100%,0px,0px)');
        }, 4000);
        setTimeout(function() {
            $('#welcome_page').css('display', 'block');
            $('#login_page').css('display', 'block');
        }, 5000);

    }
    function updatelogin_button(){
        //update login button here
        //
        //
        //
        //
        //
    }

    $('#login_page').on('click', '#login_button_loginpage', function() {

        login("dongwang","liuying123");

    });

    $('.main_container').on('click', '#search_button', function() {


        login("getusername","xxx");

    });
});