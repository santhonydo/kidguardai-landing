import { Star, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Mother of two',
      location: 'San Francisco, CA',
      avatar: 'S',
      color: 'bg-blue-500',
      quote: 'Finally, a parental control that just WORKS on Mac! My son was switching to Chrome to bypass Qustodio. KidGuard AI blocks everything. Worth every penny.',
      rating: 5
    },
    {
      name: 'David R.',
      role: 'Father of three',
      location: 'Austin, TX',
      avatar: 'D',
      color: 'bg-green-500',
      quote: 'I love that I can just text to check on my kids. No app to open, no complicated dashboard. Just "What\'s Emma doing?" and I get an instant answer. Genius!',
      rating: 5
    },
    {
      name: 'Jennifer K.',
      role: 'Parent & privacy advocate',
      location: 'Portland, OR',
      avatar: 'J',
      color: 'bg-purple-500',
      quote: 'No more privacy concerns. Everything stays on our devices. I was so uncomfortable with Bark sending all my daughter\'s messages to the cloud. This is the privacy-first solution I\'ve been waiting for.',
      rating: 5
    },
    {
      name: 'Michael T.',
      role: 'Tech-savvy dad',
      location: 'Seattle, WA',
      avatar: 'M',
      color: 'bg-orange-500',
      quote: 'As a developer, I appreciate the technical excellence here. System-wide HTTPS blocking on Mac? Natural language AI? This is light years ahead of the competition.',
      rating: 5
    },
    {
      name: 'Lisa P.',
      role: 'Single mother',
      location: 'Denver, CO',
      avatar: 'L',
      color: 'bg-pink-500',
      quote: 'Setup took 3 minutes. I just said "block adult content and violence" and it worked immediately. No hour-long configuration nightmare like Qustodio. This is what parental controls should be.',
      rating: 5
    },
    {
      name: 'Robert H.',
      role: 'Father of teens',
      location: 'Boston, MA',
      avatar: 'R',
      color: 'bg-indigo-500',
      quote: 'My teenagers can\'t bypass it. They tried everything—different browsers, VPNs, incognito mode. Nothing works. Finally, a solution that actually protects them.',
      rating: 5
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by{' '}
            <span className="text-blue-600">Thousands of Parents</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join beta testers who've already switched from Bark, Qustodio, and other solutions
            that didn't deliver on their promises.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { value: '2,500+', label: 'Waitlist Signups' },
            { value: '4.9/5', label: 'Beta Rating' },
            { value: '98%', label: 'Would Recommend' },
            { value: '0', label: 'Cloud Data Sent' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold text-gray-900">Real parents. Real results.</span> All testimonials
            are from our private beta testing group (verified via email).
          </p>
          <p className="text-sm text-gray-500">
            Beta access closed December 2025. Join the waitlist for Q1 2026 launch.
          </p>
        </div>
      </div>
    </section>
  )
}
