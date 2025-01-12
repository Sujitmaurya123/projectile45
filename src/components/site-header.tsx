"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";



import { FreeDemo } from "./free-demo-signup/FreeDemo";
import SATDropdown from "./navbar-section/SATDropdown";
import IBDropdown from "./navbar-section/IBDropdown";
import GREDropdown from "./navbar-section/GREDropdown";
import GMATDropdown from "./navbar-section/GMATDropdown";
import IGCSEDropdown from "./navbar-section/IGCSEDropdown";
import MobileNav from "./mobile-navbar/MobileNav";

export function SiteHeader() {
  
  const [isOpen, setIsOpen] = useState(false);
  // mobile open sheet and close 
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const toggleSheet = (open: boolean) => {
    setIsOpenMobile(open);
  };

  const handleClose = () => {
    setIsOpenMobile(false);
  }
  

  return (
    <header className="sticky top-0 z-50 bg-white w-full border-b text-gray-500 pr-4">
      <div className="container flex h-16 items-center w-auto justify-between">
        <div className="ml-[25px] lg:ml-[80px] mr-4 flex items-center md:mr-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo_projectile45.jpg"
              alt="Projectile 45 Logo"
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
              className="h-8 w-auto rounded-full"
            />
            <span className="text-xl lg:text-2xl font-bold text-headingcol">Projectile 45</span>
          </Link>
        </div>
        {/* Mobile Navigation */}
        <Sheet open={isOpenMobile} onOpenChange={toggleSheet}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="pr-0 bg-purple-100 dark:bg-gray-900 z-50"
          >
            <SheetTitle className="text-left text-2xl font-bold ml-4 text-headingcol">
              Projectile 45
            </SheetTitle>
            <MobileNav onClose={handleClose} />
          </SheetContent>
        </Sheet>
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-4">
          <nav className="flex items-center space-x-4 gap-1">

            <SATDropdown/>
            <IBDropdown/>
            <GREDropdown/>
            <GMATDropdown/>
            <IGCSEDropdown/>
            
            {/* <TestPrepDropdown /> */}
            
            <span
              
              className=" text-lg font-medium transition-colors hover:text-black/80 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Free Demo
            </span>
            <Link href="/sign-up-for-free">
            <Button
              className="text-purple-600 bg-white hover:bg-purple-700 hover:text-white rounded-3xl text-lg"
              
            >
              Sign up for free
            </Button>
            </Link>
          </nav>
        </div>
      </div>
      {isOpen && <FreeDemo  setIsOpen={setIsOpen} /> }
    </header>
  );
}