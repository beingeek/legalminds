"use client"

import Image from "next/image"
import { Scale, Award, Users, Clock } from "lucide-react"

const highlights = [
  {
    icon: Scale,
    title: "Expert Legal Team",
    description: "Highly qualified attorneys with diverse specializations",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 500 successful cases handled with excellence",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description: "Personalized attention to every client&apos;s unique needs",
  },
  {
    icon: Clock,
    title: "Timely Resolution",
    description: "Efficient case management for faster outcomes",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-sans text-sm uppercase tracking-[0.2em] mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            About Our Firm
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/about-office.jpg"
                alt="Legal Minds Law Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-serif font-bold">8+</div>
              <div className="text-sm uppercase tracking-wider font-sans">Years of Excellence</div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 rounded-lg -z-10" />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Legal Minds Law Associates
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                Established in 2018, Legal Minds Law Associates has grown to become one of 
                Pakistan&apos;s most respected law firms. Our team of professional lawyers brings 
                over 8 years of combined experience across multiple areas of law.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                We are committed to providing exceptional legal services with integrity, 
                professionalism, and dedication to achieving the best possible outcomes for 
                our clients. From complex corporate matters to sensitive family cases, we 
                approach every case with the same level of commitment and expertise.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="bg-secondary/50 p-6 rounded-lg border border-border">
              <h4 className="font-serif font-bold text-foreground mb-2">Our Mission</h4>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                To deliver justice through exceptional legal representation, ensuring every 
                client receives personalized attention and strategic advocacy tailored to 
                their unique circumstances.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h5 className="font-serif font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h5>
                  <p className="text-muted-foreground text-xs font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
