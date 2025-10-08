"use client";
import { motion } from "framer-motion";

export default function ProgressBar({ value, total }: { value: number; total: number }) {
  const pct = Math.min(100, Math.max(0, (value / total) * 100));
  return (
    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-fuchsia-500 via-sky-400 to-violet-500"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}
