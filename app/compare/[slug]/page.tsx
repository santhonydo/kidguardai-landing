import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCompetitor, getAllCompetitorSlugs } from '@/lib/competitors-data'
import { Check, X, ArrowRight, Shield, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PolarCheckoutButton } from '@/components/polar-checkout-button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export async function generateStaticParams() {
  const slugs = getAllCompetitorSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const competitor = getCompetitor(slug)

  if (!competitor) {
    return {
      title: 'Competitor Not Found',
    }
  }

  return {
    title: `Best ${competitor.name} Alternative for Mac & iOS 2025 | KidGuard AI`,
    description: `Why switch from ${competitor.name} to KidGuard AI? ${competitor.commonComplaint} Get on-device AI, SMS control, and system-wide browser blocking. Try free.`,
    keywords: [
      competitor.targetKeyword,
      `${competitor.shortName} vs KidGuard AI`,
      `better than ${competitor.shortName}`,
      'parental control mac',
      'all browser blocking mac'
    ],
    alternates: {
      canonical: `/compare/${slug}`,
    },
    openGraph: {
      title: `Best ${competitor.name} Alternative for Mac & iOS 2025`,
      description: `${competitor.commonComplaint} KidGuard AI blocks ALL browsers on Mac with on-device AI.`,
      url: `https://kidguardai.com/compare/${slug}`,
      type: 'article',
    },
  }
}

export default async function CompetitorAlternativePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const competitor = getCompetitor(slug)

  if (!competitor) {
    notFound()
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Sparkles className="w-4 h-4 mr-2" />
              {competitor.name} Alternative
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Best {competitor.name} Alternative for Mac & iOS in 2025
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {competitor.commonComplaint}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <PolarCheckoutButton tier="premium" size="lg" />
              <Link href="#comparison">
                <button className="px-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  See Full Comparison →
                </button>
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              Join 2,500+ parents switching from {competitor.shortName}
            </p>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Switch from {competitor.name} to KidGuard AI?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Weaknesses */}
            <Card className="p-6 border-2 border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <X className="w-6 h-6 text-red-600 mr-2" />
                {competitor.name} Limitations
              </h3>
              <ul className="space-y-3">
                {competitor.weakPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* KidGuard AI Strengths */}
            <Card className="p-6 border-2 border-green-100 bg-green-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Check className="w-6 h-6 text-green-600 mr-2" />
                KidGuard AI Solutions
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>System-wide blocking across ALL browsers (Chrome, Firefox, Safari)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>100% on-device AI - zero cloud tracking</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Natural language controls: "Block social media after 8 PM"</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Two-way SMS control - check status and adjust rules via text</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Unlimited devices and kids for one price</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature-by-Feature Comparison */}
      <section id="comparison" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Feature-by-Feature Comparison
          </h2>

          <div className="space-y-6">
            {Object.entries(competitor.comparison).map(([key, value]) => (
              <Card key={key} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                    <p className="font-semibold text-red-900 mb-2 flex items-center">
                      <X className="w-5 h-5 mr-2" />
                      {competitor.shortName}
                    </p>
                    <p className="text-gray-700 text-sm">{value.competitor}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="font-semibold text-green-900 mb-2 flex items-center">
                      <Check className="w-5 h-5 mr-2" />
                      KidGuard AI
                    </p>
                    <p className="text-gray-700 text-sm">{value.kidguard}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Switch from {competitor.name} in 5 Minutes
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Easy migration process. No data loss. Better protection.
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {competitor.migrationSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-700">{step}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PolarCheckoutButton tier="premium" size="lg" />
            <p className="text-sm text-gray-500 mt-4">
              30-day money-back guarantee. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* What Users Say */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            What {competitor.name} Users Say
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="text-lg italic text-gray-800 mb-2">
              "{competitor.commonComplaint}"
            </p>
            <p className="text-sm text-gray-600">
              — Common complaint from {competitor.shortName} users
            </p>
          </div>

          <Card className="p-8 border-2 border-blue-100">
            <div className="flex items-start gap-4">
              <Shield className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  KidGuard AI Solves This
                </h3>
                <p className="text-gray-700 mb-6">
                  We built KidGuard AI specifically to address the limitations of existing parental control apps.
                  Our system-level HTTPS filtering works across all browsers on Mac, our on-device AI keeps your
                  family's data private, and our natural language interface makes setup effortless.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    <Check className="w-4 h-4 mr-1" />
                    All Browsers Blocked
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    <Shield className="w-4 h-4 mr-1" />
                    100% Private
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                    <Sparkles className="w-4 h-4 mr-1" />
                    AI-Powered
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Switch from {competitor.name}?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Join 2,500+ parents who already made the switch. Better protection, better privacy, better price.
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
