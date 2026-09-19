"use strict";
"use client";

import React, { useRef, useEffect, useState } from "react";

interface ActionSectionProps {
  progress: number;
}

function ActionSection({ progress }: ActionSectionProps) {
  const trackDeskRef = useRef<HTMLDivElement>(null);
  const trackDeskFillRef = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLDivElement>(null);

  // Desktop active stage (0 to 5)
  const activeStage = Math.min(5, Math.round(progress * 5));

  // Mobile & tablet active stage (0 to 5) based on normal downward scroll
  const [activeStageMobile, setActiveStageMobile] = useState(0);
  const mobileStepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stagesData = [
    ["Discover", "Find companies that match how you invest."],
    ["Connect", "Start a direct conversation with the founder."],
    ["Data room", "Access shared documents in one place."],
    ["Due diligence", "Review the numbers, the claims and the team."],
    ["Term sheet", "Agree the terms of the investment."],
    ["Deal", "Close, and begin the relationship."],
  ];

  // 1. Desktop Horizontal Motion
  useEffect(() => {
    if (!trackDeskRef.current || !secRef.current) return;
    const fw = secRef.current.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 1440);

    if (fw >= 1024) {
      const stepDist = 520;
      const startX = 160;
      const travel = 160 + 5 * 520 - fw * 0.42;

      trackDeskRef.current.style.setProperty("--step-dist", `${stepDist}px`);
      trackDeskRef.current.style.setProperty("--start-x", `${startX}px`);
      trackDeskRef.current.style.transform = `translateX(${(-(travel * progress)).toFixed(1)}px)`;
      if (trackDeskFillRef.current) {
        trackDeskFillRef.current.style.width = `${startX + 5 * stepDist * progress}px`;
      }
    }
  }, [progress]);

  // 2. Mobile & Tablet Natural Scroll Stage Observer
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScrollMobile = () => {
      if (window.innerWidth >= 1024) return;
      const vh = window.innerHeight || 800;
      const triggerY = vh * 0.55;

      let currentActive = 0;
      mobileStepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY) {
          currentActive = idx;
        }
      });

      setActiveStageMobile(currentActive);
    };

    window.addEventListener("scroll", handleScrollMobile, { passive: true });
    handleScrollMobile();
    return () => window.removeEventListener("scroll", handleScrollMobile);
  }, []);

  return (
    <section
      id="action"
      ref={secRef}
      className="action-section"
      data-theme="dark"
      aria-label="From interest to action"
      style={{
        position: "relative",
        height: "2800px",
        background: "#0B0B0B",
        color: "#F7F7F5",
      }}
    >
      <div className="stick">
        {/* Section Header (Left) */}
        <div
          className="action-header"
          style={{
            position: "absolute",
            left: "clamp(20px, 4vw, 48px)",
            top: "clamp(96px, 13vh, 125px)",
            display: "flex",
            flexDirection: "column",
            zIndex: 10,
          }}
        >
          <span className="lab" style={{ color: "#9A9A96" }}>
            The journey
          </span>
          <h2
            className="serif sec-heading-action"
            style={{
              margin: "16px 0 0",
              fontSize: "clamp(28px, 4.8vw, 72px)",
              lineHeight: 1.04,
              letterSpacing: "-.01em",
            }}
          >
            From interest
            <br />
            to <span className="i">action.</span>
          </h2>
        </div>

        {/* Counter - Desktop */}
        <div
          className="action-counter action-counter-desktop"
          style={{
            position: "absolute",
            right: "clamp(20px, 4vw, 48px)",
            top: "clamp(96px, 13vh, 125px)",
            textAlign: "right",
            fontSize: "12px",
            color: "#9A9A96",
            zIndex: 10,
          }}
        >
          <span style={{ color: "#F7F7F5" }}>0{activeStage + 1}</span> / 06
        </div>

        {/* Counter - Mobile & Tablet */}
        <div
          className="action-counter action-counter-mobile"
          style={{
            position: "absolute",
            top: 0,
            right: "clamp(16px, 4vw, 28px)",
            textAlign: "right",
            fontSize: "12px",
            color: "#9A9A96",
            zIndex: 10,
          }}
        >
          <span style={{ color: "#F7F7F5" }}>0{activeStageMobile + 1}</span> / 06
        </div>

        {/* Desktop Horizontal Moving Track (Screen width >= 1024px) */}
        <div
          ref={trackDeskRef}
          className="action-stick-track action-track-desktop"
          data-track="1"
          style={{
            position: "absolute",
            left: 0,
            top: "54%",
            height: "280px",
            width: "3400px",
            willChange: "transform",
          }}
        >
          {/* Base rail */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "1px",
              background: "#262626",
            }}
          />
          {/* Repeating accent pattern */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "-6px",
              height: "6px",
              background:
                "repeating-linear-gradient(90deg, rgba(247,247,245,.18) 0 1px, transparent 1px 40px)",
            }}
          />
          {/* Dynamic filled rail */}
          <div
            ref={trackDeskFillRef}
            aria-hidden="true"
            data-trackfill="1"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "1px",
              background: "#F7F7F5",
              width: 0,
            }}
          />

          {/* Stages along track */}
          {stagesData.map((st, i) => {
            const on = i === activeStage;
            const past = i < activeStage;
            const dotBg = on || past ? "#F7F7F5" : "#0B0B0B";
            const dotBd = on || past ? "#F7F7F5" : "#5E5E5B";
            const textColor = on ? "#F7F7F5" : past ? "#9A9A96" : "#5E5E5B";

            return (
              <div
                key={st[0]}
                className="action-stage-card"
                style={{
                  position: "absolute",
                  top: 0,
                  left: `calc(var(--start-x, 160px) + ${i} * var(--step-dist, 520px))`,
                  width: "clamp(260px, 75vw, 440px)",
                }}
              >
                {/* Milestone Dot */}
                <span
                  className="dot"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-6px",
                    top: "-6px",
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    boxSizing: "border-box",
                    background: dotBg,
                    border: `1px solid ${dotBd}`,
                    transform: `scale(${on ? 1.5 : 1})`,
                    transition: "transform 0.3s ease, background 0.3s ease, border 0.3s ease",
                  }}
                />

                <div style={{ paddingTop: "34px" }}>
                  <span style={{ fontSize: "11px", color: "#6B6B6B" }}>0{i + 1}</span>
                  <div
                    className="serif stage-n action-stage-title"
                    style={{
                      marginTop: "10px",
                      fontSize: on ? "clamp(36px, 8vw, 76px)" : "clamp(22px, 5vw, 34px)",
                      lineHeight: 1,
                      color: textColor,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {st[0]}
                  </div>
                  <p
                    style={{
                      margin: "18px 0 0",
                      maxWidth: "300px",
                      fontSize: "13.5px",
                      lineHeight: 1.6,
                      color: "#9A9A96",
                      opacity: on ? 1 : 0,
                      transition: "opacity 1s cubic-bezier(.16,1,.3,1)",
                    }}
                  >
                    {st[1]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Vertical Flow (Screen width < 1024px) */}
        <div
          className="action-track-vertical"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            margin: "clamp(36px, 5vh, 52px) auto 0",
            padding: "0 clamp(16px, 4vw, 28px)",
            boxSizing: "border-box",
          }}
        >
          {/* Vertical Base rail line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "clamp(22px, 4vw, 34px)",
              top: "12px",
              bottom: "28px",
              width: "1px",
              background: "#262626",
            }}
          />
          {/* Repeating vertical accent dashes */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "calc(clamp(22px, 4vw, 34px) + 6px)",
              top: "12px",
              bottom: "28px",
              width: "6px",
              background:
                "repeating-linear-gradient(180deg, rgba(247,247,245,.18) 0 1px, transparent 1px 36px)",
            }}
          />
          {/* Dynamic vertical filled rail */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "clamp(22px, 4vw, 34px)",
              top: "12px",
              width: "1px",
              background: "#F7F7F5",
              height: `${Math.min(100, Math.max(0, (activeStageMobile / 5) * 100))}%`,
              transition: "height 0.4s cubic-bezier(.16,1,.3,1)",
            }}
          />

          {/* 6 Vertical Steps */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(32px, 4.5vh, 44px)",
            }}
          >
            {stagesData.map((st, i) => {
              const on = i === activeStageMobile;
              const past = i < activeStageMobile;
              const dotBg = on || past ? "#F7F7F5" : "#0B0B0B";
              const dotBd = on || past ? "#F7F7F5" : "#5E5E5B";
              const textColor = on || past ? "#F7F7F5" : "#5E5E5B";

              return (
                <div
                  key={st[0]}
                  ref={(el) => {
                    mobileStepRefs.current[i] = el;
                  }}
                  className="action-stage-card action-stage-vertical"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Milestone Dot on vertical rail */}
                  <span
                    className="dot"
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "calc(clamp(22px, 4vw, 34px) - 5px)",
                      top: "6px",
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      boxSizing: "border-box",
                      background: dotBg,
                      border: `1px solid ${dotBd}`,
                      transform: `scale(${on ? 1.45 : 1})`,
                      transition: "transform 0.35s ease, background 0.35s ease, border 0.35s ease",
                      zIndex: 3,
                    }}
                  />

                  {/* Stage Text Content */}
                  <div style={{ paddingLeft: "clamp(44px, 7vw, 60px)", width: "100%" }}>
                    <span style={{ fontSize: "11px", color: "#6B6B6B" }}>0{i + 1}</span>
                    <div
                      className="serif stage-n action-stage-title"
                      style={{
                        marginTop: "4px",
                        fontSize: on ? "clamp(30px, 6.8vw, 46px)" : "clamp(22px, 5.2vw, 32px)",
                        lineHeight: 1.06,
                        color: textColor,
                        transition: "color 0.35s ease, font-size 0.35s ease",
                      }}
                    >
                      {st[0]}
                    </div>
                    <p
                      style={{
                        margin: "10px 0 0",
                        maxWidth: "380px",
                        fontSize: "13.5px",
                        lineHeight: 1.6,
                        color: on ? "#B5B5B1" : past ? "#9A9A96" : "#6B6B6B",
                        transition: "color 0.35s ease",
                      }}
                    >
                      {st[1]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ActionSection);
