import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
    title: "IBDP Maths Analysis & Approaches",
    description: "Access IBDP Maths AA past papers, sample questions, and expert strategies with P45’s top tutors to master the subject and improve your IB scores.",
    keywords: ["ib subjects", "ib diploma subjects", "ib maths", "International Baccalaureate",
        "international baccalaureate program"],
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}