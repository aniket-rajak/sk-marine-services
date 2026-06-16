# Project Tracker — Shree Krishna Marine Motor Servicing

## Status Legend
- 🟢 Completed
- 🟡 In Progress
- 🔴 Not Started
- ⚫ Blocked
- 🔵 On Hold

## Milestones

| Milestone | Target Date | Status | Owner | Notes |
|-----------|-------------|--------|-------|-------|
| Project Scaffolding | Done | 🟢 | Dev | Next.js 16 + Tailwind v4 + TypeScript |
| Core Pages (6 pages) | Done | 🟢 | Dev | Home, About, Products, Services, Gallery, Contact |
| Contact API | Done | 🟢 | Dev | Nodemailer SMTP + rate limiting + Zod validation |
| Animations & Transitions | Done | 🟢 | Dev | Framer Motion page transitions + marine loader |
| India-Focused Imagery | Done | 🟢 | Dev | All Unsplash photos replaced with Indian locations/faces |
| Art & Statues Division | Done | 🟢 | Dev | Full route + 7 section components + homepage promo + cross-site integration |
| Responsive Audit & Fixes | Done | 🟢 | Dev | 15 fixes across 12 files, 27 issues catalogued |
| Brand Logo & Image Fixes | Done | 🟢 | Dev | 3 broken Wikimedia logos → static.cdnlogo.com; all brand images verified |
| Navigation UX | Done | 🟢 | Dev | cursor-pointer globally + route-change loader + 1128px hamburger breakpoint |
| Documentation | Done | 🟢 | Dev | README, TRACKER, IMPLEMENTATIONPLAN, DESIGN, PRD updated |
| Deployment | Pending | 🔴 | User | GitHub → Vercel + Hostinger DNS |

## Task Tracker

| ID | Task | Owner | Priority | Status | Due Date | Notes |
|----|------|-------|----------|--------|----------|-------|
| T01 | Scaffold Next.js 16 app (App Router, TS, Tailwind v4) | Dev | High | 🟢 | Done | |
| T02 | Install dependencies | Dev | High | 🟢 | Done | framer-motion, lucide-react, react-hook-form, zod, nodemailer |
| T03 | Create type definitions (src/types/) | Dev | High | 🟢 | Done | ProductData, ServiceData, GalleryImage, Testimonial, ArtStatue types, etc. |
| T04 | Build shared UI components (Button, Card, Input, etc.) | Dev | High | 🟢 | Done | 10 components in src/components/ui/ |
| T05 | Build layout components (Navbar, Footer, Loader, WhatsApp) | Dev | High | 🟢 | Done | Responsive navbar with 1128px hamburger breakpoint |
| T06 | Create data files (products, services, gallery, testimonials, site, fiber-statues) | Dev | High | 🟢 | Done | TypeScript data in src/data/ |
| T07 | Build Home page (Hero, Stats, Brands, Services, Testimonials, Trust, CTA, ArtStatuePromo) | Dev | High | 🟢 | Done | Full hero with India harbor background + Art Statue promo section |
| T08 | Build About page (Company story, Technician, Mission/Vision, Timeline) | Dev | High | 🟢 | Done | Dual business mention (marine + fiber statues) |
| T09 | Build Products page (Filters, search, cards, inquiry modal) | Dev | High | 🟢 | Done | Category filter + search + inquiry modal |
| T10 | Build Services page (Service cards, packages, process) | Dev | High | 🟢 | Done | |
| T11 | Build Gallery page (Masonry, filters, lightbox) | Dev | High | 🟢 | Done | |
| T12 | Build Contact page (Form, map, business card, WhatsApp) | Dev | High | 🟢 | Done | Google Maps iframe embed |
| T13 | Implement Contact API route | Dev | High | 🟢 | Done | Zod + rate limiting + Nodemailer |
| T14 | Add page transitions (AnimatePresence) | Dev | Medium | 🟢 | Done | PageTransition with content fade + loader overlay |
| T15 | Replace all images with India-focused Unsplash photos | Dev | High | 🟢 | Done | Mumbai harbor, Kolkata boats, Kerala fishermen |
| T16 | Add cursor-pointer to all interactive elements | Dev | Medium | 🟢 | Done | Global CSS rule + Card component |
| T17 | Create loading.tsx / initial splash loader | Dev | Medium | 🟢 | Done | Marine engine startup animation |
| T18 | Create ScrollReveal, SectionHeading, Toast components | Dev | Medium | 🟢 | Done | ScrollReveal now passes className for h-full |
| T19 | Add JSON-LD structured data | Dev | Medium | 🟢 | Done | LocalBusiness schema |
| T20 | Add SEO metadata & Open Graph | Dev | Medium | 🟢 | Done | |
| T21 | Handle Windows SWC binary block | Dev | High | 🟢 | Done | --webpack flag as workaround |
| T22 | Fix product search & brand images | Dev | High | 🟢 | Done | Removed conflicting layout animations; fixed 3 broken Wikimedia CDN URLs |
| T23 | Create Art & Statues Division route & components | Dev | High | 🟢 | Done | /art-statues, 7 sections, data file, 4 new types |
| T24 | Integrate Art & Statues cross-site | Dev | Medium | 🟢 | Done | Nav link, footer, CompanyStory, layout metadata, homepage promo |
| T25 | Fix header hamburger breakpoint to 1128px | Dev | Medium | 🟢 | Done | Used arbitrary Tailwind breakpoints |
| T26 | Fix StatsBar concatenation bug | Dev | Medium | 🟢 | Done | Removed prefix field; 5-column grid; new label |
| T27 | Add 6th service to ArtStatueServices | Dev | Medium | 🟢 | Done | "Packaging & Logistics" for 2×3 grid alignment |
| T28 | Complete responsive audit & fixes | Dev | Medium | 🟢 | Done | 27 issues catalogued; 15 fixes across 12 files |
| T29 | Implement FOURI Team footer credit | Dev | Low | 🟢 | Done | "Proudly Design and Develop by FOURI Team with Care" with link to fouri.in |
| T30 | Deploy to Vercel | User | High | 🔴 | Pending | Need GitHub push + Vercel import |

