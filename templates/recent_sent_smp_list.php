
<?php
$xml=simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/wp-content/themes/dongwang/xml/sent_history.xml') or die("Error: Cannot create object");

//                echo $xml->emails[0]->recipient;

echo "<ul class='sent_email_ul'>";
$index=0;
foreach ($xml->sent_email as $emails) {

    //echo $emails->recipient;
    echo "<li class='send_history_list'  id='list_$index'>
                <div class='row'>
                    <div class='col-3' id='col_1_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$emails->recipient."</div>
                    </div>
                    <div class='col-6' id='col_2_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$emails->recipient_email."</div>
                    </div>
                    <div class='col-3' id='col_3_list_$index' style='border-right:solid 1px '>
                    <div class='send_history_list_row'>".$emails->sent_date."</div>
                    </div>
                </div>
               </li>
              ";
    $index++;
}


?>
