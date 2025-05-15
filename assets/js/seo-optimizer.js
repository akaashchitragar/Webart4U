/**
 * SEO and Performance Optimizer Script
 * Enhances website for better search engine ranking and user experience
 */

document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images for better performance
    lazyLoadImages();
    
    // Add alt text to images that may be missing it
    ensureImageAlt();
    
    // Add title attributes to links that don't have them
    enhanceLinks();
    
    // Fix anchor links without proper attributes
    fixAnchorLinks();
    
    // Track outbound links for analytics
    trackOutboundLinks();
    
    // Preload critical resources
    preloadCriticalResources();
});

/**
 * Lazy load images for better page speed
 */
function lazyLoadImages() {
    // Only run if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    if (image.dataset.src) {
                        image.src = image.dataset.src;
                        delete image.dataset.src;
                    }
                    observer.unobserve(image);
                }
            });
        });

        // Target all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

/**
 * Ensure all images have alt text for accessibility and SEO
 */
function ensureImageAlt() {
    document.querySelectorAll('img:not([alt])').forEach(img => {
        // Extract filename as fallback alt text
        let src = img.src || '';
        let filename = src.split('/').pop().split('?')[0];
        let altText = filename.split('.')[0].replace(/[-_]/g, ' ');
        img.alt = altText;
    });
}

/**
 * Enhance links for better SEO
 */
function enhanceLinks() {
    document.querySelectorAll('a:not([title])').forEach(link => {
        // Add title attribute to links that don't have one
        if (link.textContent && link.textContent.trim() !== '') {
            link.title = link.textContent.trim();
        }
        
        // Add rel attributes to external links
        if (link.hostname !== window.location.hostname && !link.rel) {
            link.rel = 'noopener noreferrer';
        }
    });
}

/**
 * Fix anchor links for better user experience
 */
function fixAnchorLinks() {
    document.querySelectorAll('a[href^="#"]:not([aria-label])').forEach(anchor => {
        // Add aria-label to anchor links
        const target = anchor.getAttribute('href').substring(1);
        if (target) {
            const targetElement = document.getElementById(target);
            if (targetElement) {
                const targetText = targetElement.textContent || target;
                anchor.setAttribute('aria-label', 'Jump to ' + targetText);
            }
        }
    });
}

/**
 * Track outbound links for analytics
 */
function trackOutboundLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.addEventListener('click', function(e) {
                // If gtag is available
                if (typeof gtag === 'function') {
                    const linkUrl = this.href;
                    
                    gtag('event', 'click', {
                        'event_category': 'outbound',
                        'event_label': linkUrl,
                        'transport_type': 'beacon'
                    });
                }
            });
        }
    });
}

/**
 * Preload critical resources for better performance
 */
function preloadCriticalResources() {
    // Define critical resources to preload
    const criticalResources = [
        { type: 'style', href: '/assets/css/style.css' },
        { type: 'style', href: '/assets/css/responsive.css' },
        { type: 'image', href: '/assets/images/logo.png' }
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = resource.type === 'image' ? 'preload' : 'prefetch';
        link.href = resource.href;
        if (resource.type === 'image') {
            link.as = 'image';
        }
        document.head.appendChild(link);
    });
} 