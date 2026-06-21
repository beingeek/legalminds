"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Ahmad Hassan",
    role: "Business Owner",
    content: "Legal Minds handled our corporate restructuring with exceptional professionalism. Their attention to detail and strategic approach saved us significant time and resources. Highly recommended for any business legal needs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Khan",
    role: "Client - Family Law",
    content: "During a very difficult time, the team at Legal Minds provided not just legal expertise but genuine compassion. They guided me through my custody case with sensitivity and achieved an outcome I never thought possible.",
    rating: 5,
  },
  {
    id: 3,
    name: "Muhammad Ali",
    role: "Property Developer",
    content: "Their expertise in property law is unmatched. They resolved a complex land dispute that had been ongoing for years. Their knowledge and negotiation skills made all the difference.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sara Ahmed",
    role: "Client - Civil Litigation",
    content: "I was impressed by their thorough preparation and courtroom presence. They kept me informed throughout the process and fought tirelessly for my rights. The result exceeded my expectations.",
    rating: 5,
  },
  {
    id: 5,
    name: "Imran Sheikh",
    role: "Tech Entrepreneur",
    content: "For our startup, having Legal Minds as our legal partner has been invaluable. From IP protection to contracts, they&apos;ve been there every step of the way with practical, business-minded advice.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-20 w-32 h-32 border border-accent/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-accent/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-sans text-sm uppercase tracking-[0.2em] mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 lg:p-12 shadow-xl border border-border">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-accent-foreground" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl text-foreground font-serif italic leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground font-sans text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="border-border hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="sr-only">Previous testimonial</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="border-border hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span className="sr-only">Next testimonial</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "bg-border hover:bg-accent/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Cards - Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-12">
          {testimonials
            .filter((_, i) => i !== currentIndex)
            .slice(0, 3)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card/50 rounded-lg p-6 border border-border hover:border-accent/30 transition-colors cursor-pointer"
                onClick={() => setCurrentIndex(testimonials.indexOf(testimonial))}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground font-sans text-sm line-clamp-3 mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="font-serif font-semibold text-foreground text-sm">
                  {testimonial.name}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
