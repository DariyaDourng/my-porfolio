"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("Form submitted:", formData)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-6 bg-card relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-card-foreground mb-6">
            CONTACT ME
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Let's discuss new projects and collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 border border-accent rounded-full flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted">dariyadourng@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 border border-accent rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <p className="text-muted">+855 877 069 27</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 border border-accent rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted">Phnom Penh, Phnom Penh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4">
                Social Media
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground"
                >
                  <span className="font-bold">G</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground"
                >
                  <span className="font-bold">L</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground"
                >
                  <span className="font-bold">T</span>
                </a>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <Card className="bg-background border-border shadow-2xl">
            <CardHeader>
              <CardTitle className="text-foreground">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-input border-border placeholder-black text-black"
                  required
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-input border-border placeholder-black text-black"
                  required
                />

                <Textarea
                  name="message"
                  placeholder="Please enter your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-input border-border placeholder-black text-black min-h-32"
                  required
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-muted-foreground hover:bg-accent"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
