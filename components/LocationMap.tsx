"use client";

import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">Find Us</h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Located in Orlando, Florida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="rounded-card overflow-hidden shadow-card h-96">
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

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-rich-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-rich-gold" />
              </div>
              <div>
                <h3 className="text-h4 mb-2 text-deep-teal">Address</h3>
                <p className="text-warm-gray">
                  Orlando, FL, USA
                </p>
              </div>
            </div>

            <div className="p-6 bg-cream rounded-card">
              <h3 className="text-h4 mb-4 text-deep-teal">Get Directions</h3>
              <p className="text-warm-gray mb-4">
                Visit us in Orlando, Florida. For specific directions or to schedule a visit, please contact us.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Orlando+FL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

