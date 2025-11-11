import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'KidGuard AI - AI-Powered Parental Control'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          backgroundImage: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* Shield Logo */}
          <div
            style={{
              fontSize: '120px',
              marginBottom: '40px',
            }}
          >
            🛡️
          </div>

          {/* Brand Name */}
          <div
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            KidGuard AI
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '36px',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            AI-Powered Parental Control for iOS & Mac
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              ✓ On-Device AI
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              ✓ Natural Language
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              ✓ SMS Control
            </div>
          </div>

          {/* Early Access Badge */}
          <div
            style={{
              marginTop: '40px',
              backgroundColor: 'rgba(16, 185, 129, 1)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '28px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Early Access: $79/year - 20% off forever!
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
