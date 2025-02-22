import SATExamPatternTable from "@/components/sat-Digital-Exam-PatternandFAQ/sat-exam-pattern";
import SATExamTable from "@/components/sat-Digital-Exam-PatternandFAQ/sat-exam-table";
import FAQsPage from "@/components/sat-Digital-Exam-PatternandFAQ/sat-faq-section";
import SATHero from "@/components/sat-Digital-Exam-PatternandFAQ/sat-Hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SAT Exam Preparation | Projectile 45 ",
    description: "Understand the SAT exam pattern with a detailed section-wise breakdown, question format, and marking scheme. Prepare smartly with P45’s expert guidance.",
    keywords: ["sat exam pattern", "digital sat practice test", "sat prep course", "SAT Preparation", "sat exam syllabus"],
}

const SATDigitalExamPattern2024 = () => {
    return (
<div>
    <SATHero/>
    <SATExamTable />    
    <SATExamPatternTable />
    <FAQsPage/>  
</div>
    );
};

export default SATDigitalExamPattern2024;
