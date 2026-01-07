import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServiceDetails from "@/components/services/ServiceDetails";
import OurProcess from "@/components/services/OurProcess";

export const metadata = {
  title: "Our Services - Nu Al Andalusia",
  description: "Comprehensive services tailored to transform your experience and honor our heritage. Consulting, project management, technology solutions, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServiceDetails />
      <OurProcess />
    </>
  );
}

