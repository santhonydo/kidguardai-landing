import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface EarlyAccessConfirmationEmailProps {
  customerName?: string
  customerEmail: string
  orderId: string
  amount: string
  tier: 'premium' | 'premium_plus'
}

export const EarlyAccessConfirmationEmail = ({
  customerName = 'Valued Customer',
  customerEmail,
  orderId,
  amount,
  tier,
}: EarlyAccessConfirmationEmailProps) => {
  const previewText = `Welcome to KidGuard AI! Your ${tier === 'premium' ? 'Premium' : 'Premium Plus'} early access is confirmed.`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={header}>
            <Heading style={logoText}>🛡️ KidGuard AI</Heading>
            <Text style={tagline}>AI-Powered Parental Control</Text>
          </Section>

          {/* Success Icon */}
          <Section style={heroSection}>
            <div style={successIcon}>✓</div>
            <Heading style={h1}>Welcome to KidGuard AI!</Heading>
            <Text style={heroText}>
              Your early access spot is secured. You've locked in the{' '}
              <strong style={{ color: '#10b981' }}>${amount}/year lifetime price</strong> — saving 20% forever!
            </Text>
          </Section>

          {/* Order Details */}
          <Section style={orderSection}>
            <Heading as="h2" style={h2}>
              Order Confirmation
            </Heading>
            <table style={orderTable}>
              <tr>
                <td style={labelCell}>Plan:</td>
                <td style={valueCell}>
                  {tier === 'premium' ? 'Premium' : 'Premium Plus'} (Early Access)
                </td>
              </tr>
              <tr>
                <td style={labelCell}>Price:</td>
                <td style={valueCell}>${amount}/year</td>
              </tr>
              <tr>
                <td style={labelCell}>Email:</td>
                <td style={valueCell}>{customerEmail}</td>
              </tr>
              <tr>
                <td style={labelCell}>Order ID:</td>
                <td style={valueCell}>{orderId}</td>
              </tr>
            </table>
          </Section>

          <Hr style={divider} />

          {/* What's Next */}
          <Section style={section}>
            <Heading as="h2" style={h2}>
              📧 What Happens Next
            </Heading>
            <div style={stepContainer}>
              <div style={step}>
                <div style={stepNumber}>1</div>
                <div>
                  <strong>Check your email</strong> — We've sent you this confirmation with your early access details and order receipt.
                </div>
              </div>
              <div style={step}>
                <div style={stepNumber}>2</div>
                <div>
                  <strong>Launch in Q1 2026</strong> — You'll receive download instructions and access credentials when we launch.
                </div>
              </div>
              <div style={step}>
                <div style={stepNumber}>3</div>
                <div>
                  <strong>Join our community</strong> — Get exclusive updates, beta access, and connect with other early adopters.{' '}
                  <Link href="https://t.me/+lMF_fi4bdhE5Y2I5" style={link}>
                    Join our Telegram
                  </Link>
                </div>
              </div>
            </div>
          </Section>

          <Hr style={divider} />

          {/* Benefits */}
          <Section style={section}>
            <Heading as="h2" style={h2}>
              🎁 Your Early Bird Benefits
            </Heading>
            <table style={benefitsTable}>
              <tr>
                <td style={benefitCell}>
                  <strong>📅 Q1 2026 Launch</strong>
                  <br />
                  <span style={benefitSubtext}>Be among the first to use KidGuard AI</span>
                </td>
                <td style={benefitCell}>
                  <strong>💰 20% Off Forever</strong>
                  <br />
                  <span style={benefitSubtext}>Lifetime discount locked in</span>
                </td>
              </tr>
              <tr>
                <td style={benefitCell}>
                  <strong>🚀 Priority Support</strong>
                  <br />
                  <span style={benefitSubtext}>VIP treatment for early supporters</span>
                </td>
                <td style={benefitCell}>
                  <strong>🔒 30-Day Guarantee</strong>
                  <br />
                  <span style={benefitSubtext}>Full refund after launch, no questions</span>
                </td>
              </tr>
            </table>
          </Section>

          <Hr style={divider} />

          {/* Features Reminder */}
          <Section style={section}>
            <Heading as="h2" style={h2}>
              ✨ What You're Getting
            </Heading>
            <ul style={featureList}>
              <li style={featureItem}>✅ Unlimited kids & devices</li>
              <li style={featureItem}>✅ Full AI content filtering</li>
              <li style={featureItem}>✅ Natural language rule creation</li>
              <li style={featureItem}>✅ Screenshot monitoring with AI</li>
              <li style={featureItem}>✅ Real-time alerts & activity reports</li>
              {tier === 'premium' && (
                <li style={featureItem}>✅ 50 SMS commands/month</li>
              )}
              {tier === 'premium_plus' && (
                <>
                  <li style={featureItem}>✅ Unlimited SMS messages</li>
                  <li style={featureItem}>✅ Advanced AI models (Mixtral)</li>
                  <li style={featureItem}>✅ AI-generated weekly reports</li>
                </>
              )}
            </ul>
          </Section>

          <Hr style={divider} />

          {/* CTA Button */}
          <Section style={buttonSection}>
            <Button style={button} href="https://kidguardai.com">
              Visit Dashboard (Coming Q1 2026)
            </Button>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Questions? Reply to this email or contact us at{' '}
              <Link href="mailto:support@kidguardai.com" style={link}>
                support@kidguardai.com
              </Link>
            </Text>
            <Text style={footerText}>
              <Link href="https://kidguardai.com" style={link}>
                🛡️ KidGuard AI
              </Link>{' '}
              • AI-Powered Parental Control
            </Text>
            <Text style={footerSmall}>
              This email was sent to {customerEmail}. If you didn't make this purchase, please contact support immediately.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default EarlyAccessConfirmationEmail

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const header = {
  padding: '32px 24px',
  textAlign: 'center' as const,
  backgroundColor: '#2563eb',
  color: '#ffffff',
}

const logoText = {
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0 0 8px',
  color: '#ffffff',
}

const tagline = {
  fontSize: '14px',
  margin: '0',
  color: '#bfdbfe',
}

const heroSection = {
  padding: '32px 24px',
  textAlign: 'center' as const,
}

const successIcon = {
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  backgroundColor: '#10b981',
  color: '#ffffff',
  fontSize: '32px',
  lineHeight: '64px',
  margin: '0 auto 24px',
  fontWeight: 'bold',
}

const h1 = {
  color: '#1f2937',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 16px',
  lineHeight: '1.3',
}

const heroText = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
}

