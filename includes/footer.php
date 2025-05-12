    </main>
    <!-- Footer -->
    <footer class="main-footer">
        <div class="footer-background">
            <div class="footer-gradient"></div>
        </div>
        <div class="container">
            <div class="footer-content">
                <div class="footer-left">
                    <div class="footer-logo">
                        <div class="footer-brand">
                            <span class="brand-text">Webart<span class="highlight">4U</span></span>
                        </div>
                        <div class="tagline">Your Vision, Our Masterpiece</div>
                    </div>
                    <div class="footer-contact">
                        <a href="mailto:info@webart4u.com" class="contact-link">
                            <i class="fas fa-envelope"></i> info@webart4u.com
                        </a>
                        <span class="contact-divider">|</span>
                        <a href="tel:+918867672589" class="contact-link">
                            <i class="fas fa-phone-alt"></i> +91 88 6767 2589
                        </a>
                    </div>
                </div>
                <div class="footer-right">
                    <div class="social-links">
                        <a href="https://linkedin.com/company/webart4u" aria-label="LinkedIn" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/webart4u" aria-label="Twitter" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="https://github.com/webart4u" aria-label="GitHub" class="social-icon"><i class="fab fa-github"></i></a>
                        <a href="https://instagram.com/webart4u" aria-label="Instagram" class="social-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright">&copy; <?php echo date('Y'); ?> Webart4U. All Rights Reserved. <span class="footer-links"><a href="<?php echo SITE_URL; ?>?page=privacy">Privacy</a> <span class="dot-divider">•</span> <a href="<?php echo SITE_URL; ?>?page=terms">Terms</a> <span class="dot-divider">•</span> <a href="#" id="cookie-settings-btn">Cookie Settings</a></span></p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="<?php echo JS_PATH; ?>main.js"></script>
    
    <script>
        // Cookie settings button functionality
        document.addEventListener('DOMContentLoaded', function() {
            const cookieSettingsBtn = document.getElementById('cookie-settings-btn');
            if (cookieSettingsBtn) {
                cookieSettingsBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    // Show cookie settings if consent manager exists
                    if (window.consentManager) {
                        // Show banner if hidden
                        window.consentManager.consentBanner.style.display = 'block';
                        // Show settings panel
                        const content = window.consentManager.consentBanner.querySelector('.consent-content');
                        const settings = window.consentManager.consentBanner.querySelector('.consent-settings');
                        if (content && settings) {
                            content.style.display = 'none';
                            settings.style.display = 'block';
                        }
                    }
                });
            }
        });
    </script>
    
    <style>
        /* Simplified Footer Styles */
        .main-footer {
            position: relative;
            background-color: #0F172A;
            color: rgba(255, 255, 255, 0.7);
            padding: 35px 0 20px;
            overflow: hidden;
            z-index: 1;
            font-size: 0.9rem;
        }
        
        .footer-background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
        }
        
        .footer-gradient {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .footer-logo {
            margin-bottom: 10px;
        }
        
        .footer-brand {
            display: flex;
            align-items: center;
        }
        
        .footer-logo img {
            display: none;
        }
        
        .brand-text {
            font-size: 1.4rem;
            font-weight: 600;
            color: white;
            letter-spacing: 0.5px;
        }
        
        .brand-text .highlight {
            color: #FF4B24;
        }
        
        .footer-contact {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 5px;
        }
        
        .contact-link {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            transition: color 0.3s ease;
            font-size: 0.85rem;
            white-space: nowrap;
        }
        
        .contact-link:hover {
            color: #FF4B24;
        }
        
        .contact-link i {
            color: #FF4B24;
            margin-right: 4px;
            font-size: 0.85rem;
        }
        
        .contact-divider {
            color: rgba(255, 255, 255, 0.3);
            margin: 0 5px;
        }
        
        .social-links {
            display: flex;
            gap: 10px;
        }
        
        .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.08);
            color: white;
            font-size: 0.8rem;
            transition: all 0.3s ease;
        }
        
        .social-icon:hover {
            background: rgba(255, 75, 36, 0.2);
            color: #FF4B24;
            transform: translateY(-2px);
        }
        
        .footer-bottom {
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }
        
        .copyright {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.5);
            margin: 0;
        }
        
        .footer-links {
            display: inline;
            margin-left: 10px;
        }
        
        .footer-links a {
            color: rgba(255, 255, 255, 0.5);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
            color: #FF4B24;
        }
        
        .dot-divider {
            margin: 0 5px;
            color: rgba(255, 255, 255, 0.3);
        }
        
        .tagline {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.6);
            margin-top: 5px;
            font-style: italic;
            letter-spacing: 0.5px;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 640px) {
            .footer-content {
                flex-direction: column;
                align-items: center;
                text-align: center;
                gap: 15px;
            }
            
            .footer-brand {
                justify-content: center;
            }
            
            .footer-contact {
                justify-content: center;
                margin-top: 5px;
            }
            
            .main-footer {
                padding: 25px 0 15px;
            }
            
            .footer-bottom {
                padding-top: 12px;
            }
            
            .tagline {
                text-align: center;
            }
        }
    </style>
</body>
</html> 