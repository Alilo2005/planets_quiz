"use client";
import dynamic from "next/dynamic";
import DecryptedText from "@/components/DecryptedText";

const Lanyard = dynamic(() => import("@/components/Lanyard"), { ssr: false });

export default function LanyardPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl space-y-4">
        <h1 className="text-center text-2xl md:text-3xl font-cosmic text-white">
          <DecryptedText text="Cosmic Lanyard" animateOn="view" encryptedClassName="text-yellow-300/80" />
        </h1>
        <Lanyard />
      </div>
    </div>
  );
}
