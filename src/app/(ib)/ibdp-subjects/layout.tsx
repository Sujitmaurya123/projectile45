import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "IBDP Exam Subjects ",
    description: "Discover the full list of IBDP subjects, including core and elective courses, to help you choose the right subjects for your academic and career goals.",
    keywords: ["ib subjects list",
        "ib subjects", "international baccalaureate",
        "IB Program", "ib diploma subjects"],
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}