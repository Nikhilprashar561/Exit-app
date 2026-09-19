"use strict";
"use client";

import React from "react";

interface InvestorsSectionProps {
  progress: number;
}

function InvestorsSection({ progress }: InvestorsSectionProps) {
  // Investor filter step `is` from 0 to 5 based on progress
  const is = Math.min(5, Math.floor(progress * 6.6));

  const filterData = [
    ["Stage", "Seed"],
    ["Industry", "FinTech"],
    ["Investment Range", "₹50L – ₹1Cr"],
    ["Location", "Bengaluru"],
  ];

  const filters = filterData.map((f, i) => {
    const on = is > i;
    return {
      label: on ? f[1] : f[0],
      sym: on ? "×" : "⌄",
      bg: on ? "#F7F7F5" : "transparent",
      fg: on ? "#0B0B0B" : "#A8A8A4",
      bd: on ? "#F7F7F5" : "#2E2E2E",
    };
  });

  const skel = [0, 1, 2, 3, 4].map((i) => {
    const gone = is > 0 && i >= 5 - Math.min(5, Math.ceil(is * 1.25));
    return {
      mh: gone ? "0px" : "68px",
      op: gone ? 0 : 0.55 - i * 0.08,
      mt: gone ? "0px" : "8px",
      pd: gone ? "0px 14px" : "14px",
      w1: `${46 + ((i * 13) % 30)}%`,
      w2: `${28 + ((i * 17) % 24)}%`,
    };
  });

  const phaseIdx = is === 0 ? 0 : is <= 4 ? (is <= 2 ? 1 : 2) : 3;
  const phases = ["Broad search", "Filter", "Relevance", "Match"];
  const phaseWidth = `${(phaseIdx / 3) * 100}%`;

  const hlBd = is >= 5 ? "rgba(247,247,245,.55)" : "#262626";
  const hlSh = is >= 5 ? "0 0 0 4px rgba(247,247,245,.06)" : "none";
  const hlTf = is >= 5 ? "scale(1.02)" : "scale(1)";
  const matchOp = is >= 5 ? 1 : 0;
  const countText =
    is >= 4 ? "4 of 4 filters" : is > 0 ? `${is} of 4 filters` : "All companies";

  const n1 = is >= 1 ? 1 : 0.35;
  const n2 = is >= 3 ? 1 : 0.35;
  const n3 = is >= 4 ? 1 : 0.35;
  const n4 = is >= 5 ? 1 : 0.35;

  const cl = (v: number) => Math.max(0, Math.min(1, v));

  return (
    <section
      id="investors"
      className="investors-section"
      data-theme="light"
      aria-label="For investors"
      style={{
        position: "relative",
        height: "2600px",
        background: "#F7F7F5",
      }}
    >
      <div className="stick">
        <div className="grid" aria-hidden="true" style={{ position: "absolute", inset: 0 }} />

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
          <span className="lab" style={{ color: "#6B6B6B" }}>
            For investors
          </span>
          <h2
            className="serif sec-heading-investors"
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(28px, 5.4vw, 80px)",
              lineHeight: 1.02,
              letterSpacing: "-.01em",
            }}
          >
            Look <span className="i">closer.</span>
          </h2>
          <p className="sec-sub-text" style={{ margin: "10px 0 0", fontSize: "clamp(13px, 3.8vw, 15px)", lineHeight: 1.6, color: "#6B6B6B" }}>
            Discover companies that match the way you invest.
          </p>
        </div>

        {/* Side numbered feature notes - Left */}
        <div
          className="investor-side-notes-left"
          style={{
            position: "absolute",
            left: "calc(50% - 620px)",
            top: "50%",
            width: "190px",
            display: "flex",
            flexDirection: "column",
            gap: "46px",
          }}
        >
          <div style={{ opacity: n1, transition: "opacity 1s" }}>
            <span style={{ fontSize: "10px", color: "#9A9A96" }}>01</span>
            <div className="serif" style={{ marginTop: "10px", fontSize: "17px" }}>
              Curated matches
            </div>
            <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: 1.55, color: "#6B6B6B" }}>
              Opportunities that fit your stage, sector and ticket.
            </div>
          </div>
          <div style={{ opacity: n2, transition: "opacity 1s" }}>
            <span style={{ fontSize: "10px", color: "#9A9A96" }}>02</span>
            <div className="serif" style={{ marginTop: "10px", fontSize: "17px" }}>
              Relevant details
            </div>
            <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: 1.55, color: "#6B6B6B" }}>
              The round, the team and the traction, in one view.
            </div>
          </div>
        </div>

        {/* Side numbered feature notes - Right */}
        <div
          className="investor-side-notes-right"
          style={{
            position: "absolute",
            right: "calc(50% - 620px)",
            top: "50%",
            width: "190px",
            display: "flex",
            flexDirection: "column",
            gap: "46px",
          }}
        >
          <div style={{ opacity: n3, transition: "opacity 1s" }}>
            <span style={{ fontSize: "10px", color: "#9A9A96" }}>03</span>
            <div className="serif" style={{ marginTop: "10px", fontSize: "17px" }}>
              Verified founders
            </div>
            <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: 1.55, color: "#6B6B6B" }}>
              Identity and company details checked before you meet.
            </div>
          </div>
          <div style={{ opacity: n4, transition: "opacity 1s" }}>
            <span style={{ fontSize: "10px", color: "#9A9A96" }}>04</span>
            <div className="serif" style={{ marginTop: "10px", fontSize: "17px" }}>
              Move with confidence
            </div>
            <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: 1.55, color: "#6B6B6B" }}>
              From first look to next step, without the noise.
            </div>
          </div>
        </div>

        {/* Central Search & Match UI Shell */}
        <div
          className="ui investor-ui-box"
          style={{
            position: "absolute",
            left: "50%",
            top: "38%",
            width: "560px",
            marginLeft: "-280px",
            transform: `scale(${0.86 + cl(progress * 2.5) * 0.14})`,
            transformOrigin: "50% 0",
          }}
        >
          <div
            style={{
              borderRadius: "18px",
              background: "#0E0E0E",
              border: "1px solid #1F1F1F",
              boxShadow: "0 50px 100px -40px rgba(11,11,11,.55)",
              padding: "16px",
              color: "#F7F7F5",
            }}
          >
            {/* Search Input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                height: "38px",
                padding: "0 12px",
                borderRadius: "10px",
                background: "#161616",
                border: "1px solid #262626",
                fontSize: "11.5px",
                color: "#8A8A86",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="7" cy="7" r="5" />
                <path d="M11 11 L15 15" />
              </svg>
              Search by company, founder, industry
              <span style={{ marginLeft: "auto", fontSize: "10px" }}>{countText}</span>
            </div>

            {/* Filter Chips */}
            <div style={{ marginTop: "10px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {filters.map((f, i) => (
                <span
                  key={i}
                  className="chip"
                  style={{
                    fontSize: "10.5px",
                    padding: "6px 11px",
                    background: f.bg,
                    color: f.fg,
                    borderColor: f.bd,
                  }}
                >
                  {f.label} <span style={{ opacity: 0.7 }}>{f.sym}</span>
                </span>
              ))}
            </div>

            {/* List & Matched Card */}
            <div style={{ marginTop: "12px", display: "flex", flexDirection: "column" }}>
              {/* NovaNest Match Card */}
              <div
                className="hl"
                style={{
                  padding: "14px",
                  borderRadius: "12px",
                  background: "#141414",
                  border: `1px solid ${hlBd}`,
                  boxShadow: hlSh,
                  transform: hlTf,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    className="serif"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 9,
                      background: "#F7F7F5",
                      color: "#0B0B0B",
                      fontSize: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    N
                  </span>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 500 }}>
                      NovaNest <span style={{ fontSize: "11px", color: "#C9C9C5" }}>✓</span>
                    </div>
                    <div style={{ marginTop: "2px", fontSize: "11px", color: "#9A9A96" }}>
                      FinTech · Bengaluru, India
                    </div>
                  </div>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "9.5px",
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      padding: "5px 9px",
                      borderRadius: "999px",
                      border: "1px solid rgba(247,247,245,.4)",
                      opacity: matchOp,
                      transition: "opacity 1s",
                    }}
                  >
                    Match
                  </span>
                </div>

                <div
                  style={{
                    marginTop: "14px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    rowGap: "3px",
                    fontSize: "10px",
                    color: "#8A8A86",
                  }}
                >
                  <span>Raising</span>
                  <span>Stage</span>
                  <span>Timeline</span>
                  <span style={{ fontSize: "15px", color: "#F7F7F5" }}>₹75L</span>
                  <span style={{ fontSize: "15px", color: "#F7F7F5" }}>Seed</span>
                  <span style={{ fontSize: "15px", color: "#F7F7F5" }}>1–3 Months</span>
                </div>

                <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="chip" style={{ fontSize: "9.5px" }}>
                    FinTech
                  </span>
                  <span className="chip" style={{ fontSize: "9.5px" }}>
                    Seed
                  </span>
                  <span className="chip" style={{ fontSize: "9.5px" }}>
                    Bengaluru
                  </span>
                  <span style={{ marginLeft: "auto", fontSize: "11px" }}>View Profile →</span>
                </div>
              </div>

              {/* Dynamic Collapsing Skeletons */}
              {skel.map((k, idx) => (
                <div
                  key={idx}
                  className="skel"
                  style={{
                    maxHeight: k.mh,
                    opacity: k.op,
                    marginTop: k.mt,
                    borderRadius: "12px",
                    background: "#121212",
                    border: "1px solid #1E1E1E",
                    boxSizing: "border-box",
                    padding: k.pd,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: 38, height: 38, borderRadius: 9, background: "#222" }} />
                    <div style={{ flexGrow: 1 }}>
                      <div
                        style={{
                          height: 8,
                          borderRadius: 4,
                          background: "#262626",
                          width: k.w1,
                        }}
                      />
                      <div
                        style={{
                          height: 6,
                          marginTop: 7,
                          borderRadius: 4,
                          background: "#1F1F1F",
                          width: k.w2,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phase Indicator Progress Bar */}
        <div
          className="investor-phase-bar"
          style={{
            position: "absolute",
            left: "50%",
            bottom: "5%",
            width: "560px",
            marginLeft: "-280px",
          }}
        >
          <div style={{ position: "relative", height: "1px", background: "rgba(11,11,11,.12)" }}>
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "1px",
                background: "#0B0B0B",
                width: phaseWidth,
                transition: "width 1.2s cubic-bezier(.16,1,.3,1)",
              }}
            />
          </div>
          <div
            style={{
              marginTop: "12px",
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            }}
          >
            {phases.map((ph, idx) => (
              <span
                key={ph}
                className="lab"
                style={{
                  fontSize: "9px",
                  letterSpacing: ".22em",
                  color: idx <= phaseIdx ? "#0B0B0B" : "#9A9A96",
                  textAlign: idx === 0 ? "left" : idx === 3 ? "right" : "center",
                  transition: "color 1s",
                }}
              >
                {ph}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(InvestorsSection);
