# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby-based marketing website for Agency AI, an AI-powered marketing automation platform for e-commerce businesses. The site is deployed on Vercel and includes analytics tracking (PostHog, Reddit Pixel, custom analytics), waitlist/lead capture forms, and pricing information.

## Development Commands

```bash
# Start development server (runs on http://localhost:8000)
npm run develop
# or
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Clean Gatsby cache and public directory (run this if you encounter build issues)
npm run clean

# Format code with Prettier
npm run format
```

## Architecture

### Tech Stack
- **Framework**: Gatsby 5 (React-based static site generator)
- **Styling**: Tailwind CSS + custom CSS modules
- **Analytics**: PostHog (client-side), custom analytics script, Reddit Pixel
- **Deployment**: Vercel
- **Form Handling**: Contact forms POST to external Cloudflare Worker endpoint (`/api/send-email/` proxied via `vercel.json`)

### Key Gatsby Configuration Files

- **gatsby-config.js**: Site metadata, plugin configuration, sitemap/robots.txt settings
- **gatsby-browser.js**: Client-side initialization, font imports, PostHog setup in `onClientEntry`
- **gatsby-ssr.js**: Server-side rendering config, analytics script injection via `onRenderBody`
- **gatsby-node.js**: Programmatic page creation (currently creates `/using-dsg` template page)

### Directory Structure

```
src/
├── components/        # Reusable React components
│   ├── header.js      # Site header with navigation
│   ├── footer.js      # Site footer
│   ├── seo.js         # SEO/meta tags component (uses GraphQL for site metadata)
│   ├── layout.js      # Basic layout wrapper (note: most pages use custom layouts)
│   ├── free-audit.js  # Lead capture form with validation
│   ├── waitlist-card.js # Waitlist signup component
│   └── pricing.js     # Pricing tiers/plans component
├── pages/             # Gatsby pages (file-based routing)
│   ├── index.js       # Homepage
│   ├── aboutus.js     # About page
│   ├── contactus.js   # Contact page
│   ├── pricing.js     # Pricing page
│   ├── vision.js      # Vision/mission page
│   └── privacy-policy.js # Privacy policy
├── templates/         # Page templates for programmatic pages
├── images/            # Static images processed by gatsby-plugin-image
├── styles/            # Global styles
└── utils/
    └── analytics.js   # PostHog tracking helper
```

### Page Structure Pattern

Most pages in this project do NOT use the `layout.js` component. Instead, they follow this pattern:

```jsx
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const PageName = () => {
  return (
    <>
      <Seo title="Page Title" />
      <Helmet>{/* Additional scripts if needed */}</Helmet>
      <Header />
      {/* Page content */}
      <Footer />
    </>
  )
}
```

### SEO Component Usage

The `Seo` component accepts these props:
- `title`: Page title (appended to site title)
- `description`: Meta description (falls back to site description)
- `image`: OG image path (falls back to default `/laptop-mobile-screengrab.png`)

It automatically pulls site metadata from `gatsby-config.js` via GraphQL.

### Analytics Implementation

Three analytics systems are integrated:

1. **PostHog**: Initialized in `gatsby-browser.js` via `onClientEntry`, tracked via `src/utils/analytics.js`
2. **Custom Analytics**: Script injected in `gatsby-ssr.js` (datafa.st)
3. **Reddit Pixel**: Script injected in `gatsby-ssr.js`

Use the analytics helper for tracking events:
```js
import track from "../utils/analytics"
track("event_name", { custom_property: "value" })
```

### Form Handling

Contact forms (in `free-audit.js`, `waitlist-card.js`, etc.) POST to `/api/send-email/`, which is proxied to a Cloudflare Worker at `https://curly-sound-1247.devops-dce.workers.dev` (configured in `vercel.json`).

Forms include:
- Client-side validation
- Honeypot fields for bot detection
- Loading states and error handling

### Styling Approach

- **Tailwind CSS**: Primary utility-first styling (configured in `tailwind.config.js`)
- **Custom CSS**: Page-specific stylesheets (e.g., `homestyles.css`, `pricingstyles.css`)
- **Font**: Inter (loaded via @fontsource in `gatsby-browser.js`, configured as default sans in Tailwind)
- **Icons**: Font Awesome (imported in pages that use it)

### Image Handling

Images in `src/images/` are processed by `gatsby-plugin-sharp` and `gatsby-plugin-image`. Import and use with Gatsby's image components for optimization.

### Environment Variables

Check `.env` for environment-specific configuration (PostHog keys, API endpoints, etc.). Variables prefixed with `GATSBY_` are available in browser code.

## Common Gotchas

- **GraphQL queries**: Many components use `useStaticQuery` to fetch site metadata. Changes to `gatsby-config.js` `siteMetadata` require a dev server restart.
- **Cache issues**: Run `npm run clean` if you encounter stale data or build problems.
- **Page routing**: Gatsby uses file-based routing from `src/pages/`. File name = route (e.g., `aboutus.js` → `/aboutus`).
- **External form endpoint**: Forms don't use Gatsby Functions or serverless functions in this repo—they POST to an external Cloudflare Worker.
