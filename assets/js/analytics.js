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

// Initialize GA4
gtag('js', new Date());
gtag('config', GA4_MEASUREMENT_ID, {
  'page_path': window.location.pathname,
  'cookie_flags': 'samesite=none;secure',
  'anonymize_ip': true
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
}); 