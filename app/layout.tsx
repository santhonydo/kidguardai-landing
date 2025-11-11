import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KidGuard AI: Best Parental Control App for Mac & iOS 2025",
  description: "The only Mac parental control that blocks ALL browsers (Chrome, Firefox, Safari). On-device AI, SMS alerts, natural language rules. Qustodio alternative. Join 2,500+ parents.",
  keywords: [
    "parental control",
    "parental control app",
    "mac parental control",
    "ios parental control",
    "AI parental control",
    "screen time alternative",
    "qustodio alternative",
    "bark alternative",
    "privacy-first parental control",
    "on-device AI",
    "natural language parental control",
    "SMS parental control",
    "system-wide browser blocking"
  ],
  authors: [{ name: "KidGuard AI Team" }],
  creator: "KidGuard AI",
  publisher: "KidGuard AI",
  metadataBase: new URL("https://kidguardai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KidGuard AI - AI-Powered Parental Control for iOS & Mac",
    description: "Keep your kids safe online without the tech headaches. AI-powered protection that speaks your language. Works across ALL browsers on Mac.",
    url: "https://kidguardai.com",
    siteName: "KidGuard AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KidGuard AI - AI-Powered Parental Control",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KidGuard AI - AI-Powered Parental Control for iOS & Mac",
    description: "The only parental control with on-device AI and SMS remote access. Get early access for $79/year.",
    creator: "@kidguardai",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3B82F6" />

        {/* Schema.org structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://kidguardai.com/#organization",
                  "name": "KidGuard AI",
                  "url": "https://kidguardai.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://kidguardai.com/logo.png"
                  },
                  "description": "Privacy-first parental control for Mac and iOS with on-device AI processing",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Support",
                    "email": "support@kidguardai.com"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://kidguardai.com/#software",
                  "name": "KidGuard AI",
                  "applicationCategory": "LifestyleApplication",
                  "operatingSystem": ["iOS 15.0", "iPadOS 15.0", "macOS 13.0"],
                  "offers": {
                    "@type": "Offer",
                    "price": "9.99",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2026-12-31",
                    "availability": "https://schema.org/PreOrder"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "500"
                  },
                  "description": "The only Mac parental control that blocks ALL browsers (Chrome, Firefox, Safari). On-device AI processing, SMS alerts, natural language rules. Privacy-first alternative to Qustodio and Bark.",
                  "author": {
                    "@type": "Organization",
                    "@id": "https://kidguardai.com/#organization"
                  },
                  "featureList": [
                    "On-device AI content filtering",
                    "Natural language rule creation with voice support",
                    "Two-way SMS remote control",
                    "System-wide browser blocking (Chrome, Firefox, Safari, Edge)",
                    "Privacy-first architecture - zero cloud tracking",
                    "Cross-platform support (iOS, iPadOS, macOS)",
                    "MLX Swift on-device LLM processing",
                    "Network Extension for HTTPS blocking"
                  ],
                  "screenshot": "https://kidguardai.com/screenshots/dashboard.png",
                  "softwareVersion": "1.0.0",
                  "applicationSubCategory": "Parental Control Software"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
