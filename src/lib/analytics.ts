// Google Analytics 4 (GA4) implementation
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Initialize GA4
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) return;
  
  // Only initialize in production or if explicitly enabled in development
  if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PUBLIC_ENABLE_ANALYTICS) return;
  
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: true,
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  });
};

// Track page views
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Enhanced ecommerce tracking
export const ecommerceEvent = {
  // View item list
  viewItemList: (items: any[], list_name: string) => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;
    
    window.gtag('event', 'view_item_list', {
      items: items,
      item_list_name: list_name,
    });
  },
  
  // View item details
  viewItem: (items: any[]) => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;
    
    window.gtag('event', 'view_item', {
      items: items,
    });
  },
  
  // Add to cart
  addToCart: (items: any[], value: number, currency: string = 'USD') => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;
    
    window.gtag('event', 'add_to_cart', {
      items: items,
      value: value,
      currency: currency,
    });
  },
  
  // Begin checkout
  beginCheckout: (items: any[], value: number, currency: string = 'USD') => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;
    
    window.gtag('event', 'begin_checkout', {
      items: items,
      value: value,
      currency: currency,
    });
  },
  
  // Purchase
  purchase: (transaction_id: string, items: any[], value: number, currency: string = 'USD') => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;
    
    window.gtag('event', 'purchase', {
      transaction_id: transaction_id,
      items: items,
      value: value,
      currency: currency,
    });
  },
};

// User engagement tracking
export const userEngagement = {
  // Track form submissions
  formSubmit: (form_id: string, form_name: string) => {
    event({
      action: 'form_submit',
      category: 'engagement',
      label: `${form_name} (${form_id})`,
    });
  },
  
  // Track file downloads
  fileDownload: (file_name: string, file_extension: string) => {
    event({
      action: 'file_download',
      category: 'engagement',
      label: `${file_name}.${file_extension}`,
    });
  },
  
  // Track outbound links
  outboundLink: (link_url: string, link_text: string) => {
    event({
      action: 'outbound_link',
      category: 'engagement',
      label: `${link_text} (${link_url})`,
    });
  },
  
  // Track scroll depth
  scrollDepth: (depth: number) => {
    event({
      action: 'scroll_depth',
      category: 'engagement',
      label: `${depth}%`,
      value: depth,
    });
  },
  
  // Track video engagement
  videoEngagement: (video_title: string, action: 'play' | 'pause' | 'complete', percent_watched?: number) => {
    event({
      action: `video_${action}`,
      category: 'engagement',
      label: video_title,
      value: percent_watched,
    });
  },
};

// Declare global window interface
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
} 