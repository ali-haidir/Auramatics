# GitHub Pages Deployment Guide for auramatics.tech

## Issue Resolution

The 404 errors you were experiencing were caused by:

1. **Mixed build output**: Your previous build contained both static export files and development server files
2. **Incorrect Next.js configuration**: The conditional static export wasn't working properly
3. **Service worker conflicts**: Old service worker files were trying to fetch non-existent resources

## Fixed Configuration

The `next.config.ts` has been updated to:

- Always use static export (`output: "export"`)
- Optimized for GitHub Pages with custom domain
- No basePath/assetPrefix needed since you're using a custom domain

## GitHub Pages Deployment Steps

### 1. Build the Project

```bash
npm run build
```

### 2. Deploy to GitHub Pages

#### Option A: Manual Deployment

1. **Copy build files**: Copy all contents from the `out/` directory
2. **Upload to GitHub**: Upload to your repository's `gh-pages` branch or `docs/` folder
3. **Maintain structure**: Keep the `_next/` folder and all file structure intact

#### Option B: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### 3. GitHub Pages Configuration

1. **Repository Settings**: Go to Settings → Pages
2. **Source**: Select "Deploy from a branch" or "GitHub Actions"
3. **Branch**: Choose `gh-pages` branch or your main branch
4. **Custom Domain**: Set `auramatics.tech` as your custom domain
5. **Enforce HTTPS**: Enable this option

### 4. Domain Configuration

1. **DNS Settings**: Point your domain to GitHub Pages:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
2. **CNAME File**: Create `CNAME` file in your repository root with content: `auramatics.tech`

## Verification

After deployment, check:

1. Main page loads: https://auramatics.tech/
2. About page: https://auramatics.tech/aboutus/
3. Contact page: https://auramatics.tech/contact/
4. No 404 errors in browser console
5. Images and assets load properly

## Troubleshooting

If you still see 404 errors:

1. Clear browser cache
2. Check GitHub Pages build logs
3. Verify all files are in the correct branch/folder
4. Check DNS propagation (can take up to 24 hours)
5. Ensure CNAME file is in repository root

## Build Output Structure

```
out/
├── _next/           # Next.js static assets
├── aboutus/         # About page
├── contact/         # Contact page
├── index.html       # Home page
├── 404.html         # Error page
└── favicon.*        # Favicon files
```

## Quick Commands

```bash
# Build for production
npm run build

# Check build output
ls -la out/

# Deploy manually (if using gh-pages branch)
git add out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```
