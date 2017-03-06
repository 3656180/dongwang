
<?php
$xml=simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/wp-content/themes/dongwang/xml/send_plan.xml') or die("Error: Cannot create object");

//                echo $xml->emails[0]->recipient;

echo "<ul class='sent_email_ul'>";
$index=0;
foreach ($xml->email_not_send_yet as $emails) {

    //echo $emails->recipient;
    echo "<li class='send_plan_list'  id='list_$index'>
                <div class='row'>
                    <div class='col-3' id='col_1_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$emails->recipient."</div>
                    </div>
                    <div class='col-6' id='col_2_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$emails->email."</div>
                    </div>
                    <div class='col-3' id='col_3_list_$index' style='border-right:solid 1px '>
                    <div class='send_history_list_row'>".$emails->send_date."</div>
                    </div>
                </div>
               </li>
              ";
    $index++;
}


?>
