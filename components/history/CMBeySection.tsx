"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { X } from "lucide-react";

const GALLERY_IMAGES = [
  { src: "/history/cm-bey-1.png", alt: "C.M. Bey portrait" },
  { src: "/history/cm-bey-2.png", alt: "The Zodiac Constitution book cover" },
  { src: "/history/cm-bey-3.png", alt: "Numerological chart - The Soul diagram" },
  { src: "/history/cm-bey-4.png", alt: "Zodiac Constitution title page" },
  { src: "/history/cm-bey-5.png", alt: "C.M. Bey with map and symbols" },
  { src: "/history/cm-bey-6.png", alt: "Astrological zodiac chart" },
  { src: "/history/cm-bey-7.png", alt: "The Clock of Destiny chart" },
];

export default function CMBeySection() {
  const [failedSlots, setFailedSlots] = useState<Set<number>>(new Set());
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const handleImageError = (index: number) => {
    setFailedSlots((prev) => new Set(prev).add(index));
  };

  const openLightbox = (src: string, alt: string) => {
    if (failedSlots.has(GALLERY_IMAGES.findIndex((i) => i.src === src))) return;
    setLightbox({ src, alt });
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && closeLightbox();
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  const row1 = GALLERY_IMAGES.slice(0, 4);
  const row2 = GALLERY_IMAGES.slice(4, 7);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 mb-4 text-center text-navy-blue">
            C.M. Bey: The Visionary Behind The Clock of Destiny and The Zodiac Constitution
          </h2>

          {/* 7-image gallery: 4 on top, 3 centered beneath (clean, parallel layout) */}
          <div className="my-10 md:my-14">
            <div className="flex flex-col items-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {/* Row 1: 4 images, centered */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                {row1.map((item, index) => (
                  <div key={item.src} className="w-[42%] sm:w-[22%] max-w-[190px]">
                    <GalleryThumb
                      item={item}
                      index={index}
                      failed={failedSlots.has(index)}
                      onError={() => handleImageError(index)}
                      onClick={() => openLightbox(item.src, item.alt)}
                    />
                  </div>
                ))}
              </div>
              {/* Row 2: 3 images, also centered under the first row */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                {row2.map((item, index) => (
                  <div key={item.src} className="w-[42%] sm:w-[22%] max-w-[190px]">
                    <GalleryThumb
                      item={item}
                      index={index + 4}
                      failed={failedSlots.has(index + 4)}
                      onError={() => handleImageError(index + 4)}
                      onClick={() => openLightbox(item.src, item.alt)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-small text-warm-gray mt-3">
              C.M. Bey, his works, and the Moorish Zodiac Constitution — click any image to view larger
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-navy-blue">
            <p>
              C.M. Bey, a prominent figure in the American esoteric and Moorish Science movement, is best known for his profound contributions to spiritual self-knowledge. Born in the early 20th century, Bey emerged as a respected astrologer, teacher, and author, drawing from the rich traditions of numerology, astrology, and the Moorish Science Temple of America.
            </p>

            <p>
              His most celebrated works, <strong className="text-deep-teal">The Clock of Destiny</strong> and <strong className="text-deep-teal">The Zodiac Constitution</strong>, represent a unique fusion of cosmic wisdom and personal destiny. The Clock of Destiny is a groundbreaking numerological system, assigning a &quot;Destiny Number&quot; based on a person&apos;s birth date. This number, he believed, unlocked an individual&apos;s life purpose, guiding them through cycles of personal growth. Complementing this, The Zodiac Constitution serves as a philosophical and moral guide, linking zodiac signs to universal laws and personal conduct.
            </p>

            <p>
              Crucially, Bey&apos;s teachings serve as a spiritual framework—they coincided with the assertion of one&apos;s nationality as an Asiatic, Moroccan, Moor individual. By aligning with the Clock of Destiny and the principles of the Zodiac Constitution, individuals could also reclaim a birthright of nationality, affirming their identity as part of the Moorish American movement. In doing so, they connected their cosmic destiny with a tangible claim to a distinct cultural and national heritage.
            </p>

            <p className="text-xl text-deep-teal font-semibold italic text-center my-8">
              Through these works, C.M. Bey offered a path to self-discovery, encouraging readers to understand their place in the universe and to align their actions with cosmic harmony—while also reclaiming a rich legacy of Moorish identity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-cream p-6 rounded-card border border-deep-teal/10">
              <h3 className="text-h4 mb-3 text-deep-teal font-heading">The Clock of Destiny</h3>
              <p className="text-warm-gray">
                A numerological system that assigns a Destiny Number from one&apos;s birth date, unlocking life purpose and guiding cycles of personal growth.
              </p>
            </div>
            <div className="bg-cream p-6 rounded-card border border-deep-teal/10">
              <h3 className="text-h4 mb-3 text-deep-teal font-heading">The Zodiac Constitution</h3>
              <p className="text-warm-gray">
                A philosophical and moral guide linking zodiac signs to universal laws and personal conduct within the Moorish tradition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="View image larger"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryThumb({
  item,
  index,
  failed,
  onError,
  onClick,
}: {
  item: { src: string; alt: string };
  index: number;
  failed: boolean;
  onError: () => void;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="aspect-square w-full rounded-card overflow-hidden shadow-card border border-deep-teal/10 bg-slate-100 relative focus:outline-none focus:ring-2 focus:ring-deep-teal focus:ring-offset-2 hover:opacity-95 transition-opacity"
    >
      {!failed ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 200px"
          onError={onError}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-warm-gray text-small text-center p-2">
          <span>Image {index + 1}</span>
        </div>
      )}
    </button>
  );
}
