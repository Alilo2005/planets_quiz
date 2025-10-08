import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Playfair_Display, Roboto_Flex, Orbitron } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const robotoFlex = Roboto_Flex({ subsets: ["latin"], variable: "--font-var" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-cosmic" });

export const metadata: Metadata = {
  title: "What Planet Am I?",
  description: "An interstellar personality journey through the cosmos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className={`${spaceGrotesk.variable} ${playfair.variable} ${robotoFlex.variable} ${orbitron.variable}`}>
      <body className="antialiased font-sans bg-galaxy text-silver min-h-screen overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
