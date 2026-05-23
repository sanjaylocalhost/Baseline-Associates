import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baselinesurvey757.com"),
  title: {
    default: "Baseline Associates | Land Survey Company in Bangalore",
    template: "%s | Baseline Associates Bangalore",
  },
  description:
    "Baseline Associates — Professional land survey, DGPS, drone survey, topographic survey, construction layout & soil test services in Bangalore. Instruments of Accuracy, Foundations of Trust.",
  keywords: [
    "land survey company Bangalore",
    "DGPS survey Bengaluru",
    "drone survey Bangalore",
    "topographic survey Bangalore",
    "construction layout survey",
    "total station survey",
    "soil test Bangalore",
    "land surveyor near me Kengeri",
  ],
  authors: [{ name: "Baseline Associates" }],
  creator: "Baseline Associates",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.baselinesurvey757.com",
    siteName: "Baseline Associates",
    title: "Baseline Associates | Land Survey Company in Bangalore",
    description:
      "Professional land survey, DGPS, drone survey, and construction layout services in Bangalore. Precision Planning. Perfect Results.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Baseline Associates - Land Survey Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baseline Associates | Land Survey Company in Bangalore",
    description:
      "Professional land survey, DGPS, drone survey, and construction layout services in Bangalore.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="canonical" href="https://www.baselinesurvey757.com" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="geo.position" content="12.9141;77.5376" />
        <meta name="ICBM" content="12.9141, 77.5376" />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Baseline Associates",
              image: "https://www.baselinesurvey757.com/og-image.jpg",
              "@id": "https://www.baselinesurvey757.com",
              url: "https://www.baselinesurvey757.com",
              telephone: "+919448408174",
              email: "baselinesurvey757@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "No.17, 4th Cross, Arunachalam Layout, Near Satellite Town Kengeri",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560060",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9141,
                longitude: 77.5376,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [],
              description:
                "Professional land survey, DGPS, drone survey, topographic survey, construction layout & soil test services in Bangalore.",
              priceRange: "₹₹",
            }),
          }}
        />
      </head>
      <body className="font-body bg-dark-900 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
