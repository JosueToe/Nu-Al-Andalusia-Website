"use client";

import Link from "next/link";
import { Eye, Castle, Users } from "lucide-react";

export default function FeatureCards() {
  const cards = [
    {
      icon: Eye,
      title: "Transformative Services",
      text: "Leading the way in innovative government services that transform how our community does business and connects with heritage",
      link: "#vision",
      linkText: "Explore Our Vision →",
      bgImage: "https://img1.wsimg.com/isteam/ip/affce380-83a6-45b4-b933-9ee60cca89a4/IMG_20250604_190800_122.jpg/:/rs=w:1300,h:800",
    },
    {
      icon: Castle,
      title: "Moorish Legacy",
      text: "Preserving and celebrating the rich cultural heritage of the Moorish Empire and Al-Andalusia through community engagement",
      link: "#about",
      linkText: "Our Story →",
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      icon: Users,
      title: "Building Together",
      text: "Creating lasting positive change through collaboration, diversity, and dedication to our community's growth",
      link: "#community",
      linkText: "Join Us →",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
  ];

  return (
    <section id="feature-cards" className="section-padding bg-cream scroll-mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <a
                key={index}
                href={card.link}
                className="group card overflow-hidden block"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${card.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-teal/80 to-slate-800/90" />
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-12 h-12 bg-rich-gold rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-deep-teal transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                    {card.text}
                  </p>
                  <span className="text-deep-teal font-bold group-hover:text-rich-gold transition-colors duration-300 inline-flex items-center">
                    {card.link === "#community" ? "Contact Us" : card.linkText.replace(" →", "")}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

