import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
    title: "IBDP Physics Specimen Paper",
    description: "Download IBDP Physics past papers, topic-wise questions, and expert revision strategies to enhance your understanding and boost your IB Physics scores.",
    keywords: ["ib physics", "ib subjects", "ib diploma subjects", "international baccalaureate"],
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}