import { Card } from "@/components/ui/card"
import { Heart, Users, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">AE&L Services</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Family-Owned</h3>
                <p className="text-gray-600 text-sm">Built on family values</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Local Experts</h3>
                <p className="text-gray-600 text-sm">Palm Coast specialists</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Community Focused</h3>
                <p className="text-gray-600 text-sm">Your neighbors helping neighbors</p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong>A&L Services LLC</strong> is a family-owned business based in Palm Coast, Florida, committed to
              fast, honest, and stress-free service. Whether it's cluttered homes or post-construction mess—we've got it
              covered. Our friendly team treats every job with care and professionalism, ensuring your space is clean
              and ready for what's next.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
