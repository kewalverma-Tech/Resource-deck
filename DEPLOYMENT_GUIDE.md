# 🚀 ScholarVault Deployment Guide

This guide will help you deploy ScholarVault to GitHub Pages and other platforms.

## 📋 Prerequisites

- Node.js 16+ installed
- Git installed
- GitHub account
- Repository with source code

## 🌐 GitHub Pages Deployment

### Method 1: Automatic Deployment (Recommended)

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts to your `package.json`:
   ```json
   {
     "homepage": "https://kewalverma-tech.github.io/scholarvault",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

### Method 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Create gh-pages branch:**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r build/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to Pages section
   - Select `gh-pages` branch
   - Save

## ⚙️ Configuration for GitHub Pages

### Router Configuration
Make sure your `App.js` has the correct basename:

```javascript
<Router basename="/scholarvault">
  {/* Your routes */}
</Router>
```

### 404 Page Setup
Ensure you have a `public/404.html` file for client-side routing:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>ScholarVault</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + 
        '/?/' + 
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') + 
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

## 🔧 Other Deployment Platforms

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy

### Vercel
1. Import your GitHub repository
2. Framework preset: Create React App
3. Deploy

### Heroku
1. Create a `static.json` file:
   ```json
   {
     "root": "build/",
     "routes": {
       "/**": "index.html"
     }
   }
   ```

2. Add buildpack:
   ```bash
   heroku buildpacks:add heroku/nodejs
   heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static
   ```

## 🐛 Troubleshooting

### Common Issues

1. **Blank page after deployment:**
   - Check if basename in Router matches repository name
   - Verify all assets are loading correctly

2. **404 errors on page refresh:**
   - Ensure 404.html is configured properly
   - Check that client-side routing is handled

3. **Images not loading:**
   - Use relative paths for images
   - Check if images are in the public folder

4. **Build fails:**
   - Check for any console errors
   - Ensure all dependencies are installed
   - Verify Node.js version compatibility

### Debug Commands

```bash
# Check build locally
npm run build
npx serve -s build

# Check for broken links
npm install -g broken-link-checker
blc http://localhost:3000 -ro

# Analyze bundle size
npm install -g webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js
```

## 📊 Performance Optimization

### Before Deployment

1. **Optimize images:**
   - Use WebP format when possible
   - Compress images
   - Implement lazy loading

2. **Code splitting:**
   ```javascript
   const LazyComponent = React.lazy(() => import('./Component'));
   ```

3. **Bundle analysis:**
   ```bash
   npm run build
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

## 🔐 Security Considerations

1. **Environment variables:**
   - Use `.env` files for sensitive data
   - Never commit API keys to repository

2. **Content Security Policy:**
   - Add CSP headers for production
   - Validate all external links

3. **HTTPS:**
   - Ensure all external resources use HTTPS
   - GitHub Pages automatically provides HTTPS

## 📝 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All navigation links work
- [ ] Search functionality works
- [ ] Mobile responsiveness verified
- [ ] All external links are functional
- [ ] Page load speed is acceptable
- [ ] SEO meta tags are present
- [ ] Analytics tracking (if applicable)

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

---

**🎉 Congratulations! Your ScholarVault is now live!**

For support, create an issue in the GitHub repository.