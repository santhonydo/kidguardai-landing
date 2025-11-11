"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useState } from 'react'

interface PolarCheckoutButtonProps {
  tier: 'premium' | 'premium_plus'
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  children?: React.ReactNode
}

export function PolarCheckoutButton({
  tier,
  variant = 'default',
  size = 'default',
  className,
  children,
}: PolarCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  // Polar.sh Quick Checkout URLs
  // You'll need to replace these with your actual checkout link URLs from Polar.sh dashboard
  const checkoutUrls = {
    premium: process.env.NEXT_PUBLIC_POLAR_CHECKOUT_URL_PREMIUM || 'https://polar.sh/your-org/products/premium',
    premium_plus: process.env.NEXT_PUBLIC_POLAR_CHECKOUT_URL_PREMIUM_PLUS || 'https://polar.sh/your-org/products/premium-plus',
  }

  const tierConfig = {
    premium: {
      label: 'Get Early Access - $79/Year',
      price: '$79',
      regularPrice: '$99',
      savings: 'Save 20%',
    },
    premium_plus: {
      label: 'Get Premium Plus - $149/Year',
      price: '$149',
      regularPrice: '$149',
      savings: '',
    },
  }

  const config = tierConfig[tier]
  const checkoutUrl = checkoutUrls[tier]

  const handleClick = () => {
    setIsLoading(true)

    // Track analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'begin_checkout', {
        currency: 'USD',
        value: tier === 'premium' ? 79.00 : 149.00,
        items: [
          {
            item_id: tier,
            item_name: `KidGuard AI ${tier === 'premium' ? 'Premium' : 'Premium Plus'}`,
            price: tier === 'premium' ? 79.00 : 149.00,
          },
        ],
      })
    }

    // Redirect to Polar checkout
    window.location.href = checkoutUrl
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      variant={variant}
      size={size}
      className={className}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Opening checkout...
        </>
      ) : (
        <>
          {children || config.label}
          <ArrowRight className="w-4 h-4 ml-2" />
        </>
      )}
    </Button>
  )
}

// Separate component for pricing cards with price display
export function PolarCheckoutCard({
  tier,
  className,
}: {
  tier: 'premium' | 'premium_plus'
  className?: string
}) {
  const config = {
    premium: {
      price: '$79',
      period: '/year',
      regularPrice: '$99',
      savings: '20% off forever!',
      features: ['Unlimited kids & devices', 'Full AI filtering', '50 SMS commands/month', 'Screenshot monitoring', 'Real-time alerts', 'Priority support'],
    },
    premium_plus: {
      price: '$149',
      period: '/year',
      regularPrice: '$149',
      savings: '',
      features: ['Everything in Premium', 'Unlimited SMS commands', 'Advanced AI models', 'Weekly family reports', 'Priority phone support', 'Early access to features'],
    },
  }

  const tierConfig = config[tier]

  return (
    <div className={className}>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-4xl font-bold text-gray-900">{tierConfig.price}</span>
        <span className="text-gray-500">{tierConfig.period}</span>
        {tierConfig.regularPrice !== tierConfig.price && (
          <span className="text-sm text-gray-400 line-through">{tierConfig.regularPrice}</span>
        )}
      </div>
      {tierConfig.savings && (
        <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
          {tierConfig.savings}
        </div>
      )}
      <PolarCheckoutButton tier={tier} size="lg" className="w-full mb-4" />
      <ul className="space-y-2 text-sm text-gray-600">
        {tierConfig.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
