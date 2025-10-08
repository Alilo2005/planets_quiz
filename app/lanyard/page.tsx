"use client";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/Lanyard"), { ssr: false });

export default function LanyardPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl">
        <Lanyard />
      </div>
    </div>
  );
}
