<?php
// File: send_signal.php
$data = file_get_contents("php://input");
if ($data) {
    file_put_contents("signal.json", $data);
    echo json_encode(["status" => "success", "message" => "Signal received"]);
} else {
    echo json_encode(["status" => "error", "message" => "No data received"]);
}
?>
