"use strict";
"use client";

import React from "react";

interface FoundersSectionProps {
  progress: number;
}

function FoundersSection({ progress }: FoundersSectionProps) {
  // Step indicator fs from 0 to 5 based on progress
  const fs = Math.min(5, Math.floor(progress * 7));

  // Dynamic typing of amount
  const amounts = ["", "₹ 7", "₹ 75,0", "₹ 75,00,000", "₹ 75,00,000", "₹ 75,00,000"];
  const amount = amounts[Math.min(5, fs)];
  const caret = fs < 3 ? 1 : 0;
  const amtBd = fs >= 1 && fs < 4 ? "#6B6B6B" : "#262626";
  const seedBg = fs >= 4 ? "#F7F7F5" : "transparent";
  const seedFg = fs >= 4 ? "#0B0B0B" : "#A8A8A4";
  const seedBd = fs >= 4 ? "#F7F7F5" : "#2E2E2E";
  const boxBg = fs >= 5 ? "#F7F7F5" : "transparent";
  const tick = fs >= 5 ? "✓" : "";
  const btnOp = fs >= 5 ? 1 : 0.35;

  const cl = (v: number) => Math.max(0, Math.min(1, v));

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMob = () => setIsMobile(window.innerWidth < 860);
    checkMob();
    window.addEventListener("resize", checkMob);
    return () => window.removeEventListener("resize", checkMob);
  }, []);

  const phone1Op = isMobile
    ? (progress > 0.50 ? cl(1 - (progress - 0.50) * 14) : cl(progress * 5))
    : cl(progress * 4);

  const phone2Op = isMobile
    ? cl((progress - 0.48) * 14)
    : cl((progress - 0.1) * 4);

  return (
    <section
      id="founders"
      className="founders-section"
      data-theme="dark"
      aria-label="For founders"
      style={{
        position: "relative",
        height: "2400px",
        background: "#090909",
        color: "#F7F7F5",
      }}
    >
      <div className="stick">
        {/* Ambient radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(38% 46% at 50% 68%, rgba(247,247,245,.075) 0%, rgba(247,247,245,.025) 45%, rgba(247,247,245,0) 75%)",
            opacity: 0.4 + progress * 0.6,
          }}
        />

        {/* Ambient background watermark logo */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "45%",
            width: "520px",
            height: "325px",
            marginLeft: "-260px",
            color: "#F7F7F5",
            opacity: 0.035,
            transform: `translateY(${progress * -30}px)`,
          }}
        >
          <img
            src="/exit.svg"
            alt=""
            style={{ display: "block", width: "100%", height: "auto", filter: "invert(1)" }}
          />
        </div>

        {/* Horizon separator line */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "8%",
            right: "8%",
            bottom: "13%",
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(247,247,245,0), rgba(247,247,245,.16) 50%, rgba(247,247,245,0))",
          }}
        />

        {/* Top connector line */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "1px",
            marginLeft: "-0.5px",
            height: `${Math.min(1, progress * 8) * 70}px`,
            background: "#F7F7F5",
            opacity: 0.6,
          }}
        />

        {/* Section Header */}
        <div
          className="sec-header-wrap"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "clamp(80px, 12vh, 110px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 2,
            padding: "0 20px",
          }}
        >
          <span className="lab" style={{ color: "#9A9A96" }}>
            For founders
          </span>
          <h2
            className="serif sec-heading-founders"
            style={{
              margin: "16px 0 0",
              fontSize: "clamp(26px, 4.8vw, 72px)",
              lineHeight: 1.06,
              letterSpacing: "-.01em",
            }}
          >
            Put your company
            <br />
            in front of the <span className="i">right investors.</span>
          </h2>
          <p
            className="sec-sub-text"
            style={{
              margin: "12px 0 0",
              fontSize: "clamp(13px, 3.8vw, 15px)",
              lineHeight: 1.65,
              color: "#B5B5B1",
              maxWidth: "520px",
            }}
          >
            Share what you are building. EXIT helps you reach
            <br />
            investors who fit your stage, industry and goals.
          </p>
        </div>

        {/* 3D Perspective Phones Centerpiece */}
        <div
          className="founder-phone-wrap"
          style={{
            position: "absolute",
            left: "50%",
            top: "44%",
            width: 0,
            height: 0,
            perspective: "1400px",
          }}
        >
          {/* Phone 1: Create Funding Request */}
          <div
            className="phone founder-phone-1"
            style={{
              left: "-300px",
              top: 0,
              transform: `translateY(${(1 - cl(progress * 1.7)) * 380}px) rotateX(${(1 - cl(progress * 1.7)) * 16}deg) rotateZ(-4deg) translate(calc(var(--mx, 0) * -6px), calc(var(--my, 0) * -4px))`,
              opacity: phone1Op,
              pointerEvents: phone1Op < 0.05 ? "none" : "auto",
            }}
          >
            <div className="screen ui">
              {/* Dynamic Island */}
              <div
                aria-hidden="true"
                style={{
                  width: 84,
                  height: 24,
                  borderRadius: 14,
                  background: "#000",
                  margin: "10px auto 0",
                }}
              />

              <div style={{ padding: "18px 18px 0" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#F7F7F5",
                  }}
                >
                  <span style={{ color: "#9A9A96" }}>‹</span>Create Funding Request
                </div>

                {/* Steps tracker */}
                <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#F7F7F5",
                      color: "#0B0B0B",
                      fontSize: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    1
                  </span>
                  <span style={{ flexGrow: 1, height: 1, background: "#2E2E2E" }} />
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      border: "1px solid #2E2E2E",
                      color: "#6B6B6B",
                      fontSize: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    2
                  </span>
                  <span style={{ flexGrow: 1, height: 1, background: "#2E2E2E" }} />
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      border: "1px solid #2E2E2E",
                      color: "#6B6B6B",
                      fontSize: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    3
                  </span>
                  <span style={{ flexGrow: 1, height: 1, background: "#2E2E2E" }} />
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      border: "1px solid #2E2E2E",
                      color: "#6B6B6B",
                      fontSize: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    4
                  </span>
                </div>

                <div style={{ marginTop: "6px", fontSize: "9.5px", color: "#9A9A96" }}>Round basics</div>

                {/* Amount field with dynamic typing */}
                <div style={{ marginTop: "20px", fontSize: "12px", color: "#F7F7F5" }}>
                  How much are you looking to raise?
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "#161616",
                    border: `1px solid ${amtBd}`,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    fontSize: "14px",
                    color: "#F7F7F5",
                    transition: "border-color .8s",
                  }}
                >
                  {amount}
                  <span
                    style={{
                      display: "inline-block",
                      width: "1px",
                      height: "16px",
                      marginLeft: "2px",
                      background: "#F7F7F5",
                      opacity: caret,
                    }}
                  />
                  <span style={{ marginLeft: "auto", fontSize: "9.5px", color: "#6B6B6B" }}>INR</span>
                </div>

                {/* Stage chips */}
                <div style={{ marginTop: "18px", fontSize: "12px", color: "#F7F7F5" }}>
                  What stage is your company at?
                </div>
                <div style={{ marginTop: "8px", display: "flex", gap: "6px" }}>
                  <span className="chip">Pre-seed</span>
                  <span
                    className="chip"
                    style={{ background: seedBg, color: seedFg, borderColor: seedBd }}
                  >
                    Seed
                  </span>
                  <span className="chip">Series A</span>
                </div>

                {/* Use of funds */}
                <div style={{ marginTop: "18px", fontSize: "12px", color: "#F7F7F5" }}>
                  What will the funds be used for?
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "9px",
                    fontSize: "11px",
                    color: "#C9C9C5",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: 4,
                        border: "1px solid #3A3A3A",
                        background: boxBg,
                        color: "#0B0B0B",
                        fontSize: 9,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background .8s",
                      }}
                    >
                      {tick}
                    </span>
                    Product development
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                    <span style={{ width: 14, height: 14, borderRadius: 4, border: "1px solid #3A3A3A" }} />
                    Hiring
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                    <span style={{ width: 14, height: 14, borderRadius: 4, border: "1px solid #3A3A3A" }} />
                    Go-to-market
                  </span>
                </div>

                {/* Continue button */}
                <div
                  style={{
                    marginTop: "24px",
                    height: "42px",
                    borderRadius: "999px",
                    background: "#F7F7F5",
                    color: "#0B0B0B",
                    fontSize: "12px",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: btnOp,
                    transition: "opacity 1s",
                  }}
                >
                  Continue
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2: Discover Founders */}
          <div
            className="phone founder-phone-2"
            style={{
              left: "32px",
              top: "40px",
              background: "#141414",
              transform: `translateY(${(1 - cl((progress - 0.12) * 1.7)) * 460}px) rotateX(${(1 - cl((progress - 0.12) * 1.7)) * 18}deg) rotateZ(4deg) translate(calc(var(--mx, 0) * 8px), calc(var(--my, 0) * 5px))`,
              opacity: phone2Op,
              pointerEvents: phone2Op < 0.05 ? "none" : "auto",
            }}
          >
            <div className="screen ui">
              <div
                aria-hidden="true"
                style={{
                  width: 84,
                  height: 24,
                  borderRadius: 14,
                  background: "#000",
                  margin: "10px auto 0",
                }}
              />

              <div style={{ padding: "18px 16px 0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#F7F7F5",
                  }}
                >
                  Discover Founders
                  <span style={{ fontSize: "12px", color: "#9A9A96" }}>≡</span>
                </div>

                <div
                  style={{
                    marginTop: "14px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "#161616",
                    border: "1px solid #262626",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "0 10px",
                    fontSize: "10px",
                    color: "#6B6B6B",
                  }}
                >
                  <svg
                    width="11"
                    height="11"
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
                </div>

                <div style={{ marginTop: "10px", display: "flex", gap: "5px", flexWrap: "nowrap", overflow: "hidden" }}>
                  <span className="chip" style={{ fontSize: "9px", padding: "4px 8px" }}>
                    Stage ⌄
                  </span>
                  <span className="chip" style={{ fontSize: "9px", padding: "4px 8px" }}>
                    Industry ⌄
                  </span>
                  <span className="chip" style={{ fontSize: "9px", padding: "4px 8px" }}>
                    Range ⌄
                  </span>
                </div>

                <div style={{ marginTop: "14px", fontSize: "9.5px", color: "#9A9A96" }}>
                  Recommended for you
                </div>

                {/* NovaNest Card */}
                <div
                  style={{
                    marginTop: "8px",
                    padding: "12px",
                    borderRadius: "12px",
                    background: "#151515",
                    border: "1px solid #2A2A2A",
                  }}
                >
                  <div style={{ display: "flex", gap: "9px", alignItems: "center" }}>
                    <span
                      className="serif"
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 7,
                        background: "#F7F7F5",
                        color: "#0B0B0B",
                        fontSize: 15,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      N
                    </span>
                    <div>
                      <div style={{ fontSize: "11.5px", fontWeight: 500, color: "#F7F7F5" }}>
                        NovaNest <span style={{ fontSize: "9px", color: "#C9C9C5" }}>✓</span>
                      </div>
                      <div style={{ fontSize: "9px", color: "#9A9A96" }}>FinTech · Bengaluru, India</div>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: "4px",
                      fontSize: "8.5px",
                      color: "#6B6B6B",
                    }}
                  >
                    <span>Raising</span>
                    <span>Stage</span>
                    <span>Timeline</span>
                    <span style={{ fontSize: "11px", color: "#F7F7F5" }}>₹75L</span>
                    <span style={{ fontSize: "11px", color: "#F7F7F5" }}>Seed</span>
                    <span style={{ fontSize: "11px", color: "#F7F7F5" }}>1–3 Months</span>
                  </div>
                </div>

                {/* Skeletons */}
                <div
                  style={{
                    marginTop: "8px",
                    padding: "12px",
                    borderRadius: "12px",
                    background: "#121212",
                    border: "1px solid #222",
                    opacity: 0.6,
                  }}
                >
                  <div style={{ display: "flex", gap: "9px", alignItems: "center" }}>
                    <span style={{ width: 28, height: 28, borderRadius: 7, background: "#262626" }} />
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ width: "60%", height: 7, borderRadius: 4, background: "#2A2A2A" }} />
                      <div style={{ width: "40%", height: 6, marginTop: 6, borderRadius: 4, background: "#222" }} />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    padding: "12px",
                    borderRadius: "12px",
                    background: "#111",
                    border: "1px solid #1E1E1E",
                    opacity: 0.35,
                  }}
                >
                  <div style={{ display: "flex", gap: "9px", alignItems: "center" }}>
                    <span style={{ width: 28, height: 28, borderRadius: 7, background: "#222" }} />
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ width: "50%", height: 7, borderRadius: 4, background: "#262626" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Side Feature Annotations */}
        <div
          className="founder-anno-1"
          style={{
            position: "absolute",
            left: "calc(50% - 560px)",
            top: "56%",
            width: "210px",
            opacity: cl((progress - 0.38) * 6),
            transform: `translateY(${(1 - cl((progress - 0.38) * 6)) * 14}px)`,
          }}
        >
          <div style={{ height: "1px", background: "rgba(247,247,245,.25)", marginBottom: "14px" }} />
          <div style={{ fontSize: "13px", fontWeight: 500 }}>Get discovered</div>
          <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: 1.55, color: "#9A9A96" }}>
            Your company in front of investors who fit your stage and sector.
          </div>
        </div>

        <div
          className="founder-anno-2"
          style={{
            position: "absolute",
            left: "calc(50% + 360px)",
            top: "50%",
            width: "210px",
            opacity: cl((progress - 0.52) * 6),
            transform: `translateY(${(1 - cl((progress - 0.52) * 6)) * 14}px)`,
          }}
        >
          <div style={{ height: "1px", background: "rgba(247,247,245,.25)", marginBottom: "14px" }} />
          <div style={{ fontSize: "13px", fontWeight: 500 }}>Share your vision</div>
          <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: 1.55, color: "#9A9A96" }}>
            Your round, your traction and the story behind them.
          </div>
        </div>

        <div
          className="founder-anno-3"
          style={{
            position: "absolute",
            left: "calc(50% + 380px)",
            top: "74%",
            width: "210px",
            opacity: cl((progress - 0.66) * 6),
            transform: `translateY(${(1 - cl((progress - 0.66) * 6)) * 14}px)`,
          }}
        >
          <div style={{ height: "1px", background: "rgba(247,247,245,.25)", marginBottom: "14px" }} />
          <div style={{ fontSize: "13px", fontWeight: 500 }}>Build real relationships</div>
          <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: 1.55, color: "#9A9A96" }}>
            Direct conversations, not cold outreach.
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(FoundersSection);
