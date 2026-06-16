# Shree Krishna Marine Motor Servicing

Premium marine motor sales and servicing website for **Shree Krishna Marine Motor Servicing** — Kolkata, India. Also home to the **Art & Statues Division** for custom fiber statue crafting. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

**Live demo**: [shreekrishnamarine.com](https://shreekrishnamarine.com) (pending deployment)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16.2.9 (App Router) |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v4 (CSS-first configuration) |
| **Animation** | Framer Motion 12+ |
| **Icons** | Lucide React |
| **Forms** | React Hook Form + Zod (client + server validation) |
| **Email** | Nodemailer (SMTP via Hostinger) |

## Pages

| Page | Route | Key Sections |
|------|-------|-------------|
| **Home** | `/` | Hero (India harbor background), animated stats, brand logos, featured services + Art Statue promo, testimonial carousel, trust section, CTA |
| **About** | `/about` | Company story (Kolkata river image, dual business: marine + fiber statues), technician profile (Indian portrait), mission/vision, company timeline |
| **Products** | `/products` | Category filter tabs, search input, product cards (13 products), inquiry modal with RHF+Zod form |
| **Services** | `/services` | 6 service cards with features, 3 maintenance packages (pricing), 5-step service process, emergency support banner |
| **Art & Statues** | `/art-statues` | Hero, stats, 6 sculpture categories, 6 services, portfolio gallery (9 projects), 5-step crafting process, CTA |
| **Gallery** | `/gallery` | Masonry grid layout, category filter tabs, lightbox viewer with keyboard navigation |
| **Contact** | `/contact` | RHF+Zod contact form, Google Maps iframe embed, business card, WhatsApp CTA |

## Features

### Interaction & UX
- **Page transition loader** — Marine-themed spinning ship overlay on every route change (500ms, Framer Motion)
- **`cursor-pointer` globally** — All `a`, `button`, `[role="button"]`, `select`, `summary` elements plus interactive cards
- **Smooth scroll animations** — `ScrollReveal` component with IntersectionObserver-based reveal on scroll
- **Animated counters** — `useCounter` hook for stats (e.g., "15+ Years Experience")
- **Testimonial carousel** — Slide transitions with dot indicators and prev/next controls
- **Mobile responsive** — Hamburger menu at 1128px breakpoint, stacked layouts, touch-friendly targets

### Contact System
- Zod validation (client + server)
- Rate limiting (5 submissions/min per IP)
- Nodemailer sends 2 emails: notification to owner + confirmation to customer
- Email failures are silently logged — user always sees a success message
- Product inquiry modal uses the same API endpoint

### Performance
- Server Components by default (App Router)
- Static Site Generation (SSG) for all pages
- Optimized images via `next/image` with multiple CDN remote patterns
- Lazy-loaded gallery with CSS columns masonry layout
- Font optimization with `next/font` (Inter)
- Route-level code splitting

### SEO
- JSON-LD structured data (LocalBusiness schema)
- Open Graph + Twitter card metadata
- Canonical URLs, robots meta
- Semantic HTML with proper heading hierarchy

### Imagery
All photos are India-focused marine/boat content:
- **Mumbai Sassoon Dock** — Colorful fishing boats in harbor (Hero, Trust, OG image)
- **Kolkata Hooghly River** — Traditional boats on river (Company Story)
- **Kerala fishermen** — Marine workers on boat in Kollam (Gallery)
- **Kolkata bridge** — River scene with Vidyasagar Setu (Gallery)
- **Indian workshop** — Auto mechanic workshop by Indian photographer (Gallery, Services)
- **Indian portraits** — Technician profile + 5 testimonial avatars with South Asian faces
- **Equipment close-ups** — Context-neutral engine/tool photos (no people, no identifiable locations)
- **Fiber sculpting** — Artisan crafting statues (Art Statues page)

Brand logos sourced from `static.cdnlogo.com` (Yamaha, Mercury, Suzuki, Honda, Tohatsu, Johnson).

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | SMTP port (e.g., 465) |
| `SMTP_SECURE` | Use SSL (true/false) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `NOTIFICATION_EMAIL` | Receive inquiry notifications here |
| `NEXT_PUBLIC_SITE_URL` | Production URL (for OG images) |
| `NEXT_PUBLIC_PHONE` | Business phone number |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number with country code |
| `NEXT_PUBLIC_ADDRESS` | Full business address |
| `NEXT_PUBLIC_GOOGLE_MAPS_URL` | Google Maps embed URL |

### Development

```bash
npm run dev
```

**Note for Windows users**: If your system blocks `@next/swc-win32-x64-msvc` (Application Control policy), the dev script automatically uses the `--webpack` flag which falls back to WASM bindings. Turbopack is not supported on this configuration.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deployment (Vercel)

1. Push the repository to GitHub
2. Import the project in Vercel
3. Set all environment variables in Vercel project settings
4. Point your Hostinger domain nameservers to Vercel
5. SSL/TLS certificates are configured automatically

Vercel's Linux environment uses native SWC — no `--webpack` flag needed.

## Project Structure

```
src/
├── app/                    # App Router pages + API
│   ├── about/              # About page
│   ├── art-statues/        # Art & Statues page
│   ├── products/           # Products page
│   ├── services/           # Services page
│   ├── gallery/            # Gallery page
│   ├── contact/            # Contact page
│   ├── api/contact/        # POST /api/contact
│   ├── globals.css         # Tailwind v4 + custom theme
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── layout/             # Navbar, Footer, Loader, WhatsAppButton
│   ├── sections/           # HeroSection, CompanyStory, GalleryGrid, ProductCard, etc.
│   │   └── art/            # ArtStatueHero, ArtStatueStats, ArtStatueCategories, etc.
│   └── ui/                 # Button, Card, Input, PageTransition, ScrollReveal, Toast, SectionHeading
├── data/                   # Static content (products, services, gallery, testimonials, site, fiber-statues)
├── hooks/                  # useCounter, useScrollPosition
├── lib/                    # utils, validations, email
└── types/                  # TypeScript type definitions
```

## Data Source

All content is managed through TypeScript data files in `src/data/`. No database, CMS, or admin dashboard required. Content changes are code changes.

- `src/data/site.ts` — Global config, nav links, stats, brand logos
- `src/data/products.ts` — 13 outboard motor products & spare parts
- `src/data/services.ts` — 6 services, 3 packages, 5-step process
- `src/data/gallery.ts` — 12 gallery images
- `src/data/testimonials.ts` — 5 customer testimonials
- `src/data/fiber-statues.ts` — Art & Statues division content (6 categories, 9 portfolio items, 6 services, 5 process steps, 4 stats)

## Known Issues

| Issue | Workaround |
|-------|-----------|
| `@next/swc-win32-x64-msvc` blocked by Windows App Control | Dev script uses `--webpack` flag (WASM bindings) |
| Turbopack requires native SWC | Cannot use on this Windows machine; Vercel (Linux) uses native SWC |
| First browser load after clean `.next` may show chunk 404s | Pre-compile pages by visiting them once, then hard refresh |

## Contact

**Shree Krishna Marine Motor Servicing**
Dibyendu Sarkar — Founder & Chief Marine Technician
Kolkata, West Bengal, India

---

**Proudly Design and Develop by [FOURI Team](https://fouri.in/) with Care**
# sk-marine-services
