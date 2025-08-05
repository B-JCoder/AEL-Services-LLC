"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full min-h-[80vh]">
          {/* Left side - Content - Hidden on mobile */}
          <div className="hidden lg:flex flex-col justify-center space-y-8 text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg leading-tight">
                Reliable. Efficient. <span className="text-yellow-300">Family-Owned.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-50 max-w-2xl leading-relaxed">
                We handle junk removal & demolition for homes & businesses—fast, friendly, and hassle-free.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get a Free Quote
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href="tel:+13866272171" className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Hero Image - Full width on mobile */}
          <div className="col-span-full lg:col-span-1 flex items-center justify-center">
            <Card className="bg-white/15 backdrop-blur-md border-white/30 p-6 lg:p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 w-full max-w-lg lg:max-w-xl h-auto lg:min-h-[600px] flex flex-col justify-center">
              <div className="text-center mb-6">
                <Image
                  src="/images/hero.png"
                  alt="A&L Services LLC - Friendly Shark Mascot with Junk Removal Truck"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
              <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/40">
                <h3 className="text-white font-bold text-lg lg:text-xl mb-4 text-center">Our Services Include:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm lg:text-base text-blue-50">
                  <span className="bg-blue-600/60 px-3 py-2 rounded-full text-center font-medium">Junk Removal</span>
                  <span className="bg-blue-600/60 px-3 py-2 rounded-full text-center font-medium">Demolition</span>
                  <span className="bg-blue-600/60 px-3 py-2 rounded-full text-center col-span-2 font-medium">
                    Estate Cleanouts
                  </span>
                </div>
              </div>

              {/* Mobile buttons - Only visible on mobile */}
              <div className="lg:hidden mt-6 flex flex-col gap-3">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get a Free Quote
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="tel:+13866272171" className="flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating contact info - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <Card className="bg-white/15 backdrop-blur-md border-white/30 px-6 py-3 rounded-full shadow-lg">
          <div className="flex items-center gap-4 text-white">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">+1 386-627-2171</span>
            <MessageCircle className="h-5 w-5" />
          </div>
        </Card>
      </div>
    </section>
  )
}
