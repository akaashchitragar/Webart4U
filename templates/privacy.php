<?php
$page_title = "Privacy Policy";
?>

<section class="page-section privacy-section">
    <div class="container">
        <div class="page-header">
            <h1>Privacy Policy</h1>
            <p class="last-updated">Last Updated: <?php echo date('F j, Y'); ?></p>
        </div>
        
        <div class="privacy-content">
            <div class="privacy-section">
                <h2>Introduction</h2>
                <p>At Webart4U, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.</p>
            </div>
            
            <div class="privacy-section">
                <h2>Information We Collect</h2>
                <p>We collect several types of information from and about users of our website, including:</p>
                <ul>
                    <li><strong>Personal Information:</strong> Information you provide to us, such as your name, email address, telephone number, and any other information you provide through our contact forms.</li>
                    <li><strong>Usage Information:</strong> Information about how you use our website, including which pages you visit and for how long.</li>
                    <li><strong>Device Information:</strong> Information about the device you use to access our website, including IP address, browser type, and operating system.</li>
                </ul>
            </div>
            
            <div class="privacy-section">
                <h2>How We Collect Information</h2>
                <p>We collect information through:</p>
                <ul>
                    <li><strong>Direct Interactions:</strong> When you fill out forms or correspond with us by post, phone, email, or otherwise.</li>
                    <li><strong>Automated Technologies:</strong> As you interact with our website, we may automatically collect technical data about your equipment, browsing actions, and patterns using cookies and similar technologies.</li>
                </ul>
            </div>
            
            <div class="privacy-section" id="analytics">
                <h2>Google Analytics</h2>
                <p>We use Google Analytics 4 (GA4) to understand how visitors interact with our website. GA4 collects information about:</p>
                <ul>
                    <li>Pages you visit and how long you stay on them</li>
                    <li>How you navigated to our website</li>
                    <li>Basic device information and geographic location (at the city level)</li>
                    <li>User interactions such as clicks, scrolls, and form submissions</li>
                </ul>
                <p>This information helps us improve our website and provide a better user experience. Google Analytics uses cookies and similar technologies to collect and analyze information about your use of the website.</p>
                <p>We have configured our Google Analytics implementation to:</p>
                <ul>
                    <li>Anonymize IP addresses</li>
                    <li>Respect Do Not Track signals</li>
                    <li>Disable analytics until consent is given</li>
                    <li>Use cookie consent controls that allow you to opt out of analytics tracking</li>
                </ul>
                <p>You can learn more about how Google uses data when you use our site by visiting <a href="https://policies.google.com/privacy/partners" target="_blank" rel="noopener">Google's Privacy & Terms</a>.</p>
                <p>You can manage your cookie preferences at any time by clicking on the "Cookie Settings" link in our footer.</p>
            </div>
            
            <div class="privacy-section">
                <h2>How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                    <li>Provide, maintain, and improve our website</li>
                    <li>Respond to your requests and inquiries</li>
                    <li>Understand how users interact with our website</li>
                    <li>Detect, prevent, and address technical issues</li>
                </ul>
            </div>
            
            <div class="privacy-section">
                <h2>Cookies</h2>
                <p>Our website uses cookies to enhance your experience and collect information about your visit. You can control cookies through your browser settings and our cookie consent manager.</p>
                <p>We use the following types of cookies:</p>
                <ul>
                    <li><strong>Necessary Cookies:</strong> Essential for the website to function properly.</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                </ul>
                <p>You can learn more about cookies by visiting <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener">All About Cookies</a>.</p>
            </div>
            
            <div class="privacy-section">
                <h2>Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul>
                    <li>Access personal information we hold about you</li>
                    <li>Request correction of your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to our processing of your personal information</li>
                    <li>Request restriction of processing your personal information</li>
                    <li>Request transfer of your personal information</li>
                    <li>Withdraw consent</li>
                </ul>
                <p>To exercise any of these rights, please contact us using the details provided below.</p>
            </div>
            
            <div class="privacy-section">
                <h2>Contact Us</h2>
                <p>If you have any questions about this privacy policy or our data practices, please contact us at:</p>
                <p><strong>Email:</strong> <a href="mailto:<?php echo ADMIN_EMAIL; ?>"><?php echo ADMIN_EMAIL; ?></a></p>
            </div>
        </div>
    </div>
</section>

<style>
    .privacy-section {
        padding: 100px 0;
        background-color: #f8f9fa;
    }
    
    .page-header {
        margin-bottom: 40px;
        text-align: center;
    }
    
    .page-header h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        color: #333;
    }
    
    .last-updated {
        color: #666;
        font-style: italic;
    }
    
    .privacy-content {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    }
    
    .privacy-content .privacy-section {
        margin-bottom: 30px;
        padding: 0;
        background: transparent;
    }
    
    .privacy-content h2 {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
    
    .privacy-content p, .privacy-content li {
        color: #555;
        line-height: 1.6;
        margin-bottom: 15px;
    }
    
    .privacy-content ul {
        padding-left: 20px;
        margin-bottom: 20px;
    }
    
    .privacy-content a {
        color: #FF4B24;
        text-decoration: none;
        transition: color 0.3s;
    }
    
    .privacy-content a:hover {
        color: #d83a16;
        text-decoration: underline;
    }
    
    @media (max-width: 768px) {
        .privacy-content {
            padding: 20px;
        }
        
        .privacy-section {
            padding: 60px 0;
        }
    }
</style> 