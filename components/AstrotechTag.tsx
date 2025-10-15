"use client";
import ScrollVelocity from "@/components/ScrollVelocity";

export default function AstrotechTag({ inline = false, className = "", textClassName = "text-yellow-300/80" }: { inline?: boolean; className?: string; textClassName?: string }) {
  if (inline) {
    return (
      <div className={`pointer-events-none select-none flex justify-center ${className}`}>
        <div className="w-[220px] opacity-80">
          <ScrollVelocity
            texts={["Astrotech"]}
            velocity={60}
            numCopies={4}
            className={`px-4 ${textClassName}`}
            scrollerClassName="scale-50 md:scale-75 drop-shadow-[0_0_20px_rgba(255,232,31,0.3)]"
            parallaxClassName="[mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none ${className}`}>
      <div className="w-[220px] opacity-80">
        <ScrollVelocity
          texts={["Astrotech"]}
          velocity={60}
          numCopies={4}
          className={`px-4 ${textClassName}`}
          scrollerClassName="scale-50 md:scale-75 drop-shadow-[0_0_20px_rgba(255,232,31,0.3)]"
          parallaxClassName="[mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
        />
      </div>
    </div>
  );
}
