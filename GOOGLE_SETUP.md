# Google Analytics & Search Console Setup

## Google Analytics 4 Setup

1. **Create GA4 Property**
   - Go to https://analytics.google.com
   - Click "Admin" (gear icon)
   - Click "Create Property"
   - Enter property name: "KidGuard AI"
   - Select timezone and currency
   - Click "Create"

2. **Get Measurement ID**
   - In your new property, go to "Data Streams"
   - Click "Add stream" → "Web"
   - Enter website URL: https://kidguardai.com
   - Copy the Measurement ID (format: G-XXXXXXXXXX)

3. **Add to Environment**
   ```bash
   # Create .env.local file
   echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX" > .env.local
   ```

4. **Verify Installation**
   - Run the dev server: `npm run dev`
   - Open http://localhost:3000
   - In GA4, go to "Realtime" → Should see your visit within 30 seconds

## Google Search Console Setup

1. **Add Property**
   - Go to https://search.google.com/search-console
   - Click "Add property"
   - Select "URL prefix" and enter: https://kidguardai.com
   - Click "Continue"

2. **Verify Ownership** (Multiple options available)

   **Option A: HTML file upload (recommended)**
   - Download the verification file from Google
   - Place it in `/public/` directory
   - It will be accessible at https://kidguardai.com/google[...].html
   - Click "Verify"

   **Option B: Meta tag (already prepared)**
   - Copy the verification code from Google Search Console
   - Update `/app/layout.tsx` line 72:
     ```typescript
     verification: {
       google: "your-google-verification-code-here",
     },
     ```
   - Deploy the site
   - Click "Verify" in Search Console

3. **Submit Sitemap**
   - After verification, go to "Sitemaps" in the left menu
   - Enter sitemap URL: https://kidguardai.com/sitemap.xml
   - Click "Submit"

4. **What to Expect**
   - Google will start crawling within 24-48 hours
   - Initial indexing takes 1-2 weeks
   - Monitor "Coverage" and "Performance" sections for SEO insights

## Important Notes

- ✅ Analytics is already integrated in code (just needs Measurement ID)
- ✅ Sitemap is already created and accessible at /sitemap.xml
- ✅ Robots.txt is already configured at /robots.txt
- ✅ Meta verification placeholder is ready in layout.tsx
- 🔄 Need to add actual GA Measurement ID to .env.local
- 🔄 Need to verify domain in Search Console and submit sitemap

## Testing

```bash
# Check sitemap locally
curl http://localhost:3000/sitemap.xml

# Check robots.txt locally
curl http://localhost:3000/robots.txt

# Check if GA is loading (after adding Measurement ID)
# Open browser console → Network tab → Filter "gtag" → Should see requests
```
