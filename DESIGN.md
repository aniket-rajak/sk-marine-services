# Design Document — Shree Krishna Marine Motor Servicing

## 1. System Architecture

```
Browser → Next.js 16 (App Router) → Server Components (SSG)
                                        │
                          ┌─────────────┼─────────────┐
                          ↓             ↓             ↓
                   src/data/*.ts   Email API     next/image CDN
                   (static content) (Nodemailer)  (Unsplash + others)
```

The site is fully static (SSG) with a single dynamic API endpoint for the contact form. No database, no CMS.

## 2. Tech Stack

| Layer | Technology | Version | Notes |
|-------|------------|---------|-------|
| Framework | Next.js | 16.2.9 | App Router, SSG with SSR fallback |
| Language | TypeScript | 5.x | Strict mode |
| Styling | Tailwind CSS | v4 | CSS-first configuration |
| Animation | Framer Motion | 12+ | Page transitions, scroll reveal, hover effects |
| Icons | Lucide React | latest | All icons via tree-shakeable imports |
| Forms | React Hook Form + Zod | latest | Client + server validation |
| Email | Nodemailer | latest | SMTP via Hostinger |
| Rate Limiting | In-memory Map | — | 5 req/min per IP |
| Image CDN | Unsplash (+ others) | — | images.unsplash.com, static.cdnlogo.com, etc. |

## 3. Data Model

### TypeScript Interfaces (src/types/index.ts)

```
ProductData     — id, name, category, description, image, specs, etc.
ServiceData     — id, title, description, icon, features
ProcessStep     — step, title, description, image
MaintenancePackage — id, name, price, description, features, isPopular
GalleryImage    — id, src, alt, width, height, category
Testimonial     — id, name, role, content, avatar, rating
BrandLogo       — id, name, src, alt
SiteConfig      — name, phone, email, address, social links, etc.

ArtStatueCategory     — id, name, description, image, count
ArtStatuePortfolioItem — id, title, category, description, image, dimensions, client
ArtStatueService       — id, title, description, icon, features
ArtStatueProcessStep   — step, title, description, image
```

### Data Files (src/data/)

No database — all content stored as typed TypeScript arrays/objects.

## 4. API Design

### Endpoints
| Method | Path | Description | Auth | Rate Limit |
|--------|------|-------------|------|------------|
| POST | `/api/contact` | Submit contact/inquiry form | None | 5/min/IP |

### POST /api/contact
- **Body**: `{ name, phone, email, serviceType, message }` (Zod validated)
- **Success**: Returns `{ success: true }` — always (even if email fails)
- **Failure (validation)**: Returns `{ error: string }` with 400
- **Failure (rate limit)**: Returns `{ error: "Too many requests" }` with 429
- **Email flow**: Sends notification to owner + confirmation to customer via Nodemailer

## 5. UI/UX Design

### Pages
| Route | Layout | Key Components |
|-------|--------|----------------|
| `/` | Full-width hero + sections | HeroSection, StatsBar, BrandShowcase, FeaturedServices, TestimonialCarousel, TrustSection, ArtStatuePromo, CTASection |
| `/about` | 2-column split sections | CompanyStory, TechnicianProfile, MissionVision, Timeline |
| `/products` | Grid with filtering | SearchBar, CategoryTabs, ProductCard grid, InquiryModal |
| `/services` | Card grid + pricing | ServiceCard grid, MaintenancePackages, ServiceProcess, EmergencyBanner |
| `/art-statues` | Full-width hero + sections | ArtStatueHero, ArtStatueStats, ArtStatueCategories, ArtStatueServices, ArtStatuePortfolio, ArtStatueProcess, ArtStatueCTA |
| `/gallery` | Masonry columns | CategoryTabs, masonry grid, Lightbox |
| `/contact` | 2-column form + info | ContactForm, GoogleMapsEmbed, BusinessCard, WhatsAppCTA |

