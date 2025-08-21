"use client"

import { useState, useEffect, useRef } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-4">ABOUT ME</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="text-2xl">👨‍💻</span>
                    My Journey
                  </h3>
                  <p className="text-foreground leading-relaxed">
                   Hello, I’m Dariya Dourng. I’m a full-stack developer who enjoys building things for the web. I first got curious about how websites work, and that curiosity grew into a passion for creating useful and simple solutions.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    My Approach
                  </h3>
                  <p className="text-foreground leading-relaxed">
                  I focus on building with the user in mind and writing clean, easy-to-maintain code. In every project, I try to mix modern web tech with simple design so the result is not just useful but also enjoyable to use.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="text-2xl">🌟</span>
                    What Drives Me
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    I enjoy the challenge of taking a complicated problem and finding a clear, simple solution. I like working with others, learning new tools and skills, and keeping up with the latest in tech.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="text-2xl">🚀</span>
                    Beyond Code
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Outside of coding, I enjoy exploring design ideas, learning languages like English and Korean, and keeping up with trends in tech and security. I’m also a fan of K-dramas and K-pop, which inspire me with creativity and motivation. For me, learning doesn’t stop at code—I like growing in different areas that make me a better person and developer.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-8">Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all duration-300">
                  <div className="text-2xl mb-2">🎨</div>
                  <h4 className="font-medium text-foreground">Design Excellence</h4>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-medium text-foreground">Performance</h4>
                </div>
                <div className="p-4 rounded-lg bg-muted/20 border border-border hover:bg-muted/30 transition-all duration-300">
                  <div className="text-2xl mb-2">🤝</div>
                  <h4 className="font-medium text-foreground">Collaboration</h4>
                </div>
                <div className="p-4 rounded-lg bg-card/50 border border-border hover:bg-card/70 transition-all duration-300">
                  <div className="text-2xl mb-2">📚</div>
                  <h4 className="font-medium text-foreground">Continuous Learning</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
