"use client";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PLANET_IDS, getAdjustedScores, rankPlanets } from "@/lib/quizData";
import type { PlanetId, Question } from "@/lib/types";

export default function WhyThisResult({
  planetId,
  scores,
  questions,
  answers,
}: {
  planetId: PlanetId;
  scores: Partial<Record<PlanetId, number>>;
  questions: Question[];
  answers: Record<string, string | undefined>;
}) {
  const adjusted = useMemo(() => getAdjustedScores(scores), [scores]);
  const ranked = useMemo(() => rankPlanets(scores), [scores]);

  const rows = useMemo(() => {
    return questions.map((q) => {
      const optId = answers[q.id];
      const opt = q.options.find((o) => o.id === optId);
      const contribution = opt?.weights?.[planetId] ?? 0;
      return { qId: q.id, topic: q.topic, answer: opt?.text, contribution };
    });
  }, [questions, answers, planetId]);

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Confidence bar removed as requested */}

      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 md:p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-white/90 font-semibold">Why this result?</h2>
          <button onClick={() => setExpanded((v) => !v)} className="text-sm text-sky-300 hover:text-sky-200">
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
        <ul className="grid gap-1">
          {(expanded ? rows : rows.slice(0, 4)).map((row) => (
            <li key={row.qId} className="relative rounded-xl border border-white/10 p-2">
              <div className="flex items-baseline gap-2 text-white/80">
                <span className="capitalize min-w-28 text-sm">{row.topic}</span>
                <span className="flex-1 truncate text-silver text-sm">{row.answer || "—"}</span>
                <span className="text-sky-300/90 text-sm font-medium">+{row.contribution.toFixed(2)}</span>
              </div>
              <div className="mt-2 h-1.5 rounded bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-fuchsia-500/80 via-sky-400/80 to-violet-500/80"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, Math.max(0, (row.contribution / 1) * 100))}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
