# RideShare — Carpooling Monorepo

[![CI Monorepo Pipeline](https://github.com/mayurchaudhary750/carpooling/actions/workflows/ci.yml/badge.svg)](https://github.com/mayurchaudhary750/carpooling/actions/workflows/ci.yml)

A multi-portal carpooling platform engineered with Vite, React, TypeScript, TailwindCSS, and Turborepo.

---

## Portals & Architecture

| Portal | Scope | Path | Description |
|---|---|---|---|
| **Passenger** | `carpooling-passenger` | `/` | Ride search, booking, seat reservation, and live trip status |
| **Driver** | `carpooling-driver` | `/driver` | Trip publishing, vehicle setup, passenger requests, and OTP verification |
| **Admin** | `carpooling-admin` | `/admin` | Central operations console, document verification, and analytics |
| **Common** | `carpooling-common` | Shared package | Shared UI components, types, hooks, theme provider, and utilities |

---

## Monorepo Commands

This project uses [Turborepo](https://turbo.build/) and [pnpm](https://pnpm.io/) for workspace management.

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev             # All applications in parallel
pnpm dev:passenger   # Passenger portal only
pnpm dev:driver      # Driver portal only
pnpm dev:admin       # Admin portal only

# Quality Checks
pnpm check-types     # Type-check all packages via TypeScript
pnpm lint            # Lint all packages via ESLint

# Production Build
pnpm build           # Compiles all packages and generates unified ./dist
```

---

## Deployment & Hosting

The project compiles into a **Unified Static Distribution** under `./dist`:
- `dist/index.html` → Passenger app (served at `/`)
- `dist/driver/index.html` → Driver app (served at `/driver`)
- `dist/admin/index.html` → Admin app (served at `/admin`)

Configured for high-performance static hosting via [`vercel.json`](./vercel.json).

