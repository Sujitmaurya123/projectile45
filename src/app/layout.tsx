import "./globals.css"
import { Metadata } from "next"

import { cn } from "@/lib/utils"

import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/home-section/footer-section"
import StickyButton from "@/components/sticky-component/sticky-button"
import { Toaster } from 'react-hot-toast';
// Define the metadata for the app
export const metadata: Metadata = {
  title: {
    default: 'Projectile45',
    template: '%s | Projectile45',
  },
  description: 'At Projectile45, we believe learning should be transformative, engaging, and uniquely tailored to you. We specialize in preparing students for IB, IGCSE, SAT, GMAT, and GRE, turning exam preparation into a personalized and inspiring journey.With expert educators—alumni from IITs, IIMs, and prestigious global institutions—we bring decades of experience to help you master complex concepts, think critically, and excel in every challenge.Our mission is to empower you to achieve your academic and career goals with confidence and clarity.',
  icons: {
    icon: "/projectile45.ico", // Ensure this file exists in your public directory
    shortcut: "/logo_projectile45.jpg", // Ensure this file exists in your public directory
    apple: "/apple-touch-icon.png", // Ensure this file exists in your public directory
  },
}

// Define viewport-related settings (themeColor)
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-pink-40 to-purple-200 font-sans antialiased"
        )}
      >
        <div className="relative flex min-h-screen flex-col">

          <SiteHeader />
          <Toaster/>
          <StickyButton/>
         
          <div className="flex-1">{children}</div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
