import "./globals.css"
import { Metadata } from "next"

import { cn } from "@/lib/utils"

import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/home-section/footer-section"

// Define the metadata for the app
export const metadata: Metadata = {
  title: {
    default: 'Projectile45',
    template: '%s | Projectile45',
  },
  description: 'Welcome to Projectile45',
  icons: {
    icon: "/favicon.ico", // Ensure this file exists in your public directory
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
         
          <div className="flex-1">{children}</div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
