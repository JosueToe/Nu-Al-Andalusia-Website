export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-blue/80 via-navy-blue/70 to-navy-blue/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920')] bg-cover bg-center" />
      </div>

      {/* Content */}
      <div className="relative z-30 container-custom text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
          About Nu Al Andalusia
        </h1>
        <p className="text-2xl md:text-3xl font-heading font-semibold text-rich-gold">
          Provincial Government of the Moroccan Empire
        </p>
      </div>
    </section>
  );
}

