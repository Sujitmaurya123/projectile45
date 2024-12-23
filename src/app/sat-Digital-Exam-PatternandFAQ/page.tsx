import SATExamPatternTable from "@/components/sat-Digital-Exam-PatternandFAQ/sat-exam-pattern";
import SATExamTable from "@/components/sat-Digital-Exam-PatternandFAQ/sat-exam-table";
import FAQsPage from "@/components/sat-Digital-Exam-PatternandFAQ/sat-faq-section";
import SATHero from "@/components/sat-Digital-Exam-PatternandFAQ/sat-Hero-section";


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
