"use client"

import { PolarCheckoutButton } from '@/components/polar-checkout-button'
import { Sparkles, Users, Clock, Lock, Shield, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useWaitlistCount } from '@/hooks/useWaitlistCount'

export function FinalCTA() {
  const { count, isLoading } = useWaitlistCount()
  const TOTAL_SPOTS = 500
  const spotsRemaining = Math.max(0, TOTAL_SPOTS - (count || 0))

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Limited Early Access</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Get Early Access + 20% Off Forever
              </h2>

              <p className="text-lg sm:text-xl text-blue-50 max-w-2xl mx-auto mb-6">
                {isLoading ? (
                  <>
                    Join the waitlist now and lock in early bird pricing at{' '}
                    <span className="font-bold text-white">$79/year</span> instead of $99.
                    This discount is yours forever—not just the first year.
                  </>
                ) : spotsRemaining > 0 ? (
                  <>
                    Only <span className="font-bold text-white">{spotsRemaining} spots remaining</span> for 20% off forever!
                    Lock in early bird pricing at{' '}
                    <span className="font-bold text-white">$79/year</span> instead of $99.
                  </>
                ) : (
                  <>
                    Waitlist is now full! Join to be notified when we open more spots.
                  </>
                )}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl sm:text-3xl font-bold">
                    {isLoading ? '...' : (count || 0).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-blue-100">Parents Joined</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-2xl sm:text-3xl font-bold">
                    {isLoading ? '...' : spotsRemaining.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-blue-100">Spots Remaining</p>
              </div>
            </div>

            {/* Checkout CTA */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md mx-auto">
              <PolarCheckoutButton
                tier="premium"
                size="lg"
                className="w-full text-lg py-6 mb-4"
              />

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  <Lock className="w-3 h-3 mr-1" />
                  Secure Checkout
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  <Shield className="w-3 h-3 mr-1" />
                  30-Day Guarantee
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  <Calendar className="w-3 h-3 mr-1" />
                  Launch Q1 2026
                </Badge>
              </div>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>100% Privacy-First</span>
              </div>
              <div className="hidden sm:block text-white/40">•</div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Lifetime discount locked in</span>
              </div>
              <div className="hidden sm:block text-white/40">•</div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Below-CTA reassurance */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Secure your early access spot today. You'll receive launch updates, early download instructions,
            and exclusive content about keeping kids safe online. 30-day money-back guarantee after launch.
          </p>
        </div>
      </div>
    </section>
  )
}
