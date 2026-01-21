import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TOEFL Practice Platform | Master the 2026 Format",
    template: "%s | TOEFL Practice Platform",
  },
  description:
    "Comprehensive TOEFL iBT practice platform with AI-powered evaluation, adaptive testing, and real exam simulation. Master the new 2026 format with instant feedback.",
  keywords: [
    "TOEFL",
    "TOEFL iBT",
    "TOEFL practice",
    "TOEFL 2026",
    "English test",
    "language proficiency",
    "AI evaluation",
    "speaking practice",
    "writing practice",
  ],
  authors: [{ name: "TOEFL Practice Platform" }],
  creator: "TOEFL Practice Platform",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toeflpractice.com",
    siteName: "TOEFL Practice Platform",
    title: "TOEFL Practice Platform | Master the 2026 Format",
    description:
      "Comprehensive TOEFL iBT practice with AI-powered evaluation and real exam simulation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TOEFL Practice Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOEFL Practice Platform | Master the 2026 Format",
    description:
      "Comprehensive TOEFL iBT practice with AI-powered evaluation and real exam simulation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
