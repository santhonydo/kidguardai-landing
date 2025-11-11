import { Metadata } from 'next'
import Link from 'next/link'
import { competitors } from '@/lib/competitors-data'
import { ArrowRight, Check, X, AlertTriangle, Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PolarCheckoutButton } from '@/components/polar-checkout-button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'KidGuard AI vs Competitors | Best Parental Control Comparison 2025',
  description: 'Compare KidGuard AI with Qustodio, Bark, Norton Family, and Apple Screen Time. See why parents choose us for Mac parental control with all-browser blocking and on-device AI.',
  keywords: [
    'parental control comparison',
    'qustodio vs kidguard ai',
    'bark vs kidguard ai',
    'best parental control app',
    'mac parental control comparison'
  ],
  alternates: {
    canonical: '/compare',
  },
}

export default function ComparePage() {
  const comparisonFeatures = [
    {
      feature: 'macOS Support',
      kidguard: { status: 'yes', note: 'Full system-level' },
      qustodio: { status: 'partial', note: 'Safari only' },
      bark: { status: 'no', note: 'Not supported' },
      norton: { status: 'partial', note: 'Unreliable' },
      screentime: { status: 'partial', note: 'App limits only' },
    },
    {
      feature: 'All Browsers Blocked',
      kidguard: { status: 'yes', note: 'Chrome, Firefox, Safari, Edge' },
      qustodio: { status: 'no', note: 'Safari only' },
      bark: { status: 'no', note: 'No Mac support' },
      norton: { status: 'partial', note: 'Limited' },
      screentime: { status: 'no', note: 'No web filtering' },
    },
    {
      feature: 'Privacy (On-Device AI)',
      kidguard: { status: 'yes', note: '100% on-device' },
      qustodio: { status: 'no', note: 'Cloud-based' },
      bark: { status: 'no', note: 'Cloud-based' },
      norton: { status: 'no', note: 'Cloud-based' },
      screentime: { status: 'yes', note: 'On-device' },
    },
    {
      feature: 'Natural Language Controls',
      kidguard: { status: 'yes', note: 'Voice & text' },
      qustodio: { status: 'no', note: 'Manual menus' },
      bark: { status: 'no', note: 'Manual setup' },
      norton: { status: 'no', note: 'Manual setup' },
      screentime: { status: 'no', note: 'Manual setup' },
    },
    {
      feature: 'Two-Way SMS Control',
      kidguard: { status: 'yes', note: 'Full conversation' },
      qustodio: { status: 'partial', note: 'One-way alerts' },
      bark: { status: 'partial', note: 'One-way alerts' },
      norton: { status: 'no', note: 'Email only' },
      screentime: { status: 'no', note: 'Not supported' },
    },
    {
      feature: 'Price',
      kidguard: { status: 'price', note: '$79/yr' },
      qustodio: { status: 'price', note: '$125/yr' },
      bark: { status: 'price', note: '$168/yr' },
      norton: { status: 'price', note: '$150/yr' },
      screentime: { status: 'price', note: 'Free' },
    },
  ]

  const renderIcon = (status: string) => {
    switch (status) {
      case 'yes':
        return <Check className="w-5 h-5 text-green-600" />
      case 'no':
        return <X className="w-5 h-5 text-red-500" />
      case 'partial':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Shield className="w-4 h-4 mr-2" />
              Honest Comparison
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How KidGuard AI Compares to{' '}
              <span className="text-blue-600">The Competition</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're not just another parental control app. We're the first to solve problems
              that competitors can't—or won't—address.
            </p>

            <PolarCheckoutButton tier="premium" size="lg" />

            <p className="text-sm text-gray-500 mt-4">
              Join 2,500+ parents who chose KidGuard AI
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Feature-by-Feature Comparison
          </h2>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center bg-blue-50 border-x-2 border-blue-200">
                    <div className="font-bold text-blue-600">KidGuard AI</div>
                    <div className="text-xs text-blue-600 font-normal">(That's us!)</div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Qustodio
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Bark
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Norton Family
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Screen Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50/50 border-x-2 border-blue-100">
                      <div className="flex flex-col items-center gap-1">
                        {renderIcon(row.kidguard.status)}
                        <span className="text-xs text-blue-700 font-medium">
                          {row.kidguard.note}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {renderIcon(row.qustodio.status)}
                        <span className="text-xs text-gray-500">{row.qustodio.note}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {renderIcon(row.bark.status)}
                        <span className="text-xs text-gray-500">{row.bark.note}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {renderIcon(row.norton.status)}
                        <span className="text-xs text-gray-500">{row.norton.note}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {renderIcon(row.screentime.status)}
                        <span className="text-xs text-gray-500">{row.screentime.note}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {comparisonFeatures.map((feature, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">{feature.feature}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-blue-600 font-medium">KidGuard AI</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{feature.kidguard.note}</span>
                      {renderIcon(feature.kidguard.status)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Qustodio</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{feature.qustodio.note}</span>
                      {renderIcon(feature.qustodio.status)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Bark</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{feature.bark.note}</span>
                      {renderIcon(feature.bark.status)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Norton</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{feature.norton.note}</span>
                      {renderIcon(feature.norton.status)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Screen Time</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{feature.screentime.note}</span>
                      {renderIcon(feature.screentime.status)}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparisons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Detailed Competitor Comparisons
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitors.map((competitor) => (
              <Card key={competitor.slug} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  vs {competitor.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {competitor.commonComplaint}
                </p>
                <div className="mb-4">
                  <p className="text-xs text-gray-500 font-semibold mb-2">Main Issues:</p>
                  <ul className="space-y-1">
                    {competitor.weakPoints.slice(0, 3).map((point, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start">
                        <X className="w-3 h-3 text-red-500 mr-1 flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={`/compare/${competitor.slug}`}>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
                    See Full Comparison
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose KidGuard AI */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Parents Choose KidGuard AI
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Check className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">All Browsers</h3>
              <p className="text-blue-50 text-sm">
                Only solution that blocks Chrome, Firefox, Safari, Edge on Mac
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">100% Private</h3>
              <p className="text-blue-50 text-sm">
                On-device AI - zero cloud tracking or data sharing
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <ArrowRight className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Best Value</h3>
              <p className="text-blue-50 text-sm">
                Unlimited devices & kids for less than competitors
              </p>
            </div>
          </div>
          <PolarCheckoutButton tier="premium" size="lg" className="bg-white text-blue-600 hover:bg-gray-100" />
          <p className="text-blue-100 mt-4">
            30-day money-back guarantee • Cancel anytime
          </p>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}
