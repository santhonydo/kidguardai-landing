# Polar.sh Preorder Setup Guide

This guide walks you through setting up Polar.sh checkout for KidGuard AI early access preorders.

## Overview

We're using **Polar.sh Quick Checkout** (checkout links) to collect preorders for $79/year early access. This is the simplest implementation - no SDK or API routes needed, just direct links to Polar-hosted checkout pages.

## Prerequisites

- [ ] Polar.sh account created
- [ ] Supabase project set up
- [ ] Landing page deployed

## Step 1: Create Products in Polar.sh

1. Log in to your [Polar.sh dashboard](https://polar.sh/dashboard)

2. Navigate to **Products** → **Create Product**

3. Create the **Premium** product:
   - Name: `KidGuard AI Premium - Early Access`
   - Description: `Unlimited kids & devices, full AI monitoring, 50 SMS/month`
   - Type: `Subscription`
   - Price: `$79.00 USD / year`
   - Billing Period: `Annual`
   - Save the product and **copy the Product ID**

4. Create the **Premium Plus** product:
   - Name: `KidGuard AI Premium Plus - Early Access`
   - Description: `Everything in Premium + unlimited SMS, advanced AI`
   - Type: `Subscription`
   - Price: `$149.00 USD / year`
   - Billing Period: `Annual`
   - Save the product and **copy the Product ID**

## Step 2: Get Checkout URLs

For each product:

1. Go to **Products** → Select your product
2. Click **Create Checkout Link**
3. Configure the checkout:
   - Success URL: `https://your-landing-page.com/success`
   - Cancel URL: `https://your-landing-page.com` (homepage)
   - Allow quantity changes: `No`
   - Collect customer name: `Yes`
   - Collect customer email: `Yes`
4. Copy the **Checkout URL** (looks like: `https://polar.sh/your-org/checkout/prod_xxxxx`)

## Step 3: Update Environment Variables

Add to your `.env.local` file:

```bash
# Polar.sh Checkout URLs
NEXT_PUBLIC_POLAR_CHECKOUT_URL_PREMIUM=https://polar.sh/your-org/checkout/prod_xxxxx
NEXT_PUBLIC_POLAR_CHECKOUT_URL_PREMIUM_PLUS=https://polar.sh/your-org/checkout/prod_yyyyy
```

**Replace** `prod_xxxxx` and `prod_yyyyy` with your actual product checkout URLs from Step 2.

## Step 4: Set Up Supabase Database

Run the SQL script to create the `preorders` table:

```bash
# In your Supabase SQL Editor, run:
cat supabase-schema.sql
```

This creates:
- `preorders` table to track purchases
- `get_preorder_count()` function
- `get_spots_remaining()` function (500 total spots)
- Row Level Security policies

## Step 5: Configure Polar Webhooks (Optional but Recommended)

To automatically track preorders in Supabase:

1. In Polar dashboard, go to **Settings** → **Webhooks**
2. Click **Add Webhook**
3. Enter your webhook URL: `https://your-landing-page.com/api/webhooks/polar`
4. Select events:
   - `checkout.created`
   - `checkout.completed`
   - `subscription.created`
5. Copy the **Webhook Secret**

6. Create the webhook handler (example):

```typescript
// app/api/webhooks/polar/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const body = await req.json()

  // Validate webhook signature (implement validation)

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  if (body.event === 'checkout.completed') {
    await supabase.from('preorders').insert({
      polar_checkout_id: body.data.id,
      polar_customer_id: body.data.customer_id,
      email: body.data.customer_email,
      tier: body.data.product_id.includes('premium-plus') ? 'premium_plus' : 'premium',
      amount_cents: body.data.amount,
      status: 'completed',
      completed_at: new Date().toISOString(),
    })
  }

  return NextResponse.json({ received: true })
}
```

## Step 6: Test the Flow

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your landing page

3. Click "Get Early Access - $79/Year" button

4. You should be redirected to Polar checkout

5. Use a test card (if in Polar test mode):
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits

6. Complete the checkout

7. Verify you're redirected to `/success` page

8. Check Supabase `preorders` table for the new entry (if webhooks configured)

## Step 7: Deploy to Production

1. Update production environment variables:
   ```bash
   # In your hosting platform (Vercel, Netlify, etc.)
   NEXT_PUBLIC_POLAR_CHECKOUT_URL_PREMIUM=https://polar.sh/...
   NEXT_PUBLIC_POLAR_CHECKOUT_URL_PREMIUM_PLUS=https://polar.sh/...
   ```

2. Deploy your landing page

3. Test the live checkout flow

4. Switch Polar products from Test to Live mode (if applicable)

## Troubleshooting

### Checkout button redirects to wrong URL
- **Fix:** Double-check your `.env.local` has the correct Polar checkout URLs
- **Fix:** Restart your dev server after changing environment variables

### Success page not loading
- **Fix:** Ensure you created `/app/success/page.tsx`
- **Fix:** Check that Polar checkout Success URL matches your domain

### Spots counter not updating
- **Fix:** Run the SQL script to create `get_preorder_count()` function
- **Fix:** Verify Supabase environment variables are correct

### Webhooks not working
- **Fix:** Ensure your webhook URL is publicly accessible (not localhost)
- **Fix:** Check Polar webhook logs for errors
- **Fix:** Validate webhook signature in your handler

## FAQ

### Do I need the Polar.sh SDK?
No! We're using Quick Checkout (checkout links), so you only need the URLs. The SDK is optional for advanced features.

### Can users pay monthly instead of yearly?
Yes, create separate monthly products in Polar with different pricing, then add more checkout buttons.

### How do I handle refunds?
Refunds are processed through the Polar.sh dashboard. The webhook will notify your app when a refund occurs.

### What about taxes?
Polar.sh handles all tax calculation, collection, and remittance automatically as a Merchant of Record.

### How do I track conversions in Google Analytics?
The `PolarCheckoutButton` component already includes Google Analytics event tracking (`begin_checkout` event).

## Support

- **Polar.sh docs:** https://docs.polar.sh
- **Supabase docs:** https://supabase.com/docs
- **Issues:** File an issue in the GitHub repo

---

**Last Updated:** November 2025
