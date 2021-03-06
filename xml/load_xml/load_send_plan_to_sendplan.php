
<?php
$xml=simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/wp-content/themes/dongwang/xml/send_plan.xml') or die("Error: Cannot create object");

$index=0;


//set sort parameter
$sort_option='id';
$sort_direction='up';
$sort_type='string';

//set filter parameter
$index='recipient';
$value='unknown';

$name='unknown';
$email='unknown';
$startSendDate='unknown';
$endSendDate='unknown';
$startPayDate='unknown';
$endPayDate='unknown';



if(isset($_POST['sort_option'])){
    $sort_option=$_POST['sort_option'];
}
if(isset($_POST['sort_direction'])){
    $sort_direction=$_POST['sort_direction'];
}
if(isset($_POST['sort_type'])){
    $sort_type=$_POST['sort_type'];
}
//if(isset($_POST['value'])){
//    $value=$_POST['value'];
//}
if(isset($_POST['name'])){
    $name=$_POST['name'];
}
if(isset($_POST['email'])){
    $email=$_POST['email'];
}
if(isset($_POST['start_sendDate'])){
    $startSendDate=$_POST['start_sendDate'];
}
if(isset($_POST['end_sendDate'])){
    $endSendDate=$_POST['end_sendDate'];
}
if(isset($_POST['start_payDate'])){
    $startPayDate=$_POST['start_payDate'];
}
if(isset($_POST['end_payDate'])){
    $endPayDate=$_POST['end_payDate'];
}


//load array from $xml
$emails = array();
//save the simple xml to an array
foreach ($xml->email_not_send_yet as $node) {

    $emails[]=array(
        'id'            => $node->id,
        'recipient'     => $node->recipient,
        'email'         => explode(",",$node->email)[0],
        'send_date'     => $node->send_date,
        'payment_date'  => $node->payment_date,
        'html'          => $node->html,
        'email_list'    => $node->email
    );
}

//                echo $xml->emails[0]->recipient;



//new filter function
if($name!='unknown'){
    $emails = filter_by_value_sp($emails,'recipient' , $name);
}
if($email!='unknown'){
    $emails = filter_by_value_sp($emails,'email' , $email);
}
if($startSendDate!='unknown'&&$endSendDate!='unknown'){
    $emails = filter_by_range_sp($emails,'send_date' , $startSendDate,$endSendDate);
}
if($startPayDate!='unknown'&&$endPayDate!='unknown'){
    $emails = filter_by_range_sp($emails,'payment_date' , $startPayDate,$endPayDate);
}
//new filter function



//filter the array
//if($value!='unknown'){
//    $result = filter_by_value_sp($emails,'recipient' , $value);
//    $result2 = filter_by_value_sp($emails,'email' , $value);
//    $result3 = filter_by_value_sp($emails,'send_date' , $value);
//    $result4 = filter_by_value_sp($emails,'payment_date' , $value);
//
//    $emails = $result+$result2+$result3+$result4;
//}
//sort the array
array_sort_by_column_sp($emails, $sort_option,$sort_type, $sort_direction);

//print to html
echo "<ul class='history_and_plan_email_ul'>";

foreach ($emails as &$node) {
    //echo $emails->recipient;
    $email_array=explode(",", $node['email_list']);

    $email_list="<ul>";
    for ($i=0; $i<count($email_array);$i++) {
        $email_list=$email_list."<li>".$email_array[$i]."</li>";
    }
    $email_list=$email_list."</ul>";

    echo "<li class='history_and_plan_email_list'  id='list_$index'>
                <div class='row'>
                    <div class='col-1' id='col_1_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['recipient']."</div>
                    </div>
                    <div class='col-2' id='col_2_list_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$email_list."</div>
                    </div>
                    <div class='col-2' id='col_3_list_$index' style='border-right:solid 1px '>
                    <div class='send_history_list_row'>".$node['send_date']."</div>
                    </div>
                    <div class='col-2' id='col_3_list_$index' style='border-right:solid 1px '>
                    <div class='send_history_list_row'>".$node['payment_date']."</div>
                    </div>
                    <div class='col-5' id='col_3_list_$index' style='border-right:solid 1px '>
                    <div class='send_history_list_row'>".$node['html']."</div>
                    </div>
                    
                </div>
               </li>
              ";
    $index++;
}
echo "</ul>";

//functions
function filter_by_value_sp ($array, $index, $value){
    $newarray=array();
    if(is_array($array) && count($array)>0)
    {
        foreach(array_keys($array) as $key){
            $temp[$key] = $array[$key][$index];

            if ($temp[$key] == $value){
                $newarray[$key] = $array[$key];
            }
        }
    }
    return $newarray;
}
function filter_by_range_sp ($array, $index, $value_1, $value_2){
    $newarray=array();
    if(is_array($array) && count($array)>0)
    {
        foreach(array_keys($array) as $key){
            $temp[$key] = $array[$key][$index];

            if ((int)$temp[$key] >= (int)$value_1&&(int)$temp[$key] <= (int)$value_2){
                $newarray[$key] = $array[$key];
            }
        }
    }
    return $newarray;
}

function array_sort_by_column_sp(&$array, $column,$sort_type,  $sort_direction) {

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

?>
