import Comparison from "./components/Comparison";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Solutions from "./components/Solutions";
import TechFeatures from "./components/TechFeatures";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Solutions />
      <Comparison />
      <Features />
      <TechFeatures />
      <Partners />
      <FAQ />
      <CTA />
    </div>
  );
}
