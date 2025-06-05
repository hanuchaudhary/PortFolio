import type { Metadata } from "next";
import { Geist, Geist_Mono, Farro, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const farro = Farro({
  variable: "--font-farro",
  subsets: ["latin"],
  weight: "400",
});

const gloriaHallelujah = Gloria_Hallelujah({
  variable: "--font-gloria",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kush Chaudhary",
  icons: {
    icon: [
      {
        url: "/images/me.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
  description: "Full-Stack Developer | Building Cool Stuff",
  openGraph: {
    title: "Kush Chaudhary",
    description: "Full-Stack Developer | Building Cool Stuff",
    url: "https://kushchaudhary.systems",
    siteName: "Kush Chaudhary",
    images: [
      {
        url: "https://kushchaudhary.systems/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kush Chaudhary - Full-Stack Developer",
      },
    ],
    locale: "en_US",
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
        className={`${geistSans.variable} ${geistMono.variable} ${farro.variable} ${gloriaHallelujah.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
