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
      m.x += (m.tx - m.x) * 0.06;
      m.y += (m.ty - m.y) * 0.06;

      if (rootRef.current) {
        const rx = Math.round(m.x * 1000) / 1000;
        const ry = Math.round(m.y * 1000) / 1000;
        rootRef.current.style.setProperty("--mx", String(rx));
        rootRef.current.style.setProperty("--my", String(ry));
      }

      // Calculate progress for each section
      const vh = window.innerHeight || 800;

      const calcP = (el: HTMLElement | null) => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        const span = r.height - vh;
        if (span <= 0) return 0;
        return cl(-r.top / span);
      };

      const pNoise = calcP(document.getElementById("noise"));
      const pHow = calcP(document.getElementById("how"));
      const pFounders = calcP(document.getElementById("founders"));
      const pInvestors = calcP(document.getElementById("investors"));
      const pVerify = calcP(document.getElementById("verify"));
      const pMatch = calcP(document.getElementById("match"));
      const pAction = calcP(document.getElementById("action"));

      setProgress({
        noise: pNoise,
        how: pHow,
        founders: pFounders,
        investors: pInvestors,
        verify: pVerify,
        match: pMatch,
        action: pAction,
      });

      // Nav compact & theme detection
      if (rootRef.current) {
        const isCompact = rootRef.current.getBoundingClientRect().top < -40;
        setNavCompact(isCompact);
      }

      // Check current section under top: 50px
      const sections = [
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
      let activeTheme: "light" | "dark" = "light";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 50 && r.bottom > 50) {
            const themeAttr = el.getAttribute("data-theme") as "light" | "dark" | null;
            if (themeAttr) activeTheme = themeAttr;
            break;
          }
        }
      }
      setNavTheme(activeTheme);

      // Magnetic buttons logic
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

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
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
