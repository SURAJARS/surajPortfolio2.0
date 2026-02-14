# Deployment Guide - Suraj ARS Portfolio

## Quick Deployment to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications. Here's how:

### Step 1: Prepare Your Repository

```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Select the portfolio project
6. Configure settings (defaults are usually fine)
7. Click "Deploy"

### Step 3: Configure Environment (if needed)

If you add environment variables, set them in Vercel dashboard:

- Go to Settings → Environment Variables
- Add any API keys or configuration

## Domain Setup

### Custom Domain with Vercel

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for verification (usually 24-48 hours)

### Popular Domain Registrars

- Namecheap
- GoDaddy
- Google Domains
- Hostinger

## Local Production Build

To test the production build locally before deploying:

```bash
npm run build
npm start
```

Then visit `http://localhost:3000`

## Other Deployment Options

### Netlify

1. Go to [https://netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy

### Self-Hosted (VPS/Dedicated Server)

#### Prerequisites

- Node.js 18+
- npm or yarn
- PM2 (process manager)

#### Steps

```bash
# Clone repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Build
npm run build

# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name portfolio -- start

# Monitor
pm2 monit

# Setup auto-restart on reboot
pm2 startup
pm2 save
```

## Performance Optimization

### Image Optimization

- Already optimized with Next.js Image component
- Consider compressing images further:
  ```bash
  npm install imagemin-cli imagemin-mozjpeg imagemin-pngquant
  ```

### Analytics

Add Google Analytics:

1. Get your measurement ID from Google Analytics
2. Install package:
   ```bash
   npm install @next/third-parties
   ```
3. Update `src/app/layout.tsx` with analytics script

### CDN Configuration

Vercel automatically uses Edge Network. For self-hosted:

- Use Cloudflare (free tier available)
- Configure cache headers in `next.config.ts`

## Performance Monitoring

### Lighthouse Audit

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Target scores: 90+

### Core Web Vitals

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## Backup and Maintenance

### GitHub Backup

- Repository automatically syncs to GitHub
- Enable branch protection for `main`
- Set up automatic deployments

### Regular Updates

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update major versions (careful!)
npm install package-name@latest
```

## Troubleshooting

### Build Fails

1. Check Node.js version: `node -v` (should be 18+)
2. Clear cache: `rm -rf .next node_modules`
3. Reinstall: `npm install`
4. Build again: `npm run build`

### Audio File Not Loading

- Ensure `ambient.mp3` is in `public/music/`
- Check file permissions
- Use absolute path starting with `/`

### Styling Issues After Deploy

- Clear browser cache
- Check CSS build output
- Verify Tailwind config in `postcss.config.mjs`

## Security Checklist

- [ ] Remove sensitive information from `.env`
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Keep dependencies updated
- [ ] Review ESLint warnings/errors
- [ ] Test form submissions (validate inputs server-side)

## Performance Monitoring Tools

- **Google Analytics** - Track visitor behavior
- **Sentry** - Error tracking
- **LogRocket** - Session replay
- **PageSpeed Insights** - Performance metrics

## Maintenance Tasks (Monthly)

1. Update dependencies: `npm update`
2. Run security audit: `npm audit`
3. Check Lighthouse scores
4. Monitor error logs (if using tracking service)
5. Test all forms and interactions
6. Backup repository

## FAQ

**Q: How do I update content?**
A: Edit files in `src/components/sections/` and push to GitHub. Vercel auto-redeploys.

**Q: Can I add more projects?**
A: Yes! Edit `src/components/sections/Projects.tsx` and add entries to the `projects` array.

**Q: How do I change colors?**
A: Edit CSS variables in `src/app/globals.css` `:root` section.

**Q: Is it SEO optimized?**
A: Yes! Next.js provides built-in SEO support. Update metadata in `src/app/layout.tsx`.

**Q: How do I add analytics?**
A: Use Google Analytics or Vercel Analytics (built-in dashboard).

---

For more help, refer to:

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Performance Guide](https://nextjs.org/learn/foundations/how-nextjs-works/development-and-production)
