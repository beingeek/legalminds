"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 302 6900892"],
    action: "tel:+923026900892",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["legalminds1992@gmail.com"],
    action: "mailto:legalminds1992@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["2-Bank Square", "The Mall Road, Lahore, Pakistan"],
    action: "https://maps.google.com?q=31.567728,74.313383",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
    action: null,
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-sans text-sm uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Ready to discuss your legal needs? Reach out for a confidential consultation 
            with our experienced team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Schedule a Consultation
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground text-lg mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-muted-foreground font-sans text-sm">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-sans text-sm">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          required
                          placeholder="John"
                          className="bg-background border-border focus:border-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-sans text-sm">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          required
                          placeholder="Doe"
                          className="bg-background border-border focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-sans text-sm">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="bg-background border-border focus:border-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-sans text-sm">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+92 300 1234567"
                        className="bg-background border-border focus:border-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-sans text-sm">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        required
                        placeholder="Brief description of your legal matter"
                        className="bg-background border-border focus:border-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-sans text-sm">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Please describe your legal needs..."
                        className="bg-background border-border focus:border-accent resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-sans uppercase tracking-wider"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-sans uppercase tracking-wider"
                asChild
              >
                <Link href="https://wa.me/923026900892" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <Card
                  key={info.title}
                  className="border-border hover:border-accent/50 transition-colors group"
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                      <info.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground font-sans text-sm">
                        {info.action && i === 0 ? (
                          <Link
                            href={info.action}
                            className="hover:text-accent transition-colors"
                            target={info.action.startsWith("http") ? "_blank" : undefined}
                            rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {detail}
                          </Link>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card className="border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[16/9] bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.7896785410847!2d74.313383!3d31.567728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e5e9999999%3A0x1234567890!2s2-Bank%20Square%2C%20The%20Mall%20Road%2C%20Lahore!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Legal Minds Office Location"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality Note */}
            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <h4 className="font-serif font-bold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Confidentiality Assured
              </h4>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                All consultations are completely confidential. Your information is 
                protected by attorney-client privilege and our strict privacy policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
