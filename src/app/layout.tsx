import "./globals.css"
import { Metadata } from "next"
import Script from "next/script";

import { cn } from "@/lib/utils"

import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/home-section/footer-section"
import StickyButton from "@/components/sticky-component/sticky-button"
import { Toaster } from 'react-hot-toast';
import FaqChat from "@/components/FAQsChats/FaqChat";

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
      {/* Google Tag Manager - Head */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KLMMPFVV');
          `}
      </Script>
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-pink-40 to-purple-200 font-sans antialiased"
        )}
      >
        {/* Google Tag Manager - Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KLMMPFVV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <Toaster/>
          <StickyButton/>
         {/* FAQs Chat */}
                    <FaqChat />
         
          
          <div className="flex-1">{children}</div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
