import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EarlyAccessConfirmationEmail } from '@/emails/early-access-confirmation'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { customerEmail, customerName, orderId, amount, tier } = body

    // Validate required fields
    if (!customerEmail || !orderId || !amount || !tier) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'KidGuard AI <onboarding@resend.dev>'

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [customerEmail],
      subject: `Welcome to KidGuard AI! Your ${tier === 'premium' ? 'Premium' : 'Premium Plus'} Early Access is Confirmed`,
      react: EarlyAccessConfirmationEmail({
        customerName,
        customerEmail,
        orderId,
        amount,
        tier,
      }),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)
    return NextResponse.json({ success: true, emailId: data?.id })

  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Email sending failed', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
