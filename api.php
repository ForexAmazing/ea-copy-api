<?php
$dataFile = "data.txt";

// Jika ada POST (dari EA Master), simpan ke file
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawData = file_get_contents("php://input");
    file_put_contents($dataFile, $rawData);
    echo "OK";
    exit;
}

// Jika GET (dari EA Slave), tampilkan isi data.txt
if (file_exists($dataFile)) {
    header("Content-Type: text/plain");
    readfile($dataFile);
} else {
    echo "";
}
?>
