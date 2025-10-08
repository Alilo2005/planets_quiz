"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type MotionButtonProps = Omit<ComponentProps<typeof motion.button>, "ref" | "children">;
type Props = MotionButtonProps & { glow?: boolean; loading?: boolean; children?: ReactNode };

export default function CosmicButton({
  children,
  className,
  glow = true,
  loading = false,
  ...props
}: Props) {
  return (
    <motion.button
      whileHover={{ y: -1, boxShadow: glow ? "0 0 24px rgba(168,85,247,0.45)" : undefined }}
      whileTap={{ scale: 0.98 }}
      className={cn(
  "relative inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium cursor-target",
        "backdrop-blur-md bg-white/5 border border-white/10",
        "text-silver hover:text-white disabled:opacity-60 disabled:cursor-not-allowed",
        "transition-colors",
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
    </motion.button>
  );
}
