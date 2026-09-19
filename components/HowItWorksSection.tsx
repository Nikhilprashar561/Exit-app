"use strict";
"use client";

import React from "react";

interface HowItWorksProps {
  progress: number;
}

export default function HowItWorksSection({ progress }: HowItWorksProps) {
  // Active step calculated based on progress (0 to 3)
  const activeStep = Math.min(3, Math.floor(progress * 4.3));

  const stepsData = [
    {
      n: "01",
      t: "Set your criteria",
      d: "Share what you’re looking for.",
      icon: "M3 4 H13 M5 8 H11 M7 12 H9",
    },
    {
      n: "02",
      t: "Find relevant matches",
      d: "We surface the best fits for you.",
      icon: "M7 2.5 A4.5 4.5 0 1 0 7 11.5 A4.5 4.5 0 1 0 7 2.5 M10.5 10.5 L14 14",
    },
    {
      n: "03",
      t: "Review and connect",
      d: "Explore profiles and start real conversations.",
      icon: "M5 6 A2 2 0 1 0 5 2 A2 2 0 1 0 5 6 M11 6 A2 2 0 1 0 11 2 A2 2 0 1 0 11 6 M1.5 13.5 C2 10 8 10 8.5 13.5 M7.5 13.5 C8 10 14 10 14.5 13.5",
    },
    {
      n: "04",
      t: "Move forward",
      d: "Build relationships and move toward deals.",
      icon: "M3 13 L13 3 M6 3 H13 V10",
    },
  ];

  return (
    <section
      id="how"
      className="how-section"
      data-theme="light"
      aria-label="From search to the right fit"
      style={{
        position: "relative",
        height: "2000px",
        background: "#F7F7F5",
      }}
    >
      <div className="stick">
        <div className="grid" aria-hidden="true" style={{ position: "absolute", inset: 0 }} />

        {/* Section top connector line */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "1px",
            marginLeft: "-0.5px",
            height: `${Math.min(1, progress * 8) * 84}px`,
            background: "#0B0B0B",
          }}
        />

        {/* Headings */}
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
            padding: "0 20px",
          }}
        >
          <span className="lab" style={{ color: "#6B6B6B" }}>
            How EXIT works
          </span>
          <h2
            className="serif sec-heading-how"
            style={{
              margin: "16px 0 0",
              fontSize: "clamp(26px, 5.2vw, 78px)",
              lineHeight: 1.04,
              letterSpacing: "-.01em",
            }}
          >
            From search to the{" "}
            <span className="i">right fit.</span>
          </h2>
          <p className="sec-sub-text" style={{ margin: "12px 0 0", fontSize: "clamp(13px, 3.8vw, 15px)", color: "#6B6B6B", maxWidth: "480px" }}>
            A simpler way to find and connect with the right investors or companies.
          </p>
        </div>

        {/* Desktop Step Cards Grid (Screen width >= 861px) */}
        <div
          className="how-grid-container how-grid-desktop"
          style={{
            position: "absolute",
            left: "50%",
            top: "clamp(230px, 36vh, 480px)",
            width: "1080px",
            marginLeft: "-540px",
          }}
        >
          {/* Subtle horizontal connecting line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "50%",
              height: "1px",
              background: "rgba(11,11,11,.1)",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              height: "1px",
              background: "#0B0B0B",
              width: `${Math.min(1, progress * 1.15) * 100}%`,
              transition: "width 0.3s ease-out",
            }}
          />

          <div
            className="how-grid-cards"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "20px",
            }}
          >
            {stepsData.map((s, i) => {
              const on = i === activeStep;
              return (
                <div
                  key={s.n}
                  className="card"
                  style={{
                    position: "relative",
                    height: "232px",
                    boxSizing: "border-box",
                    padding: "22px",
                    borderRadius: "14px",
                    background: on ? "#0B0B0B" : "#FFFFFF",
                    color: on ? "#F7F7F5" : "#0B0B0B",
                    border: `1px solid ${on ? "#0B0B0B" : "rgba(11,11,11,.07)"}`,
                    boxShadow: on
                      ? "0 40px 70px -30px rgba(11,11,11,.55)"
                      : "0 10px 30px -20px rgba(11,11,11,.12)",
                    transform: on ? "translateY(-14px) scale(1.05)" : "scale(0.98)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
                    <span style={{ fontSize: "11px", opacity: 0.6 }}>{s.n}</span>
                    <span
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: on ? "#F7F7F5" : "#0B0B0B",
                        color: on ? "#0B0B0B" : "#F7F7F5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 1s, color 1s",
                      }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        aria-hidden="true"
                      >
                        <path d={s.icon} />
                      </svg>
                    </span>
                  </div>

                  <div style={{ marginTop: "auto", fontSize: "15px", fontWeight: 500 }}>{s.t}</div>
                  <div style={{ marginTop: "6px", fontSize: "12.5px", lineHeight: 1.5, opacity: 0.62 }}>
                    {s.d}
                  </div>

                  {/* Micro Indicators per step */}
                  <div
                    aria-hidden="true"
                    style={{
                      marginTop: "16px",
                      height: "22px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {i === 0 && (
                      <>
                        <span
                          className="chipx"
                          style={{
                            padding: "3px 8px",
                            borderRadius: "999px",
                            fontSize: "9.5px",
                            border: `1px solid ${on ? "rgba(247,247,245,.3)" : "rgba(11,11,11,.14)"}`,
                            background: on ? "#F7F7F5" : "transparent",
                            color: on ? "#0B0B0B" : "inherit",
                          }}
                        >
                          Seed
                        </span>
                        <span
                          className="chipx"
                          style={{
                            padding: "3px 8px",
                            borderRadius: "999px",
                            fontSize: "9.5px",
                            border: `1px solid ${on ? "rgba(247,247,245,.3)" : "rgba(11,11,11,.14)"}`,
                            background: on ? "#F7F7F5" : "transparent",
                            color: on ? "#0B0B0B" : "inherit",
                          }}
                        >
                          FinTech
                        </span>
                        <span
                          className="chipx"
                          style={{
                            padding: "3px 8px",
                            borderRadius: "999px",
                            fontSize: "9.5px",
                            border: `1px solid ${on ? "rgba(247,247,245,.3)" : "rgba(11,11,11,.14)"}`,
                            background: on ? "#F7F7F5" : "transparent",
                            color: on ? "#0B0B0B" : "inherit",
                          }}
                        >
                          ₹50L+
                        </span>
                      </>
                    )}

                    {i === 1 && (
                      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span
                          className="bar"
                          style={{
                            display: "block",
                            height: "3px",
                            borderRadius: "2px",
                            background: "currentColor",
                            width: on ? "100%" : "30%",
                          }}
                        />
                        <span
                          className="bar"
                          style={{
                            display: "block",
                            height: "3px",
                            borderRadius: "2px",
                            background: "currentColor",
                            opacity: 0.3,
                            width: on ? "70%" : "55%",
                          }}
                        />
                        <span
                          className="bar"
                          style={{
                            display: "block",
                            height: "3px",
                            borderRadius: "2px",
                            background: "currentColor",
                            opacity: 0.15,
                            width: on ? "40%" : "45%",
                          }}
                        />
                      </div>
                    )}

                    {i === 2 && (
                      <div style={{ position: "relative", flexGrow: 1, height: "10px" }}>
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 2,
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: "currentColor",
                          }}
                        />
                        <span
                          className="bar"
                          style={{
                            position: "absolute",
                            left: 8,
                            top: 5,
                            height: 1,
                            background: "currentColor",
                            width: on ? "100%" : "30%",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            right: 0,
                            top: 2,
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            border: "1px solid currentColor",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    )}

                    {i === 3 && (
                      <div style={{ position: "relative", flexGrow: 1, height: "10px" }}>
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 5,
                            height: 1,
                            background: "currentColor",
                            opacity: 0.25,
                          }}
                        />
                        <span
                          className="mv"
                          style={{
                            position: "absolute",
                            left: 0,
                            top: -2,
                            fontSize: "12px",
                            lineHeight: 1,
                            transform: on ? "translateX(150px)" : "translateX(0px)",
                          }}
                        >
                          →
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Dedicated Stepper (Screen width < 861px) */}
        <div
          className="how-grid-mobile"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "clamp(200px, 32vh, 260px)",
            width: "calc(100% - 32px)",
            maxWidth: "420px",
          }}
        >
          {/* Step Sequence Pills Tracker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
              padding: "0 6px",
            }}
          >
            {stepsData.map((s, idx) => {
              const isPast = idx < activeStep;
              const isCurrent = idx === activeStep;
              return (
                <React.Fragment key={s.n}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10.5px",
                        fontWeight: 500,
                        background: isCurrent ? "#0B0B0B" : isPast ? "#1A1A1A" : "#FFFFFF",
                        color: isCurrent ? "#F7F7F5" : isPast ? "#F7F7F5" : "#6B6B6B",
                        border: `1px solid ${isCurrent ? "#0B0B0B" : isPast ? "#1A1A1A" : "rgba(11,11,11,0.16)"}`,
                        boxShadow: isCurrent ? "0 4px 12px rgba(11,11,11,0.2)" : "none",
                        transition: "all 0.4s ease",
                      }}
                    >
                      {isPast ? "✓" : s.n}
                    </span>
                    {isCurrent && (
                      <span
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 500,
                          color: "#0B0B0B",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {s.t}
                      </span>
                    )}
                  </div>
                  {idx < 3 && (
                    <span
                      style={{
                        flexGrow: 1,
                        height: "1px",
                        margin: "0 6px",
                        background: idx < activeStep ? "#0B0B0B" : "rgba(11,11,11,0.12)",
                        transition: "background 0.4s ease",
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Active Step Card */}
          {(() => {
            const s = stepsData[activeStep];
            return (
              <div
                key={s.n}
                style={{
                  position: "relative",
                  boxSizing: "border-box",
                  padding: "24px 20px",
                  borderRadius: "16px",
                  background: "#0B0B0B",
                  color: "#F7F7F5",
                  border: "1px solid #0B0B0B",
                  boxShadow: "0 25px 50px -20px rgba(11,11,11,0.45)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "220px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", opacity: 0.6, letterSpacing: ".05em" }}>
                    STEP {s.n} OF 04
                  </span>
                  <span
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "#F7F7F5",
                      color: "#0B0B0B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      aria-hidden="true"
                    >
                      <path d={s.icon} />
                    </svg>
                  </span>
                </div>

                <div style={{ marginTop: "18px", fontSize: "18px", fontWeight: 500, letterSpacing: "-.01em" }}>
                  {s.t}
                </div>
                <div style={{ marginTop: "8px", fontSize: "13.5px", lineHeight: 1.55, opacity: 0.72 }}>
                  {s.d}
                </div>

                {/* Micro Indicators for Current Step on Mobile */}
                <div
                  aria-hidden="true"
                  style={{
                    marginTop: "20px",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(247,247,245,0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {activeStep === 0 && (
                    <>
                      <span
                        className="chipx"
                        style={{
                          padding: "4px 10px",
                          borderRadius: "999px",
                          fontSize: "11px",
                          border: "1px solid rgba(247,247,245,0.25)",
                          background: "#F7F7F5",
                          color: "#0B0B0B",
                          fontWeight: 500,
                        }}
                      >
                        Seed
                      </span>
                      <span
                        className="chipx"
                        style={{
                          padding: "4px 10px",
                          borderRadius: "999px",
                          fontSize: "11px",
                          border: "1px solid rgba(247,247,245,0.25)",
                          background: "#F7F7F5",
                          color: "#0B0B0B",
                          fontWeight: 500,
                        }}
                      >
                        FinTech
                      </span>
                      <span
                        className="chipx"
                        style={{
                          padding: "4px 10px",
                          borderRadius: "999px",
                          fontSize: "11px",
                          border: "1px solid rgba(247,247,245,0.25)",
                          background: "#F7F7F5",
                          color: "#0B0B0B",
                          fontWeight: 500,
                        }}
                      >
                        ₹50L+
                      </span>
                    </>
                  )}

                  {activeStep === 1 && (
                    <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
                      <span
                        className="bar"
                        style={{
                          display: "block",
                          height: "4px",
                          borderRadius: "2px",
                          background: "#F7F7F5",
                          width: "100%",
                        }}
                      />
                      <span
                        className="bar"
                        style={{
                          display: "block",
                          height: "4px",
                          borderRadius: "2px",
                          background: "#F7F7F5",
                          opacity: 0.45,
                          width: "70%",
                        }}
                      />
                      <span
                        className="bar"
                        style={{
                          display: "block",
                          height: "4px",
                          borderRadius: "2px",
                          background: "#F7F7F5",
                          opacity: 0.25,
                          width: "40%",
                        }}
                      />
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div style={{ position: "relative", flexGrow: 1, height: "14px", display: "flex", alignItems: "center" }}>
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "#F7F7F5",
                        }}
                      />
                      <span
                        style={{
                          flexGrow: 1,
                          height: 2,
                          background: "#F7F7F5",
                          margin: "0 6px",
                        }}
                      />
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          border: "2px solid #F7F7F5",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div style={{ position: "relative", flexGrow: 1, height: "14px", display: "flex", alignItems: "center" }}>
                      <span
                        style={{
                          flexGrow: 1,
                          height: 2,
                          background: "rgba(247,247,245,0.3)",
                        }}
                      />
                      <span
                        style={{
                          marginLeft: "8px",
                          fontSize: "14px",
                          color: "#F7F7F5",
                        }}
                      >
                        → Connected
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Micro Scroll Hint */}
          <div
            style={{
              marginTop: "12px",
              textAlign: "center",
              fontSize: "11px",
              color: "#9A9A96",
              letterSpacing: ".02em",
            }}
          >
            {activeStep < 3 ? `Scroll to reveal step 0${activeStep + 2} ↓` : "All steps completed ✓"}
          </div>
        </div>
      </div>
    </section>
  );
}
