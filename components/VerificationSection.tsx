"use strict";
"use client";

import React from "react";

interface VerificationProps {
  progress: number;
}

export default function VerificationSection({ progress }: VerificationProps) {
  // Verification step `vs` from 0 to 5 based on progress
  const vs = Math.min(5, Math.floor(progress * 6.4));

  const items = [
    ["Founder identity", "Identity confirmed for every founder."],
    ["Company details", "Registration and company information."],
    ["Claims & traction", "Metrics backed by evidence."],
    ["Documents", "Deck, financials and legal documents."],
  ];

  const statusFor = (i: number) => {
    if (i === 0) return vs >= 1 ? "Verified" : "Pending";
    if (i === 1) return vs >= 2 ? "Verified" : "Pending";
    if (i === 2) return vs >= 3 ? "Evidence provided" : "Pending";
    return vs >= 5 ? "Verified" : vs >= 4 ? "Under review" : "Pending";
  };

  const rows = items.map((v, i) => {
    const done = (i < 3 && vs >= i + 1) || (i === 3 && vs >= 5);
    const act = (i < 3 && vs === i + 1) || (i === 3 && (vs === 4 || vs === 5));
    const reached = (i < 3 && vs >= i + 1) || (i === 3 && vs >= 4);

    return {
      t: v[0],
      d: v[1],
      status: statusFor(i),
      bg: reached ? "#151515" : "#0F0F0F",
      bd: act ? "rgba(247,247,245,.28)" : "#1F1F1F",
      tf: act ? "translateX(8px)" : "translateX(0px)",
      op: reached ? 1 : 0.45,
      ringFill: done ? "#F7F7F5" : "transparent",
      ringStroke: done ? "#F7F7F5" : reached ? "#9A9A96" : "#3A3A3A",
      ckCls: done ? "ck on" : "ck",
      sc: done ? "#F7F7F5" : reached ? "#C9C9C5" : "#6B6B6B",
    };
  });

  const nDone = [vs >= 1, vs >= 2, vs >= 3, vs >= 5].filter(Boolean).length;
  const railHeight = `${Math.min(100, (Math.min(vs, 4) / 4) * 100)}%`;

  return (
    <section
      id="verify"
      data-theme="dark"
      aria-label="Trust with clarity"
      style={{
        position: "relative",
        height: "2000px",
        background: "#0B0B0B",
        color: "#F7F7F5",
      }}
    >
      <div className="stick">
        {/* Section Header */}
        <div
          className="sec-header-wrap"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "clamp(80px, 12vh, 100px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <span className="lab" style={{ color: "#9A9A96" }}>
            Verification
          </span>
          <h2
            className="serif sec-heading-verify"
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(28px, 5.4vw, 80px)",
              lineHeight: 1.02,
              letterSpacing: "-.01em",
            }}
          >
            Trust with <span className="i">clarity.</span>
          </h2>
          <p
            className="sec-sub-text"
            style={{
              margin: "10px 0 0",
              fontSize: "clamp(13px, 3.8vw, 15px)",
              lineHeight: 1.65,
              color: "#B5B5B1",
              maxWidth: "460px",
            }}
          >
            We verify what matters, so you can focus on what’s next.
          </p>
        </div>

        {/* Verification Checklist Container */}
        <div
          className="ui verification-box"
          style={{
            position: "absolute",
            left: "50%",
            top: "42%",
            width: "620px",
            marginLeft: "-310px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              padding: "0 4px 16px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#9A9A96" }}>
              Verification · <span style={{ color: "#F7F7F5" }}>NovaNest</span>
            </span>
            <span style={{ fontSize: "12px", color: "#9A9A96" }}>
              {nDone} of 4 complete
            </span>
          </div>

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Background Rail */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "35px",
                top: "30px",
                bottom: "30px",
                width: "1px",
                background: "#262626",
              }}
            />
            {/* Active Progress Rail */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "35px",
                top: "30px",
                width: "1px",
                background: "#F7F7F5",
                height: railHeight,
                transition: "height 1.3s cubic-bezier(.16,1,.3,1)",
              }}
            />

            {rows.map((v, idx) => (
              <div
                key={idx}
                className="layer"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  height: "72px",
                  padding: "0 20px",
                  boxSizing: "border-box",
                  borderRadius: "14px",
                  background: v.bg,
                  border: `1px solid ${v.bd}`,
                  transform: v.tf,
                  opacity: v.op,
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                >
                  <circle
                    className="ring"
                    cx="16"
                    cy="16"
                    r="14.5"
                    fill={v.ringFill}
                    stroke={v.ringStroke}
                    strokeWidth="1"
                  />
                  <path
                    className={v.ckCls}
                    d="M10 16.5 L14.2 20.5 L22 12"
                    fill="none"
                    stroke="#0B0B0B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: "14px", fontWeight: 500 }}>{v.t}</div>
                  <div style={{ marginTop: "3px", fontSize: "11.5px", color: "#8A8A86" }}>
                    {v.d}
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".04em",
                    color: v.sc,
                    transition: "color 1s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {v.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
