import GREScores from "@/components/gre-section/gre-scores";
import GREComparisonTable from "@/components/gre-section/gre-test-pattern-section";
import GRETestStructureTable from "@/components/gre-section/gre-test-structure-table";
import VerbalReasoningSection from "@/components/gre-section/verbal-reasoning-section";




const GreTestPatternSection: React.FC = () => {
    return(
        <>
            <GREComparisonTable/>
            <GRETestStructureTable/>
            <VerbalReasoningSection/>
            <GREScores/>
        </>
    )

}

export default GreTestPatternSection;