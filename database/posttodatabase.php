<?php


//echo ($_POST['sql_query']);
$servername = "127.0.0.1";
$username = "WpTestAcc";
$password = "liuying123";
$dbname = "wordpress";


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql=$_POST['sql_query'];
$conn->query($sql);
$conn->close();

?>