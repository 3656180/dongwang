<?php
$xml=simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/wp-content/themes/dongwang/xml/payment_event.xml') or die("Error: Cannot create object");
//set default values
$events=array();
$index=0;

$sort_option='id';
$sort_direction='up';
$sort_type='string';

$id='unknown';
$name='unknown';
$email='unknown';
$phoneNumber='unknown';
$wechat='unknown';
$startPayDate='unknown';
$endPayDate='unknown';
$insuranceNumber='unknown';
$paymentAmount='unknown';
$insuranceType='unknown';
$eventStatus='unknown';
//load post value
if(isset($_POST['sort_option'])){
    $sort_option=$_POST['sort_option'];
}
if(isset($_POST['sort_direction'])){
    $sort_direction=$_POST['sort_direction'];
}
if(isset($_POST['sort_type'])){
    $sort_type=$_POST['sort_type'];
}
//------
if(isset($_POST['id'])){
    $id=$_POST['id'];
}
if(isset($_POST['name'])){
    $name=$_POST['name'];
}
if(isset($_POST['email'])){
    $email=$_POST['email'];
}
if(isset($_POST['phone_number'])){
    $phoneNumber=$_POST['phone_number'];
}
if(isset($_POST['wechat'])){
    $wechat=$_POST['wechat'];
}
if(isset($_POST['start_payDate'])){
    $startPayDate=$_POST['start_payDate'];
}
if(isset($_POST['end_payDate'])){
    $endPayDate=$_POST['end_payDate'];
}
if(isset($_POST['insurance_number'])){
    $insuranceNumber=$_POST['insurance_number'];
}
if(isset($_POST['payment_amount'])){
    $paymentAmount=$_POST['payment_amount'];
}
if(isset($_POST['insurance_type'])){
    $insuranceType=$_POST['insurance_type'];
}
if(isset($_POST['event_status'])){
    $eventStatus=$_POST['event_status'];
}

foreach($xml->payment_events as $node){
    $events[]=array(
        'id'            =>$node->id,
        'name'          =>$node->recipient,
        'email'         =>$node->email,
        'phone_number'  =>$node->phone_number,
        'wechat'        =>$node->wechat,
        'payment_amount'=>$node->payment_amount,
        'payment_date'  =>$node->payment_date,
        'insurance_num' =>$node->insurance_number,
        'insurance_type'=>$node->insurance_type,
        'event_status'  =>$node->event_status
    );
}


//filter function
if($id!='unknown'){
    $events = filter_by_value_pe($events,'id' , $id);
}
if($name!='unknown'){
    $events = filter_by_value_pe($events,'name' , $name);
}
if($email!='unknown'){
    $events = filter_by_value_pe($events,'email' , $email);
}
if($phoneNumber!='unknown'){
    $events = filter_by_value_pe($events,'phone_number' , $phoneNumber);
}
if($wechat!='unknown'){
    $events = filter_by_value_pe($events,'wechat' , $wechat);
}
if($startPayDate!='unknown'&&$endPayDate!='unknown'){
    $events = filter_by_range_pe($events,'payment_date' , $startPayDate,$endPayDate);
}
if($insuranceNumber!='unknown'){
    $events = filter_by_value_pe($events,'insurance_number' , $insuranceNumber);
}
if($paymentAmount!='unknown'){
    $events = filter_by_value_pe($events,'payment_amount' , $paymentAmount);
}
if($insuranceType!='unknown'){
    $events = filter_by_value_pe($events,'insurance_type' , $insuranceType);
}
if($eventStatus!='unknown'){
    $events = filter_by_value_pe($events,'event_status' , $eventStatus);
}
//sort the array
array_sort_by_column_pe($events, $sort_option, $sort_type, $sort_direction);

//print to html
echo "<ul class='history_and_plan_email_ul'>";

foreach ($events as &$node) {
    //echo $emails->recipient;
    $email_array=explode(",", $node['email']);
    $event_status=explode("?", $node['event_status'])[0];

    $email_list="<ul>";
    for ($i=0; $i<count($email_array);$i++) {
        $email_list=$email_list."<li>".$email_array[$i]."</li>";
    }
    $email_list=$email_list."</ul>";

    $changeButton='设为未支付';
    if($event_status=='未支付'){
        $changeButton='设为已支付';
    }
    echo "<li class='payment_event_list'  id='list_$index'>
                <div class='row'>
                    <div class='col-1' id='id_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['id']."</div>
                    </div>
                    <div class='col-1' id='name_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['name']."</div>
                    </div>
                    <div class='col-2' id='email_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$email_list."</div>
                    </div>
                    <div class='col-1' id='phone_number_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['phone_number']."</div>
                    </div>
                    <div class='col-1' id='wechat_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['wechat']."</div>
                    </div>
                    <div class='col-2' id='payment_date_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['payment_date']."</div>
                    </div>
                    <div class='col-1' id='insurance_number_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['insurance_num']."</div>
                    </div>
                    <div class='col-1' id='payment_amount_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['payment_amount']."</div>
                    </div>
                    <div class='col-1' id='insurance_type_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$node['insurance_type']."</div>
                    </div>
                    <div class='col-1' id='event_status_$index' style='border-right:solid 1px '>
                        <div class='send_history_list_row'>".$event_status."</div>
                        <div class='status_change_button' id='change_button_$index'>".$changeButton."</div>
                    </div>
                </div>
               </li>
              ";
    $index++;
}
echo "</ul>";

//functions
function filter_by_value_pe ($array, $index, $value){
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
function filter_by_range_pe ($array, $index, $value_1, $value_2){
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

function array_sort_by_column_pe(&$array, $column,$sort_type,  $sort_direction) {

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