"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/lib/supabase'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { useWaitlistCount } from '@/hooks/useWaitlistCount'

type Platform = 'ios' | 'macos' | 'both'

interface WaitlistFormProps {
  variant?: 'hero' | 'inline' | 'footer'
  className?: string
}

export function WaitlistForm({ variant = 'inline', className = '' }: WaitlistFormProps) {
  const { count } = useWaitlistCount()
  const TOTAL_SPOTS = 500
  const spotsRemaining = Math.max(0, TOTAL_SPOTS - (count || 0))

  const [email, setEmail] = useState('')
  const [platform, setPlatform] = useState<Platform>('both')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email.toLowerCase().trim(),
            platform,
            metadata: {
              source: 'landing_page',
              variant,
              signup_date: new Date().toISOString(),
              user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : null
            }
          }
        ])

      if (error) {
        // Handle duplicate email
        if (error.code === '23505') {
          setStatus('error')
          setErrorMessage('This email is already on our waitlist!')
        } else {
          throw error
        }
      } else {
        setStatus('success')
        setEmail('')

        // Track conversion (optional - add your analytics here)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'waitlist_signup', {
            platform,
            variant
          })
        }
      }
    } catch (error) {
      console.error('Waitlist signup error:', error)
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const isHeroVariant = variant === 'hero'
  const isFooterVariant = variant === 'footer'

  return (
    <div className={className}>
      {status === 'success' ? (
        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
          <div>
            <p className="font-semibold text-green-900">Thanks for joining!</p>
            <p className="text-sm text-green-700">
              We'll email you at launch with your 20% discount code.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Platform Selection */}
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={platform === 'ios' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setPlatform('ios')}
            >
              iOS/iPadOS
            </Badge>
            <Badge
              variant={platform === 'macos' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setPlatform('macos')}
            >
              macOS
            </Badge>
            <Badge
              variant={platform === 'both' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setPlatform('both')}
            >
              Both
            </Badge>
          </div>

          {/* Email Input */}
          <div className={`flex ${isHeroVariant ? 'flex-col sm:flex-row' : 'flex-col md:flex-row'} gap-3`}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className={`${isHeroVariant ? 'text-base h-12' : 'h-11'} flex-1`}
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              size={isHeroVariant ? 'lg' : 'default'}
              className={`${isHeroVariant ? 'h-12 px-8' : 'h-11 px-6'} ${isFooterVariant ? 'w-full md:w-auto' : ''} bg-blue-600 hover:bg-blue-700`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                'Join Waitlist'
              )}
            </Button>
          </div>

          {/* Error Message */}
          {status === 'error' && errorMessage && (
            <div className="flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Trust Signal */}
          {isHeroVariant && (
            <div className="space-y-1">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Get 20% off forever as an early supporter
              </p>
              {spotsRemaining > 0 && (
                <p className="text-xs text-orange-600 font-semibold">
                  Only {spotsRemaining} early bird spots remaining!
                </p>
              )}
            </div>
          )}
        </form>
      )}
    </div>
  )
}
