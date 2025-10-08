"use client";
import { useRef } from "react";
import VariableProximity from "@/components/VariableProximity";

export default function CosmicProximityText({
  text,
  className,
  as = "div",
}: {
  text: string;
  className?: string;
  as?: "div" | "span";
}) {
  const containerRef = useRef<HTMLElement | null>(null);
  const Wrapper: any = as;
  return (
    <Wrapper ref={containerRef} className={as === "div" ? "w-full flex justify-center" : undefined}>
      <VariableProximity
        label={text}
        containerRef={containerRef as any}
        fromFontVariationSettings="'wght' 350, 'slnt' 0, 'GRAD' 0"
        toFontVariationSettings="'wght' 600, 'slnt' -6, 'GRAD' 100"
        radius={120}
        falloff="gaussian"
        className={`text-silver text-lg md:text-xl ${className ?? ""}`}
        style={{ textAlign: as === "div" ? "center" : undefined }}
      />
    </Wrapper>
  );
}
