# 🚀 ScholarVault - GitHub Pages Deployment Guide

## Quick GitHub Pages Setup

### 1. Install GitHub Pages Package
```bash
npm install --save-dev gh-pages
```

### 2. Update package.json
Add these lines to your package.json:
```json
{
  "homepage": "https://yourusername.github.io/scholarvault",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 3. Create Repository on GitHub
1. Go to [GitHub.com](https://github.com)
2. Click "New Repository"
3. Name it: `scholarvault` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have one)

### 4. Connect Local Repository to GitHub
```bash
git remote add origin https://github.com/YOURUSERNAME/scholarvault.git
git branch -M main
git push -u origin main
```

### 5. Deploy to GitHub Pages
```bash
npm run deploy
```

### 6. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch
6. Click **Save**

### 7. Access Your Website
Your website will be available at:
```
https://yourusername.github.io/scholarvault
```

## 🔄 Future Updates

To update your website:
```bash
# Make your changes, then:
git add .
git commit -m "Update website"
git push origin main
npm run deploy
```

## 🎯 Custom Domain (Optional)

To use a custom domain like `scholarvault.com`:
1. Buy a domain from any registrar
2. Create a `CNAME` file in the `public` folder with your domain
3. Configure DNS settings at your domain registrar
4. Enable custom domain in GitHub Pages settings

## 📱 Mobile-Friendly

Your website is already mobile-responsive and will work perfectly on all devices!

## 🔒 HTTPS

GitHub Pages automatically provides HTTPS for your website - it's secure by default!

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or create an issue in this repository.
