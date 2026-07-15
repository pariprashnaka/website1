type GtagEvent = {
  action: string;
  category: string;
  label?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent({ action, category, label }: GtagEvent) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, { event_category: category, event_label: label });
}
