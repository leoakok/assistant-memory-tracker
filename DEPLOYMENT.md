# 🚀 Deployment Guide

## GitHub Pages Deployment

This repository is configured for automated deployment to GitHub Pages using GitHub Actions.

### 🌐 Live URL
Once deployed, the application will be available at:
**https://leoakok.github.io/assistant-memory-tracker**

---

## 📋 Prerequisites

Before the first deployment, you need to configure GitHub Pages in the repository settings:

1. Go to repository **Settings** → **Pages** (in the left sidebar)
2. Under **Source**, select:
   - Source: **GitHub Actions**
3. Save the settings

---

## ⚙️ How It Works

### Automatic Deployment
The workflow (`.github/workflows/deploy.yml`) automatically deploys the app when:
- You push changes to the `main` branch
- You manually trigger it from the Actions tab

### Workflow Steps
1. **Build**: 
   - Checks out the code
   - Installs Node.js and dependencies
   - Builds the React app with `npm run build`
   - Uploads the build artifacts

2. **Deploy**:
   - Deploys the built app to GitHub Pages
   - Makes it available at the public URL

---

## 🔧 Configuration Details

### package.json
- **homepage**: Set to `https://leoakok.github.io/assistant-memory-tracker`
  - This ensures all asset paths work correctly on GitHub Pages
- **deploy scripts**: Added for manual deployment if needed

### GitHub Actions Workflow
- **Location**: `.github/workflows/deploy.yml`
- **Triggers**: Push to main branch or manual workflow dispatch
- **Permissions**: Configured to write to GitHub Pages
- **Environment**: Sets PUBLIC_URL for proper asset paths

---

## 🚀 Deployment Instructions

### First Time Setup

1. **Merge the setup branch to main**:
   ```bash
   git checkout main
   git merge setup-github-pages
   git push origin main
   ```

2. **Enable GitHub Pages in Repository Settings**:
   - Go to: https://github.com/leoakok/assistant-memory-tracker/settings/pages
   - Under "Source", select: **GitHub Actions**
   - Click Save

3. **Monitor the deployment**:
   - Go to the Actions tab: https://github.com/leoakok/assistant-memory-tracker/actions
   - Watch the workflow run
   - Once complete, visit: https://leoakok.github.io/assistant-memory-tracker

### Subsequent Deployments

Every push to the `main` branch will automatically trigger a new deployment. No manual steps needed!

### Manual Deployment

If you need to manually trigger a deployment:

1. Go to the Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the branch (usually `main`)
5. Click "Run workflow"

---

## 🛠️ Manual Deployment (Alternative Method)

If you prefer to deploy manually without GitHub Actions:

```bash
# Install dependencies
npm install

# Build the production app
npm run build

# Deploy to GitHub Pages (requires gh-pages package)
npm run deploy
```

---

## 🔍 Troubleshooting

### Deployment fails
- Check the Actions tab for error logs
- Ensure repository settings have GitHub Pages enabled
- Verify the branch name is correct in the workflow file

### Assets not loading (404 errors)
- Verify the `homepage` field in `package.json` matches your GitHub Pages URL
- Check that `PUBLIC_URL` is set correctly in the workflow

### Blank page after deployment
- Check browser console for errors
- Verify all imports use correct paths
- Ensure `BrowserRouter` uses `basename` prop if needed

### Permission errors
- Repository settings → Actions → General
- Ensure "Workflow permissions" is set to "Read and write permissions"

---

## 📊 Monitoring

### View Deployment Status
- **Actions Tab**: https://github.com/leoakok/assistant-memory-tracker/actions
- **Pages Settings**: https://github.com/leoakok/assistant-memory-tracker/settings/pages

### Build Time
- Typical build time: 2-3 minutes
- Check the workflow run for detailed timing

---

## 🌟 Additional Deployment Options

If you want to deploy to other platforms in the future:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Docker
Create a `Dockerfile` and `docker-compose.yml` for containerized deployment.

---

## 📝 Notes

- **Local Storage**: The app uses localStorage, so data is stored in the user's browser
- **No Backend**: This is a static site with no server-side components
- **Environment**: Production build optimizes the app for performance
- **HTTPS**: GitHub Pages serves content over HTTPS automatically

---

## ✅ Checklist

Before your first deployment:
- [ ] Merge setup-github-pages branch to main
- [ ] Enable GitHub Pages in repository settings
- [ ] Set source to "GitHub Actions"
- [ ] Wait for the first workflow to complete
- [ ] Visit the live URL to verify deployment

---

**Last Updated**: February 8, 2026
**Deployment Method**: GitHub Actions → GitHub Pages
**Build Tool**: Create React App
