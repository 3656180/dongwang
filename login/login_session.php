<?php
ob_start();
session_start();
?>

<?php
$msg = '';


    if ($_POST['username'] == 'dongwang' &&
        $_POST['password'] == 'liuying123') {
        $_SESSION['valid'] = true;
        $_SESSION['timeout'] = time();
        $_SESSION['username'] = 'dongwang';

        echo "1";

    }else {
        $msg = 'Wrong username or password';
    }

    if($_POST['username'] == 'getusername')
    {
        echo ($_SESSION['username']);
    }





?>
