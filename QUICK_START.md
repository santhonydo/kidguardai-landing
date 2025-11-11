# Quick Start Checklist

Get your KidGuard AI landing page live in 30 minutes.

## Checklist

### 1. Local Setup (5 minutes)

- [ ] Install dependencies
  ```bash
  cd /Users/anthony/Dev/apps/kidguardai-landing
  npm install
  ```

- [ ] Verify build works
  ```bash
  npm run build
  ```
  Should see: "Compiled successfully"

### 2. Supabase Setup (10 minutes)

- [ ] Go to [supabase.com](https://supabase.com) and sign up/login
- [ ] Click "New Project"
- [ ] Fill in details:
  - Name: `kidguardai-waitlist`
  - Password: (save this!)
  - Region: Choose closest to your users
- [ ] Wait 2 minutes for database to initialize

- [ ] Run schema:
  1. In Supabase, click "SQL Editor" (left sidebar)
  2. Copy contents of `supabase-schema.sql`
  3. Paste and click "Run"
  4. Should see: "Success. No rows returned"

- [ ] Get API credentials:
  1. Go to Settings → API
  2. Copy "Project URL"
  3. Copy "anon/public" key

- [ ] Add to `.env.local`:
  ```bash
  cp .env.example .env.local
  # Edit .env.local with your values
  ```

### 3. Test Locally (5 minutes)

- [ ] Start dev server
  ```bash
  npm run dev
  ```

- [ ] Open http://localhost:3000

- [ ] Test waitlist form:
  1. Scroll to hero section
  2. Select platform (iOS/macOS/Both)
  3. Enter email
  4. Click "Join Waitlist"
  5. Should see success message

- [ ] Verify in Supabase:
  1. Go to Supabase → Table Editor
  2. Select "waitlist" table
  3. See your email entry

### 4. Deploy to Vercel (10 minutes)

- [ ] Push to GitHub:
  ```bash
  git add .
  git commit -m "Initial KidGuard AI landing page"
  git push origin main
  ```

- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Click "Import Project"
- [ ] Select your GitHub repo
- [ ] Add environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL` = (from Supabase Settings → API)
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (from Supabase Settings → API)
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes
- [ ] Click "Visit" to see live site

### 5. Optional: Custom Domain

- [ ] In Vercel project → Settings → Domains
- [ ] Add your domain (e.g., `kidguardai.com`)
- [ ] Update DNS records at your registrar:
  - Type: A
  - Name: @
  - Value: (Vercel provides IP)
- [ ] Wait for SSL (automatic, ~5 minutes)

### 6. Content Updates (Before Going Live)

- [ ] Replace placeholder images:
  - Add `/public/og-image.png` (1200x630px)
  - Update hero mockup
  - Add favicon

- [ ] Update copy if needed:
  - Testimonials (currently generic)
  - Waitlist count (hardcoded as 2,347)
  - Launch date (currently Q1 2026)

- [ ] Add real links:
  - Social media (footer)
  - Privacy policy
  - Terms of service
  - Support email

### 7. Post-Launch

- [ ] Set up email automation (optional):
  - Supabase Edge Function
  - Send confirmation with discount code

- [ ] Add analytics (optional):
  - Google Analytics GA4
  - Track waitlist signups

- [ ] Monitor metrics:
  - Signups per day
  - Platform preferences
  - Traffic sources

## Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify `.env.local` has correct Supabase credentials
- Restart dev server

**Build failing?**
- Run `npm install` again
- Delete `.next` folder and rebuild
- Check Node.js version (need 18+)

**Supabase errors?**
- Verify schema ran successfully
- Check RLS policies are enabled
- Ensure anon key (not service key) is used

## Success Criteria

- [ ] Build passes without errors
- [ ] Waitlist form works locally
- [ ] Emails appear in Supabase table
- [ ] Site deployed to Vercel
- [ ] Forms work on live site
- [ ] Mobile responsive (test on phone)

## Next Actions

1. Drive traffic to waitlist
2. Monitor signups
3. Send weekly update emails
4. Plan Q1 2026 launch

---

**Questions?** Email support@kidguardai.com
