<?php
//http://localhost/wp-content/themes/dongwang/database/payment_done_api.php?eventIdAndTableName=443-send_plan_2013

//$eventIdAndTableName=$_GET['eventIdAndTableName'];
$eventIdAndTableName=$_POST['eventIdAndTableName'];
$eventIdAndTableName=explode("-", $eventIdAndTableName);

$eventId=$eventIdAndTableName[0];
$tableName=$eventIdAndTableName[1];//origintable
$tableNameSplit=explode("_", $tableName);
$year=$tableNameSplit[2]-1;
$tableName_0=$tableNameSplit[0]."_".$tableNameSplit[1]."_".$year;//table for previous year
$year=$tableNameSplit[2]+1;
$tableName_1=$tableNameSplit[0]."_".$tableNameSplit[1]."_".$year;//table for next yeat


//echo $tableName_1;
//echo $id;

$servername = "127.0.0.1";
$username = "WpTestAcc";
$password = "liuying123";
$dbname = "wordpress";

$date = date('Ymd');

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//current year
$sql="SELECT * FROM $tableName
      WHERE event_id=$eventId";
$result_0=$conn->query($sql);
//previous year
$sql="SELECT * FROM $tableName_0
      WHERE event_id=$eventId";
$result_1=array();
$result_1=$conn->query($sql);
//next year
$sql="SELECT * FROM $tableName_1
      WHERE event_id=$eventId";
$result_2=array();
$result_2=$conn->query($sql);


if ($result_0->num_rows > 0 ) {
    while($row = $result_0->fetch_assoc()) {
        //insert canceled email to canceled email table
        $sql="INSERT INTO canceled_email (recipient,email,phone_number,wechat,send_date,html
                                          ,event_id,send_option,canceled_date)
              VALUE ('".$row["recipient"]."','".$row["email"]."','".$row["phone_number"]."',
                    '".$row["wechat"]."','".$row["send_date"]."','".$row["html"]."',
                    ".$row["event_id"].",'".$row["send_option"]."',$date)";
        $conn->query($sql);
    }

} else {
    echo "0 results";
}
if ($result_1->num_rows > 0 ) {
    while($row = $result_1->fetch_assoc()) {
        //insert canceled email to canceled email table
        $sql="INSERT INTO canceled_email (recipient,email,phone_number,wechat,send_date,html
                                          ,event_id,send_option,canceled_date)
              VALUE ('".$row["recipient"]."','".$row["email"]."','".$row["phone_number"]."',
                    '".$row["wechat"]."','".$row["send_date"]."','".$row["html"]."',
                    ".$row["event_id"].",'".$row["send_option"]."',$date)";
        $conn->query($sql);
    }

} else {
    echo "0 results";
}

if ($result_2->num_rows > 0 ) {
    while($row = $result_2->fetch_assoc()) {
        //insert canceled email to canceled email table
        $sql="INSERT INTO canceled_email (recipient,email,phone_number,wechat,send_date,html
                                          ,event_id,send_option,canceled_date)
              VALUE ('".$row["recipient"]."','".$row["email"]."','".$row["phone_number"]."',
                    '".$row["wechat"]."','".$row["send_date"]."','".$row["html"]."',
                    ".$row["event_id"].",'".$row["send_option"]."',$date)";
        $conn->query($sql);
    }

} else {
    echo "0 results";
}


//delete canceled email from send plan table
$sql="DELETE FROM $tableName 
                  WHERE event_id=$eventId";
$conn->query($sql);

$sql="DELETE FROM $tableName_0 
                  WHERE event_id=$eventId";
$conn->query($sql);

$sql="DELETE FROM $tableName_1
                  WHERE event_id=$eventId";
$conn->query($sql);

// mark event status finished and record finished date in payment event table
$sql="UPDATE payment_event 
          SET event_status='以支付&$date' WHERE id=$eventId";
//  echo $sql;
$conn->query($sql);
?>