"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { withBasePath } from "@/helper"

const projects = [
  {
    id: 1,
    title: "Mock Exam Platform",
    description: "Modern online shopping mall built with React and Node.js",
    image: "./mockexam.png",
    tech: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    category: "Web Application",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking solution developed with React Native",
    image: "/mobile-banking-app.png",
    tech: ["React Native", "TypeScript", "Firebase"],
    category: "Mobile App",
  },
  {
    id: 3,
    title: "Corporate Dashboard",
    description: "Data visualization dashboard using Vue.js and D3.js",
    image: "/corporate-dashboard-analytics.png",
    tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    category: "Dashboard",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Real-time social networking service implemented with Next.js",
    image: "/social-media-interface.png",
    tech: ["Next.js", "Socket.io", "Redis", "AWS"],
    category: "Social Platform",
  },
]

const techIcons: { [key: string]: string } = {
  "Next.js": "./icons/nextjs.svg",
  "Laravel": "./icons/laravel.svg",
  MySQL: "./icons/mysql.svg",
  "Tailwind CSS": "./icons/tailwind.svg",
  "React Native": "📱",
  TypeScript: "📘",
  Firebase: "🔥",
  "Vue.js": "💚",
  "D3.js": "📊",
  Python: "🐍",
  PostgreSQL: "🐘",
 
  "Socket.io": "🔌",
  Redis: "🔴",
  AWS: "☁️",
}

export default function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleProjects((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-20 px-6 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-secondary rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-card-foreground mb-6 ">PROJECT FEATURE</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto animate-fade-in-up">
            Explore my experience and technical skills through various projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el
              }}
              data-index={index}
              className={`transition-all duration-700 ${
                visibleProjects.includes(index) ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4  bg-background border-border overflow-hidden">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg ">View Details</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm font-medium text-muted-foreground px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-2 bg-card text-card-foreground text-sm rounded-full border border-border flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground hover:shadow-lg transform ${
                          hoveredProject === project.id ? "" : ""
                        }`}
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        <img className="w-6 h-6" src ={techIcons[tech] || "⚡"}></img>
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
