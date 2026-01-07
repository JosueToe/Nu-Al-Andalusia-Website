"use client";

import Link from "next/link";
import Image from "next/image";

export default function MissionStatement() {
  const stats = [
    { value: "10+", label: "Years of Service" },
    { value: "500+", label: "Community Members Served" },
    { value: "15+", label: "Programs & Services Offered" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Side - 60% */}
          <div className="lg:col-span-3">
            <p className="text-rich-gold font-semibold uppercase tracking-wide mb-2">
              Our Mission
            </p>
            <h2 className="text-h2 mb-6 heading-underline">
              Building Stronger Communities
            </h2>
            <p className="text-rich-gold text-xl font-heading mb-6">
              In Memory of Our Ancestors
            </p>
            <p className="text-warm-gray italic mb-6">
              Building Stronger Communities in memories of our ancestors. nu al andalusia
            </p>
            <div className="space-y-4 text-body mb-8">
              <p>
                At Nu Al Andalusia, we bridge the rich legacy of the Moorish Empire and Al-Andalusia with modern community services that honor our heritage while building a brighter future. Our mission is rooted in cultural pride, innovation, and the unwavering commitment to strengthen the bonds that unite our community.
              </p>
              <p>
                We believe that by connecting our ancestral wisdom with contemporary solutions, we can create transformative change. Every service we provide, every program we develop, and every relationship we build is a testament to the enduring spirit of our ancestors and their vision of unity, excellence, and progress.
              </p>
              <p>
                Through collaboration, diversity, and dedication, we are building stronger communities that honor the past while embracing the future. Together, we create lasting positive impact that resonates across generations.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-deep-teal mb-2">
                    {stat.value}
                  </div>
                  <div className="text-warm-gray text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/news" className="btn-primary text-center">
                Recent Updates
              </Link>
              <a href="#about" className="btn-outline text-center">
                More About Us
              </a>
            </div>
          </div>

          {/* Right Side - 40% */}
          <div className="lg:col-span-2 relative">
            <div className="relative rounded-card overflow-hidden shadow-card-hover">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://img1.wsimg.com/isteam/ip/affce380-83a6-45b4-b933-9ee60cca89a4/IMG_20250604_191952_077.jpg/:/rs=w:1300,h:800"
                  alt="Moorish Heritage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 via-transparent to-transparent" />
                {/* Decorative border pattern */}
                <div className="absolute inset-0 border-4 border-rich-gold/30 rounded-card pointer-events-none" />
              </div>
            </div>
            {/* Decorative geometric pattern overlay */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rich-gold/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

