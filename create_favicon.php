<?php
// Set appropriate headers to prevent caching
header('Content-Type: text/html; charset=utf-8');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Pragma: no-cache");

// Path to the logo
$svgLogo = __DIR__ . '/assets/images/logo.svg';
$outputDir = __DIR__ . '/assets/images';
$faviconIco = $outputDir . '/favicon.ico';
$faviconPng = $outputDir . '/favicon.png';
$appleTouchIcon = $outputDir . '/apple-touch-icon.png';

// Make sure the output directory exists
if (!file_exists($outputDir)) {
    mkdir($outputDir, 0755, true);
}

// Function to create favicon images from SVG
function createFavicons($svgPath, $outputDir, $faviconIco, $faviconPng, $appleTouchIcon) {
    try {
        // Check if SVG file exists
        if (!file_exists($svgPath)) {
            throw new Exception("SVG file not found at: $svgPath");
        }
        
        // Create Imagick object from SVG
        $imagick = new Imagick();
        $imagick->readImage($svgPath);
        
        // Basic favicon.png (32x32)
        $imagick->resizeImage(32, 32, Imagick::FILTER_LANCZOS, 1);
        $imagick->setImageFormat('png');
        $imagick->writeImage($faviconPng);
        echo "Created favicon.png (32x32)<br>";
        
        // Apple Touch Icon (180x180)
        $imagick->readImage($svgPath);
        $imagick->resizeImage(180, 180, Imagick::FILTER_LANCZOS, 1);
        $imagick->setImageFormat('png');
        $imagick->writeImage($appleTouchIcon);
        echo "Created apple-touch-icon.png (180x180)<br>";
        
        // Create ICO file with multiple sizes for best compatibility
        $sizes = [16, 32, 48, 64];
        $ico = new Imagick();
        
        foreach ($sizes as $size) {
            $imagick->readImage($svgPath);
            $imagick->resizeImage($size, $size, Imagick::FILTER_LANCZOS, 1);
            $ico->addImage($imagick);
        }
        
        $ico->setImageFormat('ico');
        file_put_contents($faviconIco, $ico->getImagesBlob());
        echo "Created favicon.ico with multiple sizes<br>";
        
        echo "<div style='color: green; font-weight: bold;'>Success! All favicon files have been created.</div>";
        
    } catch (Exception $e) {
        echo "<div style='color: red; font-weight: bold;'>Error: " . $e->getMessage() . "</div>";
        
        // If Imagick isn't available, suggest manual conversion
        if (!extension_loaded('imagick')) {
            echo "<div style='margin-top: 15px;'>
                <p>ImageMagick PHP extension is not available. Please convert the SVG to favicons manually:</p>
                <ol>
                    <li>Use an online converter like <a href='https://convertio.co/svg-ico/' target='_blank'>Convertio</a> or <a href='https://favicon.io/' target='_blank'>Favicon.io</a></li>
                    <li>Upload your logo.svg file</li>
                    <li>Download the generated favicon files</li>
                    <li>Place them in your assets/images directory</li>
                </ol>
            </div>";
        }
    }
}

// Check if ImageMagick is available
if (!extension_loaded('imagick')) {
    echo "<div style='color: orange; font-weight: bold;'>Warning: ImageMagick PHP extension is not installed.</div>";
    echo "<div style='margin-top: 15px; margin-bottom: 20px;'>
        <p>Using GD library as fallback (limited functionality).</p>
    </div>";
    
    // Fallback to GD library (more limited but more widely available)
    createFaviconWithGD($svgLogo, $outputDir);
} else {
    // Use ImageMagick which has better SVG support
    createFavicons($svgLogo, $outputDir, $faviconIco, $faviconPng, $appleTouchIcon);
}

