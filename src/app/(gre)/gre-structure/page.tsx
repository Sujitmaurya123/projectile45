import GREScores from "@/components/gre-section/gre-scores";
import GRETestStructureTable from "@/components/gre-section/gre-test-structure-table";
import VerbalReasoningSection from "@/components/gre-section/verbal-reasoning-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GRE Exam Structure | Format, Sections & Scoring",
    description: "Explore the GRE exam structure, including verbal reasoning, quantitative reasoning, and analytical writing sections. Get expert tips from P45 tutors to plan your preparation.",
    keywords: ["best gre prep online",
        "gre prep",
        "gre exam syllabus",
        "practice gre exam",
        "gre practice exam"],
}


const GRETestStructure: React.FC = () => {
    return (
        <>
            
            <GRETestStructureTable />
            <VerbalReasoningSection />
            <GREScores />
        </>
    )

}

export default GRETestStructure;