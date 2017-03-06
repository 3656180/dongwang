<?php
///MySQLi Object-oriented

require('../email/mailin.php');
$mailin = new Mailin("https://api.sendinblue.com/v2.0","wNG3kT54xIQpr0H1");



$servername = "127.0.0.1";
$username = "WpTestAcc";
$password = "liuying123";
$dbname = "wordpress";


$date = date('Ymd');

echo $date;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT Customers.firstname, Customers.lastname, soldInsurance.paymentAmount, 
        DailyRun.runDate,Customers.email FROM (DailyRun INNER JOIN soldInsurance ON DailyRun.insuranceid
        =soldInsurance.insuranceId)INNER JOIN Customers ON soldInsurance.customerId
        =Customers.id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {

        //code send email staffs here
        //code send email staffs here
        //code send email staffs here
        //code send email staffs here
        if($date==$row["runDate"]){
            $name=$row["lastname"].$row["firstname"];
            echo $name;
            $html= "<head>缴费通知</head>
                <p>尊敬的".$row["lastname"]." ".$row["firstname"]."先生/女士</p>
                <p>您所购买的xx保险，保单号为xxx， 需要于".$row["runDate"]."之前缴纳
                共计$".$row["paymentAmount"]."保费
                请您提前做好准备，避免延误缴费时间</p>
                <p>如有任何疑问请致电xxx-xxx-xxxx</p>
                <p>王栋</p>
                <p></p>";
            $email=$row["email"];
            //email send to customer
            $data = array( "to" => array($email=>"尊敬的客户"),
                "from" => array("dongwang@365financial.ca", "365 Financial Solution Corp."),
                "subject" => "缴费提醒",
                "html" =>   "<head>缴费通知</head>
                <p>尊敬的".$row["lastname"]." ".$row["firstname"]."先生/女士</p>
                <p>您所购买的xx保险，保单号为xxx， 需要于".$row["runDate"]."之前缴纳
                共计$".$row["paymentAmount"]."保费
                请您提前做好准备，避免延误缴费时间</p>
                <p>如有任何疑问请致电xxx-xxx-xxxx</p>
                <p>王栋</p>
                <p></p>"
            );
            // send a copy to admin
            $data2 = array( "to" => array("dongwang@365financial.ca"=>"尊敬的客户"),
                "from" => array("dongwang@365financial.ca", "365 Financial Solution Corp."),
                "subject" => "缴费提醒",
                "html" =>   "<head>缴费通知</head>
                <p>尊敬的".$row["lastname"]." ".$row["firstname"]."先生/女士</p>
                <p>您所购买的xx保险，保单号为xxx， 需要于".$row["runDate"]."之前缴纳
                共计$".$row["paymentAmount"]."保费
                请您提前做好准备，避免延误缴费时间</p>
                <p>如有任何疑问请致电xxx-xxx-xxxx</p>
                <p>王栋</p>
                <p></p>"
            );
            var_dump($mailin->send_email($data));
            var_dump($mailin->send_email($data2));


            $sql = "INSERT INTO email_send_history (recipient, html, recipient_email, sent_date)
                    VALUES ('$name','$html' , '$email','$date')";
            $conn->query($sql);
        }
    }
    //add each email to sent table here
    //add each email to sent table here
    //add each email to sent table here
    //add each email to sent table here

} else {
    echo "0 results";
}
$conn->close();
?>