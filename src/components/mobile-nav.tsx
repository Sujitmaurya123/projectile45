import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"
import SearchInput from "./SearchInput"

interface NavItem {
    title: string
    href: string
}

interface MobileNavProps {
    items: NavItem[]
    setIsOpen: (open: boolean) => void
}

export function MobileNav({ items, setIsOpen }: MobileNavProps) {
    useLockBody()

    return (
        <div className="flex flex-col space-y-3 bg-green-600">
            <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
            >
                <span className="font-bold">Projectile45</span>
            </Link>
            <nav className="flex flex-col space-y-3">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={cn(
                            "transition-colors hover:text-foreground/80 text-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                    >
                        {item.title}
                    </Link>
                ))}
                <span className="font-bold"> <SearchInput /></span>
            </nav>
        </div>
    )
}

