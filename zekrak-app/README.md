# Zekrak Studio — React Site

A pixel-matched React conversion of the Zekrak Studio design, with a working
product carousel and WhatsApp ordering.

## What's included

- **React + Vite** project, functional components only
- **Product slider** (`src/components/Products.jsx`) built with Swiper —
  category filters, prev/next arrows, swipe on mobile, responsive
  slides-per-view (1 on mobile, 2 on tablet, 3 on desktop)
- **WhatsApp ordering** (`src/utils/whatsapp.js`) — every "Add" / "Order Now" /
  "Start Your Order" button opens a WhatsApp chat pre-filled with the
  product's name and price
- Fully responsive layout (desktop → tablet → mobile)
- Semantic HTML + ARIA labels on nav, filters, slider controls, and forms
- CSS Modules-free, plain CSS per component, all colors/spacing driven by
  CSS variables in `src/styles/global.css`

## 1. Set your WhatsApp number

Open `src/utils/whatsapp.js` and replace the placeholder:

```js
export const WHATSAPP_NUMBER = '201234567890';
```

Use the full international format: country code + number, **no** `+`, no
spaces, no leading zero (e.g. Egypt `+20 100 123 4567` → `201001234567`).

## 2. Install & run

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The static build is output to `dist/` — deploy it to any static host
(Netlify, Vercel, GitHub Pages, etc.).

## Project structure

```
src/
├── assets/images/       # product & hero photos (extracted from the design)
├── components/          # one component + one CSS file per section
├── data/products.js     # product catalog (edit names/prices/categories here)
├── utils/whatsapp.js     # WhatsApp number + link builder
├── styles/global.css    # design tokens (colors, type, buttons, layout)
├── App.jsx
└── main.jsx
```

## Editing products

Product cards are data-driven — add, remove, or edit items in
`src/data/products.js`. Each product needs an `id`, `category` (must match
one of `CATEGORIES`), `image`, `name`, `description`, and `price`.

## Notes on fidelity

The source file was a Figma SVG export where all headings/body copy had
already been converted to vector paths (no real `<text>` nodes), so exact
copy and colors were reconstructed by rendering the file to an image and
reading it directly. Colors, type scale, spacing, and the 7 embedded photos
were pulled straight from that source; a couple of secondary product photos
(polaroid set, framed collage) reuse existing photography from the design
since dedicated shots weren't present in the original file — swap in real
photos any time in `src/assets/images/`.
