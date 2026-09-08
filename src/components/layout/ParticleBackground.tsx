"use client";

import { useLiteMode, useReducedMotion } from "@/hooks/useReducedMotion";

const LANDING_VIDEO_URL = "/landing-bg.mp4?v=anime-water-1";

interface ParticleBackgroundProps {
  showLiveBackground: boolean;
}

/** Full-bleed uploaded landing background video */
export default function ParticleBackground({ showLiveBackground }: ParticleBackgroundProps) {
  const liteMode = useLiteMode();
  const reducedMotion = useReducedMotion();

  if (liteMode || reducedMotion || !showLiveBackground) {
    return (
      <div
        className="particle-fallback position-fixed inset-0 w-100 h-100"
        style={{ zIndex: 0, pointerEvents: "none" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="live-background" aria-hidden="true">
      <video
        key={LANDING_VIDEO_URL}
        className="live-background__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={LANDING_VIDEO_URL} type="video/mp4" />
      </video>
      <div className="live-background__overlay" />
    </div>
  );
}
