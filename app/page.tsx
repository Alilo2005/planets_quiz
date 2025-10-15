"use client"
import Link from "next/link";
import Image from "next/image";
import CosmicButton from "@/components/CosmicButton";
import BlurText from "@/components/BlurText";
import CosmicProximityText from "@/components/CosmicProximityText";
import dynamic from "next/dynamic";
import DecryptedText from "@/components/DecryptedText";
import { LaserFlow } from "@/components/LaserFlow";

const AstrotechTag = dynamic(() => import("@/components/AstrotechTag"), { ssr: false });

export default function Home() {
  return (
  <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 relative">
  <div className="max-w-3xl text-center space-y-3">
        {/* Logo */}
        <Link href="/" className="inline-block mb-3" aria-label="Home">
          <Image
            src="/logo.png"
            alt="What Planet Am I?"
            width={96}
            height={96}
            priority
            className="mx-auto h-20 w-20 object-contain select-none"
          />
        </Link>
        <BlurText
          text="What Planet Am I?"
          animateBy="words"
          direction="top"
          delay={80}
          className="text-4xl md:text-6xl font-cosmic text-white mb-4 drop-shadow-[0_0_30px_rgba(255,232,31,0.2)]"
        />
        <CosmicProximityText
          text={"check your cosmic alignment and be part of the solar system"}
          className="text-silver"
        />
        <p className="sr-only">
          <DecryptedText text="Which planet are you?" animateOn="view" />
        </p>
        <Link href="/quiz/1">
          <CosmicButton className="text-lg md:text-xl px-6 py-3 mt-6">
            <DecryptedText text="Start" animateOn="view" encryptedClassName="text-yellow-300/80" />
          </CosmicButton>
        </Link>
      </div>
      {/* Right-side laser accent filling the vertical area */}
      <div
        className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-[40vw] max-w-[640px]"
        aria-hidden="true"
      >
        <LaserFlow
          className="absolute inset-0"
          color="#FFE81F"
          fogIntensity={0.4}
          wispDensity={1.2}
          horizontalSizing={0.4}
          verticalSizing={2.6}
          horizontalBeamOffset={0.2}
          verticalBeamOffset={0.0}
        />
      </div>

      <AstrotechTag className="text-white/90" textClassName="text-yellow-300/80" />
    </div>
  );
}
