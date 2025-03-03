import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Blogs Latest Insights & Exam Tips",
    description: "Stay updated with expert insights, exam strategies, and study tips for SAT, GMAT, GRE, IB, and IGCSE. Read the latest blogs to boost your test prep at P45.",
    keywords: [
        "SAT study tips",
        "GMAT strategies",
        "GRE preparation",
        "IB subject guides",
        "IGCSE exam tips",
        "P45 blog"
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}