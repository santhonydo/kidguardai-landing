# Quick Setup Guide

Get your KidGuard AI landing page running in 10 minutes.

## Step 1: Install Dependencies

```bash
cd /Users/anthony/Dev/apps/kidguardai-landing
npm install
```

## Step 2: Set Up Supabase

### Create Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Choose organization (or create one)
4. Fill in:
   - **Project name**: kidguardai-waitlist
   - **Database password**: (generate strong password)
   - **Region**: Choose closest to your users
5. Click "Create new project" (takes ~2 mins)

### Run Database Schema

1. In Supabase dashboard, click "SQL Editor" (left sidebar)
2. Click "New query"
3. Copy the entire contents of `supabase-schema.sql` from this project
4. Paste into SQL Editor
5. Click "Run" or press Cmd/Ctrl + Enter
6. You should see "Success. No rows returned"

### Get API Credentials

1. In Supabase dashboard, go to "Settings" (gear icon) → "API"
2. Copy two values:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon/public key** (under "Project API keys")

## Step 3: Configure Environment Variables

1. Copy the example file:

```bash
cp .env.example .env.local
```

2. Edit `.env.local` and replace with your values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-very-long-anon-key-here
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 5: Test Waitlist Form

1. Scroll to the hero section
2. Select a platform (iOS, macOS, or Both)
3. Enter an email address
4. Click "Join Waitlist"
5. You should see a success message

### Verify in Supabase

1. Go to Supabase dashboard → "Table Editor"
2. Select "waitlist" table
3. You should see your email entry

## Troubleshooting

### "Invalid API key" error

- Double-check your `.env.local` file has correct values
- Make sure there are no extra spaces or quotes
- Restart dev server (`Ctrl+C` then `npm run dev`)

### "Relation 'waitlist' does not exist"

- The SQL schema didn't run properly
- Go back to Step 2 and re-run the SQL schema

### Form submits but nothing appears in Supabase

- Check browser console (F12) for errors
- Verify RLS policies are enabled (they should be from the schema)
- Try refreshing the Supabase table editor

### Styles look broken

- Run `npm install` again
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check that Tailwind CSS is working (inspect element and see if classes are applied)

## Next Steps

### Deploy to Vercel

1. Push code to GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click "Deploy"

### Add Custom Domain

1. In Vercel project → Settings → Domains
2. Add your domain (e.g., `kidguardai.com`)
3. Update DNS records at your domain registrar (Vercel provides instructions)
4. Wait for SSL certificate (automatic)

### Update Copy

All text is in component files:
- `/components/sections/hero.tsx` - Main headline
- `/components/sections/features.tsx` - Feature descriptions
- `/components/sections/pricing.tsx` - Pricing info
- etc.

### Add Google Analytics (Optional)

1. Get GA4 Measurement ID from Google Analytics
2. Add to `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Add script to `app/layout.tsx` (see README for details)

## Support

Questions? Email support@kidguardai.com
