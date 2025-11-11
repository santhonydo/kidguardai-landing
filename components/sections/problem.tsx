import { AlertTriangle, Settings, ShieldOff, Cloud } from 'lucide-react'

export function Problem() {
  const painPoints = [
    {
      icon: Settings,
      title: 'Too Complicated',
      description: 'Spending hours configuring complex settings that still don\'t work right.'
    },
    {
      icon: ShieldOff,
      title: 'Kids Find Workarounds',
      description: 'They switch browsers or use VPNs, making your expensive software useless.'
    },
    {
      icon: Cloud,
      title: 'Privacy Nightmares',
      description: 'Your child\'s every move tracked and sent to unknown servers in the cloud.'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-red-600 mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tired of Parental Controls That{' '}
            <span className="text-red-600">Don't Actually Work?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Most parental control apps promise safety but deliver frustration. They're complicated,
            easy to bypass, and invade your family's privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
          <p className="text-lg sm:text-xl text-gray-700 italic mb-4">
            "I spent $120/year on Qustodio and my daughter just switched to Firefox on her Mac.
            All those 'blocked' sites? Completely accessible. I felt like I wasted my money AND
            gave a company access to her browsing history for nothing."
          </p>
          <p className="text-gray-900 font-medium">— Frustrated parent on Reddit</p>
        </div>
      </div>
    </section>
  )
}
