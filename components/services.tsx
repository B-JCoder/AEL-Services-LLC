import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Hammer, Truck } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "Complete home cleanouts and junk removal",
    items: [
      "Furniture Removal",
      "Appliance Pickup",
      "Yard Waste Cleanup",
      "Estate Cleanouts",
      "Garage Cleanouts",
      "Basement Clearing",
      "Extreme hoard clean",
    ],
    color: "bg-blue-500",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Professional business waste solutions",
    items: [
      "Office Cleanouts",
      "Retail Space Clearing",
      "Construction Debris",
      "Warehouse Cleanup",
      "Restaurant Equipment",
      "Medical Equipment",
    ],
    color: "bg-green-500",
  },
  {
    icon: Hammer,
    title: "Demolition",
    description: "Safe and efficient demolition services",
    items: ["Shed Removal", "Deck Demolition", "Interior Demo", "Fence Removal", "Pool Removal", "Structure Teardown"],
    color: "bg-orange-500",
  },
  {
    icon: Truck,
    title: "Specialty",
    description: "Unique and challenging removals",
    items: [
      "Hot Tub Removal",
      "Piano Moving",
      "Safe Removal",
      "Tire Disposal",
      "Electronics Recycling",
      "Hazmat Cleanup",
    ],
    color: "bg-purple-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From small cleanouts to major demolitions, we handle it all with professionalism and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
              >
                <div className="text-center mb-6">
                  <div
                    className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 text-sm flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-gray-900 hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
                  variant="default"
                >
                  Learn More
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
