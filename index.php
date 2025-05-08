<?php
// Include configuration files
require_once 'config/config.php';

// Include header
include_once 'includes/header.php';

// Get the current page from URL parameter, default to home
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

// Validate the page name to prevent directory traversal
$page = preg_replace('/[^a-zA-Z0-9_-]/', '', $page);

// Include the appropriate template based on the page
$template_path = "templates/{$page}.php";

// Check if the template exists, otherwise show 404
if (file_exists($template_path)) {
    include_once $template_path;
} else {
    include_once 'templates/404.php';
}

// Include footer
include_once 'includes/footer.php';
?> 