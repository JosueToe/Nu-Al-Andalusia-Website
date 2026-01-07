"use client";

export default function OurVision() {
  return (
    <section id="vision" className="section-padding bg-gradient-to-br from-deep-teal to-navy-blue text-white relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201, 169, 97, 0.2) 35px, rgba(201, 169, 97, 0.2) 70px)`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 mb-6">Our Vision</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Our vision is to be the leading provider of innovative government services that transform the way our clients do business. We aim to set the standard for excellence in our industry and inspire others to follow in our footsteps.
            </p>
            
            <p>
              We envision a future where every community member has access to services that honor our heritage while meeting contemporary needs. Through our commitment to innovation, we will continue developing solutions that bridge the gap between traditional wisdom and modern efficiency.
            </p>

            <p>
              By 2030, we aim to expand our reach to serve over 1,000 community members annually, launch 25+ specialized programs, and establish partnerships that amplify our impact. We will continue to be a beacon of cultural preservation, community empowerment, and service excellence.
            </p>
          </div>

          {/* Milestones */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-card">
              <div className="text-4xl font-heading font-bold text-rich-gold mb-2">2026</div>
              <p className="text-gray-200">Expand service offerings and community reach</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-card">
              <div className="text-4xl font-heading font-bold text-rich-gold mb-2">2028</div>
              <p className="text-gray-200">Launch regional partnerships and programs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-card">
              <div className="text-4xl font-heading font-bold text-rich-gold mb-2">2030</div>
              <p className="text-gray-200">Achieve national recognition and impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

