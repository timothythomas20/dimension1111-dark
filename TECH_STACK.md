# Technology Stack

A detailed reference of every technology, library, and tool used in this project, including where and why each is used.

---

## 1. Core Framework & Language

### React 18.3.1
- **What**: A JavaScript library for building component-based user interfaces.
- **Where**: Every file in `src/` — all pages (`src/pages/*.tsx`), layout (`src/components/layout/*.tsx`), and UI primitives (`src/components/ui/*.tsx`).
- **Why**: Enables a reusable component model, hook-based state (e.g. `useState` in `Gallery.tsx` for lightbox state and category filters), and predictable rendering for the entire marketing site.

### React DOM 18.3.1
- **What**: The renderer that mounts React components into the browser DOM.
- **Where**: `src/main.tsx` — bootstraps the application with `createRoot().render(<App />)`.
- **Why**: Required entry point for any React web application.

### TypeScript 5.5.3
- **What**: A strongly-typed superset of JavaScript.
- **Where**: All `.ts` and `.tsx` source files; configured via `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`.
- **Why**: Catches type errors at build time, provides autocomplete for component props (e.g. `SectionHeader` props, `Category` union type in `Gallery.tsx`), and documents data shapes like the `rooms` and `treks` structures in `src/data/constants.ts`.

---

## 2. Build Tooling

### Vite 5.4.2
- **What**: A fast development server and production bundler.
- **Where**: Configured in `vite.config.ts`; invoked via `npm run dev`, `npm run build`, and `npm run preview`.
- **Why**: Provides instant hot-module replacement during development and an optimized production build (output in `dist/`). Faster than webpack-based tools for projects of this size.

### @vitejs/plugin-react 4.3.1
- **What**: Vite plugin that enables React Fast Refresh and JSX transformation.
- **Where**: Registered in `vite.config.ts`.
- **Why**: Required for Vite to compile JSX/TSX and preserve component state during hot reloads.

---

## 3. Routing

### React Router DOM 7.12.0
- **What**: Client-side routing library for React single-page applications.
- **Where**: `src/App.tsx` defines routes; `Link` components are used throughout (e.g. navigation in `Header.tsx`, CTAs in `Home.tsx`, `Gallery.tsx`).
- **Why**: Handles navigation between the seven pages (Home, About, Stays, Cafe, Adventures, Gallery, Contact) without full page reloads, preserving scroll performance and animations.

---

## 4. Styling

### Tailwind CSS 3.4.1
- **What**: A utility-first CSS framework.
- **Where**: Applied inline on every component via `className` props; configured in `tailwind.config.js` with a custom design system.
- **Why**: Enables rapid iteration and enforces consistent spacing, color, and typography tokens. The custom theme in `tailwind.config.js` defines:
  - Color ramps: `dark` (9 shades for backgrounds), `amber` (10 shades, the gold accent), `forest`, `cream` (4 shades for text on dark).
  - Font families: `serif` (Cormorant Garamond for headings) and `sans` (DM Sans for body).
  - Keyframe animations: `fadeIn`, `fadeInUp`, `slideInLeft`, `float`, `pulseGlow`, `bounce-slow` — used by `AnimatedSection.tsx` and decorative elements.
  - Custom shadows (`glow`, `glow-lg`, `dark`) and gradient backgrounds.

### PostCSS 8.4.35 + Autoprefixer 10.4.18
- **What**: CSS processing pipeline that runs Tailwind and adds vendor prefixes.
- **Where**: Configured in `postcss.config.js`; runs automatically during Vite builds.
- **Why**: Compiles Tailwind directives and ensures cross-browser CSS compatibility.

### Global CSS — `src/index.css`
- **What**: Tailwind base/components/utilities directives plus custom utility classes (`btn-primary`, `btn-secondary`, `section-container`, `section-padding`, `card-dark`, `gold-line`).
- **Where**: Imported once in `src/main.tsx`.
- **Why**: Centralizes repeated patterns (buttons, section wrappers) to keep component markup terse.

---

## 5. Icons

### lucide-react 0.344.0
- **What**: Icon library providing consistent SVG icons as React components.
- **Where**: Imported across all pages and layout components. Examples:
  - `Header.tsx`, `Footer.tsx`: `MapPin`, `Phone`, `Mail`, `Menu`, `X`, social icons.
  - `Home.tsx`: `Bed`, `Mountain`, `UtensilsCrossed`, `Flame`, `Car`, `Wifi`, `Droplets`, `Zap`, `Heart`, `Sparkles`, `Map`, `Star`, `ArrowRight`, `ChevronDown`, `Users`, `Clock`.
  - `Gallery.tsx`: `X`, `ChevronLeft`, `ChevronRight` for lightbox controls.
  - `WhatsAppButton.tsx`: the floating chat icon.
- **Why**: Lightweight, tree-shakeable, and stylistically cohesive. Excluded from Vite's dep-optimizer in `vite.config.ts` to avoid large dev bundles.

---

## 6. Content & Data

### Static content module — `src/data/constants.ts`
- **What**: A plain TypeScript module exporting all site content as constants.
- **Where**: Imported by `Home.tsx`, `Stays.tsx`, `Cafe.tsx`, `Adventures.tsx`, `About.tsx`, `Contact.tsx`, `Footer.tsx`.
- **Why**: Keeps copy, pricing, and configuration in one place. Exports include:
  - Contact: `WHATSAPP_NUMBER`, `PHONE_NUMBER`, `EMAIL`, `ADDRESS`, `COORDINATES`, `INSTAGRAM_URL`, `FACEBOOK_URL`.
  - Accommodations: `rooms` (deluxe + suite with galleries), `amenities`.
  - Dining: `menuItems` (breakfast, mainCourse, snacks, beverages, desserts).
  - Adventures: `treks` (6 treks with duration, altitude, price), `experiences` (onsite + nearby).
  - Social proof: `testimonials`.
  - Support: `faqs`.

