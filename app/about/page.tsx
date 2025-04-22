"use client";

import AboutHeader from "./AboutHeader";
import MissionVision from "./MissionVision";
import WhoWeAre from "./WhoWeAre";
import Stand from "./Stand";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function AboutUs() {
  return (
    <div className="w-full">
      <AboutHeader />
      <MissionVision />
      <WhoWeAre />
      <Stand />
      <FAQ />
      <CTA />
    </div>
  );
}
