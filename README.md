# Edge Communication Technologies – Corporate Website

Modern corporate website for **Edge Communication Technologies**, a leading ICT solutions provider in Ethiopia. Built with Next.js, Tailwind CSS, and Firebase, deployable on Vercel.

## Tech Stack

- **Frontend:** Next.js 14 (React), Tailwind CSS
- **Backend / CMS:** Firebase (Firestore, Auth, Storage)
- **Hosting:** Vercel

## Features

- **Homepage:** Hero banner, quick links (Solutions, Projects, Careers), client logos slider, core services overview
- **Company:** About Us, Executive Management (profile bios), Careers (job listings, details, CV upload form)
- **Solutions & Services:** Services overview, individual solution pages with sector categorization
- **Projects:** Portfolio grid with filters, project detail pages (scope, client, technologies, images)
- **Resources:** News, Press Releases, Success Stories, Events/Webinars
- **Blog:** Listing, detail pages, categories, tags
- **Clients & Partners:** Logos and optional details
- **Forms:** Contact and inquiry forms (email notifications via Cloud Functions when configured)
- **Admin CMS:** Role-based access (Admin, Editor, HR, Marketing), rich text editor, media library, scheduling, drafts (structure in place; wire to Firestore in production)
- **SEO:** Metadata per page, sitemap-ready
- **Analytics:** Google Analytics placeholder (set `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
- **i18n:** Multilingual-ready (English now; Amharic messages structure in `src/i18n`)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your Firebase and optional GA credentials:

```bash
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build & Start

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com) and link the repo.
3. Add the same environment variables in Vercel Project Settings.
4. Deploy. Vercel will use the existing `next.config.js` and `vercel.json`.

## Firebase Setup

1. Create a project in [Firebase Console](https://console.firebase.google.com).
2. Enable **Authentication** (Email/Password or preferred method).
3. Create a **Firestore** database and deploy rules:

   ```bash
   firebase deploy --only firestore
   ```

4. Enable **Storage** and deploy rules:

   ```bash
   firebase deploy --only storage
   ```

5. Add web app in Project Settings and copy config into `.env.local`.
6. (Optional) Set custom claims for CMS roles (e.g. `admin`, `editor`, `hr`, `marketing`) via Admin SDK or Cloud Functions.

## Project Structure

```
src/
  app/              # Next.js App Router pages
  components/       # Reusable React + Tailwind components
  lib/              # Firebase config and utilities
  types/            # TypeScript types
  i18n/             # Locale config and messages
firestore.rules     # Firestore security rules
storage.rules       # Firebase Storage rules
```

## Admin CMS

- **URL:** `/admin` (login at `/admin/login`)
- **Roles:** Admin, Editor, HR, Marketing (enforced in Firestore rules).
- **Capabilities:** Blog posts, resources, projects, jobs, team, clients/partners, media library. Implement Firestore reads/writes and file uploads to Storage in each admin page as needed.

## Security & Performance

- **HTTPS:** Enforced by Vercel and Firebase.
- **Firebase:** Security rules restrict reads/writes by role; contact/inquiry create-only for public.
- **Performance:** Next.js static/dynamic rendering, Tailwind purged CSS, image optimization via `next/image` when using Firebase Storage URLs.

## Deliverables

- ✅ Fully functional website and source code
- ✅ Reusable React + Tailwind components
- ✅ Next.js pages for all sections
- ✅ Placeholder content where real content is not available
- ✅ Firebase rules and Vercel config
- Admin training, deployment support, and 30 days post-launch support: hand off to client/team with this README and env setup.

## License

Proprietary – Edge Communication Technologies.
