<?php
//$servername = "127.0.0.1";
//$username = "WpTestAcc";
//$password = "liuying123";
//$dbname = "wordpress";
//
//
//// Create connection
//$conn = new mysqli($servername, $username, $password, $dbname);
//// Check connection
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//}
//
//$sql = "SELECT recipient, html, recipient_email,
//        sent_date FROM email_send_history";
//$result = $conn->query($sql);
//
//if ($result->num_rows > 0) {
//    //xml staff
//    /* create a dom document with encoding utf8 */
//    $domtree = new DOMDocument('1.0', 'UTF-8');
//
//    /* create the root element of the xml tree */
//    $xmlRoot = $domtree->createElement("xml");
//    /* append it to the document created */
//    $xmlRoot = $domtree->appendChild($xmlRoot);
//
//
//    //xml staff
//
//    // output data of each row
//    echo "<ul class='sent_email_ul'>";
//
//    $index=0;
//    while($row = $result->fetch_assoc()) {
//        //xml staff
//        $currentTrack = $domtree->createElement("emails");
//
//        $currentTrack = $xmlRoot->appendChild($currentTrack);
//        /* you should enclose the following two lines in a cicle */
//        $currentTrack->appendChild($domtree->createElement('recipient',$row["recipient"]));
//        $currentTrack->appendChild($domtree->createElement('recipient_email',$row["recipient_email"]));
//        $currentTrack->appendChild($domtree->createElement('sent_date',$row["sent_date"]));
//        $currentTrack->appendChild($domtree->createElement('html',$row["html"]));
//
//        //xml staff
//
//        //code send email staffs here
//        //code send email staffs here
//        //code send email staffs here
//        //code send email staffs here
//        echo "<li class='send_history_list'  id='list_$index'>
//                <div class='row'>
//                    <div class='col-1' id='col_1_list_$index' style='border-right:solid 1px '>
//                        ".$row["recipient"]."
//                    </div>
//                    <div class='col-3' id='col_2_list_$index' style='border-right:solid 1px '>
//                        ".$row["recipient_email"]."
//                    </div>
//                    <div class='col-1' id='col_3_list_$index' style='border-right:solid 1px '>
//                        ".$row["sent_date"]."
//                    </div>
//                    <div class='col-7' id='col_4_list_$index'>
//                         ".$row["html"]."
//                    </div>
//                </div>
//               </li>
//              ";
//        $index++;
//    }
//    //xml staff
//    $domtree->save($_SERVER['DOCUMENT_ROOT'].'/wp-content/themes/dongwang/database/test.xml');
//    //xml staff
//
//}
//else {
//    echo "0 results";
//}
//$conn->close();
//?>
<!---->
