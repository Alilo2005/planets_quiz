import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Playfair_Display, Roboto_Flex, Orbitron } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import { Suspense } from "react";
import Analytics from "@/components/Analytics";
import Script from "next/script";
import { GA_ID, hasGA } from "@/lib/gtag";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const robotoFlex = Roboto_Flex({ subsets: ["latin"], variable: "--font-var" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-cosmic" });

export const metadata: Metadata = {
  title: "What Planet Am I? | Cosmic Personality Quiz",
  description: "Take a neon galaxy quiz to discover which planet matches your cosmic personality. 9 questions, beautiful visuals, instant result.",
  openGraph: {
    title: "What Planet Am I? | Cosmic Personality Quiz",
    description: "Take a neon galaxy quiz to discover which planet matches your cosmic personality. 9 questions, beautiful visuals, instant result.",
    url: "https://whatplanetami.com/",
    siteName: "What Planet Am I?",
    images: [
      {
        url: "/jupiter.jpg",
        width: 1200,
        height: 630,
        alt: "What Planet Am I? - Cosmic Personality Quiz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Planet Am I? | Cosmic Personality Quiz",
    description: "Take a neon galaxy quiz to discover which planet matches your cosmic personality. 9 questions, beautiful visuals, instant result.",
    images: ["/og-image.png"],
    creator: "@mahdiali"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    }
  },
  alternates: {
    canonical: "https://whatplanetami.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${playfair.variable} ${robotoFlex.variable} ${orbitron.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0020" />
        <link rel="canonical" href="https://whatplanetami.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Quiz",
              "name": "What Planet Am I?",
              "description": "A cosmic personality quiz to discover your matching planet.",
              "about": "Personality, Planets, Astrology, Space",
              "inLanguage": "en",
              "url": "https://whatplanetami.com/",
              "creator": {
                "@type": "Organization",
                "name": "Astrotech ESI",
                "url": "https://www.instagram.com/astrotech_esi/"
              }
            })
          }}
        />
      </head>
      <body className="antialiased font-sans bg-galaxy text-silver min-h-screen overflow-x-hidden">
        {hasGA && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        )}
        <ClientLayout>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
