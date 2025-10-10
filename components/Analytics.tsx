"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, hasGA } from "@/lib/gtag";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!hasGA) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
