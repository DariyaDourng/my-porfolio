"use client"

import { withBasePath } from "@/helper"
import { useState, useEffect, useRef } from "react"

const skillCategories = {
  languages: [
    { name: "JavaScript", level: 75, icon: withBasePath+"/icons/javascript.png", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", level: 72, icon: withBasePath+"/icons/typescript.svg", color: "from-blue-500 to-blue-700" },
    { name: "HTML", level: 78, icon: withBasePath+"/icons/html.svg", color: "from-orange-400 to-orange-600" },
    { name: "CSS", level: 77, icon: withBasePath+"/icons/css.svg", color: "from-blue-400 to-blue-600" },
    { name: "Python", level: 50, icon: withBasePath+ "/icons/python.svg", color: "from-yellow-400 to-blue-500" },
    { name: "PHP", level: 70, icon: withBasePath+"/icons/php.svg", color: "from-purple-500 to-purple-700" },
  ],
  frameworks: [
    { name: "React", level: 73, icon: withBasePath+"/icons/react.svg", color: "from-blue-400 to-blue-600" },
    { name: "Next.js", level: 75, icon: withBasePath+"/icons/nextjs.svg", color: "from-gray-700 to-black" },
    { name: "Laravel", level: 74, icon: withBasePath+"/icons/laravel.svg", color: "from-red-500 to-red-700" },
  ],
  databases: [
    { name: "MySQL", level: 75, icon: withBasePath+"/icons/mysql.svg", color: "from-blue-500 to-blue-700" },
    { name: "MongoDB", level: 50, icon: withBasePath+"/icons/mogodb.svg", color: "from-green-500 to-green-700" },
  ],
  tools: [
    { name: "Git", level: 80, icon: withBasePath+"/icons/git.svg", color: "from-orange-500 to-red-600" },
    { name: "Docker", level: 50, icon: withBasePath+"/icons/docker.svg", color: "from-blue-400 to-blue-600" },
    { name: "VS Code", level: 80, icon: withBasePath+"/icons/vscode.svg", color: "from-blue-500 to-purple-600" },
    { name: "Figma", level: 80, icon: withBasePath+"/icons/figma.svg", color: "from-purple-400 to-pink-500" },
  ],
}

// flatten all skills into one array
const allSkills = Object.values(skillCategories).flat()

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          allSkills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, index])
            }, index * 100)
          })
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
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-4">TECHNICAL SKILLS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-primary/20 rounded-full blur-sm"></div>
            </div>
            <p className="text-foreground mt-6 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group transform transition-all duration-500 hover:scale-105 ${
                  animatedSkills.includes(index) ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative p-6 bg-gradient-to-r from-background/50 to-muted/20 rounded-2xl border border-muted/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <span className="text-foreground font-medium">{skill.name}</span>
                    </div>
                    <span className="text-primary text-sm font-semibold px-2 py-1 bg-primary/10 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1500 ease-out relative overflow-hidden`}
                        style={{
                          width: animatedSkills.includes(index) ? `${skill.level}%` : "0%",
                          clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                    <div
                      className="absolute -top-8 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0"
                      style={{
                        left: animatedSkills.includes(index) ? `calc(${skill.level}% - 20px)` : "0%",
                        transition: "left 1500ms ease-out, opacity 300ms, transform 300ms",
                      }}
                    >
                      {skill.level}%
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