### Component Tree
```
App
├── Navbar (sticky, scroll-aware, 1128px hamburger breakpoint)
├── PageTransition (AnimatePresence wrapper)
│   ├── HomePage
│   │   ├── HeroSection
│   │   ├── StatsBar
│   │   ├── BrandShowcase
│   │   ├── FeaturedServices
│   │   ├── TestimonialCarousel
│   │   ├── TrustSection
│   │   ├── ArtStatuePromo
│   │   └── CTASection
│   ├── AboutPage
│   │   ├── CompanyStory
│   │   ├── TechnicianProfile
│   │   ├── MissionVision
│   │   └── Timeline
│   ├── ProductsPage
│   │   ├── SearchBar + CategoryTabs
│   │   ├── ProductCard grid
│   │   └── InquiryModal
│   ├── ServicesPage
│   │   ├── ServiceCard grid
│   │   ├── MaintenancePackages
│   │   ├── ServiceProcess
│   │   └── EmergencyBanner
│   ├── ArtStatuesPage
│   │   ├── ArtStatueHero
│   │   ├── ArtStatueStats
│   │   ├── ArtStatueCategories
│   │   ├── ArtStatueServices
│   │   ├── ArtStatuePortfolio
│   │   ├── ArtStatueProcess
│   │   └── ArtStatueCTA
│   ├── GalleryPage
│   │   ├── CategoryTabs
│   │   ├── Masonry grid
│   │   └── Lightbox
│   └── ContactPage
│       ├── ContactForm
│       ├── BusinessCard
│       └── WhatsAppCTA
├── Footer (links, contact, FOURI credit)
├── WhatsAppButton (floating, fixed)
└── Loader (initial + route change overlay)
```

### Color Palette
- **Navy**: 900 (#0a1628), 800 (#0f1f3d), 700 (#152d5e), 600 (#1e3d7a), 500 (#2d5a8e), 400 (#5a7fa8), 300 (#7aa0c2), 200 (#aac4db), 100 (#d4e2f0), 50 (#eaf2f9)
- **Gold**: 600 (#b8860b), 500 (#d4a017), 400 (#e6b422), 300 (#f0c940), 200 (#f5db7a), 100 (#faedb3), 50 (#fdf6e0)
- **Teal/Accent**: (#14a3a3)

### Typography
- **Font**: Inter (via next/font)
- **Scale**: 12px → 72px responsive

## 6. Data Flow

```
User Action → Client Component → API Route → Nodemailer → SMTP
    ↑              |                 |
    |              ↓                 ↓
    |         UI updates      Success response
    └─────────────────────────────────┘
```

1. All page content read from `src/data/*.ts` — no async data fetching
2. Contact form uses `react-hook-form` → serializes to JSON → `fetch POST /api/contact`
3. API route validates with Zod → rate-limit check → Nodemailer → JSON response
4. Product inquiry modal reuses same `/api/contact` endpoint
5. Images served through `next/image` with configured remote patterns

## 7. Security Design

- No secrets in code — all credentials via environment variables (.env.local)
- Zod validation on both client and server
- Rate limiting: 5 requests/min per IP (in-memory Map)
- Email addresses validated server-side
- Nodemailer uses SMTP with SSL (port 465)
- CORS handled by Next.js API routes (same-origin only)
- .env.local in .gitignore
- No user accounts, no database, no stored PII

## 8. Design Decisions

| Decision | Rationale |
|----------|-----------|
| Static content in TS files | No database needed for this scope; simpler deployment |
| SSG for all pages | Content rarely changes; instant page loads |
| Webpack over Turbopack | Windows App Control blocks native SWC binary |
| Always 200 on contact form | Prevents user confusion from transient email failures |
| Separate Art & Statues data/component tree | Clean isolation from marine content; can be extracted later |
| 1128px hamburger breakpoint | Custom breakpoint to avoid premature menu collapse on tablets |
| In-memory rate limiting | Sufficient for expected traffic; no Redis dependency |
| Unsplash + other CDNs | Reliable free image hosting with `next/image` optimization |
