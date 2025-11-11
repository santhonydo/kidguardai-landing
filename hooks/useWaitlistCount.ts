"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function useWaitlistCount() {
  const [count, setCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCount() {
      try {
        const { data, error: countError } = await supabase
          .rpc('get_waitlist_count')

        if (countError) {
          throw countError
        }

        setCount(data ?? 0)
        setError(null)
      } catch (err) {
        console.error('Failed to fetch waitlist count:', err)
        setError('Failed to load count')
        setCount(0)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCount()

    // Set up real-time subscription for count updates
    const channel = supabase
      .channel('waitlist-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'waitlist'
        },
        () => {
          // Refetch count when new signup occurs
          fetchCount()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return { count, isLoading, error }
}