## Bugs / Issues

| ID | Description | Severity | Status | Reported By | Assigned To | Notes |
|----|-------------|----------|--------|-------------|-------------|-------|
| B01 | @next/swc-win32-x64-msvc blocked by Windows App Control policy | High | 🟢 | Dev | Dev | Workaround: `--webpack` flag uses WASM bindings |
| B02 | Static chunks 404 on first browser load after clean build | Medium | 🟢 | Dev | Dev | Fixed by pre-compiling all pages before browser access |
| B03 | India-specific Unsplash photo IDs with underscores 404 on CDN | Medium | 🟢 | Dev | Dev | Used Unsplash download redirect to find numeric CDN IDs |
| B04 | Port 3000 conflict on restart | Low | 🟢 | Dev | Dev | Kill stale node processes with taskkill |
| B05 | 3 brand logo URLs (Yamaha, Suzuki, Tohatsu) from Wikimedia 404 | Medium | 🟢 | Dev | Dev | Replaced with static.cdnlogo.com SVGs |
| B06 | Products grid layout + AnimatePresence popLayout conflict | Medium | 🟢 | Dev | Dev | Removed layout prop from grid motion.div, removed redundant wrapper |

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-06-16 | Replaced all Unsplash photos with India-focused imagery (Mumbai harbor, Kolkata boats, Kerala fishermen) | Dev |
| 2026-06-16 | Added global `cursor-pointer` CSS rule + Card component class | Dev |
| 2026-06-16 | Rewrote PageTransition with route-change loader overlay (500ms marine ship animation) | Dev |
| 2026-06-16 | Fixed stale `.next` cache causing chunk 404s — clean rebuild | Dev |
| 2026-06-16 | Discovered numeric CDN IDs via Unsplash download redirect for India photos | Dev |
| 2026-06-16 | Updated TRACKER.md, IMPLEMENTATIONPLAN.md, README.md | Dev |
| 2026-06-16 | Created Art & Statues division: /art-statues route, 7 components, fiber-statues data, 4 new types | Dev |
| 2026-06-16 | Fixed product search: removed conflicting framer-motion layout animations | Dev |
| 2026-06-16 | Fixed brand logos: replaced 3 broken Wikimedia URLs with static.cdnlogo.com SVGs | Dev |
| 2026-06-16 | Fixed header hamburger breakpoint to 1128px using arbitrary Tailwind breakpoints | Dev |
| 2026-06-16 | Fixed StatsBar: removed prefix field, 5-column grid, "States Service Coverage" label | Dev |
| 2026-06-16 | Added 6th Art Statue service "Packaging & Logistics" for 2×3 card alignment | Dev |
| 2026-06-16 | Completed comprehensive responsive audit: 27 issues, 15 fixes across 12 files | Dev |
| 2026-06-16 | Added FOURI Team credit to footer with link to fouri.in | Dev |
