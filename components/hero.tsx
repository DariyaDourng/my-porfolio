"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/3 to-primary/3 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="mb-6"></div>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Hello,
                  <br />
                  I'm <span className="text-accent animate-gradient-text">Dariya Dourng</span>
                  <br />
                  <span className="text-primary">Full Stack Developer</span>
                </h1>

                <div className="text-base md:text-lg text-muted mb-6">
                  <span className="typewriter">Creating modern and innovative web experiences with passion</span>
                </div>

                <p className="text-base text-4xlforeground leading-relaxed mb-8">
                  Combining user-centered design with cutting-edge technology to deliver meaningful digital solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20 text-sm">
                  React & Next.js Expert
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm">
                  Full Stack Developer
                </span>
                <span className="px-4 py-2 bg-muted/20 text-foreground rounded-full border border-border text-sm">
                  UI/UX Enthusiast
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToPortfolio}
                  size="lg"
                  className="bg-primary text-muted-foreground hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-card transition-all duration-300 bg-transparent hover:scale-105"
                >
                  Get My Resume
                </Button>
              </div>
            </div>

            {/* Right side - Photo space */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center overflow-hidden group hover:scale-105 transition-all duration-500">
                  {/* Placeholder for profile photo */}
                  <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                    <img
                      src="/yaya.jpg"
                      alt="Dariya Dourng - Full Stack Developer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                {/* Decorative elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse-delayed"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent/50 rounded-full animate-float"></div>
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-foreground mb-2">Passionate</h3>
              <p className="text-sm text-foreground">
                Building scalable web applications with modern technologies
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold text-foreground mb-2">Creative Solutions</h3>
              <p className="text-sm text-foreground">
                Turning complex problems into elegant, user-friendly interfaces
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="font-semibold text-foreground mb-2">Quality Focused</h3>
              <p className="text-sm text-foreground">
                Delivering pixel-perfect designs with clean, maintainable code
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
