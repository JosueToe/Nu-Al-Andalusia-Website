"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-deep-teal via-teal-600 to-slate-800 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(245, 158, 11, 0.2) 35px, rgba(245, 158, 11, 0.2) 70px)`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center text-white mb-12">
          <h2 className="text-h2 mb-4 drop-shadow-xl">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-lg bg-black/20 px-6 py-3 rounded-lg backdrop-blur-sm">
            Join our community and be part of something meaningful. Find us in Orlando, Florida.
          </p>
        </div>

        {/* Map and Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="rounded-card overflow-hidden shadow-card-hover h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224513.470308242!2d-81.379236!3d28.481304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf434!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nu Al Andalusia Location - Orlando, FL"
            />
          </div>

          {/* Contact Info and CTAs */}
          <div className="space-y-6 text-white">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-rich-gold backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-h4 mb-2 text-white drop-shadow-lg">Address</h3>
                <p className="text-white drop-shadow-md">
                  Orlando, FL, USA
                </p>
              </div>
            </div>

            <div className="p-6 bg-white/15 backdrop-blur-md rounded-card border-2 border-white/30 shadow-xl">
              <h3 className="text-h4 mb-4 text-white drop-shadow-lg">Get in Touch</h3>
              <p className="text-white mb-6 drop-shadow-md">
                Visit us in Orlando, Florida. For specific directions or to schedule a visit, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-secondary text-center"
                >
                  Contact Us
                </Link>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Orlando+FL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-rich-gold text-rich-gold hover:bg-rich-gold hover:text-slate-900 text-center font-bold"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

