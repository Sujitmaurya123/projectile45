import CallToActionSection from "@/components/home-section/callaction-section";
import Projectile45Benefits from "@/components/home-section/chooseprojectile45-section";

import CourseSection from "@/components/home-section/course-section";
import HelpGrowSection from "@/components/home-section/helpgrow-section";
import HeroSection from "@/components/home-section/hero-section";

import FirstStripSection from "@/components/home-section/strip-section-1";
export default function Home() {
  return (
    <div  >
      
     <HeroSection/>
     <FirstStripSection/>
     <CourseSection/>
      <Projectile45Benefits/>
      <HelpGrowSection/>
      {/* <ClassroomSection/>
      <MissionSection/> */}
      <CallToActionSection/>
    </div>
  );
};


