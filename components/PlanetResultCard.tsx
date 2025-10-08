"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { PlanetInfo } from "@/lib/types";

export default function PlanetResultCard({ planet }: { planet: PlanetInfo }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
      <div className="grid md:grid-cols-[220px,1fr] gap-6 items-center">
        <div className="relative h-48 md:h-56">
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden bg-gradient-to-tr from-fuchsia-500/40 via-sky-400/40 to-violet-500/40 shadow-[0_0_80px_rgba(168,85,247,0.35)]">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                style={{ boxShadow: "inset 20px -20px 60px rgba(0,0,0,0.35)" }}
              />
              <motion.div
                className="absolute -inset-3 rounded-full border border-white/10"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              />
              {planet.imageUrl ? (
                <Image
                  src={planet.imageUrl}
                  alt={planet.imageAlt || `${planet.name} — Unsplash`}
                  fill
                  sizes="(max-width: 768px) 10rem, 12rem"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-5xl select-none">
                  {planet.emoji}
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-cosmic text-white mb-2">{planet.name}</h2>
          <p className="text-fuchsia-300 mb-4">{planet.tagline}</p>
          <p className="text-silver leading-relaxed mb-4">{planet.description}</p>
          <p className="text-sky-200/90"><span className="font-semibold text-sky-100">Fun fact:</span> {planet.funFact}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-fuchsia-500/10 via-sky-400/10 to-violet-500/10" />
    </div>
  );
}
