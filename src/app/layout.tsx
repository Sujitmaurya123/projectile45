import "./globals.css"
import { Metadata } from "next"
import Script from "next/script";

import { cn } from "@/lib/utils"

import { SiteHeader } from "@/components/SiteHeader"
import Footer from "@/components/home-section/footer-section"
import StickyButton from "@/components/sticky-component/sticky-button"
import { Toaster } from 'react-hot-toast';
import FaqChat from "@/components/FAQsChats/FaqChat";


// Define the metadata for the app
// export const metadata: Metadata = {
//   title: {
//     default: 'Projectile45',
//     template: '%s | Projectile45',
//   },
//   description: 'At Projectile45, we believe learning should be transformative, engaging, and uniquely tailored to you. We specialize in preparing students for IB, IGCSE, SAT, GMAT, and GRE, turning exam preparation into a personalized and inspiring journey.With expert educators—alumni from IITs, IIMs, and prestigious global institutions—we bring decades of experience to help you master complex concepts, think critically, and excel in every challenge.Our mission is to empower you to achieve your academic and career goals with confidence and clarity.',
//   icons: {
//     icon: "/projectile45.ico", // Ensure this file exists in your public directory
//     shortcut: "/logo_projectile45.jpg", // Ensure this file exists in your public directory
//     apple: "/apple-touch-icon.png", // Ensure this file exists in your public directory
//   },
// }

export const metadata: Metadata = {
  title: {
    default: "Projectile45 | Expert Coaching for IB, GRE, GMAT, IGCSE & SAT",
    template: "%s | Projectile45",
  },
  description:
    "P45 offers top-tier coaching for IB, GRE, GMAT, IGCSE, and SAT with expert faculty, personalized mentoring, and comprehensive study material. Boost your scores with a trusted test prep institute.",
  icons: {
    icon: "/projectile45.ico", // Ensure this file exists in your public directory
    shortcut: "/logo_projectile45.jpg", // Ensure this file exists in your public directory
    // apple: "/apple-touch-icon.png", // Ensure this file exists in your public directory
  },
  openGraph: {
    title: "Projectile45 | Expert Coaching for IB, GRE, GMAT, IGCSE & SAT",
    description:
      "P45 provides personalized coaching for IB, GRE, GMAT, IGCSE, and SAT with expert mentors and study materials to boost your success.",
    url: "https://www.p45.in", // Replace with the actual website URL
    type: "website",
    images: [
      {
        url: "/logo_projectile45.jpg", // Replace with a relevant OG image
        width: 1200,
        height: 630,
        alt: "Projectile45 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projectile45 | Expert Coaching for IB, GRE, GMAT, IGCSE & SAT",
    description:
      "Join Projectile45 for elite test preparation with expert faculty and tailored learning strategies.",
    images: ["/logo_projectile45.jpg"],
  },
  keywords: [
    "Online Test Preparation",
    "online tutoring service",
    "P45",
    "Projectile 45",
    "Projectile 45 test preparation",
    "IB Coaching",
    "GRE Preparation",
    "GMAT Tutoring",
    "IGCSE Study Help",
    "SAT Test Prep",
  ],
};


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
      {/* Meta Pixel Script */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '24264381986494869');
              fbq('track', 'PageView');
            `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          alt="facebook Image"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=24264381986494869&ev=PageView&noscript=1"
        />
      </noscript>
      {/* End Meta Pixel */}
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
