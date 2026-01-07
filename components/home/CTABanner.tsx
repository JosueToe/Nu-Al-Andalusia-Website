"use client";

import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="section-padding bg-gradient-to-r from-deep-teal via-deep-teal to-navy-blue relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201, 169, 97, 0.2) 35px, rgba(201, 169, 97, 0.2) 70px)`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-h2 mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-xl mb-10 text-gray-200">
            Join our community and be part of something meaningful
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <a href="#about" className="btn-outline border-rich-gold text-rich-gold hover:bg-rich-gold hover:text-navy-blue">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

