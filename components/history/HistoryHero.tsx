"use client";

export default function HistoryHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Same background as home hero: state-flag image + overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/80 z-10" />
        <img
          src="/state-flag.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://img1.wsimg.com/isteam/ip/affce380-83a6-45b4-b933-9ee60cca89a4/IMG_20250604_190800_122.jpg/:/rs=w:1300,h:800";
          }}
        />
      </div>
      {/* Geometric pattern overlay (same as home) */}
      <div className="absolute inset-0 z-20 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201, 169, 97, 0.1) 35px, rgba(201, 169, 97, 0.1) 70px)`,
          }}
        />
      </div>

      <div className="relative z-30 container-custom text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 drop-shadow-2xl text-white">
          Our History & Heritage
        </h1>
        <p className="text-xl md:text-2xl font-heading font-semibold text-rich-gold max-w-2xl mx-auto drop-shadow-xl">
          C.M. Bey and the vision behind The Clock of Destiny and The Zodiac Constitution
        </p>
      </div>
    </section>
  );
}
