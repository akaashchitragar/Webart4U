# Deploying to MilesWeb cPanel with Node.js

## Prerequisites
1. A MilesWeb hosting account with cPanel access
2. Node.js enabled on your cPanel account
3. SSH access to your hosting account (recommended)

## Deployment Steps

### 1. Set up Node.js App in cPanel
1. Log in to your cPanel account
2. Navigate to the "Setup Node.js App" section
3. Click "Create Application"
4. Fill in the following details:
   - Node.js version: Select the latest available version (ensure it's compatible with your app)
   - Application mode: Production
   - Application root: The directory where your app will be stored (e.g., `webart4u`)
   - Application URL: The URL path for your application (e.g., `/app`)
   - Application startup file: `app.js`
   - Environment variables:
     - `NODE_ENV`: `production`
     - `PORT`: Set to the port provided by cPanel (usually displayed during setup)
5. Click "Create"

### 2. Required Environment Variables
You need to set up the following environment variables in your cPanel Node.js application settings:

#### Google Analytics
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics 4 measurement ID (e.g., G-P5LVN1NKW5)
- `NEXT_PUBLIC_ENABLE_ANALYTICS`: Set to "true" if you want analytics enabled

#### Cal.com Integration
- `NEXT_PUBLIC_CALCOM_API_KEY`: Your Cal.com API key (currently hardcoded as "cal_live_fa8ee1845d418d75c1be2b65de5608b9")

#### SEO & Verification
- `NEXT_PUBLIC_GOOGLE_VERIFICATION`: Google Search Console verification code
- `NEXT_PUBLIC_BING_VERIFICATION`: Bing Webmaster Tools verification code
- `NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION`: Facebook domain verification code
- `NEXT_PUBLIC_PINTEREST_VERIFICATION`: Pinterest verification code (if used)

To set these variables:
1. In cPanel, go to the Node.js application you created
2. Scroll to the "Environment Variables" section
3. Add each variable with its corresponding value
4. Click "Update" to save the changes

### 3. Upload Your Application
#### Option 1: Using Git (Recommended)
1. Set up a Git repository for your application if you haven't already
2. In cPanel, go to "Git" section
3. Create a new Git repository
4. Clone your application repository
5. Set up a deployment script using the provided `.cpanel.yml` file

#### Option 2: Manual Upload
1. Build your application locally:
   ```bash
   npm run build
   ```
2. Use FTP or cPanel File Manager to upload your application files to the directory specified in step 4 of the previous section

### 4. Install Dependencies and Start Application
1. Connect to your server via SSH
2. Navigate to your application directory
3. Run:
   ```bash
   npm install --production
   ```
4. Restart your Node.js application from cPanel

### 5. Test Your Application
Visit your domain followed by the application URL path (e.g., `https://yourdomain.com/app`) to ensure your application is running correctly.

## Troubleshooting
- Check the error logs in cPanel
- Ensure all environment variables are correctly set
- Verify that your domain DNS is properly configured
- Check that the Node.js version in cPanel is compatible with your application 