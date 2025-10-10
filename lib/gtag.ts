export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const hasGA = !!GA_ID;

export function pageview(url: string) {
  if (typeof window === "undefined" || !hasGA) return;
  (window as any).gtag?.("config", GA_ID, {
    page_path: url,
  });
}

export function gaEvent(action: string, params?: Record<string, any>) {
  if (typeof window === "undefined" || !hasGA) return;
  (window as any).gtag?.("event", action, params);
}
