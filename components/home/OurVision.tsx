"use client";

export default function OurVision() {
  return (
    <section id="vision" className="section-padding bg-white scroll-mt-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-rich-gold font-semibold uppercase tracking-wide mb-2">
              Our Vision
            </p>
            <h2 className="text-h2 mb-6 heading-underline">Looking Forward</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <h3 className="text-h3 mb-4 text-deep-teal">Our Mission</h3>
              <p className="text-warm-gray leading-relaxed mb-4">
                To connect communities through innovative services that honor our Moorish heritage while building a brighter future for all.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-h3 mb-4 text-deep-teal">Our Purpose</h3>
              <p className="text-warm-gray leading-relaxed mb-4">
                To preserve cultural heritage, foster community growth, and create lasting positive impact through collaboration and innovation.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-deep-teal via-teal-600 to-slate-800 text-white rounded-card p-8 md:p-12 relative overflow-hidden shadow-xl">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(245, 158, 11, 0.2) 35px, rgba(245, 158, 11, 0.2) 70px)`,
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-h3 mb-6 drop-shadow-xl text-white">Our Vision</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="drop-shadow-lg bg-black/30 px-6 py-4 rounded-xl backdrop-blur-md border border-white/10 text-white">
                  Our vision is to be the leading provider of innovative government services that transform the way our clients do business. We aim to set the standard for excellence in our industry and inspire others to follow in our footsteps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

