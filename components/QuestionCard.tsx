"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { AnswerOption } from "@/lib/types";
import { cn } from "@/lib/utils";
import CosmicProximityText from "@/components/CosmicProximityText";

export default function QuestionCard({
  prompt,
  options,
  selected,
  onSelect,
}: {
  prompt: string;
  options: AnswerOption[];
  selected?: string;
  onSelect: (id: string) => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-20, 20], [8, -8]);
  const rotateY = useTransform(x, [-20, 20], [-8, 8]);

  return (
    <motion.div
      className="relative w-full max-w-3xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const dx = e.clientX - rect.left - rect.width / 2;
        const dy = e.clientY - rect.top - rect.height / 2;
        x.set((dx / rect.width) * 40);
        y.set((dy / rect.height) * 40);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
    >
      <h2 className="mb-6">
        <CosmicProximityText
          as="span"
          text={prompt}
          className="text-2xl md:text-3xl font-semibold font-serif text-white leading-snug"
        />
      </h2>
      <div className="grid gap-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={cn(
              "text-left p-4 rounded-xl border backdrop-blur-md transition-all",
              "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20",
              selected === opt.id && "bg-white/15 border-white/30 ring-1 ring-fuchsia-400/40"
            )}
          >
            <span className="text-silver text-base md:text-lg">{opt.text}</span>
          </button>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-fuchsia-500/10 via-sky-400/10 to-violet-500/10" />
    </motion.div>
  );
}