// Fallback function using GD library (which doesn't support SVG directly)
function createFaviconWithGD($svgPath, $outputDir) {
    // Create a 32x32 pixel image with a red background (matching brand color)
    $img = imagecreatetruecolor(32, 32);
    
    // Brand color: #FF2D00 (from SVG)
    $brandColor = imagecolorallocate($img, 255, 45, 0);
    $white = imagecolorallocate($img, 255, 255, 255);
    $black = imagecolorallocate($img, 0, 0, 0);
    
    // Fill background with brand color
    imagefill($img, 0, 0, $brandColor);
    
    // Draw a simplified version of the logo (a "W" shape)
    // This is just an approximation since GD can't directly work with SVG
    $points = [
        5, 25,  // bottom left
        10, 5,  // top left
        16, 20, // middle top
        22, 5,  // top right
        27, 25  // bottom right
    ];
    
    // Draw a white "W" shape
    imagefilledpolygon($img, $points, count($points)/2, $white);
    
    // Add a simple border
    imagerectangle($img, 0, 0, 31, 31, $black);
    
    // Save as PNG
    imagepng($img, $outputDir . '/favicon.png');
    echo "Created basic favicon.png using GD library<br>";
    
    // Create a larger version for Apple Touch Icon
    $imgLarge = imagecreatetruecolor(180, 180);
    $brandColor = imagecolorallocate($imgLarge, 255, 45, 0);
    $white = imagecolorallocate($imgLarge, 255, 255, 255);
    $black = imagecolorallocate($imgLarge, 0, 0, 0);
    
    imagefill($imgLarge, 0, 0, $brandColor);
    
    // Scale up the points for the larger image
    $pointsLarge = [
        30, 140,  // bottom left
        60, 30,   // top left
        90, 110,  // middle top
        120, 30,  // top right
        150, 140  // bottom right
    ];
    
    imagefilledpolygon($imgLarge, $pointsLarge, count($pointsLarge)/2, $white);
    imagerectangle($imgLarge, 0, 0, 179, 179, $black);
    
    // Save as PNG
    imagepng($imgLarge, $outputDir . '/apple-touch-icon.png');
    echo "Created apple-touch-icon.png using GD library<br>";
    
    echo "<div style='color: orange; font-weight: bold; margin-top: 15px;'>
        Note: These are simplified versions of your logo. For better results, consider using an online converter with your original SVG.
    </div>";
    
    // Clean up
    imagedestroy($img);
    imagedestroy($imgLarge);
}

// Add HTML for a preview
echo "<h2 style='margin-top: 30px;'>Favicon Preview:</h2>";
echo "<div style='display: flex; align-items: center; gap: 20px; margin-top: 15px;'>";
echo "  <div>";
echo "    <img src='assets/images/favicon.png' style='width: 32px; height: 32px; border: 1px solid #ccc;'>";
echo "    <p>favicon.png (32x32)</p>";
echo "  </div>";
echo "  <div>";
echo "    <img src='assets/images/apple-touch-icon.png' style='width: 60px; height: 60px; border: 1px solid #ccc;'>";
echo "    <p>apple-touch-icon.png (180x180)</p>";
echo "  </div>";
echo "</div>";

// Add instructions for adding the favicon to the site
echo "<h2 style='margin-top: 30px;'>Implementation Instructions:</h2>";
echo "<p>Add the following code to the &lt;head&gt; section of your includes/header.php file:</p>";

$code = <<<HTML
<!-- Favicons -->
<link rel="icon" type="image/png" href="<?php echo IMAGES_PATH; ?>favicon.png">
<link rel="icon" type="image/x-icon" href="<?php echo IMAGES_PATH; ?>favicon.ico">
<link rel="apple-touch-icon" href="<?php echo IMAGES_PATH; ?>apple-touch-icon.png">
HTML;

echo "<pre style='background-color: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto;'>" . htmlspecialchars($code) . "</pre>";
?>

<p style='margin-top: 20px;'>
  <a href="index.php" style='display: inline-block; background-color: #FF2D00; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;'>
    Go back to homepage
  </a>
</p> 