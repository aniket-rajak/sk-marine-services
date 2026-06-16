# Implementation Plan — Shree Krishna Marine Motor Servicing

## 1. Phases & Milestones

| Phase | Description | Duration | Dependencies |
|-------|-------------|----------|--------------|
| 1 | Foundation — scaffolding, config, dependencies, types | 1 day | None |
| 2 | Core UI — shared components (Button, Card, Input, etc.) | 1 day | Phase 1 |
| 3 | Layout — Navbar, Footer, Loader, WhatsApp button | 1 day | Phase 2 |
| 4 | Data Layer — TypeScript content files (products, services, etc.) | 1 day | Phase 1 |
| 5 | Pages — All 6 routes with section components | 3 days | Phase 2, 3, 4 |
| 6 | API — Contact form endpoint with Nodemailer | 1 day | Phase 1 |
| 7 | Polish — Animations, transitions, India imagery, UX | 2 days | Phase 5, 6 |
| 8 | Art & Statues Division — route, components, data, integration | 2 days | Phase 5 |
| 9 | Responsive Audit & Fixes — comprehensive mobile review | 1 day | Phase 8 |
| 10 | Deploy — GitHub, Vercel, domain, SSL | 1 day | Phase 9 |

## 2. Task Breakdown

### Phase 1: Foundation
- [x] Scaffold Next.js 16 with App Router, TypeScript, Tailwind v4 (src/ directory)
- [x] Install core dependencies (framer-motion, lucide-react, react-hook-form, zod, nodemailer, etc.)
- [x] Configure Tailwind theme (navy, gold, teal palette)
- [x] Create `.env.local` with SMTP credentials and placeholders
- [x] Create all TypeScript type definitions (`src/types/`)

### Phase 2: Core UI
- [x] Button component (5 variants, 3 sizes, loading state, icon support)
- [x] Card component (3 variants, hover lift effect)
- [x] Input, Textarea, Select form components (label, error, icon)
- [x] ScrollReveal (intersection observer animations, className passthrough)
- [x] SectionHeading (title with gold accent bar)
- [x] Toast notification (slide-in success/error)
- [x] PageTransition (AnimatePresence route transitions)

### Phase 3: Layout
- [x] Navbar (responsive, mobile menu at 1128px breakpoint, scroll-aware background)
- [x] Footer (links, contact info, copyright, FOURI Team credit)
- [x] Loader (marine-themed initial splash with ship rotation + progress bar)
- [x] WhatsAppButton (floating fixed button)

### Phase 4: Data Layer
- [x] `src/data/site.ts` — site config, nav links, stats (5 items), brand logos, service types
- [x] `src/data/products.ts` — 13 products (Yamaha/Mercury/Suzuki + spare parts/accessories)
- [x] `src/data/services.ts` — 6 services + 3 maintenance packages + 5-step process
- [x] `src/data/gallery.ts` — 12 gallery images with categories
- [x] `src/data/testimonials.ts` — 5 testimonials with Indian/South Asian avatars
- [x] `src/data/fiber-statues.ts` — 6 categories, 9 portfolio items, 6 services, 5 process steps, 4 stats

### Phase 5: Pages
- [x] Home — Hero (India harbor bg), Stats counter, Brands, Services, Testimonials carousel, Trust, CTA, ArtStatuePromo
- [x] About — CompanyStory (Kolkata boats, dual business text), TechnicianProfile (Indian portrait), MissionVision, Timeline
- [x] Products — Category filter, search input, 13 product cards, InquiryModal (RHF + Zod form)
- [x] Services — Service details, MaintenancePackages, ServiceProcess timeline, Emergency banner
- [x] Gallery — Masonry grid (columns layout), category tabs, Lightbox (keyboard nav)
- [x] Contact — Form (RHF + Zod), Google Maps iframe, business card, WhatsApp CTA

### Phase 6: API
- [x] POST `/api/contact` — Zod validation, rate limiting (5/min/IP), Nodemailer (notification + confirmation)
- [x] Email failure silently logged — user always sees success

### Phase 7: Polish
- [x] Page transition animations (AnimatePresence + route-change loader)
- [x] `cursor-pointer` globally on all interactive elements
- [x] India-focused Unsplash imagery (Mumbai Sassoon Dock, Kolkata Hooghly River, Kerala fishermen)
- [x] JSON-LD structured data (LocalBusiness schema)
- [x] SEO metadata + Open Graph + Twitter cards
- [x] Favicon setup
- [x] Reduced motion support (prefers-reduced-motion)

### Phase 8: Art & Statues Division
- [x] Create `ArtStatue*` types in `src/types/index.ts`
- [x] Create `src/data/fiber-statues.ts` with all content
- [x] Build `/art-statues` route page with 7 sections
- [x] Build 7 section components: Hero, Stats, Categories, Services, Portfolio, Process, CTA
- [x] Build ArtStatuePromo component for homepage
- [x] Integrate cross-site: navLinks, Footer, CompanyStory, layout metadata, JSON-LD

