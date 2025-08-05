"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-choose-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl border-b border-white/20"
          : "bg-white/10 backdrop-blur-xl border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection("#home")} className="flex items-center space-x-3 group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1.5 md:p-2 shadow-xl group-hover:scale-105 transition-transform duration-300 border-2 border-white/30">
              <Image
                src="/images/hero.png"
                alt="A&L Services LLC Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain rounded-full"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-lg md:text-xl font-bold transition-colors duration-300 drop-shadow-sm ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                A&L Services LLC
              </h1>
              <p
                className={`text-xs md:text-sm transition-colors duration-300 drop-shadow-sm ${
                  isScrolled ? "text-blue-600" : "text-blue-100"
                }`}
              >
                Junk Removal & Demolition
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-all duration-300 hover:scale-105 drop-shadow-sm ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-yellow-300"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className={`hidden sm:flex transition-all duration-300 shadow-lg ${
                isScrolled
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
              } font-semibold rounded-full px-4 md:px-6 hover:shadow-xl hover:scale-105`}
            >
              <a href="tel:+13866272171" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Call Now</span>
                <span className="md:hidden">Call</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className={`lg:hidden transition-colors duration-300 ${
                isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/20"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-2 p-6 shadow-2xl border border-white/30 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 transition-colors duration-300 hover:bg-blue-50 rounded-lg px-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg"
                >
                  <a href="tel:+13866272171" className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (386) 627-2171
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
