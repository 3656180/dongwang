<?php
$sql = $_POST['sql_query'];

function validate_email($sql)
{
    class TableRows extends RecursiveIteratorIterator
    {
        function __construct($it)
        {
            parent::__construct($it, self::LEAVES_ONLY);
        }

        function current()
        {
            return "<td style='width:150px;border:1px solid black;'>" . parent::current() . "</td>";
        }

        function beginChildren()
        {
            echo "<tr>";
        }

        function endChildren()
        {
            echo "</tr>" . "\n";
        }
    }

    //echo($_POST['sql_query']);
    $configs = include('config.php');
    try {

        $conn = new PDO("mysql:host=$configs->host;dbname=$configs->dbname", $configs->username, $configs->password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

        //echo ($stmt->fetchAll());
        foreach (new RecursiveArrayIterator($stmt->fetchAll()) as $k => $v) {
            if ($v) {
                echo "false";
                //return "false";
            }
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    $conn = null;
//echo "</table>";
}

validate_email($sql);

?>