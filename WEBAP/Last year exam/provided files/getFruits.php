<?php
$mysqli = new mysqli("localhost","root","","fruits");
$result = $mysqli->query("SELECT fruitId, fruitName, availability FROM fruits");
$fruits = [];
while($row = $result->fetch_assoc()) $fruits[] = $row;
echo json_encode($fruits);
$mysqli->close();
?>
