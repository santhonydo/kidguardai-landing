'use client'

import { CheckCircle, Mail, Calendar, Shield, ArrowRight, AlertTriangle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessPageContent() {
  const searchParams = useSearchParams()
  const checkoutId = searchParams.get('checkout_id') || searchParams.get('session_id') || searchParams.get('customer_session_token')
  const customerId = searchParams.get('customer_id')

  // If no valid session parameter, this is unauthorized access
  if (!checkoutId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 flex items-center justify-center p-4">
        <Card className="p-8 sm:p-12 text-center shadow-xl max-w-2xl">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Invalid Access
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            This page is only accessible after completing a purchase. If you just completed a purchase and see this message, please contact support.
          </p>
          <Link href="/">
            <Button size="lg">
              Return to Home
            </Button>
          </Link>
        </Card>
      </div>
    )
  }

  // Valid checkout session - show success page
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Card */}
        <Card className="p-8 sm:p-12 text-center shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Welcome to KidGuard AI! 🎉
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your early access spot is secured. You've locked in the <span className="font-bold text-green-600">$79/year lifetime price</span> — saving 20% forever!
          </p>

          {/* What's Next Section */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-600" />
              What Happens Next
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 text-sm font-bold">1</span>
                <span><strong>Check your email</strong> — We've sent you a confirmation with your early access details and order receipt.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 text-sm font-bold">2</span>
                <span><strong>Launch in Q1 2026</strong> — You'll receive download instructions and access credentials when we launch.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 text-sm font-bold">3</span>
                <span><strong>Join our community</strong> — Get exclusive updates, beta access, and connect with other early adopters.{' '}
                  <a href="https://t.me/+lMF_fi4bdhE5Y2I5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                    Join our Telegram →
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Benefits Recap */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4">
              <Calendar className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-bold">Q1 2026 Launch</div>
              <div className="text-sm text-blue-100">Be among the first</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-4">
              <Shield className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-bold">20% Off Forever</div>
              <div className="text-sm text-green-100">Lifetime discount</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-4">
              <Mail className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-bold">Priority Support</div>
              <div className="text-sm text-purple-100">VIP treatment</div>
            </div>
          </div>

          {/* 30-Day Guarantee */}
          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">30-Day Money-Back Guarantee</strong> — Not satisfied after launch? Get a full refund, no questions asked.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" size="lg">
                Back to Home
              </Button>
            </Link>
            <a href="mailto:support@kidguardai.com">
              <Button size="lg">
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Questions? Email us at{' '}
          <a href="mailto:support@kidguardai.com" className="text-blue-600 hover:underline">
            support@kidguardai.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessPageContent />
    </Suspense>
  )
}
