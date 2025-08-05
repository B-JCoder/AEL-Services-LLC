import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import BookingForm from "@/components/booking-form"
import Footer from "@/components/footer"
import StickyCallButton from "@/components/sticky-call-button"
import WhatsAppButton from "@/components/whatsapp-button"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Junk Removal & Demolition - A&L Services LLC | Palm Coast, FL",
  description: "Fast, friendly junk removal and demolition services in Palm Coast, FL. Call for a free quote today!",
  keywords: "junk removal, demolition, Palm Coast, shed removal, cleanouts, estate cleanouts, Florida junk pickup",
  authors: [{ name: "A&L Services LLC" }],
  openGraph: {
    title: "A&L Services LLC - Junk Removal & Demolition Experts",
    description: "Palm Coast's #1 trusted junk removal service. Call now for a free quote!",
    url: "https://www.aelservicesllc.com",
    siteName: "A&L Services LLC",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "A&L Services LLC - Junk Removal & Demolition",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A&L Services LLC - Junk Removal & Demolition Experts",
    description: "Palm Coast's #1 trusted junk removal service. Call now for a free quote!",
    images: ["/images/hero.png"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <BookingForm />
      <Footer />
      <StickyCallButton />
      <WhatsAppButton />
    </div>
  )
}
