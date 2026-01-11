import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurVision from "@/components/about/OurVision";
import OurValues from "@/components/about/OurValues";
import OurImpact from "@/components/about/OurImpact";

export const metadata = {
  title: "About Us - Nu Al Andalusia",
  description: "Learn about Nu Al Andalusia, our mission to honor Moorish heritage, and our commitment to building stronger communities.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurVision />
      <OurValues />
      <OurImpact />
    </>
  );
}


