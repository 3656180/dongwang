<?php
ini_set('display_errors', 1);
require('mailin.php');
$mailin = new Mailin("https://api.sendinblue.com/v2.0","wNG3kT54xIQpr0H1");
$data = array( "to" => "+15198606330",
    "from" => "From",
    "text" => "Good morning - test",
    "web_url" => "http://example.com",
    "tag" => "Tag1",
    "type" => "transactional"
);

var_dump($mailin->send_sms($data));
?>