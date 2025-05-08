<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo SITE_DESCRIPTION; ?>">
    <title><?php echo isset($page_title) ? $page_title . ' - ' . SITE_TITLE : SITE_TITLE; ?></title>
    
    <!-- Favicon -->
    <link rel="shortcut icon" href="<?php echo IMAGES_PATH; ?>favicon.ico" type="image/x-icon">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="<?php echo CSS_PATH; ?>style.css">
    <link rel="stylesheet" href="<?php echo CSS_PATH; ?>responsive.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    
    <style>
        /* Navigation Capsule Styling */
        .nav-capsule {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 30px;
            padding: 10px 25px;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .nav-capsule:hover {
            transform: translateX(-50%) scale(1.05);
        }
        
        /* Navigation Links */
        .nav-links {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .nav-links li {
            position: relative;
        }
        
        /* Completely disable all pseudo-elements */
        .nav-links li a::before,
        .nav-links li a::after,
        .nav-links li a.active::before,
        .nav-links li a.active::after,
        .nav-links li a:hover::before,
        .nav-links li a:hover::after {
            content: none !important;
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            background: transparent !important;
            width: 0 !important;
            height: 0 !important;
        }
        
        /* Basic link styling */
        .nav-links li a {
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            transition: all 0.3s ease;
            position: relative;
            background-color: transparent;
        }
        
        /* Hover effect */
        .nav-links li a:hover {
            transform: translateY(-3px);
        }
        
        /* Active state - without white circle */
        .nav-links li a.active {
            background-color: rgba(255, 255, 255, 0.15);
        }
        
        /* Tooltip Styling - appearing BELOW the icon */
        .nav-links li a .tooltip {
            position: absolute;
            bottom: -30px; /* Position below the icon */
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            z-index: 100;
        }
        
        /* Show tooltip on hover */
        .nav-links li a:hover .tooltip {
            opacity: 1;
            visibility: visible;
        }
        
        /* Add an arrow to the tooltip pointing up */
        .nav-links li a .tooltip::before {
            content: "";
            position: absolute;
            top: -5px; /* Arrow at the top of the tooltip */
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 5px 5px 5px;
            border-style: solid;
            border-color: transparent transparent rgba(0, 0, 0, 0.8) transparent;
        }
        
        /* Mobile menu toggle button */
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px;
            z-index: 1001;
        }
        
        .menu-toggle .bar {
            display: block;
            width: 25px;
            height: 3px;
            margin: 5px auto;
            background-color: white;
            transition: all 0.3s ease;
        }
        
        /* Mobile responsive adjustments in the responsive.css file */
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="floating-nav">
        <div class="nav-capsule">
            <ul class="nav-links">
                <li class="nav-logo">
                    <a href="#" class="scroll-to-top">
                        <img src="<?php echo IMAGES_PATH; ?>logo.svg" alt="Webart4U Logo" class="nav-logo-img">
                        <span class="tooltip">Home</span>
                    </a>
                </li>
                <li class="nav-separator"></li>
                <li>
                    <a href="<?php echo SITE_URL; ?>#about">
                        <i class="fas fa-info-circle"></i>
                        <span class="tooltip">About Us</span>
                    </a>
                </li>
                <li>
                    <a href="<?php echo SITE_URL; ?>#services">
                        <i class="fas fa-cogs"></i>
                        <span class="tooltip">Services</span>
                    </a>
                </li>
                <li>
                    <a href="<?php echo SITE_URL; ?>#portfolio">
                        <i class="fas fa-briefcase"></i>
                        <span class="tooltip">Portfolio</span>
                    </a>
                </li>
                <li>
                    <a href="<?php echo SITE_URL; ?>#team">
                        <i class="fas fa-users"></i>
                        <span class="tooltip">Our Team</span>
                    </a>
                </li>
                <li>
                    <a href="<?php echo SITE_URL; ?>#features">
                        <i class="fas fa-star"></i>
                        <span class="tooltip">Features</span>
                    </a>
                </li>
                <li>
                    <a href="<?php echo SITE_URL; ?>#technologies">
                        <i class="fas fa-code"></i>
                        <span class="tooltip">Technologies</span>
                    </a>
                </li>
                <li>
                    <a href="<?php echo SITE_URL; ?>#faq">
                        <i class="fas fa-question-circle"></i>
                        <span class="tooltip">FAQ</span>
                    </a>
                </li>
                <li>
                    <a href="<?php echo SITE_URL; ?>#contact">
                        <i class="fas fa-envelope"></i>
                        <span class="tooltip">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
        
        <button class="menu-toggle" aria-label="Toggle Menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
    </nav>
    
    <!-- Main Content -->
    <main>
    
    <script>
        // Add active class to navigation links based on scroll position
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links li a[href^="<?php echo SITE_URL; ?>#"]');
            const scrollToTopLink = document.querySelector('.scroll-to-top');
            
            // Handle logo click to scroll to top without page reload
            scrollToTopLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Set active nav item on page load
            setActiveNavItem();
            
            // Set active nav item on scroll
            window.addEventListener('scroll', function() {
                setActiveNavItem();
            });
            
            function setActiveNavItem() {
                const scrollY = window.pageYOffset;
                let activeSection = null;
                
                // Find the current active section
                sections.forEach(section => {
                    const sectionHeight = section.offsetHeight;
                    const sectionTop = section.offsetTop - 100;
                    const sectionId = section.getAttribute('id');
                    
                    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        activeSection = sectionId;
                    }
                });
                
                // Update active navigation link
                if (activeSection) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if(link.getAttribute('href').includes(activeSection)) {
                            link.classList.add('active');
                        }
                    });
                } else if (scrollY < 100) {
                    // If at the top of the page (hero section)
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                }
            }
            
            // Smooth scroll when clicking nav links
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href').split('#')[1];
                    const targetElement = document.getElementById(targetId);
                    
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (navCapsule.classList.contains('active')) {
                            navCapsule.classList.remove('active');
                            menuToggle.classList.remove('open');
                        }
                    }
                });
            });
            
            // Mobile menu functionality
            const menuToggle = document.querySelector('.menu-toggle');
            const navCapsule = document.querySelector('.nav-capsule');
            
            menuToggle.addEventListener('click', function() {
                navCapsule.classList.toggle('active');
                this.classList.toggle('open');
            });
        });
    </script>
</body>
</html> 