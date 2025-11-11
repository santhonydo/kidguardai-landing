import { Brain, MessageSquare, Globe, Lock, Zap, Mic } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI Does the Work',
      description: 'No manual blocklists. Our AI categorizes content in real-time using advanced machine learning.',
      highlight: 'Set it once, forget it forever',
      color: 'blue'
    },
    {
      icon: Mic,
      title: 'Just Talk to It',
      description: '"Block social media after 8 PM" → Done. No menus, no confusion. Natural language that just works.',
      highlight: 'No tech skills required',
      color: 'green'
    },
    {
      icon: MessageSquare,
      title: 'Text to Control',
      description: 'Stuck in a meeting? Text to check what your kid is doing or adjust rules on the fly.',
      highlight: 'Two-way SMS agent (unique to us!)',
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'Works Everywhere',
      description: 'Safari, Chrome, Firefox, Edge—we block them all on Mac. Other apps can only handle Safari.',
      highlight: 'True system-wide protection',
      color: 'orange'
    },
    {
      icon: Lock,
      title: '100% Private',
      description: 'Your child\'s data stays on YOUR device. Zero cloud tracking. No selling your family\'s data.',
      highlight: 'On-device AI processing',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Real-time content analysis with zero lag. Your kids won\'t even notice it\'s running.',
      highlight: 'No performance impact',
      color: 'yellow'
    }
  ]

  const colorClasses: Record<string, { bg: string; icon: string; badge: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', badge: 'bg-green-100 text-green-700' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' },
    red: { bg: 'bg-red-50', icon: 'text-red-600', badge: 'bg-red-100 text-red-700' },
    yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', badge: 'bg-yellow-100 text-yellow-700' }
  }

  return (
    <section id="features" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features That{' '}
            <span className="text-blue-600">Actually Make Sense</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the parental control app we wish existed when we were frustrated parents.
            Simple to use, impossible to bypass, and completely private.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color]
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-gray-300"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className={`inline-block ${colors.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
                  {feature.highlight}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Unique selling point callout */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 sm:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            The ONLY Parental Control with Two-Way SMS AI Agent
          </h3>
          <p className="text-lg sm:text-xl text-blue-50 max-w-3xl mx-auto mb-6">
            Competitors only send you alerts. We let you have a conversation. Check usage, adjust rules,
            or pause protection—all via text message. No app required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-sm font-medium">Bark: One-way alerts only</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-sm font-medium">Qustodio: One-way alerts only</p>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 text-blue-600">
              <p className="text-sm font-bold">KidGuard AI: Full two-way control ✓</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
