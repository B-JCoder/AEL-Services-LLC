import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "How fast can you come?",
    answer:
      "We typically offer same-day or next-day service! Call us in the morning, and we can often be there by afternoon. For urgent situations, we prioritize emergency calls.",
  },
  {
    question: "Do you handle large demolitions?",
    answer:
      "We handle everything from small shed removals to major structural demolitions. Our team is equipped with the right tools and expertise for projects of all sizes.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We proudly serve Palm Coast and surrounding areas in Flagler County. This includes Flagler Beach, Bunnell, and nearby communities. Call us to confirm service in your area!",
  },
  {
    question: "Do I need to move anything before you arrive?",
    answer:
      "Not at all! That's what we're here for. Just point out what needs to go, and we'll handle all the heavy lifting, loading, and hauling. You can sit back and relax.",
  },
  {
    question: "How do you price your services?",
    answer:
      "We offer transparent, upfront pricing based on volume and type of items. We provide free estimates and there are never any hidden fees. You'll know the exact cost before we start.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes! We are fully licensed and insured for your protection and peace of mind. We take safety seriously and follow all local regulations and disposal guidelines.",
  },
  {
    question: "What can't you take?",
    answer:
      "We handle most items, but cannot take hazardous materials like paint, chemicals, asbestos, or medical waste. We'll let you know during our free estimate if anything needs special handling.",
  },
  {
    question: "Do you recycle or donate items?",
    answer:
      "We believe in responsible disposal. Items in good condition are donated to local charities, and we recycle materials whenever possible to minimize landfill waste.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers! Here are the most common questions we receive.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-8 md:p-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-2xl px-6 hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  )
}
