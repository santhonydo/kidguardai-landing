"use client"

import { Check, X, AlertTriangle } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function Comparison() {
  const features = [
    {
      feature: 'macOS Support',
      kidguard: { status: 'yes', note: 'Full' },
      bark: { status: 'no', note: 'Not supported' },
      qustodio: { status: 'partial', note: 'Safari only' },
      screentime: { status: 'partial', note: 'App limits only' }
    },
    {
      feature: 'All Browsers',
      kidguard: { status: 'yes', note: 'Safari, Chrome, Firefox, Edge' },
      bark: { status: 'no', note: 'Not supported' },
      qustodio: { status: 'partial', note: 'Safari only' },
      screentime: { status: 'no', note: 'Not supported' }
    },
    {
      feature: 'Privacy',
      kidguard: { status: 'yes', note: '100% On-Device AI' },
      bark: { status: 'no', note: 'Cloud' },
      qustodio: { status: 'no', note: 'Cloud' },
      screentime: { status: 'partial', note: 'Limited' }
    },
    {
      feature: 'Natural Language',
      kidguard: { status: 'yes', note: 'Voice & Text' },
      bark: { status: 'no', note: 'Not supported' },
      qustodio: { status: 'no', note: 'Not supported' },
      screentime: { status: 'no', note: 'Not supported' }
    },
    {
      feature: 'SMS AI Agent',
      kidguard: { status: 'yes', note: 'Two-way' },
      bark: { status: 'partial', note: 'One-way' },
      qustodio: { status: 'partial', note: 'One-way' },
      screentime: { status: 'no', note: 'Not supported' }
    },
    {
      feature: 'Price',
      kidguard: { status: 'price', note: '$9.99/mo' },
      bark: { status: 'price', note: '$14' },
      qustodio: { status: 'price', note: '$10.49' },
      screentime: { status: 'price', note: 'Free' }
    }
  ]

  const renderIcon = (status: string) => {
    switch (status) {
      case 'yes':
        return <Check className="w-5 h-5 text-green-600" />
      case 'no':
        return <X className="w-5 h-5 text-red-500" />
      case 'partial':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'price':
        return null
      default:
        return null
    }
  }

  const renderCell = (data: { status: string; note: string }, isKidGuard = false) => {
    if (data.status === 'price') {
      return (
        <div className={`font-bold ${isKidGuard ? 'text-blue-600' : 'text-gray-900'}`}>
          {data.note}
        </div>
      )
    }

    return (
      <div className="flex flex-col items-center gap-1">
        {renderIcon(data.status)}
        <span className={`text-xs ${isKidGuard ? 'text-blue-700 font-medium' : 'text-gray-500'}`}>
          {data.note}
        </span>
      </div>
    )
  }

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Stack Up Against{' '}
            <span className="text-blue-600">The Competition</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another parental control app. We're the first to solve problems
            that competitors can't—or won't—address.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center bg-blue-50 border-x-2 border-blue-200">
                      <div className="text-base font-bold text-blue-600">KidGuard AI</div>
                      <div className="text-xs text-blue-600 font-normal mt-1">(That's us!)</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Bark
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Qustodio
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Apple Screen Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-50/50 border-x-2 border-blue-100">
                        {renderCell(row.kidguard, true)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {renderCell(row.bark)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {renderCell(row.qustodio)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {renderCell(row.screentime)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-6">
          {/* KidGuard AI card (highlighted) */}
          <Card className="border-2 border-blue-600 overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-3 text-center">
              <div className="font-bold text-lg">KidGuard AI</div>
              <div className="text-sm text-blue-100">(That's us!)</div>
            </div>
            <div className="p-6 space-y-4">
              {features.map((row, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-sm font-medium text-gray-900">{row.feature}</span>
                  {renderCell(row.kidguard, true)}
                </div>
              ))}
            </div>
          </Card>

          {/* Competitors */}
          {[
            { name: 'Bark', data: features.map(f => ({ feature: f.feature, value: f.bark })) },
            { name: 'Qustodio', data: features.map(f => ({ feature: f.feature, value: f.qustodio })) },
            { name: 'Apple Screen Time', data: features.map(f => ({ feature: f.feature, value: f.screentime })) }
          ].map((competitor, idx) => (
            <Card key={idx}>
              <div className="bg-gray-100 px-6 py-3 text-center">
                <div className="font-bold text-gray-900">{competitor.name}</div>
              </div>
              <div className="p-6 space-y-4">
                {competitor.data.map((row, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm font-medium text-gray-900">{row.feature}</span>
                    {renderCell(row.value)}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Key differentiator callout */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                The Only Solution That Actually Works on Mac
              </h3>
              <p className="text-blue-50">
                Qustodio only blocks Safari. Apple Screen Time doesn't filter web content on macOS.
                Bark doesn't even support Mac. We're the first and only to block ALL browsers with real AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
