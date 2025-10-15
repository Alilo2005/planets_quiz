"use client"
import Link from "next/link";
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
        <BlurText
          text="What Planet Am I?"
          animateBy="words"
          direction="top"
          delay={80}
          className="text-4xl md:text-6xl font-cosmic text-white mb-4 drop-shadow-[0_0_30px_rgba(255,232,31,0.2)]"
        />
        <CosmicProximityText
          text={"Step into the neon void. Drift through aurora gradients and starlit signals. At the journey's end, a world will speak your name."}
          className="text-silver"
        />
        <p className="sr-only">
          <DecryptedText text={"Step into the neon void. Drift through aurora gradients and starlit signals. At the journey's end, a world will speak your name."} animateOn="view" />
        </p>
        <Link href="/quiz/1">
          <CosmicButton className="text-lg">
            <DecryptedText text="Start Quiz" animateOn="view" encryptedClassName="text-yellow-300/80" />
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
