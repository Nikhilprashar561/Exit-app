"use strict";
"use client";

import React, { useRef, useEffect } from "react";

interface ActionSectionProps {
  progress: number;
}

export default function ActionSection({ progress }: ActionSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const trackFillRef = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLDivElement>(null);

  // Active stage index (0 to 5)
  const activeStage = Math.min(5, Math.round(progress * 5));

  const stagesData = [
    ["Discover", "Find companies that match how you invest."],
    ["Connect", "Start a direct conversation with the founder."],
    ["Data room", "Access shared documents in one place."],
    ["Due diligence", "Review the numbers, the claims and the team."],
    ["Term sheet", "Agree the terms of the investment."],
    ["Deal", "Close, and begin the relationship."],
  ];

  useEffect(() => {
    if (!trackRef.current || !secRef.current) return;
    const fw = secRef.current.clientWidth || 1440;
    const isMob = fw < 768;
    const stepDist = isMob ? Math.min(270, fw * 0.75) : 520;
    const startX = isMob ? 24 : 160;
    const travel = isMob ? 5 * stepDist : (160 + 5 * 520 - fw * 0.42);

    trackRef.current.style.setProperty("--step-dist", `${stepDist}px`);
    trackRef.current.style.setProperty("--start-x", `${startX}px`);
    trackRef.current.style.transform = `translateX(${(-(travel * progress)).toFixed(1)}px)`;
    if (trackFillRef.current) {
      trackFillRef.current.style.width = `${startX + 5 * stepDist * progress}px`;
    }
  }, [progress]);

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
            top: "clamp(80px, 12vh, 120px)",
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

        {/* Counter (Right) */}
        <div
          className="action-counter"
          style={{
            position: "absolute",
            right: "clamp(20px, 4vw, 48px)",
            top: "clamp(80px, 12vh, 120px)",
            textAlign: "right",
            fontSize: "12px",
            color: "#9A9A96",
            zIndex: 10,
          }}
        >
          <span style={{ color: "#F7F7F5" }}>0{activeStage + 1}</span> / 06
        </div>

        {/* Horizontal Moving Track */}
        <div
          ref={trackRef}
          className="action-stick-track"
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
            ref={trackFillRef}
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
      </div>
    </section>
  );
}
