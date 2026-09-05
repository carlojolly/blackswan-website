import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cormorant_Garamond, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  // Only 400 and 500 ship: the band classes switch between them and nothing
  // on the site sets italic or a heavier weight.
  weight: ["400", "500"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400"],
});

const PRODUCTION_URL = site.url;

export const metadata: Metadata = {
  // Crawlers cannot resolve relative paths, so this makes the OG image URL
  // absolute. Without it the link preview finds nothing.
  metadataBase: new URL(PRODUCTION_URL),
  title: {
    // Longer than the name: the tab and the search result carry what the
    // society is, while OG and Twitter below stay on the plain name, since
    // those previews reach people who already know it.
    default: site.metaTitle,
    template: `%s, ${site.name}`,
  },
  // Sourced from the hero so the preview and the page cannot drift apart.
  description: site.hero.line,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.hero.line,
    url: PRODUCTION_URL,
    locale: "en_GB",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.university}, ${site.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.hero.line,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrumentSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ground-dark">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
