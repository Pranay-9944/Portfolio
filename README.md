# 🚀 Dark Futuristic Portfolio — Next.js + Framer Motion + Three.js

A stunning animated portfolio website built with Next.js 14, Framer Motion, and React Three Fiber.

---

## ✨ Features

- 🌐 Rotating 3D sphere with distortion material and star field
- ⚡ Smooth Framer Motion animations throughout
- ⌨️ Typing effect cycling through job titles
- 📜 Scroll-triggered reveal animations on every section
- 🃏 Staggered project card animations with hover glow
- 🌑 Dark futuristic theme with cyan + purple accents
- 📱 Sticky navbar that shrinks on scroll
- ✅ Contact form with success state
- 🎨 Custom scrollbar, grid background, glowing effects

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        ← Metadata & fonts
│   ├── page.tsx          ← Main page (assembles all sections)
│   └── globals.css       ← Global styles & CSS variables
├── components/
│   ├── Navbar.tsx        ← Sticky animated navbar
│   ├── Hero.tsx          ← Hero section with typing effect
│   ├── SphereCanvas.tsx  ← 3D rotating sphere (Three.js)
│   ├── About.tsx         ← About + skill bars
│   ├── Projects.tsx      ← Project cards grid
│   ├── Contact.tsx       ← Contact form
│   └── Footer.tsx        ← Footer with links
```

---

## 🛠️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](https://pranayportfolio-gamma.vercel.app/) to view it.

### 3. Customize

Replace the following with your own info:

| File | What to change |
|------|----------------|
| `components/Hero.tsx` | Your name, bio, social links |
| `components/About.tsx` | Skills, experience stats |
| `components/Projects.tsx` | Project titles, descriptions, links |
| `components/Contact.tsx` | Your email, location |
| `components/Navbar.tsx` | Logo initials |
| `components/Footer.tsx` | Your name |
| `app/layout.tsx` | Page title and description |

---

## 🚀 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

### GitHub Pages
Push to GitHub → Settings → Pages → Deploy from branch

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `framer-motion` | All UI animations |
| `three` | 3D rendering engine |
| `@react-three/fiber` | React bindings for Three.js |
| `@react-three/drei` | Helper components (Sphere, Stars, Controls) |

---

## 🎨 Customizing Colors

Edit `app/globals.css`:

```css
:root {
  --cyan: #00f5ff;      /* Primary accent */
  --purple: #a855f7;    /* Secondary accent */
  --dark: #050810;      /* Background */
  --card: #0f172a;      /* Card background */
  --text: #e2e8f0;      /* Body text */
  --muted: #64748b;     /* Secondary text */
}
```

---

Built with ❤️ — customize it and make it yours!
