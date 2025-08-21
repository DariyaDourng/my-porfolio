import Header from "@/components/header"
import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
       <About />
      <Portfolio />
     
      <Skills />
      <Experience />
      {/* </CHANGE> */}
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
