import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "./components/navbar";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ulises Hernández — Dev Full Stack",
  description:
    "Portafolio profesional de Ulises Efraín Hernández Zúñiga, desarrollador Full Stack especializado en React, Next.js, TypeScript y FastAPI.",
  keywords: ["Full Stack", "React", "Next.js", "TypeScript", "portafolio", "desarrollador web"],
  authors: [{ name: "Ulises Efraín Hernández Zúñiga" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "Ulises Hernández — Dev Full Stack",
    description:
      "Desarrollador Full Stack con experiencia en React, Next.js, TypeScript y FastAPI. Explora mis proyectos y servicios.",
    siteName: "Portafolio Ulises Hernández",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulises Hernández — Dev Full Stack",
    description:
      "Desarrollador Full Stack con experiencia en React, Next.js, TypeScript y FastAPI.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ulises Efraín Hernández Zúñiga",
  jobTitle: "Desarrollador Full Stack",
  url: "https://github.com/efrain31",
  sameAs: [
    "https://github.com/efrain31",
    "https://www.linkedin.com/in/ulises-efrain-hernandez-zu%C3%B1iga-3193192b4/",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "FastAPI", "Tailwind CSS", "PostgreSQL"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
