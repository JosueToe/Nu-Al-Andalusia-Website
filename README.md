# Nu Al Andalusia Website

A modern, redesigned website for Nu Al Andalusia built with Next.js 14+, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **CMS**: Sanity.io (headless CMS for volunteer portal)
- **Deployment**: Netlify with continuous deployment from GitHub
- **Forms**: Netlify Forms
- **Authentication**: NextAuth.js (for volunteer dashboard)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   ├── about/             # About Us page
│   ├── services/          # Services page
│   ├── team/              # Our Team page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── home/              # Homepage sections
├── public/                # Static assets
└── Task.md                # Project requirements
```

## Design System

### Colors
- **Deep Teal**: #1A5F7A (Primary CTAs, navigation)
- **Rich Gold**: #C9A961 (Accents, highlights)
- **Navy Blue**: #0F2841 (Text, footer)
- **Cream**: #F5F0E8 (Alternating backgrounds)
- **Warm Gray**: #6B6B6B (Body text)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## Deployment

### Netlify Setup

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add environment variables (if needed)
4. Deploy!

### Environment Variables

Create a `.env.local` file for local development:

```env
# Sanity.io (when configured)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# NextAuth.js (when configured)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Modern JAMstack architecture
- ✅ SEO optimized
- ✅ Accessibility features (WCAG 2.1 AA)
- ✅ Performance optimized
- ⏳ Sanity.io CMS integration (pending)
- ⏳ NextAuth.js authentication (pending)
- ⏳ Netlify Forms integration (pending)

## License

Copyright © 2026 Nu Al Andalusia - All Rights Reserved.

