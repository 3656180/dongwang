<?php


//echo ($_POST['sql_query']);
$configs = include('config.php');
$conn = new mysqli($configs->host, $configs->username, $configs->password, $configs->dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$insurancId=(int)$_POST['insurancId'];
$sql="SELECT * FROM payment_event WHERE insurance_id= $insurancId";
$paymentEvents=$conn->query($sql);
$sql="SELECT TABLE_NAME FROM information_schema.tables
                WHERE table_schema='wordpress'
                AND TABLE_NAME like'send_plan%'";
$sendPlanTables=$conn->query($sql);

if ($paymentEvents->num_rows > 0) {
    while ($row = $paymentEvents->fetch_assoc()) {
        //delete payment event loop
        $eventId=$row["id"];
        if ($sendPlanTables->num_rows > 0) {
            while ($row = $sendPlanTables->fetch_assoc()) {
                //delete send event loop
                $table= $row["TABLE_NAME"];
                $sql="DELETE FROM $table WHERE event_id=$eventId";
                $conn->query($sql);
            }

        } else {
            echo "0 sendPlanTables";
        }
        $sql="DELETE FROM payment_event WHERE insurance_id=$insurancId";
        $conn->query($sql);
    }

} else {
    echo "0 insurancId";
}
//delete from insurance event
$sql="DELETE FROM insurance WHERE id=$insurancId";
$conn->query($sql);
$conn->close();

?>