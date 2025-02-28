
import SATHero from "@/components/sat-Digital-Exam-PatternandFAQ/sat-Hero-section";
import SatUpdates from "@/components/sat-Digital-Exam-PatternandFAQ/SatUpdates";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SAT Exam Pattern ",
    description: "Understand the SAT exam pattern with a detailed section-wise breakdown, question format, and marking scheme. Prepare smartly with P45’s expert guidance.",
    keywords: ["sat exam pattern", "digital sat practice test", "sat prep course", "SAT Preparation", "sat exam syllabus"],
}

const SATDigitalExamPattern2024 = () => {
    return (
<div>
    <SATHero/>
    <SatUpdates/>
    {/* <SATExamPatternTable /> */}
     
</div>
    );
};

export default SATDigitalExamPattern2024;
