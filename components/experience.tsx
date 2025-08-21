"use client"

import { useState, useRef, useEffect } from "react"

const experiences = [
  {
    position: "Junior Web Developer",
    company: "OnPoint Co., Ltd.",
    duration: "July, 2025 - Present",
    location: "Phnom Penh, Cambodia",
  },
  {
    position: "Web Developer Intern",
    company: "Institute of Technology Cambodia",
    duration: "March, 2025 - June, 2025",
    location: "Phnom Penh, Cambodia",
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-4">EXPERIENCES</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          My professional journey in web development, building innovative solutions and leading successful projects.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            className={`relative mb-4 transition-all duration-700 ease-out transform ${
              visibleItems.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Timeline dot aligned with position */}
            <div className="absolute left-6 top-10 w-4 h-4 bg-accent rounded-full hidden md:block" />

            <div className="md:ml-20 bg-background rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-medium text-foreground mb-1">{exp.position}</h3>
                  <p className="text-lg text-accent font-light">{exp.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-muted font-medium">{exp.duration}</p>
                  <p className="text-sm text-foreground">{exp.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
