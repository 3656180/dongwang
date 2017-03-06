
<?php
$url=$_POST['url'];
$index=(int)$_POST['index'];
//echo $url;
//echo $index;

$xml=simplexml_load_file($_SERVER['DOCUMENT_ROOT'].$url) or die("Error: Cannot create object");

//                echo $xml->emails[0]->recipient;

//echo $xml->sent_email[$index]->recipient;

echo "<div class='pop_up_div_main'>
        <div class='pop_up_div_title'>
            缴费通知邮件详情
        </div>  
        <div class='pop_up_div_body'>
            <ul>
                <li>收件人：".$xml->sent_email[$index]->recipient."</li>
                <li>发件人：</li>
                <li>标题：缴费通知</li>
                <li>邮件内容：".$xml->sent_email[$index]->html."</li>
            </ul>
        </div>
     </div> "

?>
