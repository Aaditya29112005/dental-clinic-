import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { generateLocalBusinessSchema, generatePhysicianSchema } from "@/lib/schema";
import { clinicConfig } from "@/data/clinicData";

export const metadata: Metadata = {
  title: {
    default: "Orthodontist and Dental Clinic in Noida, Sector 49 | Align Dentofacial",
    template: "%s | Align Dentofacial Clinic Noida",
  },
  description: "Specialist MDS Orthodontist led dental clinic near Sector 49, Noida. Offering braces, clear aligners, painless root canals, dental implants, teeth whitening, and cosmetic smile makeovers.",
  keywords: [
    "dentist in Noida",
    "orthodontist in Noida",
    "dental clinic near Sector 49 Noida",
    "braces in Noida",
    "clear aligners in Noida",
    "root canal treatment in Noida",
    "dental implants in Noida",
    "teeth whitening in Noida",
    "Dr Jyoti Chauhan orthodontist"
  ],
  authors: [{ name: "Dr. Jyoti Chauhan", url: "https://aligndentofacial.in" }],
  creator: "Align Dentofacial Clinic",
  metadataBase: new URL("https://aligndentofacial.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Align Dentofacial Clinic | Multispeciality Dental Care Noida",
    description: "Where advanced dentistry meets the art of a confident smile. Specialist orthodontic & general dental care near Sector 49, Noida.",
    url: "https://aligndentofacial.in",
    siteName: "Align Dentofacial Clinic",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const physicianSchema = generatePhysicianSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Schema.org JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />

        {/* Analytics hooks placeholders: GA4 & Meta Pixel */}
        {/*
          <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `
          }} />
        */}
      </head>
      <body className="antialiased selection:bg-teal-500 selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[100px] md:pt-[120px]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomBar />
      </body>
    </html>
  );
}
