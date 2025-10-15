"use client";
import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/lib/quizContext";
import { computeResult, planets } from "@/lib/quizData";
import PlanetResultCard from "@/components/PlanetResultCard";
import DecryptedText from "@/components/DecryptedText";
import { Github, Instagram } from "lucide-react";
import CosmicButton from "@/components/CosmicButton";
import { gaEvent } from "@/lib/gtag";
import { toPng } from "html-to-image";

export default function ResultPage() {
  const router = useRouter();
  const { scores, reset } = useQuiz();
  const planetId = useMemo(() => computeResult(scores), [scores]);
  const planet = planets[planetId];
  const [shared, setShared] = useState<string | null>(null);
  const posterRef = useRef<HTMLDivElement | null>(null);
  // no local breakdown state; WhyThisResult builds it from questions + answers

  // Fire GA completion event
  useEffect(() => {
    gaEvent("complete_quiz", {
      result_planet: planetId,
    });
  }, [planetId]);

  async function downloadPoster() {
    const node = posterRef.current;
    if (!node) return;
    try {
      gaEvent("download_poster", { result_planet: planetId });

      // Use the actual bounding box for consistent sizing
      const rect = node.getBoundingClientRect();
      const width = Math.ceil(rect.width);
      const height = Math.ceil(rect.height);

      const dataUrl = await toPng(node, {
        cacheBust: true,
        includeQueryParams: true,
        pixelRatio: 3,
        backgroundColor: "#030712", // deep space background
        width,
        height,
        style: {
          width: `${width}px`,
          height: `${height}px`,
          margin: "0",
        },
      });

      const link = document.createElement("a");
      link.download = `cosmic-match-${planet.name.toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
      setShared("Poster downloaded — share it on Instagram!");
    } catch (err) {
      console.error("Failed to generate poster", err);
      setShared("Couldn't generate poster. Try a quick refresh.");
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
      {/* Poster capture region: include title + card */}
      <div ref={posterRef} className="w-full max-w-4xl mx-auto space-y-4 overflow-visible p-4 md:p-6">
        <h1 className="text-3xl md:text-5xl font-cosmic text-white text-center">
          <DecryptedText
            text="Your Cosmic Match"
            animateOn="view"
            sequential
            revealDirection="center"
            speed={40}
            className="text-white"
            encryptedClassName="text-yellow-300/80"
          />
        </h1>
          <PlanetResultCard planet={planet} />
          {/* subtle footer watermark inside poster */}
          <div className="pt-2 text-center text-xs text-blue-200/70">
            by Astrotech
          </div>
        </div>
      <div className="flex items-center justify-center gap-3">
        <CosmicButton onClick={() => { reset(); router.push("/"); }}>
          <DecryptedText text="Retake Quiz" animateOn="view" encryptedClassName="text-yellow-300/80" />
        </CosmicButton>
        <CosmicButton onClick={downloadPoster}>
          <DecryptedText text="Download Poster" animateOn="view" encryptedClassName="text-yellow-300/80" />
        </CosmicButton>
      </div>
      <div className="pt-4 flex items-center justify-center gap-5 text-silver">
        <a
          href="https://github.com/Alilo2005/planets_quiz"
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
        <p className="text-center text-blue-200/90">
          <DecryptedText text={shared} animateOn="view" encryptedClassName="text-blue-300/70" />
        </p>
      )}
      </div>
    </>
  );
}
