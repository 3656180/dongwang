<?php
ini_set('display_errors', 1);
require('sms_api.php');
$mailin = new MailinSms('wNG3kT54xIQpr0H1');

$mailin->addTo('335198606330')

    ->setFrom('DONG WANG') // If numeric, then maximum length is 17 characters and if alphanumeric maximum length is 11 characters.
    ->setText('Text message to send') // 160 characters per SMS.
    ->setTag('Your tag name')

    ->setType('') // Two possible values: marketing or transactional.
    ->setCallback('http://callbackurl.com/');

$res = $mailin->send();
?>