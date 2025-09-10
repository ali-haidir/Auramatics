import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "AURAMATICS - Data & AI Solutions",
  description:
    "Transforming businesses with intelligent technology. AURAMATICS specializes in data engineering, AI, and custom software development.",
  keywords:
    "data engineering, AI, artificial intelligence, data science, web development, mobile apps, automation",
  authors: [{ name: "AURAMATICS Team" }],
  creator: "AURAMATICS",
  publisher: "AURAMATICS",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-64x64.png",
  },
  openGraph: {
    title: "AURAMATICS - Data & AI Solutions",
    description: "Transforming businesses with intelligent technology",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
