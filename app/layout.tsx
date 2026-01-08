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
  title: "Nu Al Andalusia - Provincial Government of the Moroccan Empire",
  description: "Nu Al Andalusia is the Provincial Government of the Moroccan Empire operating within the corporate jurisdiction commonly known as the State of Florida. Lawfully continued under international law, treaty recognition, and the doctrine of uti possidetis juris.",
  keywords: ["Moroccan Empire", "Nu Al Andalusia", "Provincial Government", "Morocco", "Consular Courts", "Moorish", "international law", "treaty"],
  authors: [{ name: "Nu Al Andalusia" }],
  creator: "Nu Al Andalusia",
  publisher: "Nu Al Andalusia",
  metadataBase: new URL("https://nualandalusia.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title: "Nu Al Andalusia - Provincial Government of the Moroccan Empire",
    description: "Lawfully continued under international law, treaty recognition, and the doctrine of uti possidetis juris.",
    type: "website",
    locale: "en_US",
    siteName: "Nu Al Andalusia",
    url: "https://nualandalusia.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nu Al Andalusia - Provincial Government of the Moroccan Empire",
    description: "Lawfully continued under international law, treaty recognition, and the doctrine of uti possidetis juris.",
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