### Static images — `public/images/` and `public/new-images/`
- **What**: Raw JPEG/JPG/AVIF/WEBP assets served statically by Vite.
- **Where**: Referenced by absolute paths (e.g. `/images/hero/home-hero.jpg`, `/new-images/rooms/family-suite/...`). Copied as-is into `dist/` during build.
- **Why**: Avoids external image dependencies; the site works fully offline and can be hosted on any static CDN.

---

## 7. Third-Party Integrations (External, No SDK)

### WhatsApp deep links
- **What**: Direct `https://wa.me/918580731659?text=...` URLs opened via `window.open`.
- **Where**: `openWhatsApp()` helpers in `Home.tsx`, `Stays.tsx`, `Gallery.tsx`, `Contact.tsx`, `Adventures.tsx`, and `WhatsAppButton.tsx`.
- **Why**: Primary booking channel. No SDK or API key needed — just a URL.

### Google Maps embed
- **What**: An `<iframe>` pointing at `https://www.google.com/maps/embed?...`.
- **Where**: `Home.tsx` location section and `Contact.tsx`.
- **Why**: Shows property location without loading the full Maps JS SDK.

### Instagram / Facebook links
- **What**: Standard anchor tags to social profiles.
- **Where**: `Header.tsx`, `Footer.tsx`, `Gallery.tsx` "Share Your Moments" section.
- **Why**: Outbound social links; no API integration.

---

## 8. Linting & Code Quality

### ESLint 9.9.1
- **What**: JavaScript/TypeScript linter.
- **Where**: Configured in `eslint.config.js`; runs via `npm run lint`.
- **Why**: Catches common mistakes and enforces code style consistency.

### @eslint/js, typescript-eslint 8.3.0
- **What**: Official ESLint rule sets for JS and TS.
- **Where**: Extended in `eslint.config.js`.
- **Why**: Provides the base rules and TypeScript-aware linting.

### eslint-plugin-react-hooks 5.1.0-rc.0
- **What**: Lints React Hook usage (rules-of-hooks, exhaustive-deps).
- **Where**: `eslint.config.js`.
- **Why**: Prevents hook misuse bugs.

### eslint-plugin-react-refresh 0.4.11
- **What**: Ensures components are compatible with React Fast Refresh.
- **Where**: `eslint.config.js`.
- **Why**: Keeps dev-server hot reloads working reliably.

### globals 15.9.0
- **What**: A list of global variables by environment (browser, node).
- **Where**: Used by `eslint.config.js`.
- **Why**: Lets ESLint know which globals are legal in each file context.

---

## 9. Type Definitions

### @types/react 18.3.5, @types/react-dom 18.3.0
- **What**: TypeScript type definitions for React and React DOM.
- **Where**: Installed as devDependencies; consumed implicitly by TypeScript.
- **Why**: Required for typed JSX and hook usage.

---

## 10. Application Structure

### Layout system — `src/components/layout/`
- `Layout.tsx`: Wraps every page with `Header`, `Footer`, and `WhatsAppButton`.
- `Header.tsx`: Sticky nav with responsive mobile menu.
- `Footer.tsx`: Contact info, social links, quick nav.
- `WhatsAppButton.tsx`: Floating CTA on every page.

### UI primitives — `src/components/ui/`
- `AnimatedSection.tsx`: Wrapper that triggers Tailwind keyframe animations when scrolled into view (uses `IntersectionObserver`).
- `ImageCarousel.tsx`: Reusable horizontal image carousel used in `Stays.tsx` and `Home.tsx` room previews.
- `PageHero.tsx`: Standardized hero banner for inner pages with title, subtitle, breadcrumbs, and background image.
- `SectionHeader.tsx`: Label + title + description block used to introduce each major section.

### Pages — `src/pages/`
One file per route (`Home`, `About`, `Stays`, `Cafe`, `Adventures`, `Gallery`, `Contact`). Each composes layout primitives and reads content from `src/data/constants.ts`.

---

## 11. Hosting / Deployment

The site is a fully static SPA. `npm run build` produces a `dist/` directory containing:
- `index.html`
- Bundled JS (`dist/assets/index-*.js`)
- Bundled CSS (`dist/assets/index-*.css`)
- All images copied from `public/`
- `_redirects` for SPA fallback routing (e.g. on Netlify)

Because there is **no backend, no database, and no server-side code**, the site can be hosted on any static host: Netlify, Vercel, Cloudflare Pages, GitHub Pages, AWS S3 + CloudFront, or a plain Nginx server.

---

## 12. What Is NOT Used

To make expectations clear:
- **No database** — all content is hardcoded in `src/data/constants.ts`.
- **No backend / API server** — the site is purely static.
- **No authentication** — public marketing site only.
- **No state-management library** (Redux, Zustand, etc.) — local `useState` is sufficient.
- **No CSS-in-JS** (styled-components, emotion) — Tailwind only.
- **No UI kit** (MUI, Chakra, shadcn) — bespoke components styled with Tailwind.
- **No analytics SDK** — can be added later via a simple script tag if needed.
