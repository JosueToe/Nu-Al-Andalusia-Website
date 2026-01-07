import Hero from "@/components/home/Hero";
import MissionStatement from "@/components/home/MissionStatement";
import AboutUs from "@/components/home/AboutUs";
import OurVision from "@/components/home/OurVision";
import ServicesSection from "@/components/home/ServicesSection";
import TeamAndImpact from "@/components/home/TeamAndImpact";
import Community from "@/components/home/Community";
import ContactCTA from "@/components/home/ContactCTA";
import SectionSeparator from "@/components/SectionSeparator";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionSeparator />
      <MissionStatement />
      <SectionSeparator />
      <AboutUs />
      <SectionSeparator />
      <OurVision />
      <SectionSeparator />
      <ServicesSection />
      <SectionSeparator />
      <TeamAndImpact />
      <SectionSeparator />
      <Community />
      <SectionSeparator />
      <ContactCTA />
    </>
  );
}

