<?php
// File: get_signal.php
header('Content-Type: application/json');
if (file_exists("signal.json")) {
    echo file_get_contents("signal.json");
} else {
    echo json_encode(["status" => "error", "message" => "No signal found"]);
}
?>
