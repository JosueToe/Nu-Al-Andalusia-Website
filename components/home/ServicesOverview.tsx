"use client";

import Link from "next/link";
import { Briefcase, ClipboardCheck, Code, GraduationCap } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      icon: Briefcase,
      title: "Consulting Services",
      description: "Expert guidance tailored to your unique needs. We provide strategic consulting that helps organizations navigate complex challenges and achieve their goals with confidence and clarity.",
      link: "#services",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Comprehensive project management solutions that ensure timely delivery and exceptional results. From planning to execution, we guide your projects to success.",
      link: "#services",
    },
    {
      icon: Code,
      title: "Technology Solutions",
      description: "Cutting-edge technology solutions designed to modernize operations and enhance efficiency. We leverage innovative tools to transform how you work and serve your community.",
      link: "#services",
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Empowering your team through comprehensive training programs. We develop skills, foster growth, and build capacity for long-term success and professional excellence.",
      link: "#services",
    },
  ];

  return (
    <section id="services" className="section-padding bg-cream scroll-mt-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-6 heading-underline">Our Solutions</h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-6">
            We offer a wide range of government services, from consulting and project management to technology solutions and training. Our solutions are tailored to meet the unique needs of each client, and we work closely with them to ensure their success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card p-8 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-rich-gold/15 rounded-lg flex items-center justify-center group-hover:bg-rich-gold group-hover:scale-110 transition-all duration-300 shadow-md">
                      <Icon className="w-8 h-8 text-rich-gold group-hover:text-slate-900 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-3 group-hover:text-deep-teal transition-colors duration-300 font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href="/contact"
                      className="text-deep-teal font-bold hover:text-rich-gold transition-colors duration-300 inline-block"
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

