<?php
// Include configuration
require_once 'config.php';

// Create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set charset to utf8
$conn->set_charset("utf8");

// Function to sanitize user inputs
function sanitize($conn, $input) {
    if (is_array($input)) {
        foreach($input as $key => $value) {
            $input[$key] = sanitize($conn, $value);
        }
        return $input;
    }
    
    if (get_magic_quotes_gpc()) {
        $input = stripslashes($input);
    }
    
    if (!is_numeric($input)) {
        $input = $conn->real_escape_string($input);
    }
    
    return $input;
}
?> 