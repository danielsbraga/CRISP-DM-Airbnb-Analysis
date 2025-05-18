import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Airbnb Analysis - Boston",
  description: "CRISP-DM Analysis of Airbnb Data in Boston",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
