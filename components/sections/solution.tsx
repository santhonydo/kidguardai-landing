import { Shield, Sparkles, CheckCircle } from 'lucide-react'

export function Solution() {
  const benefits = [
    'AI categorizes content in real-time—no manual blocklists to maintain',
    'Works across ALL browsers on Mac (Safari, Chrome, Firefox, Edge)',
    "Control everything via text message when you're away from home",
    'All AI runs on your devices—zero cloud tracking or data collection'
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Shield className="w-24 h-24 text-white" />
                  </div>
                  {/* Sparkle effect */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/4 left-0 bg-white rounded-lg shadow-lg px-4 py-3 text-sm font-medium animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Safari blocked</span>
                </div>
              </div>
              <div className="absolute top-1/2 right-0 bg-white rounded-lg shadow-lg px-4 py-3 text-sm font-medium animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Chrome blocked</span>
                </div>
              </div>
              <div className="absolute bottom-1/4 left-1/4 bg-white rounded-lg shadow-lg px-4 py-3 text-sm font-medium animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Firefox blocked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Copy */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">The Solution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet KidGuard AI: Protection{' '}
              <span className="text-blue-600">Powered by On-Device AI</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Finally, a parental control solution that actually works—and doesn't require a
              computer science degree to set up. Just tell it what you want in plain English,
              and our AI handles the rest.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-left">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-lg px-6 py-4">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Privacy-First Promise</p>
                <p className="text-sm text-gray-600">Your data never leaves your devices. Period.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
