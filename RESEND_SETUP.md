# Resend Email Setup Guide

This guide walks you through setting up Resend for automated email confirmations when customers purchase early access.

## Overview

When a customer completes their purchase through Polar, our webhook automatically:
1. Saves the order to Supabase
2. Sends a beautiful confirmation email using Resend
3. Includes order details, benefits, and next steps

## Prerequisites

- Polar webhook configured (see `POLAR_SETUP.md`)
- Supabase database set up
- Domain name (for production)

## Step 1: Create Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Free tier includes:
   - 100 emails/day
   - 3,000 emails/month
   - Perfect for early access preorders!

## Step 2: Get Your API Key

1. Log in to Resend dashboard
2. Go to **API Keys**
3. Click **Create API Key**
4. Name it: "KidGuard AI Production"
5. Copy the API key (starts with `re_...`)
6. Add to `.env.local`:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   ```

## Step 3: Verify Your Domain (Required for Production)

### Option A: Use a Subdomain (Recommended)
1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter: `mail.kidguardai.com` (or your domain)
4. Add the DNS records provided by Resend:
   - **TXT record** for domain verification
   - **MX records** for receiving bounce notifications
   - **DKIM records** for email authentication
5. Wait for verification (usually 5-10 minutes)

### Option B: Use Resend's Shared Domain (Testing Only)
For testing, you can use `onboarding@resend.dev` as the sender, but this has limitations:
- Lower deliverability
- Can't customize sender name
- Not recommended for production

## Step 4: Update Email Sender Address

Once your domain is verified, update the sender in `/app/api/send-email/route.ts`:

```typescript
from: 'KidGuard AI <noreply@mail.kidguardai.com>',  // Use your verified domain
```

## Step 5: Test the Email Flow

### Local Testing

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Make a test purchase through Polar checkout

3. Check your terminal logs for:
   ```
   Preorder saved successfully
   Confirmation email sent successfully
   ```

4. Check the recipient's inbox for the confirmation email

### Manual Email Test

You can test the email sending directly:

```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "customerEmail": "test@example.com",
    "customerName": "Test User",
    "orderId": "order_test123",
    "amount": "79",
    "tier": "premium"
  }'
```

## Email Template Customization

The email template is located at: `/emails/early-access-confirmation.tsx`

### What's Included:
- ✅ Order confirmation with details
- ✅ 3-step "What Happens Next" timeline
- ✅ Early bird benefits showcase
- ✅ Feature list based on tier
- ✅ 30-day money-back guarantee
- ✅ Call-to-action button
- ✅ Support contact information
- ✅ Mobile-responsive design
- ✅ Beautiful gradients and icons

### Customize Colors:
```typescript
// In emails/early-access-confirmation.tsx
const header = {
  backgroundColor: '#2563eb',  // Change to your brand color
}

const successIcon = {
  backgroundColor: '#10b981',  // Green success icon
}

const button = {
  backgroundColor: '#2563eb',  // CTA button color
}
```

### Add Your Logo:
```typescript
// Replace the text logo with an image
<Img
  src="https://kidguardai.com/logo.png"
  width="120"
  height="40"
  alt="KidGuard AI"
  style={logo}
/>
```

## Production Deployment

### Environment Variables

Set these in your hosting platform (Vercel, Netlify, etc.):

```bash
RESEND_API_KEY=re_your_production_key
NEXT_PUBLIC_SITE_URL=https://kidguardai.com
```

### Update Success Page

The success page automatically shows after purchase. No additional setup needed.

## Monitoring & Analytics

### Resend Dashboard
Monitor email delivery in the Resend dashboard:
- **Emails**: View sent emails and their status
- **Activity**: Track opens, clicks, bounces
- **Analytics**: See delivery rates over time

### Webhook Logs
Check your server logs for webhook processing:
```bash
# View webhook logs
tail -f /var/log/your-app/webhooks.log

# Or use your hosting platform's log viewer
```

## Troubleshooting

### Email Not Sending

**Issue**: Webhook processes but email doesn't send
**Fix**:
- Check `.env.local` has correct `RESEND_API_KEY`
- Verify domain is verified in Resend dashboard
- Check terminal logs for Resend API errors

### Email Goes to Spam

**Issue**: Confirmation emails end up in spam folder
**Fix**:
- Verify your domain in Resend (adds DKIM, SPF records)
- Add DMARC record to your domain DNS
- Avoid spammy words in subject line
- Test email deliverability at [mail-tester.com](https://www.mail-tester.com)

### Wrong Sender Address

**Issue**: Email shows "via resend.dev" or unverified sender
**Fix**:
- Complete domain verification in Resend
- Update `from:` address in `/app/api/send-email/route.ts`
- Wait 10 minutes after DNS changes

### Template Not Rendering

**Issue**: Email shows plain text or broken HTML
**Fix**:
- Ensure `@react-email/components` is installed
- Check for TypeScript errors in template file
- Test template at [react.email](https://react.email)

## Rate Limits

**Free Tier:**
- 100 emails/day
- 3,000 emails/month

**Paid Plans:**
- Pro: $20/month for 50,000 emails
- Scale: Custom pricing for high volume

For 500 early access spots, free tier is sufficient!

## Email Content Best Practices

### Subject Line
Keep it under 50 characters:
✅ "Welcome to KidGuard AI! Early Access Confirmed"
❌ "Your KidGuard AI Premium Plan Early Access Preorder Has Been Successfully Confirmed"

### Preview Text
First 100 characters show in inbox:
✅ "Your early access spot is secured. You've locked in the $79/year lifetime price..."

### Call-to-Action
Make it clear and actionable:
✅ "Join the Community"
✅ "Download App (Q1 2026)"
❌ "Click Here"

## Support

- **Resend Docs:** https://resend.com/docs
- **React Email Docs:** https://react.email/docs
- **Email Testing:** https://www.mail-tester.com

---

**Last Updated:** November 2025
