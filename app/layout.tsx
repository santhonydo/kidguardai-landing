import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KidGuard AI - AI-Powered Parental Control for iOS & Mac | Join Waitlist",
  description: "The only parental control app with on-device AI, natural language controls, and SMS remote access. Works across ALL browsers on Mac. Join 2,500+ parents on the waitlist.",
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
              "@type": "SoftwareApplication",
              "name": "KidGuard AI",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": ["iOS", "iPadOS", "macOS"],
              "offers": {
                "@type": "Offer",
                "price": "9.99",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/PreOrder",
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "500",
              },
              "description": "AI-powered parental control app with on-device processing, natural language controls, and SMS remote access. Works across all browsers on macOS.",
              "author": {
                "@type": "Organization",
                "name": "KidGuard AI",
              },
              "featureList": [
                "On-device AI processing",
                "Natural language rule creation",
                "Two-way SMS control",
                "System-wide browser blocking",
                "Privacy-first architecture",
                "Cross-platform support (iOS, iPadOS, macOS)"
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
