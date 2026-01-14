<?php
$mysqli = new mysqli("localhost","root","","fruits");

if ($mysqli->connect_errno) {
    echo "Failed to connect to database";
    exit();
}

// If no POST, return fruits as JSON
if (!isset($_POST['fruitId'])) {
    $result = $mysqli->query("SELECT fruitId, fruitName, availability FROM fruits");
    $fruits = [];
    while($row = $result->fetch_assoc()) $fruits[] = $row;
    echo json_encode($fruits);
    $mysqli->close();
    exit();
}

// Get POST values
$fruitId = intval($_POST['fruitId']);
$quantity = intval($_POST['quantity']);

// Check fruit exists
$result = $mysqli->query("SELECT availability FROM fruits WHERE fruitId=$fruitId");
if ($result->num_rows == 0) {
    echo "Unknown given fruit";
    $mysqli->close();
    exit();
}

$row = $result->fetch_assoc();
$available = intval($row['availability']);

// Check quantity
if ($quantity < 0) {
    echo "Please enter a valid order";
} else if ($quantity > $available) {
    echo "We are unable to honor that request";
} else if ($quantity == $available) {
    // Case d: empty stock
    $mysqli->query("UPDATE fruits SET availability=0 WHERE fruitId=$fruitId");
    echo "You have emptied our stock";
} else {
    // Case e: reduce stock
    $newStock = $available - $quantity;
    $mysqli->query("UPDATE fruits SET availability=$newStock WHERE fruitId=$fruitId");
    echo "Order placed successfully";
}

$mysqli->close();
?>
