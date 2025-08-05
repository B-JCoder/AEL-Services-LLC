"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Hammer, Truck } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Specialty",
    description: "Unique and challenging removals",
    items: [
      "Estate Cleanouts",
      "Hoarder Home Cleanouts with Care",
      "Real Estate / Foreclosure Cleanouts",
      "Storm Debris Cleanup",
      "Appliance and Scrap Metal Pickup",
    ],
    color: "bg-purple-600",
  },
  {
    icon: Home,
    title: "Residential",
    description: "Efficient home junk removal services",
    items: [
      "Household Clutter Removal",
      "Garage Cleanouts",
      "Attic and Basement Cleanouts",
      "Furniture Removal",
      "Appliance Removal (Fridges, Washers, etc.)",
      "Yard Debris Removal (Branches, Leaves, etc.)",
      "Hot Tub and Shed Demolition/Removal",
      "Mattress and Box Spring Disposal",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Professional business junk removal",
    items: [
      "Office Cleanouts",
      "Construction Site Cleanup",
      "Property Management Cleanouts (Apartments, Evictions, etc.)",
      "Retail Space Junk Removal",
      "Storage Unit Cleanouts",
    ],
    color: "bg-green-600",
  },
  {
    icon: Hammer,
    title: "Demolition",
    description: "Safe and efficient demolition services",
    items: [
      "Light Demolition (Sheds, Playsets, Decks, Fences)",
      "Interior Demolition (Bathroom/Kitchen Tear-Outs)",
      "Full Structure Tear-Downs (Small Houses, Garages, Mobile Homes)",
    ],
    color: "bg-orange-500",
  },
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From small cleanouts to major demolitions, we handle it all with professionalism and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {services.map((service, index) => {
            const Icon = service.icon;
            const isSpecialty = service.title === "Specialty";
            return (
              <Card
      key={index}
      className={`bg-white border rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between
        ${isSpecialty ? "ring-2 ring-purple-400/50 shadow-lg scale-[1.02]" : ""}
      `}
    >
      <div>
        <div className="flex justify-center mb-4">
          <div
            className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-center text-gray-500 mb-4">
          {service.description}
        </p>

        <ul className="space-y-2 text-sm text-gray-700">
          {service.items.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="flex items-start space-x-2"
            >
              <span className="w-2 h-2 mt-1 bg-blue-500 rounded-full flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Button
          onClick={scrollToContact}
          className="w-full bg-gray-900 hover:bg-blue-600 text-white rounded-full text-sm py-2.5 transition-colors"
        >
          Book Now
        </Button>
      </div>
    </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
