<?php

//echo ($_POST['sql_query']);
$configs = include('config.php');
$conn = new mysqli($configs->host, $configs->username, $configs->password, $configs->dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$event_id=$_POST['event_id'];
//$event_id='1281';
$sql="SELECT * FROM canceled_email WHERE event_id=$event_id";
//echo $sql;
$result=$conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $year=substr($row["send_date"], 0, 4);

        $sql="INSERT INTO send_plan_".$year." (recipient,email,phone_number,wechat,send_date,html,text,event_id,send_option) 
                VALUES ('".$row["recipient"]."','".$row["email"]."','".$row["phone_number"]."',
                '".$row["wechat"]."','".$row["send_date"]."','".$row["html"]."','".$row["text"]."'
                ,'".$row["event_id"]."','".$row["send_option"]."')";
        //echo $sql;
        //echo "<br>";
        $conn->query($sql);
    }
}

$sql="DELETE FROM canceled_email WHERE event_id=$event_id";
$conn->query($sql);
$conn->close();

?>