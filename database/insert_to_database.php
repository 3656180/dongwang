
<?php

$configs = include('config.php');
//echo ($_POST['sql_query']);
//$servername = "127.0.0.1";
//$username = "WpTestAcc";
//$password = "liuying123";
//$dbname = "wordpress";


//$conn = new mysqli($servername, $username, $password, $dbname);
$conn = new mysqli($configs->host, $configs->username, $configs->password, $configs->dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql=$_POST['sql_query'];
$conn->query($sql);
$sql="SELECT LAST_INSERT_ID()";
$result=$conn->query($sql);
if ($result->num_rows > 0 ) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo  $row["LAST_INSERT_ID()"];
    }
} else {
    echo "0 results";
}
$conn->close();

?>
