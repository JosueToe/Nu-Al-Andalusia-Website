"use client";

export default function TeamLeadership() {
  const leader = {
    name: "Nirahyah Noble El Seyaraha",
    title: "Speaker of the House",
    bio: `Nirahyah Noble El Seyaraha brings extensive experience and deep commitment to her role as Speaker of the House at Nu Al Andalusia. With a background in community leadership and cultural preservation, she has dedicated her career to honoring Moorish heritage while building bridges for future generations.

In her role, Nirahyah oversees organizational strategy, community engagement, and program development. She is passionate about creating opportunities that celebrate our rich cultural legacy while addressing contemporary community needs. Her vision for the organization centers on unity, excellence, and meaningful impact.

Nirahyah's personal connection to the mission runs deep, rooted in family traditions and a lifelong dedication to preserving and sharing the wisdom of Al-Andalusia. She believes that by honoring our ancestors, we can build a brighter future for all. Under her leadership, Nu Al Andalusia continues to grow as a beacon of cultural pride and community service.`,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-4">Team Leadership</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="relative aspect-square rounded-card overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${leader.image})` }}
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-h3 mb-2 text-deep-teal">{leader.name}</h3>
                <p className="text-rich-gold font-semibold text-lg mb-6">{leader.title}</p>
                <div className="prose prose-lg max-w-none">
                  {leader.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-warm-gray leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for additional team members */}
        <div className="mt-16 text-center">
          <p className="text-warm-gray italic">
            More team members will be featured here as our organization grows.
          </p>
        </div>
      </div>
    </section>
  );
}


