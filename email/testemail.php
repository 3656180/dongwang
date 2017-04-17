<?php 
require('mailin.php');
$html = $_POST['html'];
$mailin = new Mailin("https://api.sendinblue.com/v2.0","wNG3kT54xIQpr0H1");
$data = array( "to" => array("henqianda@gmail.com"=>"to whom!"),
    "from" => array("from@email.com", "from email!"),
    "subject" => "My subject",
    "html" => $html
);

var_dump($mailin->send_email($data));
?>