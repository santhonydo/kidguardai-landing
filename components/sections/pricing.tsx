"use client"

import { Check, Sparkles, Crown } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PolarCheckoutButton } from '@/components/polar-checkout-button'
import { useWaitlistCount } from '@/hooks/useWaitlistCount'

export function Pricing() {
  const { count, isLoading } = useWaitlistCount()
  const TOTAL_SPOTS = 500
  const spotsRemaining = Math.max(0, TOTAL_SPOTS - (count || 0))
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for testing',
      features: [
        '1 child profile',
        '2 devices maximum',
        'Basic AI content filtering',
        'Up to 5 custom rules',
        'Web dashboard access',
        'Community support'
      ],
      limitations: [
        'No SMS AI agent',
        'No screenshot monitoring',
        'No advanced AI models'
      ],
      cta: 'Start Free',
      popular: false,
      color: 'gray'
    },
    {
      name: 'Premium',
      price: '$99',
      period: '/year',
      monthlyPrice: '$9.99/mo if billed monthly',
      originalPrice: '$99',
      earlyBirdPrice: '$79',
      description: 'Best for most families',
      features: [
        'Unlimited kids & devices',
        'Full AI content filtering',
        'Natural language rule creation',
        '50 SMS commands/month',
        'Screenshot monitoring with AI',
        'Real-time alerts',
        'Activity reports & insights',
        'Priority email support'
      ],
      limitations: [],
      cta: 'Join Waitlist',
      popular: true,
      earlyBird: true,
      color: 'blue'
    },
    {
      name: 'Premium Plus',
      price: '$149',
      period: '/year',
      monthlyPrice: '$14.99/mo if billed monthly',
      description: 'For power users',
      features: [
        'Everything in Premium',
        'Unlimited SMS messages',
        'Advanced AI models (Mixtral)',
        'AI-generated weekly reports',
        'Family link (share rules)',
        'Priority phone support',
        'Early access to new features'
      ],
      limitations: [],
      cta: 'Join Waitlist',
      popular: false,
      color: 'purple'
    }
  ]

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent{' '}
            <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            One simple price. Unlimited kids and devices. Start free to test, upgrade when ready.
          </p>
          <p className="text-md text-gray-500 max-w-2xl mx-auto mt-2">
            No hidden fees. No per-kid charges. Cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.popular
                  ? 'border-2 border-blue-600 shadow-xl scale-105'
                  : 'border border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
                  <Crown className="w-3 h-3 mr-1 inline" />
                  Most Popular
                </Badge>
              )}

              {/* Plan header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>

                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period || '/month'}</span>
                </div>

                {plan.monthlyPrice && (
                  <p className="text-sm text-gray-500 mt-2">{plan.monthlyPrice}</p>
                )}

                {plan.earlyBird && plan.earlyBirdPrice && (
                  <div className="mt-3 inline-flex flex-col items-center gap-1">
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                      <Sparkles className="w-4 h-4" />
                      Early Bird: {plan.earlyBirdPrice}/year (20% off forever!)
                    </div>
                    {!isLoading && spotsRemaining > 0 && (
                      <p className="text-xs text-orange-600 font-semibold">
                        Only {spotsRemaining} spots remaining!
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              {plan.name === 'Free' ? (
                <Button
                  disabled
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  Coming Soon
                </Button>
              ) : plan.name === 'Premium' ? (
                <PolarCheckoutButton
                  tier="premium"
                  className="w-full"
                  size="lg"
                >
                  Get Early Access - $79/Year
                </PolarCheckoutButton>
              ) : (
                <Button
                  disabled
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  Coming Soon
                </Button>
              )}

              {plan.limitations.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Limitations:</p>
                  <ul className="space-y-1">
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-400 rounded-full" />
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Comparison vs competitors */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            How We Compare
          </h3>

          <div className="grid sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-sm text-gray-600 mb-2">Bark Premium</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">$168</div>
              <div className="text-xs text-gray-500 mb-2">/year</div>
              <div className="text-sm text-red-600">Cloud processing</div>
              <div className="text-xs text-gray-500 mt-1">Privacy concerns</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Qustodio</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">$100</div>
              <div className="text-xs text-gray-500 mb-2">/year</div>
              <div className="text-sm text-red-600">Safari only</div>
              <div className="text-xs text-gray-500 mt-1">No SMS control</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Norton Family</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">$50</div>
              <div className="text-xs text-gray-500 mb-2">/year</div>
              <div className="text-sm text-red-600">Basic filtering</div>
              <div className="text-xs text-gray-500 mt-1">No AI features</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border-2 border-blue-600">
              <div className="text-sm text-blue-600 font-semibold mb-2">KidGuard AI</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">$79</div>
              <div className="text-xs text-green-600 font-semibold mb-2">Early bird</div>
              <div className="text-sm text-green-600 font-semibold">On-device AI</div>
              <div className="text-xs text-gray-600 mt-1">SMS + All browsers</div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Better features, better privacy, better price. Lock in $79/year forever as an early supporter.
          </p>
        </div>

        {/* Money-back guarantee */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg px-6 py-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">30-Day Money-Back Guarantee</p>
              <p className="text-sm text-gray-600">
                Not happy? Full refund, no questions asked. We're that confident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