### Phase 9: Responsive Audit & Fixes
- [x] Audit all 19 component files for mobile issues
- [x] Fix HeroSection min-height on mobile (600px → md:min-h-screen)
- [x] Fix CompanyStory image height on mobile (300px → md:500px)
- [x] Fix TechnicianProfile heading size on small screens
- [x] Fix WhatsAppButton size and position on mobile
- [x] Fix Toast full-width on small viewports
- [x] Fix Lightbox nav button overlap on small screens
- [x] Fix InquiryModal padding and margins on mobile
- [x] Fix ArtStatueHero heading size on 320px screens
- [x] Fix ArtStatueStats value font size on mobile
- [x] Fix grid gaps across Art Statue components
- [x] Fix ArtStatueProcess image height on mobile

### Phase 10: Deployment (Pending — user action)
- [ ] Push to GitHub repository
- [ ] Import in Vercel
- [ ] Set environment variables in Vercel
- [ ] Point Hostinger nameservers to Vercel
- [ ] Verify SSL and domain

## 3. Technical Architecture

### Stack
- **Framework**: Next.js 16.2.9 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-first config)
- **Animation**: Framer Motion 12+
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod (client + server validation)
- **Email**: Nodemailer (SMTP via Hostinger)
- **Rate Limiting**: In-memory Map with 5 req/min per IP
- **Image CDN**: Unsplash (images.unsplash.com), static.cdnlogo.com, images.pexels.com, pixabay.com, upload.wikimedia.org

### Directory Structure
```
src/
├── app/                   # Next.js App Router pages + API
│   ├── about/             # /about
│   ├── art-statues/       # /art-statues (Fiber Statue Crafting division)
│   ├── products/          # /products
│   ├── services/          # /services
│   ├── gallery/           # /gallery
│   ├── contact/           # /contact
│   ├── api/contact/       # POST /api/contact
│   ├── globals.css        # Tailwind v4 + custom theme
│   ├── layout.tsx         # Root layout (metadata, JSON-LD, Navbar, Footer, Loader, PageTransition)
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Navbar, Footer, Loader, WhatsAppButton, CompanyStory
│   ├── sections/          # HeroSection, GalleryGrid, ProductCard, MaintenancePackages, Lightbox, etc.
│   │   └── art/           # ArtStatueHero, ArtStatueStats, ArtStatueCategories, ArtStatueServices, etc.
│   └── ui/                # Button, Card, Input, Textarea, Select, PageTransition, ScrollReveal, Toast, SectionHeading
├── data/                  # Static TypeScript content files
├── hooks/                 # useCounter, useScrollPosition
├── lib/                   # utils, validations, email (Nodemailer)
└── types/                 # TypeScript interfaces/types
```

### Data Flow
1. All content stored in `src/data/*.ts` — no database
2. Pages are Server Components where possible (default in App Router)
3. Client components ("use client") used for interactivity (forms, animations, carousels)
4. Contact form: Client component → POST `/api/contact` → Nodemailer → SMTP
5. Product inquiry: Modal form → POST `/api/contact` (same endpoint)
6. Images served via `next/image` with remote pattern config for multiple CDNs
7. Art & Statues route uses same layout shell, separate data/component tree

### Key Architectural Decisions
- **No database / CMS**: Static content in TypeScript files; contact form via Nodemailer only
- **SSG with SSR fallback**: Pages pre-rendered at build time; dynamic rendering enabled on demand
- **Webpack over Turbopack**: Windows App Control policy blocks native SWC binary; `--webpack` flag uses WASM bindings
- **Rate limiting**: In-memory (resets on server restart) — sufficient for this traffic level
- **Email resilience**: Contact form always returns 200; email failures logged but never surfaced to user
- **Art & Statues**: Separate data file, component folder, and route — clean isolation from marine content
- **Responsive breakpoints**: Default Tailwind breakpoints used except header hamburger at 1128px (arbitrary)

## 4. Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Windows SWC binary blocked by App Control | High | Certain | Use `--webpack` flag; WASM bindings work as fallback |
| Turbopack not supported on win32 without native SWC | High | Certain | Forced to use webpack in dev; Vercel uses native SWC |
| Unsplash CDN URL format for newer photo IDs | Medium | Low | Download redirect reveals numeric CDN ID; always verify with curl |
| SMTP credentials compromised | High | Low | .env.local in .gitignore; Vercel env vars not exposed |
| Contact form spam | Medium | Medium | Rate limiting (5/min/IP) mitigates abuse |
| Wikimedia Commons logo URLs change/break | Medium | Low | Use static.cdnlogo.com for brand logos (stable SVG CDN) |

## 5. Definition of Done

- [x] All 7 pages render without errors (HTTP 200) — Home, About, Products, Services, Gallery, Contact, Art Statues
- [x] All TypeScript strict errors resolved (tsc —noEmit passes)
- [x] All ESLint warnings resolved (npm run lint passes)
- [x] Contact form submits, validates, rate-limits, sends email
- [x] Product inquiry modal opens, validates, submits
- [x] Page transitions animate smoothly between all routes
- [x] All interactive elements show pointer cursor
- [x] All images are India-focused (no foreign models/Western stock)
- [x] Mobile responsive (tested on 320px, 375px, 414px, 768px viewports)
- [x] SEO metadata, Open Graph, JSON-LD present
- [x] Art & Statues division fully integrated with own route + cross-site links
- [x] Header hamburger activates at 1128px breakpoint
- [x] StatsBar renders correctly without prefix concatenation bug
- [x] Footer credits FOURI Team with hyperlink to fouri.in
- [ ] Deployed on Vercel with custom domain (pending user action)
- [ ] Environment variables configured in Vercel (pending user action)
