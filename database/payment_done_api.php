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

$configs = include('config.php');
$conn = new mysqli($configs->host, $configs->username, $configs->password, $configs->dbname);

$date = date('Ymd');

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
        $sql="INSERT INTO canceled_email (recipient,email,phone_number,wechat,send_date,html,text
                                          ,event_id,send_option,canceled_date)
              VALUE ('".$row["recipient"]."','".$row["email"]."','".$row["phone_number"]."',
                    '".$row["wechat"]."','".$row["send_date"]."','".$row["html"]."','".$row["text"]."',
                    ".$row["event_id"].",'".$row["send_option"]."',$date)";
        $conn->query($sql);
    }

} else {
    echo "0 results";
}
if ($result_1->num_rows > 0 ) {
    while($row = $result_1->fetch_assoc()) {
        //insert canceled email to canceled email table
        $sql="INSERT INTO canceled_email (recipient,email,phone_number,wechat,send_date,html,text
                                          ,event_id,send_option,canceled_date)
              VALUE ('".$row["recipient"]."','".$row["email"]."','".$row["phone_number"]."',
                    '".$row["wechat"]."','".$row["send_date"]."','".$row["html"]."','".$row["text"]."',
                    ".$row["event_id"].",'".$row["send_option"]."',$date)";
        $conn->query($sql);
    }

} else {
    echo "0 results";
}

if ($result_2->num_rows > 0 ) {
    while($row = $result_2->fetch_assoc()) {
        //insert canceled email to canceled email table
        $sql="INSERT INTO canceled_email (recipient,email,phone_number,wechat,send_date,html,text
                                          ,event_id,send_option,canceled_date)
              VALUE ('".$row["recipient"]."','".$row["email"]."','".$row["phone_number"]."',
                    '".$row["wechat"]."','".$row["send_date"]."','".$row["html"]."','".$row["text"]."',
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
          SET event_status='已支付?$date' WHERE id=$eventId";
//  echo $sql;
$conn->query($sql);




require('../email/Mailin.php');
$mailin = new Mailin("https://api.sendinblue.com/v2.0","wNG3kT54xIQpr0H1");

$sql="SELECT * FROM payment_event WHERE id=$eventId";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
            $data = array( "to" => array("henqianda@gmail.com"=>"支付事件完成"),
                "from" => array("dongwang@365financial.ca", "Email and Text Message Reminder System"),
                "subject" => "内部系统通知",
                "html" =>$row["recipient"]."已经完成了支付日期为：".$row["payment_date"].
                    ", 支付金额为：".$row["payment_amount"]."，保单号后四位为：".$row["insurance_number"].
                    ", 事件id为：".$row["id"]."的支付事件。"
            );
            var_dump($mailin->send_email($data));// send a copy to admin

    }

} else {
    echo "0 results";
}

$conn->close();
?>