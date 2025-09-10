import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
