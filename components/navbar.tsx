"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-accent flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-accent-foreground font-serif font-bold text-xl">L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary-foreground font-serif text-xl font-semibold tracking-wide">
                Legal Minds
              </span>
              <span className="text-primary-foreground/70 text-[10px] uppercase tracking-[0.2em] font-sans">
                Law Associates
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-accent font-sans text-sm uppercase tracking-wider transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans uppercase tracking-wider text-xs"
              asChild
            >
              <Link href="tel:+923001234567">
                <Phone className="w-3 h-3 mr-2" />
                Call Now
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans uppercase tracking-wider text-xs"
              asChild
            >
              <Link href="#contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary border-primary-foreground/10">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full pt-8">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-sm bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-serif font-bold text-xl">L</span>
                  </div>
                  <span className="text-primary-foreground font-serif text-xl font-semibold">
                    Legal Minds
                  </span>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-primary-foreground/80 hover:text-accent font-sans text-sm uppercase tracking-wider transition-colors py-2 border-b border-primary-foreground/10"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pb-8 flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link href="tel:+923001234567">
                      <Phone className="w-3 h-3 mr-2" />
                      Call Now
                    </Link>
                  </Button>
                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-sans uppercase tracking-wider text-xs"
                    asChild
                  >
                    <Link href="#contact">Book Consultation</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
