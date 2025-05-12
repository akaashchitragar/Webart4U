/**
 * Cookie Consent Manager for Webart4U
 * 
 * Provides GDPR-compliant cookie consent functionality that integrates
 * with Google Analytics 4.
 */

// Cookie Consent Manager
class CookieConsentManager {
  constructor() {
    this.consentKey = 'webart4u_cookie_consent';
    this.analyticsKey = 'webart4u_analytics_enabled';
    this.consentBanner = null;
    this.setupConsentBanner();
    this.checkConsent();
  }

  // Create and add the consent banner
  setupConsentBanner() {
    // Only create if it doesn't already exist
    if (document.getElementById('cookie-consent-banner')) {
      this.consentBanner = document.getElementById('cookie-consent-banner');
      return;
    }

    // Create banner elements
    this.consentBanner = document.createElement('div');
    this.consentBanner.id = 'cookie-consent-banner';
    this.consentBanner.innerHTML = `
      <div class="consent-content">
        <div class="consent-text">
          <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
          By clicking "Accept All", you consent to our use of cookies.</p>
        </div>
        <div class="consent-buttons">
          <button id="consent-accept" class="consent-button accept">Accept All</button>
          <button id="consent-customize" class="consent-button customize">Customize</button>
          <button id="consent-reject" class="consent-button reject">Reject All</button>
        </div>
      </div>
      <div class="consent-settings" style="display: none;">
        <div class="consent-setting">
          <label for="consent-necessary">
            <input type="checkbox" id="consent-necessary" checked disabled>
            <span>Necessary Cookies</span>
          </label>
          <p class="consent-description">Essential for site functionality. Cannot be disabled.</p>
        </div>
        <div class="consent-setting">
          <label for="consent-analytics">
            <input type="checkbox" id="consent-analytics">
            <span>Analytics Cookies</span>
          </label>
          <p class="consent-description">Help us understand how visitors interact with our website.</p>
        </div>
        <div class="consent-action">
          <button id="consent-save" class="consent-button save">Save Preferences</button>
        </div>
      </div>
    `;

    // Add banner styles
    const style = document.createElement('style');
    style.textContent = `
      #cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        left: 20px;
        max-width: 400px;
        background-color: #fff;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 20px;
        z-index: 9999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #333;
      }
      #cookie-consent-banner p {
        margin: 0 0 15px;
      }
      .consent-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .consent-button {
        padding: 8px 16px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-weight: 500;
        font-size: 14px;
        transition: background-color 0.2s;
      }
      .consent-button.accept {
        background-color: #FF4B24;
        color: white;
      }
      .consent-button.customize,
      .consent-button.reject {
        background-color: #f2f2f2;
        color: #333;
      }
      .consent-button.save {
        background-color: #FF4B24;
        color: white;
        margin-top: 10px;
      }
      .consent-setting {
        margin: 15px 0;
      }
      .consent-description {
        font-size: 12px;
        color: #666;
        margin: 5px 0 0 24px;
      }
      .consent-settings {
        border-top: 1px solid #eee;
        margin-top: 15px;
        padding-top: 15px;
      }
      @media (max-width: 480px) {
        #cookie-consent-banner {
          left: 10px;
          right: 10px;
          bottom: 10px;
          max-width: none;
        }
      }
    `;

    // Add to DOM
    document.head.appendChild(style);
    document.body.appendChild(this.consentBanner);

    // Add event listeners
    document.getElementById('consent-accept').addEventListener('click', () => this.acceptAll());
    document.getElementById('consent-reject').addEventListener('click', () => this.rejectAll());
    document.getElementById('consent-customize').addEventListener('click', () => this.customize());
    document.getElementById('consent-save').addEventListener('click', () => this.savePreferences());
  }

  // Check if user has already made consent choice
  checkConsent() {
    if (this.getCookie(this.consentKey)) {
      // Consent already given, hide banner
      this.hideBanner();

      // Apply analytics setting based on saved preference
      const analyticsEnabled = this.getCookie(this.analyticsKey) === 'true';
      this.setAnalytics(analyticsEnabled);
    } else {
      // Show banner to get consent
      this.showBanner();
      
      // Disable analytics until consent is given
      this.setAnalytics(false);
    }
  }

  // Accept all cookies
  acceptAll() {
    this.setCookie(this.consentKey, 'true', 365);
    this.setCookie(this.analyticsKey, 'true', 365);
    this.setAnalytics(true);
    this.hideBanner();
  }

  // Reject all non-essential cookies
  rejectAll() {
    this.setCookie(this.consentKey, 'true', 365);
    this.setCookie(this.analyticsKey, 'false', 365);
    this.setAnalytics(false);
    this.hideBanner();
  }

  // Show customization options
  customize() {
    const content = this.consentBanner.querySelector('.consent-content');
    const settings = this.consentBanner.querySelector('.consent-settings');
    
    // Update checkbox state from saved preference
    const analyticsCheckbox = document.getElementById('consent-analytics');
    analyticsCheckbox.checked = this.getCookie(this.analyticsKey) === 'true';
    
    content.style.display = 'none';
    settings.style.display = 'block';
  }

  // Save custom preferences
  savePreferences() {
    const analyticsEnabled = document.getElementById('consent-analytics').checked;
    
    this.setCookie(this.consentKey, 'true', 365);
    this.setCookie(this.analyticsKey, analyticsEnabled.toString(), 365);
    this.setAnalytics(analyticsEnabled);
    this.hideBanner();
  }

  // Show consent banner
  showBanner() {
    if (this.consentBanner) {
      this.consentBanner.style.display = 'block';
    }
  }

  // Hide consent banner
  hideBanner() {
    if (this.consentBanner) {
      this.consentBanner.style.display = 'none';
    }
  }

  // Enable or disable Google Analytics
  setAnalytics(enable) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': enable ? 'granted' : 'denied'
      });
    }
  }

  // Get cookie value
  getCookie(name) {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return match ? decodeURIComponent(match[3]) : null;
  }

  // Set cookie value
  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/;SameSite=Lax';
  }
}

// Initialize consent manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.consentManager = new CookieConsentManager();
}); 