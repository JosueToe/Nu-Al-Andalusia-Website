"use client";

import { Award, History, Lightbulb, Users, Shield, Heart, Handshake, TrendingUp } from "lucide-react";

export default function OurValues() {
  const values = [
    {
      icon: Award,
      name: "Excellence",
      description: "We are committed to the highest standards in everything we do, ensuring quality and professionalism in every service and interaction.",
    },
    {
      icon: History,
      name: "Heritage",
      description: "We honor the rich legacy of the Moorish Empire and Al-Andalusia, preserving and celebrating our cultural heritage for future generations.",
    },
    {
      icon: Lightbulb,
      name: "Innovation",
      description: "We embrace forward-thinking solutions that combine traditional wisdom with modern approaches to create transformative change.",
    },
    {
      icon: Users,
      name: "Community",
      description: "We believe in the strength that comes from unity, working together to build stronger, more connected communities.",
    },
    {
      icon: Shield,
      name: "Integrity",
      description: "We operate with transparency and ethical practices, building trust through honest communication and reliable service delivery.",
    },
    {
      icon: Heart,
      name: "Cultural Pride",
      description: "We celebrate our roots and share our rich cultural legacy with pride, fostering understanding and appreciation across communities.",
    },
    {
      icon: Handshake,
      name: "Collaboration",
      description: "We work together for success, valuing diverse perspectives and building partnerships that amplify our collective impact.",
    },
    {
      icon: TrendingUp,
      name: "Growth",
      description: "We are committed to continuous improvement, learning, and development to better serve our community and achieve our mission.",
    },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-4">Our Values</h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="card p-6 text-center group">
                <div className="w-16 h-16 bg-rich-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rich-gold group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-rich-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-h4 mb-3 text-deep-teal">
                  {value.name}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

