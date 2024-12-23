"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import Image from "next/image"
import TestPrepDropdown from "./testprep/test-prep"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-green-400 pr-4">
      <div className="container flex h-16 items-center w-auto justify-between">
        <div className="ml-4 mr-4 flex items-center md:mr-6">
          <Link href="/" className="flex items-center space-x-2">
          <Image
              src="/logo_projectile45.jpg" 
              alt="Projectile 45 Logo" 
              width={100}
              height={100}
              className="h-8 w-auto  rounded-full"  // Adjust size of the logo
            />
            <span className="text-xl font-bold">Projectile 45</span>
          </Link>
        </div>
        {/* Mobile Navigation */}
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-green-400 dark:bg-gray-900 z-50">
            <SheetTitle className="text-left">Projectile 45</SheetTitle>
            <MobileNav />
          </SheetContent>
        </Sheet>
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
          <nav className="flex items-center space-x-6">
           
              <TestPrepDropdown/>
            
            <Link
              href="/igcseibtutoring"
              className="text-sm font-medium transition-colors hover:text-black/80"
            >
              IGCSE & IB Tutoring
            </Link>
            <Link
              href="/free-demo"
              className="text-sm font-medium transition-colors hover:text-black/80"
            >
              Free Demo
            </Link>
            <Link 
            href="/sign-up-for-free"
            >
            <Button className="bg-black text-white hover:bg-black/90 rounded">
              Sign up for free
            </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3 p-4">
      <TestPrepDropdown />
      <Link
        href="/igcseibtutoring"
        className="text-sm font-medium transition-colors hover:text-black/80"
      >
        IGCSE & IB Tutoring
      </Link>
      <Link
        href="#"
        className="text-sm font-medium transition-colors hover:text-black/80"
      >
        Free Demo
      </Link>
      <Button className="bg-black text-white hover:bg-black/90">
        Sign up for free
      </Button>
    </div>
  )
}
