import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cormorant_Garamond, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Black Swan Student Society",
  description:
    "A student society at Bocconi University, Milan, working on prediction markets: forecasting, calibration and the pricing of uncertainty.",
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
