import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aelservicesllc.com"),
  title: {
    default: "A&L Services LLC - Junk Removal & Demolition | Palm Coast, FL",
    template: "%s | A&L Services LLC",
  },
  description:
    "Professional junk removal and demolition services in Palm Coast, FL. Fast, friendly, family-owned business. Free quotes, same-day service. Call (386) 627-2171 today!",
  keywords: [
    "junk removal Palm Coast FL",
    "demolition services Palm Coast",
    "estate cleanouts Flagler County",
    "furniture removal Palm Coast",
    "construction debris removal",
    "shed removal Palm Coast",
    "appliance pickup Florida",
    "garage cleanout services",
    "commercial junk removal",
    "residential cleanouts",
    "A&L Services LLC",
    "family owned junk removal",
  ],
  authors: [{ name: "A&L Services LLC", url: "https://www.aelservicesllc.com" }],
  creator: "A&L Services LLC",
  publisher: "A&L Services LLC",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aelservicesllc.com",
    siteName: "A&L Services LLC",
    title: "A&L Services LLC - Professional Junk Removal & Demolition Services",
    description:
      "Palm Coast's #1 trusted junk removal service. Family-owned, fast, and reliable. Free quotes available. Call (386) 627-2171 for same-day service!",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "A&L Services LLC - Junk Removal & Demolition Experts in Palm Coast, FL",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "A&L Services LLC Logo",
        type: "image/x-icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aelservicesllc",
    creator: "@aelservicesllc",
    title: "A&L Services LLC - Junk Removal & Demolition | Palm Coast, FL",
    description:
      "Professional junk removal and demolition services in Palm Coast, FL. Family-owned business with free quotes and same-day service.",
    images: ["/images/hero.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://www.aelservicesllc.com",
  },
  category: "Business Services",
  classification: "Junk Removal and Demolition Services",
  other: {
    "business:contact_data:street_address": "Palm Coast, FL",
    "business:contact_data:locality": "Palm Coast",
    "business:contact_data:region": "Florida",
    "business:contact_data:postal_code": "32137",
    "business:contact_data:country_name": "United States",
    "business:contact_data:phone_number": "+1-386-627-2171",
    "business:contact_data:email": "aelservicellc@outlook.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/hero.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/hero.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "A&L Services LLC",
              description: "Professional junk removal and demolition services in Palm Coast, FL",
              url: "https://www.aelservicesllc.com",
              telephone: "+1-386-627-2171",
              email: "aelservicellc@outlook.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Palm Coast",
                addressRegion: "FL",
                postalCode: "32137",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "29.5845",
                longitude: "-81.2078",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Palm Coast",
                  sameAs: "https://en.wikipedia.org/wiki/Palm_Coast,_Florida",
                },
                {
                  "@type": "City",
                  name: "Flagler Beach",
                },
                {
                  "@type": "City",
                  name: "Bunnell",
                },
              ],
              serviceType: [
                "Junk Removal",
                "Demolition Services",
                "Estate Cleanouts",
                "Furniture Removal",
                "Appliance Pickup",
                "Construction Debris Removal",
              ],
              priceRange: "$$",
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: ["https://www.facebook.com/aelservicesllc", "https://www.instagram.com/aelservicesllc"],
              logo: "https://www.aelservicesllc.com/images/hero.png",
              image: "https://www.aelservicesllc.com/images/hero.png",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
