"use client"

import { PolarCheckoutButton } from '@/components/polar-checkout-button'
import { Badge } from '@/components/ui/badge'
import { Shield, Sparkles, Clock, Lock } from 'lucide-react'
import { useWaitlistCount } from '@/hooks/useWaitlistCount'

export function Hero() {
  const { count, isLoading } = useWaitlistCount()
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
          <div className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-blue-400 to-green-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Copy and CTA */}
          <div className="text-center lg:text-left">
            {/* Logo and Brand Name */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">KidGuard AI</h2>
            </div>

            {/* Badge */}
            <Badge className="inline-flex items-center gap-2 mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Powered by On-Device AI
            </Badge>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Keep Your Kids Safe Online—
              <span className="text-blue-600"> Without the Tech Headaches</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              One price, your whole family protected. AI-powered monitoring that speaks your language.
              No per-kid charges. No complex settings. Just peace of mind.
            </p>

            {/* Checkout CTA */}
            <div className="mb-6 max-w-md mx-auto lg:mx-0">
              <PolarCheckoutButton tier="premium" size="lg" className="w-full text-lg py-6" />

              {/* Urgency badges */}
              <div className="flex justify-center lg:justify-start gap-1.5 mt-4">
                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 px-2 py-0.5 text-[11px] sm:text-xs whitespace-nowrap">
                  <Lock className="w-2.5 h-2.5 mr-0.5" />
                  {500 - (count || 0)} spots left
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-2 py-0.5 text-[11px] sm:text-xs whitespace-nowrap">
                  <Sparkles className="w-2.5 h-2.5 mr-0.5" />
                  20% off forever
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-100 px-2 py-0.5 text-[11px] sm:text-xs whitespace-nowrap">
                  <Clock className="w-2.5 h-2.5 mr-0.5" />
                  Q1 2026
                </Badge>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>100% Privacy-First</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right column - Hero image */}
          <div className="relative lg:ml-auto w-full">
            <div className="relative aspect-[4/3] max-w-2xl mx-auto lg:max-w-lg">
              {/* Hero Image - Happy kids safe online */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                {/* Option 1: Kids laughing with tablet - joyful and safe */}
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"
                  alt="Happy children laughing together while safely using tablet with parental protection"
                  className="w-full h-full object-cover"
                />

                {/* Alternative images you can try:
                  Option 2: Girl smiling with tablet
                  src="https://images.unsplash.com/photo-1551579292-e4ee1f9c1e5d?auto=format&fit=crop&w=1200&q=80"

                  Option 3: Kids with parent learning together
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"

                  Option 4: Happy family with kids using device
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1200&q=80"

                  Option 5: Smiling child with tablet outdoor
                  src="https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=1200&q=80"
                */}
                {/* Overlay gradient for better badge visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />

                {/* Floating protection badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">Protected by AI</p>
                      <p className="text-xs text-gray-600">100% Privacy-First</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-green-600">Active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
