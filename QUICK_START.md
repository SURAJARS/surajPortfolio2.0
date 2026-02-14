# ⚡ QUICK REFERENCE - Suraj ARS Portfolio

## 🚀 Get Started in 60 Seconds

### 1. Start Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000**

### 2. See Your Portfolio

- Hero section with floating monuments
- About, Projects, Skills, Contact sections
- Audio player in bottom-right corner

### 3. Add Your Music

1. Get MP3 file (Pixabay Music, YouTube Audio Library, etc.)
2. Save as: `public/music/ambient.mp3`
3. Reload browser - player will work!

---

## ✏️ Essential Customization

### Change Your Name & Title

📝 File: `src/components/sections/Hero.tsx`

```
Line ~65: "Suraj ARS" → Your Name
Line ~68: "Full Stack Developer" → Your Role
Line ~70: "Develop solutions that matter" → Your Tagline
```

### Update Projects

📝 File: `src/components/sections/Projects.tsx`

```
Add new project to projects array (line ~13):
{
  title: 'Your Project',
  description: 'What it does',
  tags: ['Tech1', 'Tech2'],
  link: 'https://...',
  github: 'https://...',
}
```

### Add Skills

📝 File: `src/components/sections/Skills.tsx`

```
Edit skill categories around line ~14:
{
  category: 'Your Category',
  icon: IconComponent,
  skills: ['Skill1', 'Skill2', ...],
}
```

### Update Contact Info

📝 File: `src/components/sections/Contact.tsx`

```
Line ~55: Email address
Line ~56: Phone number
Lines ~67-81: Social media links (LinkedIn, GitHub, Twitter)
```

### Change Colors

📝 File: `src/app/globals.css`

```css
:root {
  --accent-gold: #d4a574; /* Primary accent */
  --accent-saffron: #ff9933; /* Orange/warm */
  --accent-deep-brown: #6b4423; /* Deep tone */
  /* Update these hex colors */
}
```

---

## 📂 Key Files at a Glance

| Purpose              | File                                   | Edit For            |
| -------------------- | -------------------------------------- | ------------------- |
| Page title, metadata | `src/app/layout.tsx`                   | SEO, page info      |
| Hero section         | `src/components/sections/Hero.tsx`     | Name, role, tagline |
| About me             | `src/components/sections/About.tsx`    | Bio, expertise      |
| Projects             | `src/components/sections/Projects.tsx` | Your work           |
| Skills               | `src/components/sections/Skills.tsx`   | Tech stack          |
| Contact              | `src/components/sections/Contact.tsx`  | Email, links        |
| Colors & fonts       | `src/app/globals.css`                  | Design palette      |
| Audio player         | `src/components/AudioPlayer.tsx`       | Music controls      |

---

## 🛠️ Common Tasks

### Add a New Project

1. Open `src/components/sections/Projects.tsx`
2. Add to `projects` array (line 13)
3. Provide: title, description, tags, links
4. Save - changes appear immediately!

### Change Color Scheme

1. Open `src/app/globals.css`
2. Find `:root { ... }` at top
3. Edit hex color values
4. All colors update throughout site

### Update Social Links

1. Open `src/components/sections/Contact.tsx`
2. Find `socialLinks` array (around line 67)
3. Update URLs to your profiles
4. Done!

### Add Audio Music

1. Get royalty-free MP3 (Pixabay Music, etc.)
2. Rename to `ambient.mp3`
3. Place in `public/music/` folder
4. Music plays automatically!

### Deploy Your Site

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click "Deploy"
5. Your site is live! 🎉

---

## 🎨 Color Tokens Quick Guide

```
Background Colors:
  --bg-primary: #faf8f3 (Main background)
  --bg-secondary: #f5f1e8 (Light background)

Text Colors:
  --text-primary: #1a1a1a (Headings)
  --text-secondary: #666666 (Body text)

Accent Colors:
  --accent-gold: #d4a574 (Primary)
  --accent-saffron: #ff9933 (Orange)
  --accent-deep-brown: #6b4423 (Brown)
  --accent-cream: #fffbf0 (Light)
```

---

## 📱 Responsive Breakpoints

```
Mobile:   < 640px    (use: hidden sm:block)
Tablet:   640-1023px (use: md:block)
Desktop:  > 1024px   (use: lg:block)
```

Example: `hidden md:block` = show on tablet & desktop only

---

## 🔗 Important Links

### Development

- Start: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

### Documentation

- [README.md](README.md) - Full overview
- [SETUP.md](SETUP.md) - Detailed guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Hosting guide
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - What's included
- [FILE_INDEX.md](FILE_INDEX.md) - File structure

### External Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Hooks](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

---

## ❓ Troubleshooting

### Server won't start?

```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### Styling looks broken?

```bash
# Rebuild Next.js
npm run build
npm run dev
```

### Port 3000 in use?

```bash
# Use different port
npm run dev -- -p 3001
```

### Build fails?

```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📋 Pre-Launch Checklist

- [ ] Customize all personal information
- [ ] Add your projects and descriptions
- [ ] Update skills and technologies
- [ ] Change social media links
- [ ] Add ambient.mp3 to `public/music/`
- [ ] Test on mobile device
- [ ] Run Lighthouse audit
- [ ] Choose hosting (Vercel recommended)
- [ ] Buy custom domain
- [ ] Deploy! 🚀

---

## 💡 Pro Tips

1. **Hot Reload**: Changes save instantly while dev server runs
2. **Mobile Testing**: Use browser DevTools responsive mode
3. **Performance**: Run Lighthouse (F12 → Lighthouse tab)
4. **Accessibility**: Use semantic HTML & ARIA labels
5. **SEO**: Update metadata in `layout.tsx`

---

## 📞 Quick Help

**Need more info?** Check these files:

- ✅ General setup → `SETUP.md`
- ✅ Deployment help → `DEPLOYMENT.md`
- ✅ File structure → `FILE_INDEX.md`
- ✅ Feature list → `PROJECT_SUMMARY.md`
- ✅ Full documentation → `README.md`

---

## 🎉 You're All Set!

Your premium portfolio is ready. Start with:

```bash
npm run dev
```

Then customize, test, and deploy! 🚀

**Remember**: "Develop solutions that matter"

---

**Last Updated**: February 14, 2026
**Status**: ✅ Production Ready
**Version**: 1.0.0
