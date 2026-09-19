"use strict";
"use client";

import React from "react";

interface HowItWorksProps {
  progress: number;
}

function HowItWorksSection({ progress }: HowItWorksProps) {
  // Active step calculated based on progress (0 to 3)
  const cl = (v: number) => Math.max(0, Math.min(1, v));
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
            top: "clamp(110px, 14vh, 145px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 25,
            padding: "0 20px",
          }}
        >
          <span className="lab" style={{ color: "#6B6B6B" }}>
            How EXIT works
          </span>
          <h2
            className="serif sec-heading-how"
            style={{
              margin: "12px 0 0",
              fontSize: "clamp(26px, 5.2vw, 78px)",
              lineHeight: 1.04,
              letterSpacing: "-.01em",
            }}
          >
            From search to the{" "}
            <span className="i">right fit.</span>
          </h2>
          <p className="sec-sub-text" style={{ margin: "10px 0 0", fontSize: "clamp(13px, 3.8vw, 15px)", lineHeight: 1.5, color: "#6B6B6B", maxWidth: "380px" }}>
            A simpler way to find and connect with the right investors or companies.
          </p>
        </div>

        {/* Desktop Step Cards Grid (Screen width >= 861px) */}
        <div
          className="how-grid-container how-grid-desktop"
          style={{
            position: "absolute",
            left: "50%",
            top: "clamp(340px, 42vh, 400px)",
            width: "1080px",
            marginLeft: "-540px",
          }}
        >
          {/* Subtle horizontal connecting line */}
          <div
            className="how-line-desktop"
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
            className="how-line-fill-desktop"
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

        {/* Mobile Dedicated Vertical Stack (Screen width < 681px) */}
        {(() => {
          // Reveal calculations: each card appears one below another as user scrolls down
          // Once revealed, a card NEVER disappears (rev stays at 1.0)
          const rev0 = 1.0;
          const rev1 = cl((progress - 0.08) / 0.14);
          const rev2 = cl((progress - 0.26) / 0.14);
          const rev3 = cl((progress - 0.44) / 0.14);

          const revs = [rev0, rev1, rev2, rev3];

          // Upward shift begins only after Card 02 is revealed and user proceeds toward Card 03 & 04
          // During Step 01 & 02, scrollShift is 0 so Card 01 never shifts upward into the header
          const scrollShift = cl((progress - 0.28) / 0.44) * 285;

          return (
            <div
              className="how-grid-mobile"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: "clamp(195px, 25vh, 225px)",
                width: "calc(100% - 32px)",
                maxWidth: "420px",
                height: "calc(100svh - 200px)",
                overflow: "hidden",
                paddingTop: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transform: `translateY(${-scrollShift.toFixed(1)}px)`,
                  transition: "transform 0.12s ease-out",
                  paddingBottom: "40px",
                }}
              >
                {stepsData.map((s, idx) => {
                  const rev = revs[idx];
                  const op = rev;
                  const ty = (1 - rev) * 24;

                  return (
                    <React.Fragment key={s.n}>
                      {/* Vertical connector line between cards */}
                      {idx > 0 && (
                        <div
                          aria-hidden="true"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "12px",
                            justifyContent: "center",
                            opacity: op,
                            transform: `translateY(${ty.toFixed(1)}px)`,
                            transition: "opacity 0.35s ease",
                          }}
                        >
                          <span
                            style={{
                              width: "2px",
                              height: "100%",
                              background: "#0B0B0B",
                              borderRadius: "1px",
                            }}
                          />
                        </div>
                      )}

                      {/* Card (Appears below previous card, previous cards remain visible) */}
                      <div
                        style={{
                          boxSizing: "border-box",
                          padding: "16px 16px",
                          borderRadius: "14px",
                          background: "#0B0B0B",
                          color: "#F7F7F5",
                          border: "1px solid rgba(247,247,245,0.12)",
                          boxShadow: "0 14px 34px -12px rgba(0,0,0,0.4)",
                          opacity: Number(op.toFixed(3)),
                          transform: `translateY(${ty.toFixed(1)}px)`,
                          transition: "opacity 0.35s ease, transform 0.35s ease-out",
                          pointerEvents: op > 0.3 ? "auto" : "none",
                        }}
                      >
                        {/* Step Header */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "10.5px", opacity: 0.6, letterSpacing: ".06em", fontWeight: 600 }}>
                            STEP {s.n} OF 04
                          </span>
                          <span
                            style={{
                              width: "28px",
                              height: "28px",
                              borderRadius: "50%",
                              background: "#F7F7F5",
                              color: "#0B0B0B",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              width="13"
                              height="13"
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

                        {/* Title & Description */}
                        <div style={{ marginTop: "8px", fontSize: "16px", fontWeight: 600, letterSpacing: "-.01em" }}>
                          {s.t}
                        </div>
                        <div style={{ marginTop: "4px", fontSize: "12.5px", lineHeight: 1.45, opacity: 0.72 }}>
                          {s.d}
                        </div>

                        {/* Micro-Indicators */}
                        <div
                          aria-hidden="true"
                          style={{
                            marginTop: "12px",
                            paddingTop: "10px",
                            borderTop: "1px solid rgba(247,247,245,0.08)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          {idx === 0 && (
                            <>
                              <span
                                className="chipx"
                                style={{
                                  padding: "2px 8px",
                                  borderRadius: "999px",
                                  fontSize: "10.5px",
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
                                  padding: "2px 8px",
                                  borderRadius: "999px",
                                  fontSize: "10.5px",
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
                                  padding: "2px 8px",
                                  borderRadius: "999px",
                                  fontSize: "10.5px",
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

                          {idx === 1 && (
                            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                              <span
                                className="bar"
                                style={{
                                  display: "block",
                                  height: "3.5px",
                                  borderRadius: "2px",
                                  background: "#F7F7F5",
                                  width: "100%",
                                }}
                              />
                              <span
                                className="bar"
                                style={{
                                  display: "block",
                                  height: "3.5px",
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
                                  height: "3.5px",
                                  borderRadius: "2px",
                                  background: "#F7F7F5",
                                  opacity: 0.25,
                                  width: "40%",
                                }}
                              />
                            </div>
                          )}

                          {idx === 2 && (
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

                          {idx === 3 && (
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
                                  fontSize: "13px",
                                  color: "#F7F7F5",
                                  fontWeight: 500,
                                }}
                              >
                                → Connected
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Progress Indicator hint */}
              <div
                style={{
                  marginTop: "12px",
                  textAlign: "center",
                  fontSize: "11px",
                  color: "#9A9A96",
                  letterSpacing: ".02em",
                }}
              >
                {rev3 < 0.8 ? "Scroll down to reveal more steps ↓" : "All 4 steps revealed ✓"}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}

export default React.memo(HowItWorksSection);
