import { Card } from "@/components/ui/card"
import { Clock, DollarSign, Heart, Clock3, MapPin, Shield } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Fast & Friendly",
    description: "Quick response times with a smile. We respect your time and space.",
    color: "bg-blue-500",
  },
  {
    icon: DollarSign,
    title: "Free Quotes",
    description: "No hidden fees or surprises. Get an honest estimate before we start.",
    color: "bg-green-500",
  },
  {
    icon: Heart,
    title: "Family-Owned",
    description: "Local family business that cares about our community and customers.",
    color: "bg-red-500",
  },
  {
    icon: Clock3,
    title: "Always Open",
    description: "Available when you need us most. Flexible scheduling to fit your life.",
    color: "bg-purple-500",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "We know Palm Coast inside and out. Your local junk removal experts.",
    color: "bg-orange-500",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Licensed and insured for your peace of mind and protection.",
    color: "bg-teal-500",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">A&L Services?</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another junk removal company. We're your neighbors, committed to exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="bg-white/60 backdrop-blur-md border-white/20 shadow-lg rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
              >
                <div className="text-center">
                  <div
                    className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
