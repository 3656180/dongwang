<?php
$servername = "127.0.0.1";
$username = "WpTestAcc";
$password = "liuying123";
$dbname = "wordpress";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}





$sql = "SELECT Customers.firstname, email, Customers.lastname, soldInsurance.paymentAmount,
        DailyRun.runDate FROM (DailyRun INNER JOIN soldInsurance ON DailyRun.insuranceid
    =soldInsurance.insuranceId)INNER JOIN Customers ON soldInsurance.customerId
    =Customers.id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    echo "<ul class='sent_email_ul'>";
    $index=0;
    while($row = $result->fetch_assoc()) {
        //code send email staffs here
        //code send email staffs here
        //code send email staffs here
        //code send email staffs here
        echo "<li class='send_history_list'  id='list_$index'>
                <div class='row'>
                    <div class='col-1' id='col_1_list_$index' style='border-right:solid 1px '>
                        ".$row["lastname"]." ".$row["firstname"]."
                    </div>
                    <div class='col-3' id='col_2_list_$index' style='border-right:solid 1px '>
                        ".$row["email"]."
                    </div>
                    <div class='col-1' id='col_3_list_$index' style='border-right:solid 1px '>
                        ".$row["runDate"]."
                    </div>
                    <div class='col-7' id='col_4_list_$index'>
                        <head>缴费通知</head>
                        <p>尊敬的".$row["lastname"]." ".$row["firstname"]."先生/女士</p>
                        <p>您所购买的xx保险，保单号为xxx， 需要于".$row["runDate"]."之前缴纳
                        共计$".$row["paymentAmount"]."保费
                        请您提前做好准备，避免延误缴费时间</p>
                        <p>如有任何疑问请致电xxx-xxx-xxxx</p>
                        <p>王栋</p>
                        <p></p>
                    </div>
                </div>
               </li>
              ";
        $index++;
    }
    echo "</ul>";
} else {
    echo "0 results";
}
$conn->close();
?>