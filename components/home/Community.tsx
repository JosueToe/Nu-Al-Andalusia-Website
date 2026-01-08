"use client";

import Link from "next/link";
import { Users, Calendar, Heart, Handshake } from "lucide-react";

export default function Community() {
  const programs = [
    {
      icon: Users,
      title: "Community Gatherings",
      description: "Regular events that bring our community together to celebrate heritage, share stories, and build lasting connections.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
    {
      icon: Calendar,
      title: "Cultural Events",
      description: "Celebrations and events that honor our Moorish heritage and Al-Andalusia legacy through music, art, and tradition.",
      image: "https://img1.wsimg.com/isteam/ip/affce380-83a6-45b4-b933-9ee60cca89a4/IMG_20250604_191952_077.jpg/:/rs=w:1300,h:800",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Volunteer programs and initiatives that make a positive impact in our local community and beyond.",
      image: "https://img1.wsimg.com/isteam/ip/affce380-83a6-45b4-b933-9ee60cca89a4/IMG_20250604_190800_122.jpg/:/rs=w:1300,h:800",
    },
    {
      icon: Handshake,
      title: "Partnerships",
      description: "Collaborative efforts with other organizations to amplify our impact and serve more community members.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    },
  ];

  return (
    <section id="community" className="section-padding bg-cream scroll-mt-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-6 heading-underline">Our Community</h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Building stronger communities together through connection, celebration, and service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Link
                key={index}
                href="/news"
                className="card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-800/50 to-slate-800/40" />
                  <div className="absolute inset-0 bg-black/15" />
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-12 h-12 bg-rich-gold backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl border border-white/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-h4 mb-3 text-deep-teal group-hover:text-rich-gold transition-colors font-bold">
                    {program.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/news" className="btn-primary">
            View Community Updates →
          </Link>
        </div>
      </div>
    </section>
  );
}

