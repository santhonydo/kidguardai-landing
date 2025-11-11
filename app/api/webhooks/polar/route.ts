import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client with secret API key for write access
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    console.log('Polar webhook received:', JSON.stringify(body, null, 2))

    const eventType = body.event || body.type

    // Handle order.created or order.paid events (successful purchase)
    if (eventType === 'order.created' || eventType === 'order.paid') {
      const data = body.data || body

      // Extract order information
      const orderId = data.id
      const checkoutId = data.checkout_id
      const customerId = data.customer_id
      const email = data.customer_email || data.email || data.customer?.email
      const amount = data.amount || data.total_amount
      const productId = data.product_id

      // Determine tier based on product or amount
      let tier = 'premium'
      if (amount >= 14900) { // $149 or more = Premium Plus
        tier = 'premium_plus'
      }

      // Insert into preorders table
      const { data: insertedData, error } = await supabase
        .from('preorders')
        .insert({
          polar_checkout_id: checkoutId || orderId,
          polar_customer_id: customerId,
          email: email,
          tier: tier,
          amount_cents: amount,
          currency: data.currency || 'USD',
          status: 'completed',
          completed_at: new Date().toISOString(),
          metadata: {
            order_id: orderId,
            product_id: productId,
            webhook_received_at: new Date().toISOString(),
            event_type: eventType,
            raw_data: data
          }
        })

      if (error) {
        console.error('Supabase insert error:', error)
        return NextResponse.json(
          { error: 'Failed to save preorder', details: error.message },
          { status: 500 }
        )
      }

      console.log('Preorder saved successfully:', insertedData)

      // Send confirmation email
      try {
        const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customerEmail: email,
            customerName: data.customer_name || data.customer?.name,
            orderId: orderId,
            amount: (amount / 100).toFixed(0), // Convert cents to dollars
            tier: tier,
          }),
        })

        if (!emailResponse.ok) {
          console.error('Failed to send confirmation email:', await emailResponse.text())
        } else {
          console.log('Confirmation email sent successfully')
        }
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError)
        // Don't fail the webhook if email fails
      }

      return NextResponse.json({ received: true, saved: true, event: eventType })
    }

    // Handle checkout.created event (checkout initiated but not paid yet)
    if (eventType === 'checkout.created') {
      const data = body.data || body

      console.log('Checkout created:', data.id)
      // You can track checkout initiations here if needed

      return NextResponse.json({ received: true, type: 'checkout_created' })
    }

    // Handle subscription.created event (if using subscriptions)
    if (eventType === 'subscription.created') {
      const data = body.data || body

      console.log('Subscription created:', data)
      // You can add subscription-specific logic here if needed

      return NextResponse.json({ received: true, type: 'subscription_created' })
    }

    // For other events, just acknowledge receipt
    console.log('Unhandled webhook event:', eventType)
    return NextResponse.json({ received: true, event: eventType })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Also handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    status: 'Polar webhook endpoint is active',
    endpoint: '/api/webhooks/polar',
    methods: ['POST']
  })
}
