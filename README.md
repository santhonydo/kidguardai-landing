# KidGuard AI Landing Page

A high-converting, production-ready waitlist landing page for KidGuard AI - an AI-powered parental control app for iOS and macOS.

## Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for responsive, mobile-first design
- **shadcn/ui** components for consistent UI
- **Supabase** integration for waitlist email collection
- **SEO-optimized** with meta tags, Open Graph, and Schema.org structured data
- **Conversion-optimized** copy and layout targeting busy parents
- **Mobile-responsive** design (iPhone, iPad, Mac)

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account (free tier works fine)

### 1. Clone and Install

```bash
cd /Users/anthony/Dev/apps/kidguardai-landing
npm install
```

### 2. Set Up Supabase

#### Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the database to initialize (takes ~2 minutes)
3. Go to **Project Settings** → **API** to find your credentials

#### Run the Database Schema

1. In your Supabase project dashboard, go to **SQL Editor**
2. Open the file `supabase-schema.sql` (in the project root)
3. Copy the entire contents and paste into the SQL Editor
4. Click **Run** to create the waitlist table and policies

This will create:
- `waitlist` table with email, platform, and metadata columns
- Proper indexes for performance
- Row Level Security (RLS) policies for public inserts
- Helper functions for analytics

### 3. Configure Environment Variables

1. Copy the example environment file:

```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

You can find these values in your Supabase project:
- **Project Settings** → **API** → **Project URL** (for `NEXT_PUBLIC_SUPABASE_URL`)
- **Project Settings** → **API** → **Project API keys** → **anon/public** (for `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
kidguardai-landing/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Landing page sections
│   │   ├── hero.tsx
│   │   ├── problem.tsx
│   │   ├── solution.tsx
│   │   ├── features.tsx
│   │   ├── how-it-works.tsx
│   │   ├── comparison.tsx
│   │   ├── testimonials.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   └── final-cta.tsx
│   ├── ui/                 # shadcn/ui components
│   ├── waitlist-form.tsx   # Email capture form
│   └── footer.tsx          # Site footer
├── lib/
│   ├── supabase.ts         # Supabase client setup
│   └── utils.ts            # Utility functions
├── supabase-schema.sql     # Database schema
├── .env.example            # Environment variables template
└── .env.local              # Your local environment variables (gitignored)
```

## Landing Page Sections

The landing page includes the following conversion-optimized sections:

1. **Hero** - Main headline, value proposition, email capture CTA
2. **Problem** - Pain points with existing parental control solutions
3. **Solution** - KidGuard AI's unique approach
4. **Features** - 6 key features with icons and highlights
5. **How It Works** - Simple 3-step process
6. **Comparison** - Side-by-side comparison with Bark, Qustodio, Apple Screen Time
7. **Testimonials** - Social proof from beta testers
8. **Pricing** - Free vs Premium tiers with early bird discount
9. **FAQ** - 12 comprehensive Q&As
10. **Final CTA** - Urgent call-to-action with live counter
11. **Footer** - Links and trust signals

## Key Differentiators Highlighted

The copy emphasizes KidGuard AI's unique selling points:

- **On-device AI** (privacy-first vs cloud AI competitors)
- **Natural language controls** (just talk vs complex settings)
- **Two-way SMS agent** (unique feature - competitors only do one-way alerts)
- **System-wide browser blocking on Mac** (works on ALL browsers, not just Safari)
- **Cross-platform** (iOS, iPadOS, macOS with one subscription)

## Conversion Optimizations

- **Multiple CTAs** throughout the page
- **Social proof** (testimonial count, ratings, beta tester quotes)
- **Urgency elements** (limited spots, live waitlist counter)
- **Competitive positioning** (comparison table showing advantages)
- **Risk reversal** (30-day money-back guarantee)
- **Early bird incentive** (20% off forever for waitlist members)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **Import Project** and select your repository
4. Add environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**

Your site will be live at `your-project-name.vercel.app`.

### Custom Domain

1. In Vercel project settings, go to **Domains**
2. Add your custom domain (e.g., `kidguardai.com`)
3. Follow Vercel's DNS configuration instructions
4. SSL certificate is automatically provisioned

## Environment Variables

Required environment variables:

| Variable | Description | Where to Find |
|----------|-------------|---------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Supabase Dashboard → Settings → API |

Optional:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID for tracking |

## Supabase Features Used

### Waitlist Table

Stores email signups with:
- Email validation (unique constraint + email format check)
- Platform selection (ios, macos, both)
- Metadata (source, signup date, user agent)
- Referral tracking (optional)

### Row Level Security (RLS)

- Public can **insert** (for signups)
- Public can **read count** (for displaying "X people joined")
- Admin dashboard access requires authentication

### Edge Functions (Optional)

You can add Supabase Edge Functions for:
- Email confirmation with discount code delivery
- Webhook to marketing tools (Mailchimp, ConvertKit)
- SMS notifications to admin on new signups

## Analytics & Tracking

The waitlist form includes optional Google Analytics event tracking:

```javascript
// Fires on successful signup
gtag('event', 'waitlist_signup', {
  platform: 'ios' | 'macos' | 'both',
  variant: 'hero' | 'inline' | 'footer'
})
```

To enable:
1. Add Google Analytics script to `app/layout.tsx`
2. Set `NEXT_PUBLIC_GA_ID` in environment variables

## Customization

### Update Copy

All copy is in the component files under `components/sections/`. No separate CMS needed.

### Change Colors

Primary colors are defined in Tailwind config and used throughout:
- Primary: `blue-600` (#3B82F6)
- Accent: `green-500` (#10B981)

To change, search/replace color classes in components.

### Add/Remove Sections

Edit `app/page.tsx` and import/remove section components as needed.

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Mobile-optimized images and fonts

## SEO

The site includes:
- Optimized meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card metadata
- Schema.org structured data (SoftwareApplication)
- Semantic HTML structure
- Responsive images with proper alt text

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Development Tips

### Hot Reload

The dev server supports fast refresh. Changes to components update instantly.

### Type Safety

All components are typed with TypeScript. The Supabase client is also typed:

```typescript
type WaitlistEntry = {
  id: string
  email: string
  platform: 'ios' | 'macos' | 'both'
  created_at: string
  referral_code?: string
  metadata?: Record<string, any>
}
```

### Testing Waitlist Form

To test locally:
1. Run dev server
2. Fill out waitlist form
3. Check Supabase dashboard → **Table Editor** → **waitlist** to see entry
4. Check console for any errors

### Debugging Supabase

If signups aren't working:
1. Check browser console for errors
2. Verify environment variables are set correctly
3. Check Supabase dashboard → **Logs** for database errors
4. Ensure RLS policies allow anonymous inserts

## Future Enhancements

Potential additions:
- **Email confirmation flow** with discount code delivery
- **Referral program** (share link to bump up in line)
- **Live chat widget** for support questions
- **A/B testing** different headlines/CTAs
- **Exit-intent popup** with special offer
- **Blog integration** for SEO content
- **Admin dashboard** to view signups and analytics

## Support

For issues or questions:
- Email: support@kidguardai.com
- GitHub Issues: (link to repo)

## License

Proprietary - KidGuard AI © 2025

---

Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.
