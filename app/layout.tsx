import type React from "react"
import { Inter, Noto_Sans_KR } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-kr",
})

export const metadata = {
  title: "Dourng Dariya | Web Developer",
  description: "Modern Korean web developer portfolio showcasing innovative projects and clean design",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKR.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
