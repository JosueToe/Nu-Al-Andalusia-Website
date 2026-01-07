import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionProvider from "@/components/providers/SessionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nu Al Andalusia - Honoring Heritage, Building Community",
  description: "Connecting communities through innovative services rooted in the rich legacy of the Moorish Empire and Al-Andalusia. Together, we build stronger communities in memory of our ancestors.",
  keywords: ["Moorish Empire", "Al-Andalusia", "community services", "government services", "heritage", "cultural preservation"],
  authors: [{ name: "Nu Al Andalusia" }],
  creator: "Nu Al Andalusia",
  publisher: "Nu Al Andalusia",
  metadataBase: new URL("https://nualandalusia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nu Al Andalusia - Honoring Heritage, Building Community",
    description: "Connecting communities through innovative services rooted in the rich legacy of the Moorish Empire and Al-Andalusia.",
    type: "website",
    locale: "en_US",
    siteName: "Nu Al Andalusia",
    url: "https://nualandalusia.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nu Al Andalusia - Honoring Heritage, Building Community",
    description: "Connecting communities through innovative services rooted in the rich legacy of the Moorish Empire and Al-Andalusia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body">
        <SessionProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-deep-teal focus:text-white focus:rounded-lg">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}

