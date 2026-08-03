
Website for **Khawaja Hospital Eye Care & Eyewear**, led by Dr. Muhammad Asmat Rasheed (Lecturer, The University of Lahore) — Main Feroz Pur Road, Kahna Nau, Lahore.

Built with TanStack Start (React 19), Tailwind CSS 4, and shadcn/ui components.

## Tech Stack

- **Framework:** TanStack Start + TanStack Router (file-based routing)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui (Radix primitives)
- **Forms:** React Hook Form + Zod
- **Build:** Vite 8, Nitro
- **Package manager:** Bun

## Project Structure

```
src/
├── routes/          # File-based routes (index, book, location, tour, treatments)
├── components/       # Header, Footer, WhatsAppButton, site.tsx, ui/ (shadcn)
├── lib/
│   ├── clinic.ts     # Clinic info: name, doctor, phone, address, WhatsApp link
│   └── utils.ts
├── hooks/
├── router.tsx
├── server.ts
└── start.ts
public/
└── images/           # doctor, hero, location, treatments, tour
```

## Pages

- **Home (`/`)** — Hero, services overview, testimonials
- **Book (`/book`)** — Consultation booking via WhatsApp
- **Location (`/location`)** — Address, map, directions
- **Treatments (`/treatments`)** — Services offered
- **Tour (`/tour`)** — Facility/hospital tour

## Getting Started

```bash
bun install
bun dev        # start dev server
bun run build  # production build
bun run preview
```

## Key Config

Clinic details (name, doctor, phone, address, hours, WhatsApp number) are centralized in `src/lib/clinic.ts` — update here to change contact info sitewide.

WhatsApp is the primary booking channel (`WhatsAppButton.tsx`, floating action button on all pages).

## Deployment

Deployed via Cloudflare Workers (webstudio880 stack) — see `wrangler.jsonc` for config.
