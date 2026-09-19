"use strict";
"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NoiseSection from "@/components/NoiseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FoundersSection from "@/components/FoundersSection";
import InvestorsSection from "@/components/InvestorsSection";
import VerificationSection from "@/components/VerificationSection";
import MatchSection from "@/components/MatchSection";
import ActionSection from "@/components/ActionSection";
import VideoSection from "@/components/VideoSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Progress state for each section
  const [progress, setProgress] = useState({
    noise: 0,
    how: 0,
    founders: 0,
    investors: 0,
    verify: 0,
    match: 0,
    action: 0,
  });

  // Nav state
  const [navTheme, setNavTheme] = useState<"light" | "dark">("light");
  const [navCompact, setNavCompact] = useState(false);

  // Magnetic button refs
  const heroBtnRef = useRef<HTMLAnchorElement>(null);
  const finalBtnRef = useRef<HTMLAnchorElement>(null);

  // Mouse tracking state
  const mouseState = useRef({
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    cx: -9999,
    cy: -9999,
  });

  const magnetsState = useRef<{
    [key: string]: { el: HTMLAnchorElement; x: number; y: number; set: boolean };
  }>({});

  const cl = (v: number) => Math.max(0, Math.min(1, v));

  useEffect(() => {
    // Populate magnets
    if (heroBtnRef.current) {
      magnetsState.current.hero = { el: heroBtnRef.current, x: 0, y: 0, set: false };
    }
    if (finalBtnRef.current) {
      magnetsState.current.final = { el: finalBtnRef.current, x: 0, y: 0, set: false };
    }

    // Cache DOM element lookups once
    const sectionIds = [
      "top",
      "noise",
      "how",
      "founders",
      "investors",
      "verify",
      "match",
      "action",
      "video",
      "final",
    ];
    const sectionElements: { [key: string]: HTMLElement | null } = {};
    for (const id of sectionIds) {
      sectionElements[id] = document.getElementById(id);
    }

    let scrollDirty = true;
    const handleScroll = () => {
      scrollDirty = true;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      const W = window.innerWidth || 1;
      const H = Math.min(window.innerHeight || 1, 1000);
      mouseState.current.tx = Math.max(-1, Math.min(1, (e.clientX / W - 0.5) * 2));
      mouseState.current.ty = Math.max(-1, Math.min(1, ((e.clientY % H) / H - 0.5) * 2));
      mouseState.current.cx = e.clientX;
      mouseState.current.cy = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let rafId: number;

    const tick = () => {
      const m = mouseState.current;
      const diffX = m.tx - m.x;
      const diffY = m.ty - m.y;
      if (Math.abs(diffX) > 0.0005 || Math.abs(diffY) > 0.0005) {
        m.x += diffX * 0.06;
        m.y += diffY * 0.06;

        if (rootRef.current) {
          const rx = Math.round(m.x * 1000) / 1000;
          const ry = Math.round(m.y * 1000) / 1000;
          rootRef.current.style.setProperty("--mx", String(rx));
          rootRef.current.style.setProperty("--my", String(ry));
        }
      }

      // Only re-calculate scroll progress when user has scrolled or resized
      if (scrollDirty) {
        scrollDirty = false;
        const vh = window.innerHeight || 800;

        const calcP = (el: HTMLElement | null) => {
          if (!el) return 0;
          const r = el.getBoundingClientRect();
          const span = r.height - vh;
          if (span <= 0) return 0;
          return cl(-r.top / span);
        };

        const pNoise = calcP(sectionElements.noise);
        const pHow = calcP(sectionElements.how);
        const pFounders = calcP(sectionElements.founders);
        const pInvestors = calcP(sectionElements.investors);
        const pVerify = calcP(sectionElements.verify);
        const pMatch = calcP(sectionElements.match);
        const pAction = calcP(sectionElements.action);

        // State update with bailout to prevent re-rendering when unchanged
        setProgress((prev) => {
          if (
            Math.abs(prev.noise - pNoise) < 0.0008 &&
            Math.abs(prev.how - pHow) < 0.0008 &&
            Math.abs(prev.founders - pFounders) < 0.0008 &&
            Math.abs(prev.investors - pInvestors) < 0.0008 &&
            Math.abs(prev.verify - pVerify) < 0.0008 &&
            Math.abs(prev.match - pMatch) < 0.0008 &&
            Math.abs(prev.action - pAction) < 0.0008
          ) {
            return prev;
          }
          return {
            noise: pNoise,
            how: pHow,
            founders: pFounders,
            investors: pInvestors,
            verify: pVerify,
            match: pMatch,
            action: pAction,
          };
        });

        // Nav compact detection with bailout
        if (rootRef.current) {
          const isCompact = rootRef.current.getBoundingClientRect().top < -40;
          setNavCompact((prev) => (prev !== isCompact ? isCompact : prev));
        }

        // Active section theme detection with bailout
        let activeTheme: "light" | "dark" = "light";
        for (const id of sectionIds) {
          const el = sectionElements[id];
          if (el) {
            const r = el.getBoundingClientRect();
            if (r.top <= 50 && r.bottom > 50) {
              const themeAttr = el.getAttribute("data-theme") as "light" | "dark" | null;
              if (themeAttr) activeTheme = themeAttr;
              break;
            }
          }
        }
        setNavTheme((prev) => (prev !== activeTheme ? activeTheme : prev));
      }

      // Magnetic buttons logic
      if (m.cx > -100) {
        for (const k in magnetsState.current) {
          const g = magnetsState.current[k];
          if (!g.el) continue;
          const r = g.el.getBoundingClientRect();
          const btnCx = r.left + r.width / 2 - g.x;
          const btnCy = r.top + r.height / 2 - g.y;
          const dx = m.cx - btnCx;
          const dy = m.cy - btnCy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const tx = dist < 140 ? dx * 0.22 : 0;
          const ty = dist < 140 ? dy * 0.3 : 0;
          g.x += (tx - g.x) * 0.12;
          g.y += (ty - g.y) * 0.12;
          if (Math.abs(g.x) < 0.05 && Math.abs(g.y) < 0.05 && tx === 0) {
            if (g.set) {
              g.el.style.transform = "";
              g.set = false;
            }
            continue;
          }
          g.el.style.transform = `translate(${g.x.toFixed(2)}px, ${g.y.toFixed(2)}px)`;
          g.set = true;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      style={{
        width: "100%",
        position: "relative",
        background: "#F7F7F5",
        color: "#0B0B0B",
        overflowX: "clip",
      }}
    >
      {/* Dynamic Header */}
      <Navbar theme={navTheme} compact={navCompact} />

      {/* 01 Hero Section */}
      <HeroSection magneticRef={heroBtnRef} />

      {/* 02 Too Much Noise -> The Signal Section */}
      <NoiseSection progress={progress.noise} />

      {/* 03 How EXIT Works (4 Step Interactive Cards) */}
      <HowItWorksSection progress={progress.how} />

      {/* 04 For Founders Section */}
      <FoundersSection progress={progress.founders} />

      {/* 05 For Investors Section */}
      <InvestorsSection progress={progress.investors} />

      {/* 06 Verification Section */}
      <VerificationSection progress={progress.verify} />

      {/* 07 The Match Section */}
      <MatchSection progress={progress.match} />

      {/* 08 From Interest to Action Section */}
      <ActionSection progress={progress.action} />

      {/* 09 Video Showcase Section (Replaced Pricing as requested) */}
      <VideoSection />

      {/* 10 Final CTA & Footer Section */}
      <FinalCtaSection magneticRef={finalBtnRef} />
    </div>
  );
}
