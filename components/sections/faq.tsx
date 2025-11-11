"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: 'Does it really work on Chrome and Firefox on Mac?',
      answer: "Yes! We use system-level HTTPS filtering (Network Extension API) to block content across ALL browsers on macOS—Safari, Chrome, Firefox, Edge, Brave, you name it. Qustodio can only block Safari because they use a different (limited) approach. We're the first parental control app to achieve true system-wide blocking on Mac."
    },
    {
      question: 'Is my child\'s data sent to the cloud?',
      answer: 'Absolutely not. All AI processing happens 100% on your devices (iPhone, iPad, Mac). We never send browsing history, screenshots, or personal data to our servers or any third party. Unlike Bark and Qustodio, which send everything to the cloud for analysis, KidGuard AI keeps your family\'s data private. We can\'t see what your kids are doing—only you can.'
    },
    {
      question: 'What if I\'m not tech-savvy?',
      answer: 'That\'s exactly who we built this for! Just talk to it in plain English: "Block social media after 8 PM" or "No violent video games." Our AI understands natural language and converts it into working rules automatically. No complex menus, no category checkboxes, no confusion. If you can send a text message, you can use KidGuard AI.'
    },
    {
      question: 'When will it launch?',
      answer: "KidGuard AI launches in Q1 2026 (January-March). Waitlist members get early access 2 weeks before public launch, plus the early bird discount ($7.99/month instead of $9.99—locked in forever). We're currently in private beta with 500+ families testing the system."
    },
    {
      question: 'Can I use it on both iPhone and Mac?',
      answer: 'Yes! One subscription covers your entire family across all devices—iPhones, iPads, and Macs. Set up rules once and they sync automatically. You can even have different rules for different kids on different devices, all managed from your phone or via SMS.'
    },
    {
      question: 'How does the SMS agent work?',
      answer: 'You can text our AI agent from any phone (even a basic flip phone). Ask questions like "What is Emma doing right now?" or give commands like "Pause rules for 30 minutes." The AI responds instantly with status updates or confirmations. No app required. This is unique to KidGuard AI—competitors only send you one-way alerts that you can\'t respond to.'
    },
    {
      question: 'Can my kids bypass it with a VPN?',
      answer: 'We block VPN apps and configurations automatically. Even if they try to install a VPN, our system-level filtering intercepts the traffic before it reaches the VPN. We also detect and block common workarounds like DNS-over-HTTPS, proxy servers, and browser extensions designed to bypass parental controls.'
    },
    {
      question: 'What AI models do you use?',
      answer: 'Free tier uses Phi-2 (Microsoft\'s lightweight AI) for basic content categorization. Premium tier uses Mistral-7B for advanced natural language understanding and context-aware filtering. Both run entirely on your devices—no cloud AI. We chose these models for the perfect balance of accuracy, speed, and privacy.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'The Free tier is available forever with up to 5 rules and basic AI. It\'s fully functional—not a time-limited trial. This lets you test the system with your family before upgrading. If you need unlimited rules or the SMS agent, you can upgrade to Premium anytime. Early bird pricing ($7.99/month) is only available for waitlist members.'
    },
    {
      question: 'What happens if my child deletes the app?',
      answer: 'On iOS/iPadOS, we use Screen Time API which requires your parental passcode to remove. On macOS, we install as a system extension that requires admin password + system reboot to uninstall. You\'ll also receive an instant alert via SMS if they attempt to tamper with KidGuard AI. They can\'t just delete it like a regular app.'
    },
    {
      question: 'Is there a family discount?',
      answer: 'One Premium subscription ($9.99/month or $7.99 early bird) covers unlimited devices for your entire household. No per-device fees. Protect 1 kid or 10 kids across 20 devices—same price. This makes KidGuard AI significantly cheaper than competitors who charge per device or per child.'
    },
    {
      question: 'What if I need help setting it up?',
      answer: 'Premium members get priority support via email, chat, and phone. Our average response time is under 2 hours. We also have video tutorials, a comprehensive knowledge base, and a private community forum. Most parents complete setup in under 5 minutes, but we\'re here if you need us.'
    }
  ]

  return (
    <section id="faq" className="py-16 sm:py-20 bg-gray-50">
      {/* FAQ Schema markup for rich snippets in search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to know about KidGuard AI.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
