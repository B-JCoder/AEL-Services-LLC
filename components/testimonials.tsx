import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah",
    rating: 5,
    text: "Amazing service! They cleared out my entire garage in under 2 hours. The team was professional, friendly, and left everything spotless. Highly recommend!",
  },
  {
    name: "Mike",
    rating: 5,
    text: "A&L Services demolished our old shed and hauled away all the debris. Fair pricing, quick work, and they even cleaned up better than I expected. Great local business!",
  },
  {
    name: "Jennifer",
    rating: 5,
    text: "Called them for an estate cleanout after my grandmother passed. They were so respectful and careful with everything. Made a difficult time much easier. Thank you!",
  },
  {
    name: "Carlos",
    rating: 5,
    text: "Best junk removal service in Palm Coast! They removed old appliances and furniture from my rental property. Professional, punctual, and reasonably priced.",
  },
  {
    name: "Lisa",
    rating: 5,
    text: "Fantastic experience from start to finish. They gave me a fair quote over the phone and stuck to it. The crew was courteous and efficient. Will definitely use again!",
  },
  {
    name: "David",
    rating: 5,
    text: "Had them remove construction debris from my home renovation. They showed up on time, worked quickly, and the price was very reasonable. Excellent service!",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            >
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
