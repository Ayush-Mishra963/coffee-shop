# Hearth Coffee Roasters

A one-page, single-location coffee shop site built with Vite, React, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # serve the production build locally
```

## Structure

```
src/
  components/
    Navbar.jsx        fixed nav + full-screen mobile menu
    Hero.jsx           orchestrated load-in, scroll parallax + curtain reveal on the hero image
    Roastery.jsx        "cherry to cup" process section, with a faint drifting coffee-ring accent
    Menu.jsx            drinks list with hover-lift rows
    Gallery.jsx         asymmetric photo grid, curtain reveal + zoom/overlay on hover
    Contact.jsx          visit info + a stylized (non-embedded) map illustration
    Footer.jsx
    MagneticButton.jsx   reusable magnetic-hover button, optional arrow icon, used for every CTA
    CustomCursor.jsx     brass dot + ring cursor, desktop only (hover + fine pointer)
    GrainOverlay.jsx     fixed film-grain + vignette layer for a cinematic finish
  hooks/
    useReducedMotion.js  reads prefers-reduced-motion for the scroll-linked (non-CSS) effects
  index.css             Tailwind layers + custom cursor/reduced-motion/grain rules
  App.jsx               assembles the sections
tailwind.config.js      color tokens (espresso / bone / brass / oxide) + fonts
```

## Notes on maintaining this

- **Colors, fonts, and spacing tokens** live in `tailwind.config.js`. Change the palette or
  typefaces there and it cascades everywhere.
- **Photos** are pulled from Unsplash by URL in `Hero.jsx` and `Gallery.jsx` — swap in your own
  images by replacing the `src` values (drop real files into `src/assets` and import them if you'd
  rather not depend on an external host).
- **Copy** (menu items, hours, address, social links) is defined as plain arrays/JSX at the top of
  each component file, so editing content never means touching layout code.
- **The map in the Visit section is an illustration, not a live map** (no API key required). Swap
  the `MapIllustration` component for a Google Maps / Mapbox embed if you want a real interactive
  map later.
- The custom cursor and magnetic buttons automatically disable themselves on touch devices, so
  nothing extra is needed for mobile.
