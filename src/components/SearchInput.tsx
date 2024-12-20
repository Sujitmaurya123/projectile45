'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchInput() {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Implement your search logic here
        console.log('Searching for:', searchQuery)
    }

    return (
        <form onSubmit={handleSearch} className="w-full max-w-xs">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
            </div>
        </form>
    )
}

