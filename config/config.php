<?php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'webart4u');

// Site Configuration
define('SITE_TITLE', 'Webart4U');
define('SITE_DESCRIPTION', 'Transforming Digital Visions Into Reality Since 2002');
define('SITE_URL', '/');

// Email Configuration
define('ADMIN_EMAIL', 'hello@webart4u.com');

// Error Reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Session Start
session_start();

// Define common paths
define('ROOT_PATH', dirname(__DIR__) . '/');
define('ASSETS_PATH', '/assets/');
define('CSS_PATH', ASSETS_PATH . 'css/');
define('JS_PATH', ASSETS_PATH . 'js/');
define('IMAGES_PATH', ASSETS_PATH . 'images/');
?> 