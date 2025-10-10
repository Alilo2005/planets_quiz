"use client";
import Head from "next/head";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/lib/quizContext";
import { computeResult, planets } from "@/lib/quizData";
import PlanetResultCard from "@/components/PlanetResultCard";
import DecryptedText from "@/components/DecryptedText";
import { Github, Instagram } from "lucide-react";
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
    <>
      <Head>
        <title>Your Cosmic Match | What Planet Am I?</title>
        <meta name="description" content={`Discover your cosmic match: ${planet.name} — ${planet.tagline}. Take the quiz and share your result!`} />
        <meta property="og:title" content={`Your Cosmic Match: ${planet.name} | What Planet Am I?`} />
        <meta property="og:description" content={planet.description} />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Your Cosmic Match: ${planet.name} | What Planet Am I?`} />
        <meta name="twitter:description" content={planet.description} />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://whatplanetami.com/result" />
      </Head>
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
      <div className="pt-4 flex items-center justify-center gap-5 text-silver">
        <a
          href="https://github.com/Alilo2005"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="cursor-target hover:text-white/90 transition-colors"
        >
          <Github className="h-6 w-6" strokeWidth={1.75} />
        </a>
        <a
          href="https://www.instagram.com/astrotech_esi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="cursor-target hover:text-white/90 transition-colors"
        >
          <Instagram className="h-6 w-6" strokeWidth={1.75} />
        </a>
      </div>
      {shared && (
        <p className="text-center text-sky-200/90">
          <DecryptedText text={shared} animateOn="view" encryptedClassName="text-sky-300/70" />
        </p>
      )}
      </div>
    </>
  );
}
