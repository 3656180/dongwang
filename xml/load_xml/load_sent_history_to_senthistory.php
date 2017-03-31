
<?php
$xml=simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/wp-content/themes/dongwang/xml/sent_history.xml') or die("Error: Cannot create object");
$index=0;
$issort=false;

//set sort parameter
$sort_option='id';
$sort_direction='up';

//set filter parameter
$index='recipient';
$value='unknown';

    if(isset($_POST['issort'])){
        $issort=$_POST['issort'];
    }
    if(isset($_POST['sort_option'])){
        $sort_option=$_POST['sort_option'];
    }
    if(isset($_POST['sort_direction'])){
        $sort_direction=$_POST['sort_direction'];
    }
    if(isset($_POST['value'])){
        $value=$_POST['value'];
    }


//load array from $xml
$emails = array();
foreach ($xml->sent_email as $node) {
    $emails[]=array(
        'id'             =>(string) $node->id,
        'recipient'          => (string)$node->recipient,
        'email'           => (string)$node->recipient_email,
        'send_date'         => (string)$node->sent_date,
        'html' => $node->html
    );
}

//                echo $xml->emails[0]->recipient;
//filter the array
if($value!='unknown'){
    $result = filter_by_value($emails,'recipient' , $value);
    $result2 = filter_by_value($emails,'email' , $value);
    $result3 = filter_by_value($emails,'send_date' , $value);
    $emails = $result+$result2+$result3;
}
//sort the array
array_sort_by_column($emails, $sort_option, $sort_direction);

//print to html
echo "<ul class='history_and_plan_email_ul'>";

foreach ($emails as &$node) {
    //echo $emails->recipient;
    $email_array=explode(",", $node['email']);

    $email_list="<ul>";
    for ($i=0; $i<count($email_array);$i++) {
        $email_list=$email_list."<li>".$email_array[$i]."</li>";
    }
    $email_list=$email_list."</ul>";

    echo "<li class='history_and_plan_email_list'  id='list_$index'>
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

//functions
function filter_by_value ($array, $index, $value){
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

function array_sort_by_column(&$array, $column, $sort_direction) {

    if($sort_direction=='up')
        {$direction = SORT_ASC;}
    else
        {$direction = SORT_DESC;}

    $reference_array = array();

    foreach($array as $key => $row) {
        $reference_array[$key] = $row[$column];
    }
    array_multisort($reference_array, $direction, $array);
}

?>
