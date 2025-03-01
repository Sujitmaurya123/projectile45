
import GREGuide from "@/components/gre-section/gre-Guide";
import GREComparisonTable from "@/components/gre-section/gre-test-pattern-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GRE Exam Pattern | Section-Wise Breakdown",
    description: "Understand the GRE exam pattern, including section-wise breakdown, question types, and duration. Prepare effectively with expert insights from P45 tutors.",
    keywords: ["gre exam pattern",
        "gre pattern",
        "gre syllabus",
        "gre coaching",
        "gre exam portion"],
}



const GreTestPatternSection: React.FC = () => {
    return (
        <>
            <GREComparisonTable />
            <GREGuide/>
        </>
    )

}

export default GreTestPatternSection;