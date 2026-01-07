"use client";

export default function TeamAndImpact() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        {/* Our Team Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-6 heading-underline">Our Team</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Our team is composed of dedicated professionals with diverse backgrounds and skill sets. We value diversity, creativity, and collaboration, and we strive to create a work environment that fosters growth and development.
            </p>
          </div>

          {/* Team Member */}
          <div className="card p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative aspect-square rounded-card overflow-hidden">
                  <img
                    src="https://img1.wsimg.com/isteam/ip/affce380-83a6-45b4-b933-9ee60cca89a4/blob-f8b6efc.png/:/rs=w:1300,h:800"
                    alt="Nirahyah Noble El Seyaraha"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-h3 mb-2 text-deep-teal">Nirahyah Noble El Seyaraha</h3>
                <p className="text-rich-gold font-semibold text-lg mb-4">Speaker of the House</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Impact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-h2 mb-6 heading-underline">Our Impact</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              At Nu Al Andalusia, we measure our success not just by our bottom line, but by the positive impact we have on our clients, our employees, and our community. We are proud to have made a difference in the lives of so many people, and we look forward to doing even more in the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