const orderSection = {
  padding: '0 24px',
  marginBottom: '32px',
}

const h2 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px',
}

const orderTable = {
  width: '100%',
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '16px',
}

const labelCell = {
  color: '#6b7280',
  fontSize: '14px',
  padding: '8px 0',
  width: '30%',
}

const valueCell = {
  color: '#1f2937',
  fontSize: '14px',
  padding: '8px 0',
  fontWeight: '500',
}

const section = {
  padding: '0 24px',
  marginBottom: '32px',
}

const divider = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
}

const stepContainer = {
  marginTop: '16px',
}

const step = {
  display: 'flex',
  marginBottom: '16px',
  alignItems: 'flex-start',
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#4b5563',
}

const stepNumber = {
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  backgroundColor: '#2563eb',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: '28px',
  textAlign: 'center' as const,
  marginRight: '12px',
  flexShrink: 0,
}

const benefitsTable = {
  width: '100%',
  marginTop: '16px',
}

const benefitCell = {
  padding: '12px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  fontSize: '14px',
  color: '#1f2937',
  verticalAlign: 'top',
  border: '8px solid #ffffff',
}

const benefitSubtext = {
  color: '#6b7280',
  fontSize: '13px',
}

const featureList = {
  listStyle: 'none',
  padding: '0',
  margin: '16px 0 0',
}

const featureItem = {
  padding: '8px 0',
  fontSize: '14px',
  color: '#4b5563',
  lineHeight: '1.6',
}

const buttonSection = {
  padding: '0 24px',
  textAlign: 'center' as const,
  marginBottom: '32px',
}

const button = {
  backgroundColor: '#2563eb',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 28px',
}

const footer = {
  padding: '0 24px',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '8px 0',
}

const footerSmall = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '1.6',
  margin: '16px 0 0',
}

const link = {
  color: '#2563eb',
  textDecoration: 'none',
}
