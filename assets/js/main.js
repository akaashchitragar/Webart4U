// Preloader
document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader when page is fully loaded
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            // Remove preloader from DOM after animation completes
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navCapsule = document.querySelector('.nav-capsule');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navCapsule.classList.toggle('active');
            
            // Add overflow hidden to body when menu is open
            if (navCapsule.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navCapsule && navCapsule.classList.contains('active') && 
            !e.target.closest('.floating-nav') && !e.target.closest('.menu-toggle')) {
            navCapsule.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navCapsule.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Set active nav item based on current page
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = getLinkPage(link.getAttribute('href'));
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Dynamic Island interaction
    const capsule = document.querySelector('.nav-capsule');
    
    // Expand when mouse enters
    capsule.addEventListener('mouseenter', function() {
        capsule.classList.add('expanded');
    });
    
    // Contract when mouse leaves
    capsule.addEventListener('mouseleave', function() {
        capsule.classList.remove('expanded');
    });
    
    // Toggle dark/light theme
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (document.body.classList.contains('dark-theme')) {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    
    // Helper function to get current page
    function getCurrentPage() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('page') || 'home';
    }
    
    // Helper function to get page from link
    function getLinkPage(href) {
        if (!href.includes('?')) return 'home';
        const urlParams = new URLSearchParams(href.split('?')[1]);
        return urlParams.get('page') || 'home';
    }
    
    // Enhanced Hero Section Animations
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Animate hero badge with slight bounce effect
        const heroBadge = document.querySelector('.hero-badge');
        if (heroBadge) {
            setTimeout(() => {
                heroBadge.style.opacity = '0';
                heroBadge.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    heroBadge.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    heroBadge.style.opacity = '1';
                    heroBadge.style.transform = 'translateY(0)';
                }, 200);
            }, 500);
        }
        
        // Add mouse tracking effect to floating elements
        const floatingElements = document.querySelectorAll('.element');
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            floatingElements.forEach((element, index) => {
                const depth = (index + 1) * 5; // Reduced depth for subtler effect
                const moveX = (mouseX - 0.5) * depth;
                const moveY = (mouseY - 0.5) * depth;
                
                element.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
        
        // Device glow pulse animation
        const deviceGlow = document.querySelector('.device-glow');
        if (deviceGlow) {
            // Set a static opacity instead of the blinking animation
            deviceGlow.style.opacity = '0.6';
            deviceGlow.style.transition = 'opacity 0.5s ease';
        }
        
        // Enhance scroll indicator with mouse animation
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            // Add hover effect to make it more prominent
            scrollIndicator.addEventListener('mouseenter', () => {
                scrollIndicator.style.opacity = '1';
            });
            
            scrollIndicator.addEventListener('mouseleave', () => {
                scrollIndicator.style.opacity = '0.7';
            });
            
            // Hide on scroll
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 100) {
                    scrollIndicator.style.opacity = '0';
                } else {
                    scrollIndicator.style.opacity = '0.7';
                }
            });
        }
        
        // Stats counter animation
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const originalText = stat.textContent;
            const hasPlus = originalText.includes('+');
            const targetValue = parseInt(originalText);
            let currentValue = 0;
            const duration = 2000; // ms
            const increment = targetValue / (duration / 16);
            
            stat.textContent = '0';
            
            const updateCounter = () => {
                currentValue += increment;
                if (currentValue < targetValue) {
                    stat.textContent = Math.ceil(currentValue) + (hasPlus ? '+' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = targetValue + (hasPlus ? '+' : '');
                }
            };
            
            // Start counter when element is in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(updateCounter);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(stat);
        });
    }
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate the final scroll position
                const scrollPosition = targetElement.offsetTop - 50; // Add a small offset
                
                // Smooth scroll to the target position
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Animate on Scroll
document.addEventListener('DOMContentLoaded', function() {
    // Check if the element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    // Elements to animate
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Initial check
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animated');
        }
    });
    
    // Check on scroll
    window.addEventListener('scroll', function() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    });
});

// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Reset previous error messages
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            document.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));
            
            // Name validation
            if (!nameInput.value.trim()) {
                isValid = false;
                showError(nameInput, 'Please enter your name');
            }
            
            // Email validation
            if (!emailInput.value.trim()) {
                isValid = false;
                showError(emailInput, 'Please enter your email');
            } else if (!isValidEmail(emailInput.value)) {
                isValid = false;
                showError(emailInput, 'Please enter a valid email address');
            }
            
            // Message validation
            if (!messageInput.value.trim()) {
                isValid = false;
                showError(messageInput, 'Please enter your message');
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Helper function to show error message
    function showError(inputElement, message) {
        inputElement.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        inputElement.parentNode.appendChild(errorElement);
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

// Fix height on mobile browsers (100vh issue)
document.addEventListener('DOMContentLoaded', function() {
    // Set the --vh custom property
    function setVhProperty() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Initial set
    setVhProperty();
    
    // Update on resize and orientation change
    window.addEventListener('resize', setVhProperty);
    window.addEventListener('orientationchange', setVhProperty);
}); 