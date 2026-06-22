"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const parallax = hero.querySelector(".parallax-bg") as HTMLElement
      if (parallax) {
        parallax.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 parallax-bg">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern law office interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full animate-pulse" />
        <div className="absolute bottom-40 right-20 w-48 h-48 border border-accent/10 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent font-sans text-sm uppercase tracking-wider">
              Established 2018
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Excellence in
            <span className="block text-accent">Legal Counsel</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/70 font-sans leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            Protecting your rights with integrity, dedication, and over 8 years of expert
            legal experience. Your trusted partner in navigating complex legal matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans uppercase tracking-wider px-8 py-6 text-sm group"
              asChild
            >
              <Link href="#contact">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-sans uppercase tracking-wider px-8 py-6 text-sm group"
              asChild
            >
              <Link href="https://wa.me/923026900892" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-primary-foreground/10 max-w-xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-1">8+</div>
              <div className="text-primary-foreground/60 font-sans text-sm uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-1">500+</div>
              <div className="text-primary-foreground/60 font-sans text-sm uppercase tracking-wider">
                Cases Won
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-1">98%</div>
              <div className="text-primary-foreground/60 font-sans text-sm uppercase tracking-wider">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
