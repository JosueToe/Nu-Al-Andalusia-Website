"use client";

const teamMembers = [
  {
    name: "Yahya Abdul Rahim Bey",
    position: "Wazir Al'Rais/Prime Minister",
    image: "/team/yahya-abdul-rahim-bey.png",
  },
  {
    name: "Nirahyah Noble El Seyaraha",
    position: "Speaker of the House",
    image: "/team/nirahyah-noble-el-seyaraha.jpg",
  },
  {
    name: "Wisdom Shield El",
    position: "Assistant Qazi/Assistant Judge",
    image: "/team/wisdom-shield-el.jpg",
  },
  {
    name: "Denzel Malik Rahman Bey",
    position: "Chief Shariff/Chief Sheriff",
    image: "/team/denzel-malik-rahman-bey.jpg",
  },
];

export default function TeamAndImpact() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        {/* Our Team Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-6 heading-underline">Our Team</h2>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              The leadership of Nu Al Andalusia is composed of dedicated officials committed to the lawful restoration of the Moroccan Empire through principled governance, consular jurisdiction, and treaty-based authority.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                    <div className="relative aspect-square rounded-card overflow-hidden shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://img1.wsimg.com/isteam/ip/affce380-83a6-45b4-b933-9ee60cca89a4/blob-f8b6efc.png/:/rs=w:1300,h:800";
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-deep-teal mb-2">
                      {member.name}
                    </h3>
                    <p className="text-rich-gold font-semibold text-base md:text-lg">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Impact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-h2 mb-6 heading-underline">Our Impact</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Through the reactivation of Consular Courts and institutional governance, Nu Al Andalusia advances lawful order, equitable trade, and unity across the Moroccan world. We measure our success by the restoration of lawful governance, the protection of nationals, and the advancement of treaty-based rights throughout the Empire.
            </p>
            <p className="text-lg text-slate-600 mt-4 italic">
              &quot;None of us are as powerful as all of us together.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

