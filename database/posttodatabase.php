<?php


//echo ($_POST['sql_query']);
$configs = include('config.php');
$conn = new mysqli($configs->host, $configs->username, $configs->password, $configs->dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql=$_POST['sql_query'];
$conn->query($sql);
$conn->close();

?>