import { Metadata } from 'next'


export  const metadata: Metadata = {
    title: "Course Fees Structure",
    description: "Get a detailed breakdown of course fees, tuition costs, and registration charges. Explore flexible pricing options for SAT, GRE, GMAT, IB, and IGCSE at P45.",
    keywords: ["tuition fees", "SAT fees", "GMAT fees", "GRE fees", "IGCSE fees", "P45 courses fees"],
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}