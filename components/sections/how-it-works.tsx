import { Download, MessageCircle, Shield } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Download,
      title: 'Download on Your Devices',
      description: 'Install KidGuard AI on your child\'s iPhone, iPad, or Mac. Takes less than 2 minutes.',
      visual: 'App Store'
    },
    {
      number: '2',
      icon: MessageCircle,
      title: 'Tell It What to Block',
      description: 'Just speak or type in plain English: "Block social media after 8 PM" or "No violent content".',
      visual: 'Voice Input'
    },
    {
      number: '3',
      icon: Shield,
      title: 'Relax—AI Handles the Rest',
      description: 'Our on-device AI categorizes content in real-time and enforces your rules. You can monitor or adjust via SMS anytime.',
      visual: 'AI Shield'
    }
  ]

  const stepColors = ['blue', 'green', 'purple']
  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-300' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-300' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-300' }
  }

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            So Simple, You'll Be{' '}
            <span className="text-blue-600">Protected in Minutes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            No complex setup wizards. No technical knowledge required. Just three easy steps to peace of mind.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-green-300 to-purple-300" style={{ top: '100px' }} />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 relative">
            {steps.map((step, index) => {
              const colors = colorClasses[stepColors[index]]
              return (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow relative z-10">
                    {/* Step number */}
                    <div className={`absolute -top-6 left-8 w-12 h-12 ${colors.bg} ${colors.border} border-4 rounded-full flex items-center justify-center`}>
                      <span className={`text-xl font-bold ${colors.text}`}>{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 mt-4`}>
                      <step.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>

                    {/* Visual indicator */}
                    <div className={`inline-block ${colors.bg} ${colors.text} px-4 py-2 rounded-lg text-sm font-semibold`}>
                      {step.visual}
                    </div>
                  </div>

                  {/* Arrow connector (mobile only) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Time estimate */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-900 font-semibold">
              Total setup time: Less than 5 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
