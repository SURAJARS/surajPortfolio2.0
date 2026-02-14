# Suraj ARS - Premium 3D Portfolio Website

A modern, premium portfolio website for Suraj ARS - Full Stack Developer, featuring:

- 3D parallax effects with floating Indian monument silhouettes
- Smooth animations and transitions using Framer Motion
- Cultural yet modern design with warm Indian color palette
- Interactive components and audio player
- Responsive and fully optimized

## 🎨 Design Features

### Color Palette (Indian-Inspired)

- **Primary Background**: Warm cream (#faf8f3)
- **Accent Colors**:
  - Gold (#d4a574) - Primary accent
  - Saffron (#ff9933) - Energy and optimism
  - Deep Brown (#6b4423) - Depth and sophistication
  - Cream (#fffbf0) - Elegance

### Typography

- **Headings**: Playfair Display (Serif) - Elegant and timeless
- **Body**: Inter (Sans-serif) - Modern and readable

### 3D & Animation Elements

- Floating layered Indian monument silhouettes
- Parallax scrolling effects
- Mouse-responsive tilt on hero section
- Smooth reveal animations on scroll
- Floating animations on skill cards
- Hover effects with 3D perspective

### Indian Heritage Elements (6 Iconic Monuments)

1. **Mahabalipuram Shore Temple** - Ancient Tamil architecture
2. **Qutab Minar** - Historic minaret in Delhi
3. **Ellora Caves** - Ancient rock-cut temple complex
4. **Alappuzha Houseboat** - Traditional Kerala boat
5. **Hampi Stone Chariot** - Ancient sculptured temple structure
6. **Charminar** - Iconic Hyderabad monument

## 📋 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and variables
│   │   ├── layout.tsx           # Root layout with providers
│   │   └── page.tsx             # Main page
│   ├── components/
│   │   ├── Lenis.tsx            # Smooth scrolling wrapper
│   │   ├── AudioPlayer.tsx       # Audio player UI
│   │   ├── IndianMonuments.tsx   # SVG monument components
│   │   └── sections/
│   │       ├── Hero.tsx         # Hero section with 3D effects
│   │       ├── About.tsx        # About section
│   │       ├── Projects.tsx     # Projects showcase
│   │       ├── Skills.tsx       # Skills and expertise
│   │       ├── Contact.tsx      # Contact form and info
│   │       └── Footer.tsx       # Footer
│   ├── context/
│   │   └── AudioContext.tsx     # Audio state management
│   └── hooks/                   # Custom React hooks (future)
├── public/
│   └── music/
│       └── ambient.mp3          # Background music (add your file)
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:

```bash
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 🎵 Audio Player Setup

To enable the background audio player:

1. Add an MP3 file to `public/music/` and name it `ambient.mp3`
2. The audio player will automatically:
   - Show a floating control button (bottom-right corner)
   - Allow play/pause toggling
   - Provide volume control
   - Loop the audio continuously

**Recommended music sources:**

- Pixabay Music (royalty-free)
- YouTube Audio Library
- Incompetech
- FreeMusic Archive

## 🛠️ Technologies Used

### Framework & Bundling

- **Next.js 16** - React framework with SSR support
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling & Animation

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Custom CSS** - Global styles with CSS variables

### Components & Icons

- **React Icons** - Icon library (Feather, Simple Icons)
- **Custom SVG Components** - Monument illustrations

### Development

- **ESLint** - Code quality
- **npm** - Package management

## 📱 Responsive Design

- Mobile-first approach
- Fully responsive on all screen sizes
- Touch-friendly interactive elements
- Optimized performance for all devices

## ✨ Key Features

### 1. Hero Section

- Animated title and tagline
- Floating 3D monument silhouettes with parallax
- Mouse movement sensitivity
- Call-to-action buttons

### 2. About Section

- Personal introduction
- Key expertise highlights
- Philosophy statement
- Skill categories preview

### 3. Projects Section

- Project cards with hover effects
- Technology tags
- Links to live sites and GitHub repos
- 3D tilt effect on hover

### 4. Skills Section

- Organized by category
- Icon indicators for each skill group
- Animated skill bars
- Smooth reveal on scroll

### 5. Contact Section

- Email contact form
- Direct contact information
- Social media links
- Form validation

### 6. Audio Player

- Floating control button
- Play/pause functionality
- Volume control with visual feedback
- Smooth animations

## 🎯 Customization

### Update Personal Information

Edit these files to customize:

- **`src/app/layout.tsx`** - Page title and metadata
- **`src/components/sections/Hero.tsx`** - Name, role, tagline, and CTA buttons
- **`src/components/sections/About.tsx`** - About content
- **`src/components/sections/Projects.tsx`** - Project information
- **`src/components/sections/Contact.tsx`** - Contact details and social links

### Modify Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --bg-primary: #faf8f3;
  --accent-gold: #d4a574;
  --accent-saffron: #ff9933;
  /* ... more variables */
}
```

### Adjust Animations

Modify Framer Motion properties in component files for timing, delay, and easing preferences.

## 🌟 Performance Optimizations

- Static generation for optimal performance
- Image optimization via Next.js
- Code splitting and lazy loading
- CSS minification with Tailwind
- Production build optimization with Turbopack

## 📄 License

This portfolio template is created for Suraj ARS. Feel free to customize and use for your personal portfolio.

## 🙏 Credits

- Design inspired by sebastien-lempens.com
- Indian heritage elements research
- Framer Motion for smooth animations
- Tailwind CSS for utility styling
- React Icons for icon components

## 📞 Support

For customizations or issues, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Tagline**: Develop solutions that matter. 🚀

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
