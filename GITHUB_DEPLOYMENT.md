# GitHub Deployment Guide

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → Select **New repository**
3. Fill in the details:
   - **Repository name**: `portfolio` (or any name you prefer)
   - **Description**: `Premium 3D Portfolio with React Three Fiber`
   - **Public**: Yes (to enable GitHub Pages)
   - **Do NOT initialize** with README, .gitignore, or license (we already have them)
4. Click **Create repository**

## Step 2: Add Remote and Push to GitHub

Copy and paste these commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):

```bash
cd c:\Users\"SURAJ ARS"\Desktop\portfolio

git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - Leave Deploy from a branch disabled
4. Save

## Step 4: Deployment

The GitHub Actions workflow will automatically:
- Build your Next.js project
- Export static files
- Deploy to GitHub Pages when you push to main/master

**Your site will be live at:** `https://YOUR_USERNAME.github.io/portfolio`

## Step 5: Update Portfolio URL (Optional)

If you have a custom domain:
1. Edit `.github/workflows/deploy.yml`
2. Replace `suraj-portfolio.tech` with your domain
3. Push changes

## Troubleshooting

### Build fails?
- Check the "Actions" tab in your repository for error logs
- Ensure all environment variables are set correctly

### Site not showing?
- Wait 2-3 minutes after first push
- Check GitHub Pages settings
- Verify deployment in Actions tab

### Want to use your own domain?
1. Add CNAME record in your domain provider pointing to `YOUR_USERNAME.github.io`
2. Update the CNAME in `.github/workflows/deploy.yml`
3. Push changes

## For Future Updates

Simply push your changes:
```bash
git add .
git commit -m "Your message here"
git push
```

The workflow will automatically build and deploy!

---

**Need help?** Check GitHub Pages documentation: https://docs.github.com/en/pages
