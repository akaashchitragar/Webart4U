<?php
// Set appropriate headers
header('Content-Type: text/html; charset=utf-8');

// Directory paths
$outputDir = __DIR__ . '/assets/images';

// Make sure the output directory exists
if (!file_exists($outputDir)) {
    mkdir($outputDir, 0755, true);
}

// Brand colors from the SVG
$primaryColor = [255, 45, 0]; // #FF2D00
$darkPrimaryColor = [168, 30, 0]; // #A81E00

// Generate favicon and apple touch icon
generateFavicons($outputDir, $primaryColor, $darkPrimaryColor);

/**
 * Generate favicons using the GD library
 */
function generateFavicons($outputDir, $primaryColor, $darkPrimaryColor) {
    // Create favicon.png (32x32)
    $favicon = imagecreatetruecolor(32, 32);
    createFaviconImage($favicon, $primaryColor, $darkPrimaryColor, 32);
    imagepng($favicon, $outputDir . '/favicon.png');
    echo "Created favicon.png (32x32)<br>";
    
    // Create apple-touch-icon.png (180x180)
    $touchIcon = imagecreatetruecolor(180, 180);
    createFaviconImage($touchIcon, $primaryColor, $darkPrimaryColor, 180);
    imagepng($touchIcon, $outputDir . '/apple-touch-icon.png');
    echo "Created apple-touch-icon.png (180x180)<br>";
    
    // Clean up
    imagedestroy($favicon);
    imagedestroy($touchIcon);
    
    echo "<div style='color: green; font-weight: bold; margin-top: 15px;'>All favicon files created successfully!</div>";
}

/**
 * Create a favicon image with the "W" logo
 */
function createFaviconImage($img, $primaryColor, $darkPrimaryColor, $size) {
    // Allocate colors
    $bgColor = imagecolorallocate($img, $primaryColor[0], $primaryColor[1], $primaryColor[2]);
    $white = imagecolorallocate($img, 255, 255, 255);
    $darkBg = imagecolorallocate($img, $darkPrimaryColor[0], $darkPrimaryColor[1], $darkPrimaryColor[2]);
    $black = imagecolorallocate($img, 0, 0, 0);
    
    // Fill background
    imagefill($img, 0, 0, $bgColor);
    
    // Calculate dimensions based on size
    $border = max(1, floor($size * 0.03));
    $innerSize = $size - ($border * 2);
    
    // Draw inner square with darker color
    imagefilledrectangle($img, $border, $border, $size - $border - 1, $size - $border - 1, $darkBg);
    
    // Draw "W" shape representing the logo
    // Position values are percentage-based for different sizes
    $wWidth = $size * 0.6;   // Width of the W
    $wHeight = $size * 0.5;  // Height of the W
    $wLeft = ($size - $wWidth) / 2;  // Left position of the W
    $wTop = ($size - $wHeight) / 2;  // Top position of the W
    
    // Define the W shape
    $points = [
        $wLeft, $wTop + $wHeight,                           // bottom left
        $wLeft + ($wWidth * 0.2), $wTop,                    // top left
        $wLeft + ($wWidth * 0.5), $wTop + ($wHeight * 0.7), // middle
        $wLeft + ($wWidth * 0.8), $wTop,                    // top right
        $wLeft + $wWidth, $wTop + $wHeight                  // bottom right
    ];
    
    // Draw the W (fixed deprecated parameter usage)
    imagefilledpolygon($img, $points, 5, $white);
    
    // Add a subtle border
    imagerectangle($img, 0, 0, $size - 1, $size - 1, $black);
    
    return $img;
}

/**
 * Create an ICO file with multiple sizes
 */
function createIcoFile($outputDir, $primaryColor, $darkPrimaryColor, $sizes) {
    // Only attempt to create the ICO if we have the converter class
    if (class_exists('ICO')) {
        try {
            require_once 'php-ico.php';
            
            $ico = new ICO();
            
            foreach ($sizes as $size) {
                $img = imagecreatetruecolor($size, $size);
                createFaviconImage($img, $primaryColor, $darkPrimaryColor, $size);
                $ico->add_image($img, [[$size, $size]]);
                imagedestroy($img);
            }
            
            $ico->save_ico($outputDir . '/favicon.ico');
            echo "Created favicon.ico with multiple sizes<br>";
            
        } catch (Exception $e) {
            echo "Couldn't create ICO file: " . $e->getMessage() . "<br>";
            echo "Using PNG as alternative.<br>";
        }
    } else {
        // As a fallback, we'll just make a larger favicon.png
        // which browsers can scale
        echo "ICO creation not supported. Using PNG as alternative.<br>";
    }
}

