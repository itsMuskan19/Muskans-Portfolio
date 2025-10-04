# 🚀 GitHub Deployment Instructions

Follow these step-by-step instructions to upload your portfolio project to GitHub and deploy it.

## Prerequisites

1. **Git installed** on your computer
2. **GitHub account** created
3. **Repository created** at: https://github.com/priyu9-star/portfolio-project-new

## Step 1: Initialize Git Repository

Open your terminal/command prompt in the project folder and run:

```bash
# Navigate to your project directory
cd "d:\Portfolio-Muskan (1)\Portfolio-Muskan"

# Initialize git repository (if not already done)
git init

# Add all files to staging
git add .

# Make first commit
git commit -m "Initial commit: Complete portfolio website with responsive design"
```

## Step 2: Connect to GitHub Repository

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/priyu9-star/portfolio-project-new.git

# Set the main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Verify Upload

1. Go to your GitHub repository: https://github.com/priyu9-star/portfolio-project-new
2. Check that all files are uploaded including:
   - ✅ `src/App.jsx`
   - ✅ `public/assets/` folder with all images
   - ✅ `package.json`
   - ✅ `README.md`
   - ✅ Configuration files

## Step 4: Enable GitHub Pages (Automatic Deployment)

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

## Step 5: Access Your Live Website

After deployment completes (usually 2-5 minutes):
- Your website will be available at: `https://priyu9-star.github.io/portfolio-project-new/`

## Step 6: Future Updates

When you make changes to your portfolio:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Update: Describe your changes here"

# Push to GitHub
git push origin main
```

The GitHub Actions workflow will automatically rebuild and deploy your changes.

## Troubleshooting

### If images don't load:
1. Ensure all images are in `public/assets/` folder
2. Check image paths start with `/assets/` in your code
3. Verify image file names match exactly (case-sensitive)

### If deployment fails:
1. Check the **Actions** tab in your GitHub repository
2. Look for error messages in the workflow logs
3. Ensure `package.json` has correct scripts

### If site doesn't load:
1. Wait 5-10 minutes for GitHub Pages to propagate
2. Check repository **Settings > Pages** for the correct URL
3. Clear your browser cache

## Local Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Support

If you encounter any issues:
1. Check the [GitHub repository](https://github.com/priyu9-star/portfolio-project-new) for updates
2. Review the error messages in GitHub Actions
3. Ensure all prerequisites are met

Your portfolio is now live and automatically deployable! 🎉