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
  title: "Professional Junk Removal & Demolition Services | AE&L Services LLC",
  description:
    "Fast, reliable junk removal and demolition services in Palm Coast, FL. Family-owned business with free estimates. Same-day service available. Call (386) 627-2171!",
  keywords:
    "junk removal Palm Coast, demolition services Florida, estate cleanouts, furniture removal, construction debris, shed removal, appliance pickup",
  openGraph: {
    title: "AE&L Services LLC - Palm Coast's #1 Junk Removal Service",
    description:
      "Professional junk removal and demolition services. Family-owned, fast, and reliable. Free quotes available!",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "AE&L Services LLC Junk Removal Truck with Shark Mascot",
      },
    ],
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
