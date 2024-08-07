import type { Metadata } from "next";
import { teko2 } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "E2A Learning Nepal | A Level Tuition in Nepal",
  description:
    "E2A Learning Nepal is a leading A Level tuition provider in Nepal. We offer A Level classes for students in Nepal. Our A Level tuition classes are designed to help students achieve their academic goals. Enroll now!",
};

export default function RootLayout({ children }: any) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "E2A Learning Nepal",
    alternateName: "Education To Ambition Learning Nepal",
    url: "https://e2alearning.com/",
    logo: "https://e2alearning.com/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "9866551435",
      contactType: "customer service",
      areaServed: "NP",
      availableLanguage: ["en", "Nepali"],
    },
    sameAs: [
      "https://www.facebook.com/e2alearningnepal1.0/",
      "https://www.instagram.com/e2alearningnepal1.0",
      "https://e2alearning.com/.com",
    ],
  };

  const breadCrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Past Papers",
        item: "https://e2alearning.com/pastpapers",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Enroll",
        item: "https://e2alearning.com/enroll",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://e2alearning.com/about",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbSchema) }}
        />
      </head>
      <body className={teko2.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
