<?php
$servername = "127.0.0.1";
$username = "WpTestAcc";
$password = "liuying123";
$dbname = "wordpress";

$insurance_num=$_POST['insurance_num'];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM soldInsurance INNER JOIN Customers WHERE
        insuranceId=".$insurance_num." ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row

    $index=0;
    while($row = $result->fetch_assoc()) {

        echo "<ul>
                <li id=\"insurance_info\">
                    保单信息
                </li>
                <li id=\"name_on_insurance\">
                    姓名:".$row["lastname"]." ".$row["firstname"]."
                </li>
                <li>
                    性别:".$row["gender"]."
                </li>
                <li>
                    年龄:".$row["gender"]."
                </li>
                <li>
                    保单号:".$row["gender"]."
                </li>
                </ul>";
        $index++;
    }
} else {
    echo "0 results";
}
$conn->close();
?>