import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

// Environment variables:
// NODE_ENV - Set to 'production' in production environment
// HOST - The hostname to listen on (defaults to localhost)
// PORT - The port to listen on (defaults to 8080 or what cPanel provides)
// 
// Additional environment variables used in the app:
// NEXT_PUBLIC_GA_MEASUREMENT_ID - Google Analytics 4 measurement ID
// NEXT_PUBLIC_ENABLE_ANALYTICS - Enable analytics in development
// NEXT_PUBLIC_CALCOM_API_KEY - Cal.com API key
// NEXT_PUBLIC_GOOGLE_VERIFICATION - Google Search Console verification
// NEXT_PUBLIC_BING_VERIFICATION - Bing Webmaster Tools verification
// NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION - Facebook domain verification
// NEXT_PUBLIC_PINTEREST_VERIFICATION - Pinterest verification

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

// Create the Next.js app
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL
      const parsedUrl = parse(req.url, true);
      
      // Let Next.js handle the request
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
}); 