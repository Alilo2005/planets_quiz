"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/lib/quizContext";
import { computeResult, planets } from "@/lib/quizData";
import PlanetResultCard from "@/components/PlanetResultCard";
import DecryptedText from "@/components/DecryptedText";
import CosmicButton from "@/components/CosmicButton";

export default function ResultPage() {
  const router = useRouter();
  const { scores, reset } = useQuiz();
  const planetId = useMemo(() => computeResult(scores), [scores]);
  const planet = planets[planetId];
  const [shared, setShared] = useState<string | null>(null);

  async function share() {
    const text = `I just discovered my cosmic match: ${planet.name} ${planet.emoji} — ${planet.tagline}. What planet are you?`;
    const url = typeof window !== "undefined" ? window.location.origin : "";
    if (navigator.share) {
      try {
        await navigator.share({ title: "What Planet Am I?", text, url });
        setShared("Shared with your universe ✨");
      } catch {
        setShared("Sharing canceled");
      }
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setShared("Copied to clipboard");
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-6">
  <h1 className="text-3xl md:text-5xl font-cosmic text-white text-center">
        <DecryptedText
          text="Your Cosmic Match"
          animateOn="view"
          sequential
          revealDirection="center"
          speed={40}
          className="text-white"
          encryptedClassName="text-fuchsia-300/70"
        />
      </h1>
      <PlanetResultCard planet={planet} />
      <div className="flex items-center justify-center gap-3">
        <CosmicButton onClick={() => { reset(); router.push("/"); }}>
          <DecryptedText text="Retake Quiz" animateOn="view" encryptedClassName="text-fuchsia-300/70" />
        </CosmicButton>
        <CosmicButton onClick={share}>
          <DecryptedText text="Share Result" animateOn="view" encryptedClassName="text-fuchsia-300/70" />
        </CosmicButton>
      </div>
      <p className="text-center text-silver pt-4">
        <DecryptedText
          text="Your cosmic essence has been revealed. Share your planet with the universe."
          animateOn="view"
          speed={30}
          encryptedClassName="text-sky-200/70"
        />
      </p>
      {shared && (
        <p className="text-center text-sky-200/90">
          <DecryptedText text={shared} animateOn="view" encryptedClassName="text-sky-300/70" />
        </p>
      )}
    </div>
  );
}
