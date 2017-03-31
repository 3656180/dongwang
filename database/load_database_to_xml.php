<?php
$servername = "127.0.0.1";
$username = "WpTestAcc";
$password = "liuying123";
$dbname = "wordpress";


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//database connection finished

/* create a dom document with encoding utf8 */
$domtree_all = new DOMDocument('1.0', 'UTF-8');
/* create the root element of the xml tree */
$xmlRoot_all = $domtree_all->createElement("xml");
/* append it to the document created */
$xmlRoot_all = $domtree_all->appendChild($xmlRoot_all);


$currentTrack_all = $domtree_all->createElement("email");

$currentTrack_all = $xmlRoot_all->appendChild($currentTrack_all);


//--------------------------load sent history from all send_plan tables
$tableListSql="SELECT TABLE_NAME FROM information_schema.tables
                WHERE table_schema='wordpress'
                AND TABLE_NAME like'sent_history%'";
//load all table name to tablelst
$tableList=$conn->query($tableListSql);
if($tableList->num_rows>0) {
    /* create a dom document with encoding utf8 */
    $domtree = new DOMDocument('1.0', 'UTF-8');
    /* create the root element of the xml tree */
    $xmlRoot = $domtree->createElement("xml");
    /* append it to the document created */
    $xmlRoot = $domtree->appendChild($xmlRoot);

    while ($row = $tableList->fetch_assoc()) {
        $sql = "SELECT * FROM " . $row["TABLE_NAME"];
//load sent history from current send plan table
        $result = $conn->query($sql);
//-------------
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                //add data to sent_history.xml
                $currentTrack = $domtree->createElement("sent_email");

                $currentTrack = $xmlRoot->appendChild($currentTrack);
                /* you should enclose the following two lines in a cicle */
                $currentTrack->appendChild($domtree->createElement('id', $row["id"]));
                $currentTrack->appendChild($domtree->createElement('recipient', $row["recipient"]));
                $currentTrack->appendChild($domtree->createElement('recipient_email', $row["email"]));
                $currentTrack->appendChild($domtree->createElement('sent_date', $row["sent_date"]));
                $currentTrack->appendChild($domtree->createElement('html', $row["html"]));


                //add data to all_email.xml
                $currentTrack_all->appendChild($domtree_all->createElement('type', 'sent_email'));

                $currentTrack_all->appendChild($domtree_all->createElement('id', $row["id"]));
                $currentTrack_all->appendChild($domtree_all->createElement('recipient', $row["recipient"]));
                $currentTrack_all->appendChild($domtree_all->createElement('recipient_email', $row["email"]));
                $currentTrack_all->appendChild($domtree_all->createElement('sent_date', $row["sent_date"]));
                $currentTrack_all->appendChild($domtree_all->createElement('html', $row["html"]));

            }

        } else {
            echo "0 results for email_send_history";
        }
    }
    $domtree->save($_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/dongwang/xml/sent_history.xml');

}


$tableListSql="SELECT TABLE_NAME FROM information_schema.tables
                WHERE table_schema='wordpress'
                AND TABLE_NAME like'canceled_email%'";
//load all table name to tablelst
$tableList=$conn->query($tableListSql);
if($tableList->num_rows>0) {
    /* create a dom document with encoding utf8 */
    $domtree = new DOMDocument('1.0', 'UTF-8');
    /* create the root element of the xml tree */
    $xmlRoot = $domtree->createElement("xml");
    /* append it to the document created */
    $xmlRoot = $domtree->appendChild($xmlRoot);

    while ($row = $tableList->fetch_assoc()) {
        $sql = "SELECT * FROM " . $row["TABLE_NAME"];
        $result = $conn->query($sql);
//-------------
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                //add data to canceled_email.xml
                $currentTrack = $domtree->createElement("canceled_email");

                $currentTrack = $xmlRoot->appendChild($currentTrack);
                /* you should enclose the following two lines in a cicle */
                $currentTrack->appendChild($domtree->createElement('id', $row["id"]));
                $currentTrack->appendChild($domtree->createElement('recipient', $row["recipient"]));
                $currentTrack->appendChild($domtree->createElement('email', $row["email"]));
                $currentTrack->appendChild($domtree->createElement('send_date', $row["send_date"]));
                $currentTrack->appendChild($domtree->createElement('canceled_date', $row["canceled_date"]));
                $currentTrack->appendChild($domtree->createElement('html', $row["html"]));

                //add data to all_email.xml
                $currentTrack_all->appendChild($domtree_all->createElement('type', 'canceled_email'));

                $currentTrack_all->appendChild($domtree_all->createElement('id', $row["id"]));
                $currentTrack_all->appendChild($domtree_all->createElement('recipient', $row["recipient"]));
                $currentTrack_all->appendChild($domtree_all->createElement('email', $row["email"]));
                $currentTrack_all->appendChild($domtree_all->createElement('send_date', $row["send_date"]));
                $currentTrack_all->appendChild($domtree_all->createElement('canceled_date', $row["canceled_date"]));
                $currentTrack_all->appendChild($domtree_all->createElement('html', $row["html"]));
            }

        } else {
            echo "0 results for canceled_email";
        }
    }
    $domtree->save($_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/dongwang/xml/canceled_email.xml');

}


//--------------------------load send plan from all send_plan tables
$tableListSql="SELECT TABLE_NAME FROM information_schema.tables
                WHERE table_schema='wordpress'
                AND TABLE_NAME like'send_plan%'";
//load all table name to tablelst
$tableList=$conn->query($tableListSql);
if($tableList->num_rows>0){
    /* create a dom document with encoding utf8 */
    $domtree = new DOMDocument('1.0', 'UTF-8');
    /* create the root element of the xml tree */
    $xmlRoot = $domtree->createElement("xml");
    /* append it to the document created */
    $xmlRoot = $domtree->appendChild($xmlRoot);

    while($row=$tableList->fetch_assoc()){
        $sql="SELECT * FROM ".$row["TABLE_NAME"];
        //load send plan from current send plan table
        $result=$conn->query($sql);
        //-------------
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                //add data to send_plan.xml
                $currentTrack = $domtree->createElement("email_not_send_yet");
                $currentTrack = $xmlRoot->appendChild($currentTrack);
                /* you should enclose the following two lines in a cicle */
                $currentTrack->appendChild($domtree->createElement('id', $row["id"]));
                $currentTrack->appendChild($domtree->createElement('recipient', $row["recipient"]));
                $currentTrack->appendChild($domtree->createElement('email', $row["email"]));
                $currentTrack->appendChild($domtree->createElement('send_date', $row["send_date"]));
                $currentTrack->appendChild($domtree->createElement('html',$row["html"]));
                //add data to all_email.xml
                $currentTrack_all->appendChild($domtree_all->createElement('type', 'email_not_send_yet'));
                $currentTrack_all->appendChild($domtree_all->createElement('id', $row["id"]));
                $currentTrack_all->appendChild($domtree_all->createElement('recipient', $row["recipient"]));
                $currentTrack_all->appendChild($domtree_all->createElement('email', $row["email"]));
                $currentTrack_all->appendChild($domtree_all->createElement('send_date', $row["send_date"]));
                $currentTrack_all->appendChild($domtree_all->createElement('html',$row["html"]));
            }
        }
    }
    $domtree->save($_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/dongwang/xml/send_plan.xml');

}


$domtree_all->save($_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/dongwang/xml/all_email.xml');


$conn->close();
?>

