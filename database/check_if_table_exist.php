
<?php


//echo ($_POST['sql_query']);
$configs = include('config.php');
$conn = new mysqli($configs->host, $configs->username, $configs->password, $configs->dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql=$_POST['sql_query'];
$result=$conn->query($sql);
if ($result->num_rows > 0 ) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo  $row["COUNT(*)"];
    }
} else {
    echo "0 results";
}
$conn->close();

?>
