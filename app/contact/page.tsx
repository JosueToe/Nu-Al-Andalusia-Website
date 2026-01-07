import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact Us - Nu Al Andalusia",
  description: "Get in touch with Nu Al Andalusia. We're here to help and answer any questions you may have.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
}

