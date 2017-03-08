
<?php
$xml=simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/wp-content/themes/dongwang/xml/send_plan.xml') or die("Error: Cannot create object");

//                echo $xml->emails[0]->recipient;
$emails = array();

echo "<ul class='sent_email_ul'>";
$index=0;

//save the simple xml to an array
foreach ($xml->email_not_send_yet as $node) {

    $emails[]=array(
        'id'             => $node->id,
        'recipient'          => $node->recipient,
        'email'           => $node->email,
        'send_date'         => $node->send_date,
        'html' => $node->html
    );
}
//sort the xml array based on sort option
//if($sort_option==1){
//    array_sort_by_column($emails, 'recipient');
//}

//array_sort_by_column_sp($emails, 'email');



foreach ($emails as &$node) {
    //echo $emails->recipient;
    echo "<li class='send_history_list'  id='list_$index'>
                <div class='row'>
                    <div class='col-2' id='col_1_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['recipient']."</div>
                    </div>
                    <div class='col-3' id='col_2_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['email']."</div>
                    </div>
                    <div class='col-2' id='col_3_list_$index' style='border-right:solid 1px '>
                    <div class='send_history_list_row'>".$node['send_date']."</div>
                    </div>
                    <div class='col-5' id='col_3_list_$index' style='border-right:solid 1px '>
                    <div class='send_history_list_row'>".$node['html']."</div>
                    </div>
                </div>
               </li>
              ";
    $index++;
}

function array_sort_by_column_sp(&$array, $column, $direction = SORT_ASC) {
    $reference_array = array();

    foreach($array as $key => $row) {
        $reference_array[$key] = $row[$column];
    }

    array_multisort($reference_array, $direction, $array);
}
?>
