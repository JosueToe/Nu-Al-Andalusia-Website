import HistoryHero from "@/components/history/HistoryHero";
import CMBeySection from "@/components/history/CMBeySection";

export const metadata = {
  title: "Our History - C.M. Bey & Moorish Heritage | Nu Al Andalusia",
  description:
    "Learn about C.M. Bey, The Clock of Destiny, and The Zodiac Constitution—visionary works that connect cosmic wisdom, self-discovery, and Moorish American identity.",
};

export default function HistoryPage() {
  return (
    <>
      <HistoryHero />
      <CMBeySection />
    </>
  );
}
