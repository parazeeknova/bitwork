import type { Metadata } from "next";
import { Instrument_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@bitwork/ui/components/sonner";
import { Providers } from "@/components/providers";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bitwork - Skill Exchange Network",
  description:
    "Connect with nearby service providers and workers. Exchange skills, build trust, get work done.",
  icons: {
    icon: "/bitwork.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
        <Toaster closeButton position="top-center" richColors />
      </body>
    </html>
  );
}
