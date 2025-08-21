"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const educationData = [
    {
      degree: "Engineering in Computer Science",
      school: "Institute of Technology Cambodia",
      period: "2020 - 2025",
      description:
        "Specialized in software engineering and web development. Graduated Magna Cum Laude with a focus on modern web technologies and user experience design.",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "Outstanding Student Award in Web Development",
        "Led university coding bootcamp for 200+ students",
      ],
    },
    {
      degree: "High School Diploma",
      school: "Hun Sen AngSdok High School",
      period: "2017-2020",
      description:
        "Intensive 6-month program covering modern web development stack including React, Node.js, and cloud deployment.",
      achievements: ["Top 5% graduate in cohort", "Built 3 full-stack applications", "Mentored junior developers"],
    },
    // {
    //   degree: "Advanced JavaScript & React Certification",
    //   school: "Meta (Facebook) Professional Certificate",
    //   period: "2023",
    //   description:
    //     "Advanced certification in React ecosystem, including Next.js, TypeScript, and modern development practices.",
    //   achievements: [
    //     "Perfect score on final assessment",
    //     "Contributed to open-source React projects",
    //     "Published technical articles on Medium",
    //   ],
    // },
  ]

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-card">
      {/* Removed container wrapper */}
      <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <h2 className="text-4xl font-thin text-foreground mb-4">EDUCATION</h2>
        <p className="text-lg text-foreground max-w-2xl mx-auto">
          My academic journey and continuous learning in web development and computer science
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 px-6">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className={`transition-all duration-700 hover:shadow-lg ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-foreground mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-accent font-light mb-2">{edu.school}</h4>
                  {/* <p className="text-foreground mb-4">{edu.description}</p> */}
                </div>
                <div className="md:ml-8 md:text-right">
                  <span className="inline-block bg-primary text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* <div className="border-t border-border pt-4">
                <h5 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h5>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-foreground">
                      <span className="text-accent mr-3 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div> */}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Certifications */}
      <div
        className={`mt-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationDelay: "0.8s" }}
      >
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">Additional Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "AWS Certified Developer",
            "Google Cloud Professional",
            "MongoDB Certified Developer",
            "Docker & Kubernetes",
            "GraphQL Specialist",
            "Accessibility (WCAG) Expert",
          ].map((cert, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-foreground font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
