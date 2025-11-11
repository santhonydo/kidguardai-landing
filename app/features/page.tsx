import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Brain, MessageSquare, Globe, Lock, Zap, Mic, Shield, Smartphone, Bell, Users, Clock, TrendingUp, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PolarCheckoutButton } from '@/components/polar-checkout-button'

export const metadata: Metadata = {
  title: 'Features - KidGuard AI Parental Control for Mac & iOS',
  description: 'Explore KidGuard AI features: On-device AI filtering, natural language controls, SMS remote access, all-browser blocking on Mac, and privacy-first architecture.',
  keywords: [
    'parental control features',
    'AI content filtering',
    'natural language parental control',
    'SMS remote control',
    'browser blocking mac',
    'on-device AI'
  ],
  alternates: {
    canonical: '/features',
  },
}

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Brain,
      title: 'On-Device AI Content Filtering',
      description: 'Advanced AI analyzes content in real-time, right on your device. No blocklists to maintain, no cloud dependencies.',
      benefits: [
        'Adapts to new threats automatically',
        'Works offline',
        'Zero false positives with context understanding',
        'Faster than cloud-based solutions'
      ],
      color: 'blue'
    },
    {
      icon: Mic,
      title: 'Natural Language Controls',
      description: 'Just talk to it like you would to a person. Say "Block social media after 8 PM on weekdays" and it works.',
      benefits: [
        'No technical knowledge required',
        'Voice or text input',
        'Understands context and intent',
        'Modify rules conversationally'
      ],
      color: 'green'
    },
    {
      icon: MessageSquare,
      title: 'Two-Way SMS Agent',
      description: 'Control everything via text message. Check status, adjust rules, or pause protection—all from any phone.',
      benefits: [
        'Works from any device (even flip phones)',
        'No app installation required',
        'Instant responses',
        'Full conversation history'
      ],
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'System-Wide Browser Blocking',
      description: 'Unlike competitors, we block ALL browsers on Mac: Chrome, Firefox, Safari, Edge, Brave, Opera.',
      benefits: [
        'System-level HTTPS filtering',
        'Works with DNS-over-HTTPS',
        'Blocks VPN bypass attempts',
        'Consistent across all apps'
      ],
      color: 'orange'
    },
    {
      icon: Lock,
      title: '100% Privacy-First Architecture',
      description: 'Your family\'s data never leaves your devices. Zero cloud tracking, no data selling, complete transparency.',
      benefits: [
        'On-device AI processing',
        'No browsing history uploaded',
        'Open-source core components',
        'GDPR & COPPA compliant'
      ],
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Real-time content analysis with zero lag. Your kids won\'t even notice it\'s running.',
      benefits: [
        'No impact on browsing speed',
        'Optimized for Apple Silicon',
        'Background processing',
        'Battery-efficient'
      ],
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Unbypassable Protection',
      description: 'System-level integration means kids can\'t disable it. Requires admin password to remove.',
      benefits: [
        'Prevents uninstall attempts',
        'Blocks known workarounds',
        'Alerts on tampering',
        'Survives OS updates'
      ],
      color: 'indigo'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Sync',
      description: 'Set rules once, applies everywhere. Manage all devices from one dashboard.',
      benefits: [
        'iOS, iPadOS, macOS support',
        'Unlimited devices per family',
        'Cloud sync (optional, encrypted)',
        'Per-device customization'
      ],
      color: 'pink'
    },
    {
      icon: Bell,
      title: 'Smart Alerts & Reports',
      description: 'Get notified about concerning activity. Weekly AI-generated insights about your child\'s digital behavior.',
      benefits: [
        'Real-time violation alerts',
        'Weekly summary reports',
        'AI-detected trends',
        'Customizable notification levels'
      ],
      color: 'teal'
    },
    {
      icon: Users,
      title: 'Multi-Child Support',
      description: 'Different rules for different kids. Age-appropriate settings that grow with your family.',
      benefits: [
        'Unlimited child profiles',
        'Age-based templates',
        'Individual schedules',
        'Shared or separate rules'
      ],
      color: 'cyan'
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'Automatic rule activation based on time, location, or activity. Homework mode, bedtime, weekends.',
      benefits: [
        'Time-based rules',
        'Geofencing support',
        'School hours detection',
        'Weekend vs weekday rules'
      ],
      color: 'amber'
    },
    {
      icon: TrendingUp,
      title: 'Usage Analytics',
      description: 'Understand your child\'s digital habits with beautiful, insightful dashboards.',
      benefits: [
        'Screen time breakdowns',
        'App usage statistics',
        'Website category analytics',
        'Trend identification'
      ],
      color: 'emerald'
    }
  ]

  const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
    red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' },
    yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', border: 'border-yellow-200' },
    indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200' },
    pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200' },
    teal: { bg: 'bg-teal-50', icon: 'text-teal-600', border: 'border-teal-200' },
    cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-600', border: 'border-cyan-200' },
    amber: { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-200' },
    emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-200' }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Sparkles className="w-4 h-4 mr-2" />
              All Features
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features That{' '}
              <span className="text-blue-600">Actually Make Sense</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Everything you need to protect your kids online without the technical headaches.
            </p>

            <PolarCheckoutButton tier="premium" size="lg" />
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => {
                const colors = colorClasses[feature.color]
                return (
                  <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-300 border-2 ${colors.border}`}>
                    <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why These Features Matter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why These Features Matter
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">For Parents</h3>
                <p className="text-gray-700">
                  We built KidGuard AI for busy parents who don't have time to become tech experts.
                  Natural language controls mean you can set up protection in seconds, not hours.
                  SMS control means you can manage everything from any phone, even in meetings or on the go.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">For Privacy</h3>
                <p className="text-gray-700">
                  Unlike competitors who send your family's browsing history to the cloud, KidGuard AI
                  processes everything on your devices. Your child's data stays yours. We can't see it,
                  we don't store it, and we'll never sell it.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">For Effectiveness</h3>
                <p className="text-gray-700">
                  System-level browser blocking means your kids can't bypass protection by switching browsers.
                  On-device AI means no blocklists to maintain—the system adapts automatically to new threats.
                  It just works, reliably, every time.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Join 2,500+ parents who chose KidGuard AI for its powerful features and ease of use.
            </p>
            <PolarCheckoutButton tier="premium" size="lg" className="bg-white text-blue-600 hover:bg-gray-100" />
            <p className="text-blue-100 mt-4">
              Early bird pricing: $79/year (reg. $99) • 30-day money-back guarantee
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
