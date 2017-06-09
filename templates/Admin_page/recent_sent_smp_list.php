
<?php
$xml=simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/wp-content/themes/dongwang/xml/unpaid_reminded_events.xml') or die("Error: Cannot create object");

//                echo $xml->emails[0]->re？？cipient;

$events = array();
//save the simple xml to an array
foreach ($xml->unpaid_event as $node) {

    $events[]=array(
        'event_id'      => $node->event_id,
        'recipient'     => $node->recipient,
        'email'         => explode(",",$node->email)[0],
        'phone_number'  => $node->phone_number,
        'wechat'        => $node->wechat,
        'payment_amount'=> $node->wechat,
        'payment_date'  => $node->payment_date,
        'admin'         => $node->admin,
        'insurance_number' => $node->insurance_number,
        'event_status'  => $node->event_status,
        'insurance_type'=> $node->insurance_type,
        'send_option'   => $node->send_option,
        'insurance_info'=> $node->insurance_info
    );
}
array_sort_by_column_ue($events, 'event_id','number', 'up');

$event_id_temp='0000';
$unique_events = array();
//--------
$events_count = array_icount_values ($events);
//--------
foreach($events as &$node){

   // echo $events_count[$node['event_id']];
    if((int)$event_id_temp!=(int)$node['event_id']){
        $event_id_temp=$node['event_id'];
        ///echo $events_count[(string)$event_id_temp];

        $unique_events[]=array(
            'event_id'      => $node['event_id'],
            'recipient'     => $node['recipient'],
            'email'         => $node['email'],
            'phone_number'  => $node['phone_number'],
            'wechat'        => $node['wechat'],
            'payment_amount'=> $node['wechat'],
            'payment_date'  => $node['payment_date'],
            'admin'         => $node['admin'],
            'insurance_number' => $node['insurance_number'],
            'event_status'  => explode("?",$node['event_status'])[0],
            'insurance_type'=> $node['insurance_type'],
            'send_option'   => $node['send_option'],
            'insurance_info'=> $node['insurance_info'],
            'count'         => $events_count[(string)$event_id_temp]
        );
    }
}


echo "<ul class='sent_email_ul'>";
$index=0;
foreach ($unique_events as $events) {

    //echo $emails->recipient;
    echo "<li class='send_history_list'  id='list_$index'>
                <div class='row'>
                    <div class='col-2'  style='border-right:solid 1px '>
                        <div class='send_history_list_row' id='col_1_unpaid_list_$index'>".$events['event_id']."</div>
                    </div>
                    <div class='col-2' id='col_2_unpaid_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$events['recipient']."</div>
                    </div>
                    <div class='col-3'  id='col_3_unpaid_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row' id='email_list_rssl'>".$events['email']."</div>
                    </div>
                    <div class='col-2' id='col_4_unpaid_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$events['payment_date']."</div>
                    </div> 
                    <div class='col-3' id='col_5_unpaid_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$events['count']."</div>
                    </div> 
            </div>    
               </li>
              ";
    $index++;
}

function array_sort_by_column_ue(&$array, $column,$sort_type,  $sort_direction) {

    if($sort_direction=='up')
    {$direction = SORT_ASC;}
    else
    {$direction = SORT_DESC;}

    if($sort_type=='string'){
        $type=SORT_STRING;
    }
    else if ($sort_type=='number'){
        $type=SORT_NUMERIC;
    }
    else;

    $reference_array = array();

    foreach($array as $key => $row) {
        $reference_array[$key] = $row[$column];
    }
    array_multisort($reference_array, $direction,$type, $array);
}

//array count function
function array_icount_values($arr,$lower=true) {
    $arr2=array();
    if(!is_array($arr['0'])){$arr=array($arr);}
    foreach($arr as $k=> $v){
        foreach($v as $v2){
            if($lower==true) {$v2=strtolower($v2);}
            if(!isset($arr2[$v2])){
                $arr2[$v2]=1;
            }else{
                $arr2[$v2]++;
            }
        }
    }
    return $arr2;
}
?>
