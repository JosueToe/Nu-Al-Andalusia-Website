"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("mission") || document.querySelector("section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-slate-900/95 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(https://img1.wsimg.com/isteam/ip/affce380-83a6-45b4-b933-9ee60cca89a4/IMG_20250604_190800_122.jpg/:/rs=w:1300,h:800)`
        }} />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-20 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201, 169, 97, 0.1) 35px, rgba(201, 169, 97, 0.1) 70px)`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-30 container-custom text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-balance drop-shadow-2xl text-white">
          Welcome to Nu Al Andalusia
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold mb-6 text-rich-gold drop-shadow-xl">
          Honoring Our Heritage, Building Our Future
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white leading-relaxed drop-shadow-lg bg-black/40 px-6 py-4 rounded-xl backdrop-blur-md border border-white/10">
          Connecting communities through innovative services rooted in the rich legacy of the Moorish Empire and Al-Andalusia. Together, we build stronger communities in memory of our ancestors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              const servicesSection = document.getElementById("services");
              servicesSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary text-lg"
          >
            Our Services
          </button>
          <Link
            href="/contact"
            className="btn-secondary text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

