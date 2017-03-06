<?php

//echo ($_POST['sql_query']);
$servername = "127.0.0.1";
$username = "WpTestAcc";
$password = "liuying123";
$dbname = "wordpress";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    print "Connected successfully";
    $sql = $_POST['sql_query'];
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";

}
catch(PDOException $e)
{
    // echo "Connection failed: " . $e->getMessage();
}
$conn = null;

?>