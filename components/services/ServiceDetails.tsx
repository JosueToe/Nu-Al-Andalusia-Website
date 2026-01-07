"use client";

import { useState } from "react";
import { Briefcase, ClipboardCheck, Code, GraduationCap, Users, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function ServiceDetails() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "consulting",
      icon: Briefcase,
      title: "Consulting Services",
      description: `Our consulting services provide expert guidance tailored to your organization's unique challenges and opportunities. We combine deep industry knowledge with innovative thinking to help you navigate complex situations and achieve your strategic objectives.

Whether you're looking to improve operational efficiency, develop new programs, or enhance community engagement, our experienced consultants work closely with you to understand your needs and deliver actionable solutions. We take pride in our collaborative approach, ensuring that our recommendations are practical, sustainable, and aligned with your values.

Our consulting methodology emphasizes thorough analysis, stakeholder engagement, and evidence-based recommendations. We help you identify opportunities, overcome obstacles, and build capacity for long-term success. From strategic planning to process improvement, our consulting services are designed to create lasting positive impact.`,
      offerings: [
        "Strategic Planning & Development",
        "Organizational Assessment & Improvement",
        "Program Design & Implementation",
        "Community Engagement Strategies",
        "Policy Development & Review",
        "Performance Evaluation & Optimization",
      ],
    },
    {
      id: "project-management",
      icon: ClipboardCheck,
      title: "Project Management",
      description: `Effective project management is essential for turning vision into reality. Our project management services ensure that your initiatives are delivered on time, within budget, and to the highest quality standards. We bring structure, clarity, and accountability to every project we manage.

Our experienced project managers excel at coordinating complex initiatives, managing resources, and maintaining clear communication throughout the project lifecycle. We handle everything from initial planning and scope definition to execution, monitoring, and final delivery. Our approach is flexible yet disciplined, adapting to your needs while maintaining focus on your objectives.

We specialize in managing projects that require cultural sensitivity, community involvement, and heritage preservation. Whether you're launching a new program, organizing a community event, or implementing a technology solution, we ensure that every aspect is carefully planned and expertly executed.`,
      offerings: [
        "Project Planning & Scheduling",
        "Resource Management & Allocation",
        "Risk Assessment & Mitigation",
        "Stakeholder Communication",
        "Quality Assurance & Control",
        "Project Documentation & Reporting",
      ],
    },
    {
      id: "technology",
      icon: Code,
      title: "Technology Solutions",
      description: `In today's digital world, technology solutions are crucial for efficient operations and effective service delivery. We provide comprehensive technology services that modernize your operations while respecting your organizational culture and heritage values.

Our technology solutions range from website development and digital platforms to database management and automation systems. We understand that technology should serve your mission, not complicate it. That's why we focus on user-friendly, scalable solutions that enhance your ability to serve your community.

We work with organizations of all sizes, from small community groups to larger institutions. Our implementation approach emphasizes training, support, and ongoing maintenance to ensure that your technology investments deliver lasting value. We're committed to helping you leverage technology to amplify your impact while maintaining the personal touch that makes your organization special.`,
      offerings: [
        "Website & Digital Platform Development",
        "Database Design & Management",
        "Process Automation & Workflow",
        "Cloud Solutions & Migration",
        "Technology Training & Support",
        "Ongoing Maintenance & Updates",
      ],
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Training & Development",
      description: `Investing in people is one of the most powerful ways to create lasting positive change. Our training and development programs are designed to build skills, enhance capabilities, and empower individuals and teams to achieve their full potential.

We offer a wide range of training programs covering professional development, technical skills, leadership, and cultural competency. Our training approach is interactive, practical, and tailored to your specific needs. We believe that effective learning happens when participants are engaged, challenged, and supported.

Our programs are suitable for various audiences, including staff members, volunteers, community leaders, and organizational partners. We can deliver training in-person, virtually, or through hybrid formats. Our goal is to ensure that every participant leaves with new knowledge, enhanced skills, and increased confidence to make a positive impact.`,
      offerings: [
        "Professional Development Workshops",
        "Leadership & Management Training",
        "Technical Skills Development",
        "Cultural Competency Programs",
        "Team Building & Collaboration",
        "Custom Training Solutions",
      ],
    },
    {
      id: "community",
      icon: Users,
      title: "Community Programs",
      description: `Community programs are at the heart of our mission to build stronger, more connected communities. We design and implement programs that celebrate our heritage, foster engagement, and create opportunities for growth and connection.

Our community programs include cultural events, educational workshops, heritage preservation initiatives, and social gatherings that bring people together. We believe that strong communities are built through shared experiences, mutual support, and collective celebration of our rich cultural legacy.

These programs are designed to be inclusive, accessible, and meaningful. We work with community members to ensure that our offerings reflect their interests and needs. Whether it's a cultural celebration, an educational seminar, or a community service project, our programs create spaces where people can connect, learn, and grow together.`,
      offerings: [
        "Cultural Heritage Events",
        "Educational Workshops & Seminars",
        "Community Service Projects",
        "Heritage Preservation Initiatives",
        "Social & Networking Events",
        "Youth & Family Programs",
      ],
    },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">Service Details</h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Explore our comprehensive range of services
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-deep-teal text-white shadow-lg"
                    : "bg-white text-navy-blue hover:bg-deep-teal/10"
                }`}
              >
                <Icon size={20} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            if (activeTab !== index) return null;

            return (
              <div key={service.id} className="card p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-rich-gold/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-rich-gold" />
                  </div>
                  <h3 className="text-h3 text-deep-teal">{service.title}</h3>
                </div>

                <div className="prose prose-lg max-w-none space-y-4 mb-8">
                  {service.description.split("\n\n").map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-warm-gray leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-h4 mb-4 text-deep-teal">Key Offerings</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.offerings.map((offering, oIndex) => (
                      <li key={oIndex} className="flex items-start space-x-2">
                        <span className="text-rich-gold mt-1">•</span>
                        <span className="text-warm-gray">{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Contact Us to Learn More</span>
                  <LinkIcon size={20} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

