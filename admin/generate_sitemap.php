<?php
// Include configuration
require_once '../config/config.php';

// Initialize the sitemap XML
$sitemap = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
$sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;

// Define the base URL
$baseUrl = 'https://webart4u.com';

// Function to get pages from templates directory
function getTemplatePages($dir = '../templates/') {
    $pages = [];
    
    if (is_dir($dir)) {
        $files = scandir($dir);
        
        foreach ($files as $file) {
            if ($file !== '.' && $file !== '..' && pathinfo($file, PATHINFO_EXTENSION) === 'php') {
                $pageName = pathinfo($file, PATHINFO_FILENAME);
                // Skip error pages and special templates
                if (!in_array($pageName, ['404', '500', 'header', 'footer'])) {
                    $pages[] = $pageName;
                }
            }
        }
    }
    
    return $pages;
}

// Get all template pages
$pages = getTemplatePages();

// Add home page
$sitemap .= '   <url>' . PHP_EOL;
$sitemap .= '      <loc>' . $baseUrl . '/</loc>' . PHP_EOL;
$sitemap .= '      <lastmod>' . date('Y-m-d') . '</lastmod>' . PHP_EOL;
$sitemap .= '      <changefreq>weekly</changefreq>' . PHP_EOL;
$sitemap .= '      <priority>1.0</priority>' . PHP_EOL;
$sitemap .= '   </url>' . PHP_EOL;

// Add all other pages
foreach ($pages as $page) {
    if ($page !== 'home') {
        $sitemap .= '   <url>' . PHP_EOL;
        $sitemap .= '      <loc>' . $baseUrl . '/' . $page . '</loc>' . PHP_EOL;
        $sitemap .= '      <lastmod>' . date('Y-m-d') . '</lastmod>' . PHP_EOL;
        $sitemap .= '      <changefreq>monthly</changefreq>' . PHP_EOL;
        $sitemap .= '      <priority>0.8</priority>' . PHP_EOL;
        $sitemap .= '   </url>' . PHP_EOL;
    }
}

// Close sitemap XML
$sitemap .= '</urlset>';

// Write to file
file_put_contents('../sitemap.xml', $sitemap);

echo 'Sitemap generated successfully at ' . date('Y-m-d H:i:s');
?> 