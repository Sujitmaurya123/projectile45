import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
    title: "IBDP Maths Applications & Interpretation",
    description: "Get IBDP Maths Applications & Interpretation past papers, sample questions, and expert strategies with P45's top tutors and boost your IB scores.",
    keywords: ["ib subjects", "ib diploma subjects",
        "ib maths", "international baccalaureate",
        "ib program"],
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}