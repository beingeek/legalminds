"use client"

import { useState } from "react"
import { Heart, Briefcase, Building2, Scale, Home, BookOpen, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const practiceAreas = [
  {
    icon: Heart,
    title: "Family Law",
    description: "Divorce, custody disputes, alimony, and domestic relations matters handled with sensitivity and expertise.",
    features: ["Divorce Proceedings", "Child Custody", "Alimony & Support", "Guardian Cases"],
  },
  {
    icon: Scale,
    title: "Criminal Law",
    description: "Robust defense strategies for criminal cases, protecting your rights throughout the legal process.",
    features: ["Criminal Defense", "Bail Applications", "Appeals", "White Collar Crime"],
  },
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Comprehensive business legal services from formation to complex commercial transactions.",
    features: ["Company Formation", "Contracts", "Mergers & Acquisitions", "Compliance"],
  },
  {
    icon: Briefcase,
    title: "Civil Litigation",
    description: "Strategic representation in civil disputes, ensuring your interests are protected in court.",
    features: ["Contract Disputes", "Tort Claims", "Recovery Suits", "Injunctions"],
  },
  {
    icon: Home,
    title: "Property Disputes",
    description: "Expert handling of real estate matters, land disputes, and property documentation.",
    features: ["Land Disputes", "Title Verification", "Property Transfer", "Tenancy Issues"],
  },
  {
    icon: BookOpen,
    title: "Legal Consultation",
    description: "Professional legal advice and guidance for individuals and businesses on any legal matter.",
    features: ["Legal Opinions", "Due Diligence", "Risk Assessment", "Advisory Services"],
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-sans text-sm uppercase tracking-[0.2em] mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Practice Areas
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-primary-foreground/70 font-sans max-w-2xl mx-auto">
            Comprehensive legal services tailored to meet your specific needs with 
            expertise, dedication, and a commitment to achieving the best outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => (
            <Card
              key={area.title}
              className={`bg-primary-foreground/5 border-primary-foreground/10 hover:border-accent/50 transition-all duration-500 group overflow-hidden ${
                hoveredIndex === index ? "scale-[1.02] shadow-xl shadow-accent/10" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <area.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-primary-foreground/60 font-sans text-sm leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {area.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-primary-foreground/70 text-sm font-sans">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-accent-foreground hover:bg-accent p-0 h-auto font-sans text-sm uppercase tracking-wider group/btn"
                  asChild
                >
                  <Link href="#contact">
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-primary-foreground/60 font-sans mb-6">
            Don&apos;t see your specific legal need? We handle many more areas of law.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans uppercase tracking-wider px-8"
            asChild
          >
            <Link href="#contact">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