/**
 * Basic ICO format creation without dependencies
 * This is a simplified approach that works for basic needs
 */
function createSimpleIcoFile($outputDir, $primaryColor, $darkPrimaryColor) {
    $img = imagecreatetruecolor(32, 32);
    createFaviconImage($img, $primaryColor, $darkPrimaryColor, 32);
    
    // Convert to BMP format in memory
    ob_start();
    imagebmp($img);
    $bmp = ob_get_clean();
    
    // Create basic ICO structure
    $iconData = 
        "\x00\x00" .      // Reserved (0)
        "\x01\x00" .      // Image type (1 = ICO)
        "\x01\x00" .      // Number of images (1)
        
        // Image entry
        "\x20\x20" .      // Width, Height (32x32)
        "\x00" .          // Color palette (0 = no palette)
        "\x00" .          // Reserved (0)
        "\x01\x00" .      // Color planes (1)
        "\x20\x00" .      // Bits per pixel (32)
        pack("V", 22 + strlen($bmp)) . // Size of BMP data
        pack("V", 22) .   // Offset to BMP data
        
        // BMP data
        $bmp;
    
    // Write to file
    file_put_contents($outputDir . '/favicon.ico', $iconData);
    echo "Created simple favicon.ico<br>";
    
    imagedestroy($img);
}

// Simple PHP ICO class for reference (based on PHP-ICO by Diogo Resende)
// This is a minimal implementation that would be used if available
class ICO {
    private $images = [];
    
    public function add_image($im, $sizes) {
        $this->images[] = [
            'image' => $im,
            'sizes' => $sizes
        ];
    }
    
    public function save_ico($file) {
        // Initiate file
        $fp = fopen($file, 'wb');
        if (!$fp) {
            throw new Exception("Could not open file for writing: $file");
        }
        
        // Write ICO header
        $data = pack('SSS', 0, 1, count($this->images));
        fwrite($fp, $data);
        
        // Calculate offset to image data
        $offset = 6 + (count($this->images) * 16);
        
        // Image data containers
        $image_data = '';
        
        // Process each image
        foreach ($this->images as $image) {
            $im = $image['image'];
            $size = $image['sizes'][0];
            
            // Get image dimensions
            $width = $size[0];
            $height = $size[1];
            
            // Convert image to BMP format
            ob_start();
            imagebmp($im);
            $bmp_data = ob_get_clean();
            
            // Write icon directory entry
            $dir_entry = pack('CCSSSSl', 
                $width, $height,
                0, 0,
                1, 32,
                strlen($bmp_data)
            );
            $dir_entry .= pack('l', $offset);
            fwrite($fp, $dir_entry);
            
            // Store image data
            $image_data .= $bmp_data;
            
            // Update offset
            $offset += strlen($bmp_data);
        }
        
        // Write image data
        fwrite($fp, $image_data);
        fclose($fp);
        
        return true;
    }
}

// Add HTML for a preview
echo "<h2 style='margin-top: 30px;'>Favicon Preview:</h2>";
echo "<div style='display: flex; align-items: center; gap: 20px; margin-top: 15px;'>";
echo "  <div style='text-align: center;'>";
echo "    <img src='assets/images/favicon.png' style='width: 32px; height: 32px; border: 1px solid #ccc;'>";
echo "    <p>favicon.png (32x32)</p>";
echo "  </div>";
echo "  <div style='text-align: center;'>";
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
<link rel="apple-touch-icon" href="<?php echo IMAGES_PATH; ?>apple-touch-icon.png">
HTML;

echo "<pre style='background-color: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto;'>" . htmlspecialchars($code) . "</pre>";

// Note about optimization
echo "<h2 style='margin-top: 30px;'>Note:</h2>";
echo "<p>The script has created simplified favicons based on your brand colors. These files will work well for most browsers and devices.</p>";
echo "<p>For advanced favicon functionality including ICO format (for older browsers) and various device-specific icons, you can use online tools like <a href='https://favicon.io/' target='_blank'>Favicon.io</a> or <a href='https://realfavicongenerator.net/' target='_blank'>Real Favicon Generator</a>.</p>";
?>

<p style='margin-top: 20px;'>
  <a href="index.php" style='display: inline-block; background-color: #FF2D00; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;'>
    Go back to homepage
  </a>
</p> 