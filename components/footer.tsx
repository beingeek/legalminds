"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Practice Areas", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const practiceAreas = [
  { label: "Family Law", href: "#services" },
  { label: "Criminal Law", href: "#services" },
  { label: "Corporate Law", href: "#services" },
  { label: "Civil Litigation", href: "#services" },
  { label: "Property Disputes", href: "#services" },
  { label: "Legal Consultation", href: "#services" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">L</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary-foreground font-serif text-xl font-semibold">
                  Legal Minds
                </span>
                <span className="text-primary-foreground/60 text-[10px] uppercase tracking-[0.2em] font-sans">
                  Law Associates
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/60 font-sans text-sm leading-relaxed mb-6">
              Premier legal services since 2018. We are committed to providing 
              exceptional legal representation with integrity and dedication.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="w-9 h-9 rounded-full border-primary-foreground/20 text-primary-foreground/60 hover:bg-accent hover:border-accent hover:text-accent-foreground"
                  asChild
                >
                  <Link href={social.href}>
                    <social.icon className="w-4 h-4" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-serif font-bold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent font-sans text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-primary-foreground font-serif font-bold text-lg mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent font-sans text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary-foreground font-serif font-bold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="text-primary-foreground/60 font-sans text-sm">
                  2-Bank Square<br />
                  The Mall Road, Lahore, Pakistan
                </p>
              </li>
              <li>
                <Link
                  href="tel:+923026900892"
                  className="text-primary-foreground/60 hover:text-accent font-sans text-sm transition-colors"
                >
                  +92 302 6900892
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:legalminds1992@gmail.com"
                  className="text-primary-foreground/60 hover:text-accent font-sans text-sm transition-colors"
                >
                  legalminds1992@gmail.com
                </Link>
              </li>
              <li>
                <p className="text-primary-foreground/60 font-sans text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 2:00 PM
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/40 font-sans text-sm text-center md:text-left">
              © {new Date().getFullYear()} Legal Minds Law Associates. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-primary-foreground/40 hover:text-accent font-sans text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/40 hover:text-accent font-sans text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-accent-foreground border-accent hover:bg-accent/90 shadow-lg z-50"
      >
        <ArrowUp className="w-5 h-5" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </footer>
  )
}
