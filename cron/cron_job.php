<?php
///MySQLi Object-oriented
//echo'hello world';
require('../email/mailin.php');
$mailin = new Mailin("https://api.sendinblue.com/v2.0","wNG3kT54xIQpr0H1");



$servername = "127.0.0.1";
$username = "WpTestAcc";
$password = "liuying123";
$dbname = "wordpress";


$date = date('Ymd');
$year =date('Y');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM send_plan_$year";

$result = $conn->query($sql);
//echo $date;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        if($date==$row["send_date"]){
            $email_array=explode(",", $row["email"]);
            //echo gettype($row["html"]);
            echo $row["html"];


            for($i=0;$i<count($email_array);$i++){
                $data = array( "to" => array($email_array[$i]=>$row["recipient"]." 先生／女士"),
                    "from" => array("dongwang@365financial.ca", "365 Financial Solution Corp."),
                    "subject" => "缴费提醒",
                    "html" =>$row["html"]
                );
                var_dump($mailin->send_email($data));// send a copy to admin
            }

            //insert sent email to send history table
            $sql = "INSERT INTO send_history_$year 
                    (recipient, email, phone_number,wechat, send_date, html, event_id, send_option)
                    VALUES ('".$row["recipient"]."','".$row["email"]."','".$row["phone_number"]."',
                    '".$row["wechat"]."','".$row["send_date"]."','".$row["html"]."',
                    ".$row["event_id"].",'".$row["send_option"]."')";
            $conn->query($sql);

            //delete sent email from send plan table
            $sql="DELETE FROM send_plan_$year 
                  WHERE id='".$row['id']."'";
            $conn->query($sql);



        }
    }

} else {
    echo "0 results";
}
$conn->close();
?>