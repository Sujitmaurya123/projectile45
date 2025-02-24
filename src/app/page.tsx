import CallToActionSection from "@/components/home-section/callaction-section";
import Projectile45Benefits from "@/components/home-section/chooseprojectile45-section";

import CourseSection from "@/components/home-section/course-section";
import HelpGrowSection from "@/components/home-section/helpgrow-section";
import HeroSection from "@/components/home-section/hero-section";

import FirstStripSection from "@/components/home-section/strip-section-1";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projectile 45 | Expert Coaching for IB, GRE, GMAT, IGCSE & SAT",
  description: "P45 offers top-tier coaching for IB, GRE, GMAT, IGCSE, and SAT with expert faculty, personalized mentoring, and comprehensive study material. Boost your scores with trusted test prep institute.",
  keywords: ["P45", "Projectile 45", "Projectile 45 test preparation", "GMAT preparation", "SAT preparation"],
}
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


