import GREScores from "@/components/gre-section/gre-scores";
import GRETestStructureTable from "@/components/gre-section/gre-test-structure-table";
import VerbalReasoningSection from "@/components/gre-section/verbal-reasoning-section";




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