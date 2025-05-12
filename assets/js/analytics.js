/**
 * Google Analytics 4 Enhanced Configuration
 * 
 * This file contains the enhanced GA4 setup with additional custom event tracking
 * for better insights into user behavior on the Webart4U website.
 */

// GA4 Measurement ID
const GA4_MEASUREMENT_ID = 'G-P5LVN1NKW5';

// Initialize dataLayer
window.dataLayer = window.dataLayer || [];

// Basic gtag function
function gtag() {
  dataLayer.push(arguments);
}

// Initialize GA4 with consent mode
gtag('js', new Date());
gtag('consent', 'default', {
  'analytics_storage': 'denied'
});
gtag('config', GA4_MEASUREMENT_ID, {
  'page_path': window.location.pathname,
  'cookie_flags': 'samesite=none;secure',
  'anonymize_ip': true, // GDPR compliance enhancement
  'send_page_view': false // We'll send it manually after consent check
});

// Send pageview only when analytics storage is granted
function sendPageviewIfConsented() {
  const analyticsEnabled = document.cookie.indexOf('webart4u_analytics_enabled=true') !== -1;
  if (analyticsEnabled) {
    gtag('event', 'page_view', {
      'page_title': document.title,
      'page_location': window.location.href,
      'page_path': window.location.pathname
    });
  }
}

// Wait for consent to be established (either from cookie or user action)
document.addEventListener('DOMContentLoaded', function() {
  // Check if consent already exists
  const consentGiven = document.cookie.indexOf('webart4u_cookie_consent=true') !== -1;
  if (consentGiven) {
    sendPageviewIfConsented();
  } else {
    // If consent banner exists, listen for consent events
    const consentObserver = new MutationObserver(function(mutations) {
      if (document.cookie.indexOf('webart4u_cookie_consent=true') !== -1) {
        sendPageviewIfConsented();
        consentObserver.disconnect(); // Stop observing once consent is given
      }
    });
    
    // Start observing cookie consent changes
    consentObserver.observe(document.body, { 
      childList: true,
      subtree: true
    });
  }
});

/**
 * Enhanced event tracking functions
 */

// Track navigation clicks
function trackNavigation(navItem) {
  gtag('event', 'navigation_click', {
    'navigation_item': navItem
  });
}

// Track form submissions
function trackFormSubmission(formId, success = true) {
  gtag('event', 'form_submission', {
    'form_id': formId,
    'success': success
  });
}

// Track scroll depth
function setupScrollDepthTracking() {
  let scrollMarks = [25, 50, 75, 90];
  let marks = {};
  
  scrollMarks.forEach(mark => {
    marks[mark] = false;
  });
  
  window.addEventListener('scroll', () => {
    const scrollPercent = 100 * window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    scrollMarks.forEach(mark => {
      if (scrollPercent >= mark && !marks[mark]) {
        marks[mark] = true;
        gtag('event', 'scroll_depth', {
          'depth': mark + '%'
        });
      }
    });
  });
}

// Track outbound link clicks
function setupOutboundLinkTracking() {
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    
    if (link && link.hostname !== window.location.hostname) {
      gtag('event', 'outbound_link', {
        'url': link.href
      });
    }
  });
}

// Track file downloads
function setupDownloadTracking() {
  const fileTypes = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.zip', '.rar'];
  
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    
    if (link && link.href) {
      const extension = link.href.split('.').pop().toLowerCase();
      if (fileTypes.includes('.' + extension)) {
        gtag('event', 'file_download', {
          'file_type': extension,
          'file_name': link.href.split('/').pop()
        });
      }
    }
  });
}

// Track page load time
function trackPageLoadTime() {
  window.addEventListener('load', () => {
    // Use Performance API to calculate load time
    if (window.performance) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      
      gtag('event', 'page_performance', {
        'page_load_time': pageLoadTime,
        'page': window.location.pathname
      });
    }
  });
}

// Initialize all enhanced tracking
document.addEventListener('DOMContentLoaded', function() {
  const analyticsEnabled = document.cookie.indexOf('webart4u_analytics_enabled=true') !== -1;
  
  // Only set up enhanced tracking if consent is given
  if (analyticsEnabled) {
    // Set up enhanced tracking
    setupScrollDepthTracking();
    setupOutboundLinkTracking();
    setupDownloadTracking();
    trackPageLoadTime();
    
    // Add click tracking to navigation elements
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        const navItem = this.querySelector('.tooltip')?.textContent || this.getAttribute('href');
        trackNavigation(navItem);
      });
    });
    
    // Add form submission tracking to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const formId = this.id || this.getAttribute('name') || 'unknown_form';
        trackFormSubmission(formId);
      });
    });
  }
}); 