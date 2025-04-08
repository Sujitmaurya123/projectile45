import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
    title: "IGCSE Physics Questions Paper",
    description: "Download IGCSE Physics past papers, topic-wise questions, and expert revision strategies to enhance your understanding and boost your IGCSE Physics scores.",
    keywords: ["igcse physics", "igcse subjects", ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}