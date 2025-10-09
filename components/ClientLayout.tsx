"use client";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QuizProvider } from "@/lib/quizContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const TargetCursor = dynamic(() => import("@/components/TargetCursor"), { ssr: false });
const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <QuizProvider>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 -z-10 pointer-events-none opacity-90">
          <Particles
            particleCount={240}
            particleSpread={10}
            speed={0.12}
            particleColors={["#ffffff", "#a855f7", "#60a5fa", "#e879f9"]}
            alphaParticles={true}
            particleBaseSize={100}
            sizeRandomness={1}
            cameraDistance={22}
            disableRotation={false}
            className="h-full w-full"
          />
        </div>
  <TargetCursor targetSelector=".cursor-target, a, button" hideDefaultCursor={false} disableOnTouch />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </QuizProvider>
  );
}
