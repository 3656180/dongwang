
<?php
$url=$_POST['url'];
$event_id=explode("?",$_POST['index'])[0];
$display_option="0";
if(isset(explode("?",$_POST['index'])[1])){
    $display_option=explode("?",$_POST['index'])[1];
}
//echo $url;
//echo $index;

$xml=simplexml_load_file($_SERVER['DOCUMENT_ROOT'].$url) or die("Error: Cannot create object");
$events = array();
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
        'event_status'  => explode("?",$node->event_status)[0],
        'insurance_type'=> $node->insurance_type,
        'send_option'   => $node->send_option,
        'insurance_info'=> $node->insurance_info
    );
}



$reminded_emails = array();
//--------
foreach($events as $node){

    if((int)$event_id==(int)$node['event_id']){

        $reminded_emails[]=array(
            'event_id'      => $node['event_id'],
            'recipient'     => $node['recipient'],
            'email'         => $node['email'],
            'phone_number'  => $node['phone_number'],
            'wechat'        => $node['wechat'],
            'payment_amount'=> $node['wechat'],
            'payment_date'  => $node['payment_date'],
            'admin'         => $node['admin'],
            'insurance_number' => $node['insurance_number'],
            'event_status'  => $node['event_status'],
            'insurance_type'=> $node['insurance_type'],
            'send_option'   => $node['send_option'],
            'insurance_info'=> $node['insurance_info'],
        );
    }
}





if($display_option=="0"){
    echo "<div class='pop_up_div_main'>
        <div class='pop_up_div_title'>
            事件详情
        </div>
        <div class='pop_up_div_body'>
            <ul>
                <li id='event_id_div_popup' value='".$reminded_emails[0]['event_id']."'>
                    支付事件ID：".$reminded_emails[0]['event_id']."</li>
                <li>顾客姓名：".$reminded_emails[0]['recipient']."</li>
                <li>
                    <div class='row'>
                        <div class='col-4' style='padding:0'>
                        提醒邮件发送数量：".count($reminded_emails)."
                        </div>
                        <div class='col-2' id='email_list_popup' 
                             style='padding:0; border:solid 1px; text-align:center'>
                        查看详情</div>
                    </div>
                </li>
                <li>邮件地址：".$reminded_emails[0]['email']."</li>
                <li>电话号码：".$reminded_emails[0]['phone_number']."</li>
                <li>应付日期：".$reminded_emails[0]['payment_date']."</li>
                <li>应付数额：".$reminded_emails[0]['payment_amount']."</li>
                <li>保单后四位：".$reminded_emails[0]['insurance_number']."</li>
                <li>保险种类：".$reminded_emails[0]['insurance_type']."</li>

            </ul>
        </div>
     </div> ";

}
else if($display_option=="1"){
    echo "<div id='title_ul_popup'>
        <div class='row'>
            <div class='col-2' >
                <div class='send_history_list_row'>姓名</div>
            </div>
            <div class='col-5' >
                <div class='send_history_list_row' id='email_list_rssl'>邮件</div>
            </div>
            <div class='col-2' >
                <div class='send_history_list_row'>发送日期</div>
            </div>
            <div class='col-3' >
                <div class='send_history_list_row'>事件id</div>
            </div>
        </div>
    </div>

    <div id='unpaid_emails_list_in_popup'>
        <ul class='sent_email_ul' id='unpaid_email_list' >
        ";
    $index=0;
    foreach ($reminded_emails as $events) {
        //echo $emails->recipient;
        echo "<li class='send_history_list'  id='list_$index'>
                    <div class='row'>
                        <div class='col-2' id='unpaid_email_list_col_1_$index' style='border-right:solid 1px '>
                            <div class='send_history_list_row'>".$events['recipient']."</div>
                        </div>
                        <div class='col-5'  id='unpaid_email_list_col_2_$index' style='border-right:solid 1px '>
                            <div class='send_history_list_row' id='email_list_rssl'>".$events['email']."</div>
                        </div>
                        <div class='col-2' id='unpaid_email_list_col_3_$index' style='border-right:solid 1px '>
                            <div class='send_history_list_row'>".$events['event_status']."</div>
                        </div>
                        <div class='col-3' id='unpaid_email_list_col_4_$index' style='border-right:solid 1px '>
                            <div class='send_history_list_row'>".$events['event_id']."</div>
                        </div>
                    </div>
              </li>
    ";
        $index++;
    }

    echo "</ul>
        </div>";


}




?>
