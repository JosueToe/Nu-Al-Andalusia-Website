"use client";

export default function SectionSeparator() {
  return (
    <div className="relative py-4 md:py-5">
      <div className="container-custom">
        <div className="flex items-center justify-center relative h-8">
          {/* Left cluster of vertical lines */}
          <div className="absolute left-4 md:left-8 flex items-center gap-1.5 z-10">
            <div className="w-0.5 h-3 bg-deep-teal opacity-70" />
            <div className="w-0.5 h-3 bg-deep-teal opacity-70" />
            <div className="w-0.5 h-3 bg-deep-teal opacity-70" />
          </div>

          {/* Main horizontal line */}
          <div className="absolute left-0 right-0 h-0.5 bg-deep-teal opacity-40" />

          {/* Central vertical line */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-6 bg-deep-teal opacity-80 z-10" />

          {/* Right cluster of vertical lines */}
          <div className="absolute right-4 md:right-8 flex items-center gap-1.5 z-10">
            <div className="w-0.5 h-3 bg-deep-teal opacity-70" />
            <div className="w-0.5 h-3 bg-deep-teal opacity-70" />
            <div className="w-0.5 h-3 bg-deep-teal opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
}
