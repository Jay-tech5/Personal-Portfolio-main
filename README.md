# Jay Dixit — Personal Portfolio

A premium, modern, fully responsive personal portfolio website built with **frontend-only** technologies.

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Flexbox, Grid, Glassmorphism
- **JavaScript (ES6+)** & **TypeScript**
- **React.js** & **Next.js** (App Router, static frontend)
- **Tailwind CSS** & **Bootstrap 5**
- **Framer Motion** — Component animations
- **GSAP** — Hero animations
- **Three.js** — Particle background
- **React Icons** — Icon library
- **AOS** — Scroll reveal animations

## Features

- Dark/Light mode toggle
- Custom cursor (desktop)
- Scroll progress bar
- Loading animation
- Typing animation in hero
- Animated skill bars & counters
- Project filter & search
- Certificate gallery
- Testimonials carousel
- Contact form (frontend validation only)
- Fully responsive mobile-first design
- SEO-friendly metadata

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app router (layout, page, globals.css)
├── components/
│   ├── layout/       # Navbar, Footer, effects
│   ├── sections/     # Hero, About, Experience, etc.
│   └── ui/           # Reusable UI components
├── data/             # Static portfolio content
├── hooks/            # Custom React hooks
├── providers/        # Theme & AOS providers
└── types/            # TypeScript interfaces
public/
├── profile/          # Profile image
├── projects/         # Project thumbnails
├── certificates/     # Certificate badges
├── avatars/          # Testimonial avatars
└── resume/           # Resume placeholder
```

## Notes

- **No backend** — All content is static. The contact form validates input client-side only.
- Replace placeholder links, images, and resume with your actual content.
- Update `src/data/portfolio.ts` to customize all sections.

## License

MIT
