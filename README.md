
# Vercel Proxy for Yahoo Finance (one-file serverless)

This repository contains a minimal Vercel serverless function that proxies requests to arbitrary URLs and adds CORS headers.
It's intended to be used with the browser extension I provided (set the extension's *Proxy prefix* to the deployed function URL).

## Files
- `api/proxy.js` - Vercel serverless function. Use like: `https://<your-deploy>.vercel.app/api/proxy?url=<full_target_url>`
- `package.json` - minimal (no external deps).

## One-click deployment (recommended path)
1. Create a GitHub repository and push these files.
2. Go to https://vercel.com and sign in (GitHub recommended).
3. Click **New Project** → **Import Git Repository** → choose the repo you just pushed.
4. Accept the defaults and click **Deploy**. After deployment you'll get a URL like `https://yourname.vercel.app`.

## Quick test after deployment
Open in browser:
```
https://yourname.vercel.app/api/proxy?url=https://query1.finance.yahoo.com/v7/finance/quote?symbols=AAPL
```
You should see a JSON response from Yahoo. If it shows JSON, copy the prefix below into the extension's *Proxy prefix* box:
```
https://yourname.vercel.app/api/proxy?url=
```

## Notes & tips
- This proxy simply forwards GET requests and returns the response body with CORS headers. It does not cache.
- Vercel's free tier is typically sufficient for light personal use. For heavier usage, consider rate limits and costs.
- Do not expose this proxy publicly for heavy scraping without considering terms of service.
