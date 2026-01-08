<?php
$connection = new mysqli("localhost", "root", "", "MiniWebchat");


if(isset($_POST["UserName"]) && isset($_POST["message"])) {

    $sqlfinduser =$connection->prepare("SELECT * FROM Users WHERE UserName = ?");
    $sqlfinduser->bind_param("s", $_POST["UserName"]);
    $sqlfinduser->execute();
   $result = $sqlfinduser->get_result();
   if($result->num_rows == 0) {
       $sqlcreateuser = $connection->prepare("INSERT INTO Users (UserName) VALUES (?)");
       $sqlcreateuser->bind_param("s", $_POST["UserName"]);
       $sqlcreateuser->execute();
   }

   $sqlfinduser = $connection->prepare("SELECT * FROM Users WHERE UserName = ?");
   $sqlfinduser->bind_param("s", $_POST["UserName"]);
   $sqlfinduser->execute(); 
   $result = $sqlfinduser->get_result();
   $row = $result->fetch_assoc();
   $userid = $row["UserID"];

   $sqlcreatemessage = $connection->prepare("INSERT INTO Messages (MessageText, UserID) VALUES (?,?)");
   $sqlcreatemessage->bind_param("si", $_POST["message"], $userid);
   $sqlcreatemessage->execute();
}

if(isset($_GET["lastMessageSeen"])) {
    $sqlgetmessages = $connection->prepare("SELECT * FROM Messages NATURAL JOIN Users WHERE MessageId > ? order by MessageId" );
    $sqlgetmessages->bind_param("i", $_GET["lastMessageSeen"]);
    $sqlgetmessages->execute();
    $result = $sqlgetmessages->get_result();
    while($row = $result->fetch_assoc()) {
        ?>
        <div>
            <span class="MsgId"><?= $row["MessageID"] ?></span>. <?= $row["UserName"] ?> wrote: <?= $row["MessageText"] ?>
        </div>

        <?php
    }
}
?>