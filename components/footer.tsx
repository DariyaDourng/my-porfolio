"use client"

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-primary text-muted-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-10 w-20 h-20 bg-accent rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-accent rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dariya Dourng</h3>
            <p className="text-muted-foreground">
              Creating better digital experiences through creative and modern web solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-text-muted-foreground">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-text-muted-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-text-muted-foreground">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="text-muted-foreground">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <span className="flex flex-row items-center gap-1.5"><EnvelopeIcon className="w-5 h-5"/> <span>dariyadourng@gmail.com</span></span>
              <p className="flex flex-row items-center gap-1.5"><PhoneIcon className="w-5 h-5"/> +855 87 706 927</p>
              <p className="flex flex-row items-center gap-1.5"><MapPinIcon className="w-5 h-5"/> Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-foreground mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 .Dariya Dourng All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
