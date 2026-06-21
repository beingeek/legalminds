"use client"

import { Shield, Clock, Lock, Award, Users, Zap } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Our team comprises seasoned attorneys with proven track records in their respective fields of law.",
    stat: "500+",
    statLabel: "Cases Handled",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "We understand urgency in legal matters. Expect prompt responses and swift action on your case.",
    stat: "24hr",
    statLabel: "Response Time",
  },
  {
    icon: Lock,
    title: "Complete Confidentiality",
    description: "Your privacy is paramount. All consultations and case details are handled with strict confidentiality.",
    stat: "100%",
    statLabel: "Privacy Assured",
  },
  {
    icon: Award,
    title: "Proven Success",
    description: "Our high success rate speaks to our commitment to achieving favorable outcomes for our clients.",
    stat: "98%",
    statLabel: "Success Rate",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Every case receives personalized attention, ensuring strategies tailored to your unique situation.",
    stat: "1000+",
    statLabel: "Happy Clients",
  },
  {
    icon: Zap,
    title: "Modern Solutions",
    description: "We combine traditional legal expertise with modern technology for efficient case management.",
    stat: "8+",
    statLabel: "Years Experience",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-sans text-sm uppercase tracking-[0.2em] mb-4">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            We distinguish ourselves through unwavering commitment to excellence, 
            integrity, and delivering results that matter.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card border border-border rounded-lg p-8 h-full hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-serif font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                  {reason.description}
                </p>

                {/* Stat */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-serif font-bold text-accent">
                      {reason.stat}
                    </span>
                    <span className="text-muted-foreground text-xs font-sans uppercase tracking-wider">
                      {reason.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-20 bg-primary rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="relative grid lg:grid-cols-4 gap-8 text-center">
            <div className="lg:border-r lg:border-primary-foreground/20">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">8+</div>
              <div className="text-primary-foreground/70 font-sans text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="lg:border-r lg:border-primary-foreground/20">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/70 font-sans text-sm uppercase tracking-wider">Cases Won</div>
            </div>
            <div className="lg:border-r lg:border-primary-foreground/20">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">1000+</div>
              <div className="text-primary-foreground/70 font-sans text-sm uppercase tracking-wider">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/70 font-sans text-sm uppercase tracking-wider">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
