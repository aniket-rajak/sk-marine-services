# Product Requirements Document — Shree Krishna Marine Motor Servicing

## 1. Overview

A professional business website for **Shree Krishna Marine Motor Servicing**, a Kolkata-based marine motor sales and service center, and its **Art & Statues Division** (fiber statue crafting). The site serves as a digital storefront to showcase services, products, and portfolio, enable customer inquiries, and establish credibility through professional design and India-focused imagery.

## 2. Goals & Objectives

- Establish an authoritative online presence for the marine motor servicing business
- Showcase services, products, and expertise to B2B and B2C customers
- Enable direct customer inquiries via phone, WhatsApp, and contact form
- Showcase the Art & Statues division portfolio to attract government, institutional, and private clients
- Drive phone calls and WhatsApp messages (primary conversion goals)
- Build trust through testimonials, certifications, and company story

## 3. Target Audience

- **Commercial fishing fleet operators** in West Bengal, Odisha, and Northeast India
- **Government contractors** requiring marine motor maintenance for departmental boats
- **Recreational boat owners** in and around Kolkata
- **Marine equipment dealers** and distributors
- **Government agencies** and municipalities needing custom fiber statues
- **Educational institutions, resorts, and cultural centers** seeking sculptures
- **Private individuals** needing custom fiber artwork

## 4. User Stories

- As a fishing boat owner, I want to find a trusted marine motor service center near me
- As a government contractor, I want to verify the company's credentials and experience
- As a boat owner, I want to inquire about repair costs and availability
- As a potential customer, I want to see examples of completed work (gallery)
- As a resort owner, I want to browse fiber statue categories and request a custom quote
- As a municipal authority, I want to view the Art & Statues portfolio and contact for government projects
- As a visitor, I want to easily call or WhatsApp the business from my phone

## 5. Functional Requirements

### Pages & Content
- **Home Page**: Hero section, stats counter, brand logos, featured services, testimonial carousel, trust badges, Art Statue promo, CTA
- **About Page**: Company story with founder profile, technician qualifications, mission/vision, company timeline
- **Products Page**: Product catalog with category filtering and search, inquiry modal per product
- **Services Page**: Service offerings with feature lists, pricing packages, service process timeline, emergency banner
- **Art & Statues Page**: Dedicated route with hero, stats, categories, services, portfolio gallery, crafting process, CTA
- **Gallery Page**: Masonry image grid with category filters and lightbox viewer
- **Contact Page**: Contact form, Google Maps embed, business card, WhatsApp CTA

### Contact System
- Client-side form validation (Zod + React Hook Form)
- Server-side validation (Zod)
- Rate limiting (5 submissions/min per IP)
- Email notification to business owner
- Email confirmation to customer
- Silent failure handling (user always sees success)

### Navigation & UX
- Responsive design (mobile-first)
- Sticky navbar with scroll-aware background
- Mobile hamburger menu at 1128px breakpoint
- Smooth page transitions with loading overlay
- Floating WhatsApp button
- Scroll-triggered reveal animations
- Animated stat counters

### SEO
- JSON-LD structured data (LocalBusiness)
- Open Graph and Twitter card metadata per page
- Sitemap.xml and robots.txt
- Semantic HTML

## 6. Non-Functional Requirements

- **Performance**: Lighthouse score > 90 for all pages
- **Mobile responsiveness**: All pages functional on 320px+ viewports
- **Images**: All images must be India-focused marine content
- **Load time**: Initial load < 3s on 3G; subsequent pages < 1.5s
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Browser support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Uptime**: 99.9% (Vercel platform SLA)
- **Email deliverability**: SMTP via Hostinger with SPF/DKIM records

## 7. Success Metrics

- Contact form submissions per week
- Phone calls generated from website
- WhatsApp chat initiations
- Page views per session
- Bounce rate
- Time on site
- Art & Statues page views and inquiry rate

## 8. Constraints & Assumptions

- No database — all content is static TypeScript files
- No user accounts or authentication system
- No e-commerce/payment processing
- Single API endpoint (/api/contact) for all form submissions
- Windows development environment requires webpack fallback
- Hostinger SMTP for transactional email
- All images served from external CDNs (Unsplash, cdnlogo, Pexels, Pixabay, Wikimedia)
- Content updates require code changes and redeployment
- Business operates from Kolkata, West Bengal, India
- Primary customer base: Eastern India (West Bengal, Odissa, Northeast states)

## 9. Timeline & Milestones

| Milestone | Status | Date |
|-----------|--------|------|
| Project scaffolding | ✅ Complete | 2026-06-16 |
| Core UI components | ✅ Complete | 2026-06-16 |
| Layout & navigation | ✅ Complete | 2026-06-16 |
| All 6 core pages | ✅ Complete | 2026-06-16 |
| Contact API | ✅ Complete | 2026-06-16 |
| India-focused imagery | ✅ Complete | 2026-06-16 |
| Animations & polish | ✅ Complete | 2026-06-16 |
| Art & Statues division | ✅ Complete | 2026-06-16 |
| Responsive audit & fixes | ✅ Complete | 2026-06-16 |
| Vercel deployment | 🔴 Pending | TBD |

## 10. Open Questions

- Should the Art & Statues division have its own separate domain/subdomain in the future?
- Should a blog/news section be added for service updates and project showcases?
- Is a WhatsApp Business API integration needed for automated replies?
- Should the gallery support video content (repair walkthroughs)?
