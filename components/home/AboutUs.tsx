"use client";

import Link from "next/link";
import { Award, History, Lightbulb, Users, Shield, Heart } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Award,
      name: "Excellence",
      description: "We are committed to the highest standards in everything we do.",
    },
    {
      icon: History,
      name: "Heritage",
      description: "We honor the rich legacy of the Moorish Empire and Al-Andalusia.",
    },
    {
      icon: Lightbulb,
      name: "Innovation",
      description: "We embrace forward-thinking solutions that combine traditional wisdom with modern approaches.",
    },
    {
      icon: Users,
      name: "Community",
      description: "We believe in the strength that comes from unity and working together.",
    },
    {
      icon: Shield,
      name: "Integrity",
      description: "We operate with transparency and ethical practices.",
    },
    {
      icon: Heart,
      name: "Cultural Pride",
      description: "We celebrate our roots and share our rich cultural legacy with pride.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-cream scroll-mt-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-rich-gold font-semibold uppercase tracking-wide mb-2">
            About Us
          </p>
          <h2 className="text-h2 mb-6 heading-underline">Our Story</h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Connecting Cultures, Honoring Heritage, Building Community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-body">
                Nu Al Andalusia was founded with a profound commitment to preserving and celebrating the rich cultural heritage of the Moorish Empire and Al-Andalusia while providing innovative services that strengthen our community.
              </p>
              <p className="text-body">
                The legacy of Al-Andalusia represents a golden age of cultural exchange, scientific advancement, and harmonious coexistence. We draw inspiration from this remarkable period to guide our work today.
              </p>
              <p className="text-body">
                Our organization serves as a bridge between our rich historical heritage and contemporary community needs. Every program we develop, every service we provide, and every relationship we cultivate is rooted in the values of our ancestors: excellence, integrity, collaboration, and cultural pride.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-card overflow-hidden shadow-card-hover">
              <div className="aspect-[4/3] bg-gradient-to-br from-deep-teal to-navy-blue relative">
                <img
                  src="https://img1.wsimg.com/isteam/ip/affce380-83a6-45b4-b933-9ee60cca89a4/IMG_20250604_190800_122.jpg/:/rs=w:1300,h:800"
                  alt="Nu Al Andalusia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-h3 mb-8 text-center heading-underline">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card p-6 text-center group">
                  <div className="w-14 h-14 bg-rich-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rich-gold group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-rich-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-h4 mb-2 text-deep-teal">{value.name}</h4>
                  <p className="text-warm-gray text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

