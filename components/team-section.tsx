"use client"

import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const team = [
  {
    name: "Advocate Ahmad Khan",
    role: "Senior Partner",
    specialization: "Corporate & Commercial Law",
    experience: "15+ years",
    image: "/images/team-1.jpg",
    linkedin: "#",
    email: "ahmad@legalminds.pk",
  },
  {
    name: "Advocate Fatima Zahra",
    role: "Partner",
    specialization: "Family & Civil Law",
    experience: "12+ years",
    image: "/images/team-2.jpg",
    linkedin: "#",
    email: "fatima@legalminds.pk",
  },
  {
    name: "Advocate Hassan Ali",
    role: "Associate Partner",
    specialization: "Criminal Defense",
    experience: "10+ years",
    image: "/images/team-3.jpg",
    linkedin: "#",
    email: "hassan@legalminds.pk",
  },
  {
    name: "Advocate Sara Malik",
    role: "Senior Associate",
    specialization: "Property & Real Estate",
    experience: "8+ years",
    image: "/images/team-4.jpg",
    linkedin: "#",
    email: "sara@legalminds.pk",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-sans text-sm uppercase tracking-[0.2em] mb-4">
            Meet The Experts
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Our Legal Team
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-primary-foreground/70 font-sans max-w-2xl mx-auto">
            Our accomplished attorneys bring diverse expertise and a shared commitment 
            to delivering exceptional legal representation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member) => (
            <Card
              key={member.name}
              className="bg-transparent border-primary-foreground/10 hover:border-accent/50 transition-all duration-500 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-10 h-10 rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
                        asChild
                      >
                        <Link href={member.linkedin}>
                          <Linkedin className="w-4 h-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-10 h-10 rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
                        asChild
                      >
                        <Link href={`mailto:${member.email}`}>
                          <Mail className="w-4 h-4" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-serif font-bold text-primary-foreground mb-1 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-sans mb-2">
                    {member.role}
                  </p>
                  <p className="text-primary-foreground/60 text-xs font-sans mb-1">
                    {member.specialization}
                  </p>
                  <p className="text-primary-foreground/40 text-xs font-sans uppercase tracking-wider">
                    {member.experience}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="text-center mt-16 pt-16 border-t border-primary-foreground/10">
          <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-4">
            Join Our Team
          </h3>
          <p className="text-primary-foreground/60 font-sans max-w-xl mx-auto mb-6">
            We&apos;re always looking for talented legal professionals who share our 
            commitment to excellence.
          </p>
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans uppercase tracking-wider"
            asChild
          >
            <Link href="mailto:careers@legalminds.pk">
              View Career Opportunities
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
