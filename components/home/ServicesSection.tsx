"use client";

import Link from "next/link";
import { Eye, Castle, Users, Briefcase, ClipboardCheck, Code, GraduationCap } from "lucide-react";

export default function ServicesSection() {
  const featureCards = [
    {
      icon: Eye,
      title: "Transformative Services",
      text: "Leading the way in innovative government services that transform how our community does business and connects with heritage",
      link: "#vision",
      linkText: "Explore Our Vision",
      bgImage: "https://img1.wsimg.com/isteam/ip/affce380-83a6-45b4-b933-9ee60cca89a4/IMG_20250604_190800_122.jpg/:/rs=w:1300,h:800",
    },
    {
      icon: Castle,
      title: "Moorish Legacy",
      text: "Preserving and celebrating the rich cultural heritage of the Moorish Empire and Al-Andalusia through community engagement",
      link: "#about",
      linkText: "Our Story",
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      icon: Users,
      title: "Building Together",
      text: "Creating lasting positive change through collaboration, diversity, and dedication to our community's growth",
      link: "#community",
      linkText: "Contact Us",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
  ];

  const services = [
    {
      icon: Briefcase,
      title: "Consulting Services",
      description: "Expert guidance tailored to your unique needs. We provide strategic consulting that helps organizations navigate complex challenges and achieve their goals with confidence and clarity.",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Comprehensive project management solutions that ensure timely delivery and exceptional results. From planning to execution, we guide your projects to success.",
    },
    {
      icon: Code,
      title: "Technology Solutions",
      description: "Cutting-edge technology solutions designed to modernize operations and enhance efficiency. We leverage innovative tools to transform how you work and serve your community.",
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Empowering your team through comprehensive training programs. We develop skills, foster growth, and build capacity for long-term success and professional excellence.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-cream scroll-mt-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4 heading-underline">Our Solutions</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            We offer a wide range of government services, from consulting and project management to technology solutions and training. Our solutions are tailored to meet the unique needs of each client, and we work closely with them to ensure their success.
          </p>
        </div>

        {/* Feature Cards - Condensed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <a
                key={index}
                href={card.link === "#community" ? "/contact" : card.link}
                className="group card overflow-hidden block"
              >
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${card.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-teal/80 to-slate-800/90" />
                  <div className="absolute top-3 left-3 z-10">
                    <div className="w-10 h-10 bg-rich-gold rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-deep-teal transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3 text-xs line-clamp-2">
                    {card.text}
                  </p>
                  <span className="text-deep-teal font-bold group-hover:text-rich-gold transition-colors duration-300 inline-flex items-center text-sm">
                    {card.linkText}
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Services Grid - Condensed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card p-6 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-rich-gold/15 rounded-lg flex items-center justify-center group-hover:bg-rich-gold group-hover:scale-110 transition-all duration-300 shadow-md">
                      <Icon className="w-7 h-7 text-rich-gold group-hover:text-slate-900 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-deep-teal transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-700 mb-3 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <a
                      href="/contact"
                      className="text-deep-teal font-bold hover:text-rich-gold transition-colors duration-300 inline-block text-sm"
                    >
                      Contact Us →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


