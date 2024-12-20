"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MobileNav } from "@/components/mobile-nav"
import SearchInput from "./SearchInput"

const navItems = [
    
    { title: "Test prep", href: "/testprep" },
    { title: "IGCSE & IB Tutoring", href: "/igcseibtutoring" },
    { title: "Sign up for free", href: "/signupforfree" },
]

export function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-green-600  ">
            <div className="container flex h-14 items-center">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <MobileNav items={navItems} setIsOpen={setIsOpen} />
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center justify-between md:justify-end ">
                    <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
                        <span className="font-bold">Projectile45</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <Link href="/" className="mr-6 flex items-center space-x-2">
                            <span className="font-bold">Projectile45</span>
                        </Link>
                        
                            <span className="font-bold"> <SearchInput /></span>
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="transition-colors hover:text-foreground/80 text-foreground"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

