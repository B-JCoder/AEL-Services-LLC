"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"

export default function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setShowOptions(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
  <div className="fixed bottom-6 right-6 z-50">
  {showOptions && (
    <div className="mb-4 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
      {/* Call Now Button */}
      <Button
        asChild
        className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-full px-6 py-3 min-w-[140px]"
      >
        <a href="tel:+13866272171" className="flex items-center justify-center">
          <Phone className="h-5 w-5 mr-2" />
          Call Now
        </a>
      </Button>

      {/* Email Us Button */}
      <Button
        asChild
        className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-full px-6 py-3 min-w-[140px]"
      >
        <a
          href="mailto:aelservicellc@outlook.com?subject=Junk Removal Inquiry&body=Hi! I'm interested in your junk removal services. Please provide more details."
          className="flex items-center justify-center"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Email Us
        </a>
      </Button>

      {/* Text Us Button */}
      <Button
        asChild
        className="w-full bg-gray-600 hover:bg-gray-700 text-white shadow-lg rounded-full px-6 py-3 min-w-[140px]"
      >
        <a
          href="sms:+13866272171?body=Hi! I'm interested in your junk removal services. Can you provide a quote?"
          className="flex items-center justify-center"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Text Us
        </a>
      </Button>
    </div>
  )}

  {/* Toggle Button */}
  <Button
    onClick={() => setShowOptions(!showOptions)}
    className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 ${
      showOptions ? "bg-red-600 hover:bg-red-700 rotate-45" : "bg-blue-600 hover:bg-blue-700 animate-pulse"
    }`}
    title={showOptions ? "Close" : "Contact Options"}
  >
    {showOptions ? <X className="h-6 w-6 text-white" /> : <Phone className="h-6 w-6 text-white" />}
  </Button>
</div>
  )
}
