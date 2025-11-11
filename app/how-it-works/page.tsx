import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Download, Shield, MessageSquare, CheckCircle, Zap, Users, Clock, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PolarCheckoutButton } from '@/components/polar-checkout-button'

export const metadata: Metadata = {
  title: 'How KidGuard AI Works - Simple 3-Step Setup for Mac & iOS',
  description: 'Learn how KidGuard AI parental control works. Simple 3-step setup: Download app, speak your rules in plain English, automatic protection. No technical knowledge needed.',
  keywords: [
    'how parental control works',
    'kidguard ai setup',
    'parental control setup guide',
    'easy parental control',
    'natural language parental control'
  ],
  alternates: {
    canonical: '/how-it-works',
  },
}

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: Download,
      title: 'Download & Install',
      description: 'Get KidGuard AI from the App Store (iOS) or download for Mac. Quick 2-minute installation.',
      details: [
        'Available on iPhone, iPad, and Mac',
        'System extension approval (one-time, 30 seconds)',
        'Family Sharing support built-in',
        'Works immediately after setup'
      ],
      color: 'blue'
    },
    {
      number: 2,
      icon: MessageSquare,
      title: 'Tell It What You Want',
      description: 'Just talk to it like a person. Say "Block social media after 8 PM on weekdays" and it works.',
      details: [
        'Voice or text input—your choice',
        'No technical jargon required',
        'Examples: "No violent games", "Block YouTube during homework hours"',
        'AI converts your words into smart rules'
      ],
      color: 'green'
    },
    {
      number: 3,
      icon: Shield,
      title: 'Automatic Protection',
      description: 'KidGuard AI monitors in the background, blocking harmful content and alerting you instantly.',
      details: [
        'Works across ALL browsers (Chrome, Firefox, Safari)',
        'Real-time AI content analysis',
        'SMS alerts when rules are violated',
        'Weekly summary reports'
      ],
      color: 'purple'
    }
  ]

  const howItWorks = [
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'You speak in plain English. Our AI converts your instructions into precise filtering rules.',
      example: '"Block social media after 8 PM" → Creates time-based rule blocking Facebook, Instagram, TikTok, Snapchat after 8 PM every weeknight.'
    },
    {
      icon: Shield,
      title: 'System-Level Filtering',
      description: 'We install a system extension that inspects ALL web traffic—before it reaches any browser.',
      example: 'When your child tries to visit a blocked site, KidGuard AI intercepts the connection and shows a friendly block screen.'
    },
    {
      icon: Zap,
      title: 'On-Device AI Analysis',
      description: 'Every website is analyzed in real-time by AI running on your device—no cloud, no delay.',
      example: 'New social media site launches? Our AI recognizes it instantly without needing a blocklist update.'
    },
    {
      icon: CheckCircle,
      title: 'Smart Alerts',
      description: 'Get notified only when it matters. AI filters out noise and sends you important events.',
      example: 'Repeated attempts to access blocked content? You get an SMS. Casual browsing? No spam.'
    }
  ]

  const useCases = [
    {
      icon: Clock,
      title: 'Bedtime & Homework Hours',
      scenario: 'You want to block distractions during study time and ensure good sleep.',
      solution: 'Say: "Block all social media and games from 7 PM to 9 PM on weeknights." KidGuard AI creates a schedule-based rule that activates automatically.',
      result: 'No more bedtime battles. Your child can still access educational sites, but Instagram, TikTik, and Fortnite are blocked during study hours.'
    },
    {
      icon: Users,
      title: 'Age-Appropriate Content',
      scenario: 'You have kids of different ages and want different rules for each.',
      solution: 'Create separate profiles: "Block mature content for Sarah" and "Allow teen content for Jake." Each gets age-appropriate restrictions.',
      result: 'Your 8-year-old can\'t access teen content, but your 15-year-old has reasonable freedom. One app, customized for each child.'
    },
    {
      icon: TrendingUp,
      title: 'Remote Monitoring',
      scenario: 'You\'re at work and want to check what your kids are doing online.',
      solution: 'Text the KidGuard AI agent: "What is Emma doing?" Get instant updates via SMS.',
      result: 'Peace of mind anywhere. No need to open an app—just text and get a response in seconds.'
    }
  ]

  const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Shield className="w-4 h-4 mr-2" />
              How It Works
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Parental Control That{' '}
              <span className="text-blue-600">Actually Makes Sense</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              No complex settings. No technical jargon. Just tell it what you want in plain English.
            </p>

            <PolarCheckoutButton tier="premium" size="lg" />
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Get Started in 3 Simple Steps
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => {
                const colors = colorClasses[step.color]
                return (
                  <Card key={step.number} className={`p-8 relative border-2 ${colors.border}`}>
                    {/* Step Number Badge */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
                        <span className={`text-2xl font-bold ${colors.icon}`}>{step.number}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mt-6 mb-6`}>
                      <step.icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works Under the Hood */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              The Technology Behind the Magic
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              You don't need to understand this, but here's how KidGuard AI works under the hood.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {howItWorks.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Example:</span> {item.example}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Real-World Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Real-World Use Cases
            </h2>

            <div className="space-y-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-8 border-2 border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Icon & Title */}
                    <div className="md:col-span-3 flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                        <useCase.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
                    </div>

                    {/* Scenario */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Scenario</h4>
                      <p className="text-gray-700">{useCase.scenario}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Solution</h4>
                      <p className="text-gray-700">{useCase.solution}</p>
                    </div>

                    {/* Result */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Result</h4>
                      <p className="text-gray-700">{useCase.result}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose This Approach */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why This Approach Works Better
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Blocklists to Maintain</h3>
                <p className="text-gray-700">
                  Traditional parental controls use lists of blocked websites. New sites pop up every day,
                  and kids find workarounds. KidGuard AI uses real-time AI to understand content—not just
                  match URLs. A new social media site launches tomorrow? Our AI recognizes it automatically.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Language = No Learning Curve</h3>
                <p className="text-gray-700">
                  Most parental control apps have dozens of menus, checkboxes, and settings. You need to
                  understand "content categories", "time zones", and "device profiles." With KidGuard AI,
                  you just talk to it: "Block violent games" or "No social media after bedtime." That's it.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% Privacy by Design</h3>
                <p className="text-gray-700">
                  Competitors send your child's browsing history to the cloud for analysis. We run AI
                  entirely on your devices. Your family's data never leaves your iPhone, iPad, or Mac.
                  We can't see what your kids are doing—only you can.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Try It Yourself?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Join 2,500+ parents protecting their kids with KidGuard AI's intelligent approach.
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
