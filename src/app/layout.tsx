import "./globals.css"
import { Metadata } from "next"

import { cn } from "@/lib/utils"

import { SiteHeader } from "@/components/site-header"

// Define the metadata for the app
export const metadata: Metadata = {
  title: {
    default: 'My App',
    template: '%s | My App',
  },
  description: 'Welcome to my app',
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
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
         
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
