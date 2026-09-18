"use strict";
"use client";

import React from "react";

interface MatchSectionProps {
  progress: number;
}

export default function MatchSection({ progress }: MatchSectionProps) {
  // Matching step `ms` from 0 to 6 based on progress
  const ms = Math.max(0, Math.min(6, Math.floor((progress - 0.08) * 7.6)));

  const criteria = [
    ["Stage", "Seed", "Seed – Series A"],
    ["Industry", "FinTech", "FinTech, SaaS"],
    ["Ticket", "Raising ₹75L", "₹50L – ₹1Cr"],
    ["Goals", "Scale nationally", "Long-term partner"],
  ];

  const nAligned = Math.min(4, ms);
  const isDone = ms >= 6;

  const rows = criteria.map((a, i) => {
    const aligned = ms > i;
    return {
      k: a[0],
      f: a[1],
      inv: a[2],
      ls: aligned ? (isDone ? "0" : "1") : "0",
      ck: aligned ? 1 : 0,
      dot: aligned && !isDone ? 1 : 0,
      fw: aligned ? 500 : 400,
      op: isDone ? 0.35 : 1,
      pbg: aligned ? "#0B0B0B" : "rgba(247,247,245,1)",
      pfg: aligned ? "#F7F7F5" : "#6B6B6B",
      pbd: aligned ? "#0B0B0B" : "rgba(11,11,11,.14)",
      fbg: aligned && !isDone ? "#FAFAF8" : "#FFFFFF",
      ibg: aligned && !isDone ? "#111111" : "#0B0B0B",
    };
  });

  const countText = `${nAligned} of 4 aligned`;
  const hintOp = ms >= 6 ? 0 : 1;
  const wordOp = ms >= 5 ? 1 : 0;
  const wordY = ms >= 5 ? "0px" : "14px";
  const lineScale = ms >= 6 ? 1 : 0;
  const capOp = ms >= 6 ? 1 : 0;

  const cl = (v: number) => Math.max(0, Math.min(1, v));

  return (
    <section
      id="match"
      data-theme="light"
      aria-label="The match"
      style={{
        position: "relative",
        height: "2400px",
        background: "#F7F7F5",
      }}
    >
      <div className="stick">
        <div className="grid" aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

        {/* Top connector line */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "1px",
            marginLeft: "-0.5px",
            height: `${Math.min(1, progress * 8) * 64}px`,
            background: "#0B0B0B",
          }}
        />

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
            The match
          </span>
          <h2
            className="serif sec-heading-match"
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(26px, 4.4vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-.01em",
            }}
          >
            Two sides. One <span className="i">right fit.</span>
          </h2>
        </div>

        {/* 3-Column Match Architecture */}
        <div className="match-scale-wrap" style={{ position: "absolute", left: "50%", top: "clamp(180px, 26vh, 260px)", width: 0, height: 0 }}>
          <div
            className="ui match-grid-container"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "1040px",
              marginLeft: "-520px",
              display: "grid",
              gridTemplateColumns: "290px minmax(0, 1fr) 290px",
              alignItems: "start",
            }}
          >
          {/* Founder Surface (Left) */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              transform: `translateX(${(1 - cl(progress * 1.6)) * -90}px) translate(calc(var(--mx, 0) * -4px), calc(var(--my, 0) * -3px))`,
              opacity: 0.35 + cl(progress * 2.5) * 0.65,
            }}
          >
            <div
              style={{
                borderRadius: "16px",
                background: "#FFFFFF",
                border: "1px solid rgba(11,11,11,.08)",
                boxShadow: "0 30px 60px -34px rgba(11,11,11,.28)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "118px",
                  boxSizing: "border-box",
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(11,11,11,.07)",
                }}
              >
                <span className="lab" style={{ fontSize: "9px", color: "#6B6B6B" }}>
                  Founder
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    className="serif"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "#0B0B0B",
                      color: "#F7F7F5",
                      fontSize: 21,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    N
                  </span>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 500 }}>
                      NovaNest <span style={{ fontSize: "11px" }}>✓</span>
                    </div>
                    <div style={{ marginTop: "2px", fontSize: "11.5px", color: "#6B6B6B" }}>
                      FinTech · Bengaluru
                    </div>
                  </div>
                </div>
              </div>

              {rows.map((r, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    height: "56px",
                    boxSizing: "border-box",
                    padding: "0 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(11,11,11,.05)",
                    background: r.fbg,
                    transition: "background 1s cubic-bezier(.16,1,.3,1)",
                  }}
                >
                  <span style={{ fontSize: "11px", color: "#6B6B6B" }}>{r.k}</span>
                  <span style={{ fontSize: "13px", fontWeight: r.fw, transition: "font-weight .6s" }}>
                    {r.f}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      right: "-4px",
                      top: "50%",
                      width: 7,
                      height: 7,
                      marginTop: "-3.5px",
                      borderRadius: "50%",
                      background: "#0B0B0B",
                      transform: `scale(${r.dot})`,
                      transition: "transform .9s cubic-bezier(.16,1,.3,1)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Alignment Ledger (Center) */}
          <div className="match-ledger-center" style={{ position: "relative", paddingTop: "118px" }}>
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: "118px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "11px", color: "#6B6B6B", opacity: hintOp, transition: "opacity 1s" }}>
                {countText}
              </span>
            </div>

            {rows.map((r, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  opacity: r.op,
                  transition: "opacity 1.2s cubic-bezier(.16,1,.3,1)",
                }}
              >
                {/* Connector lines left and right */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: "50%",
                    top: "50%",
                    height: "1px",
                    background: "rgba(11,11,11,.08)",
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "50%",
                    right: 0,
                    top: "50%",
                    height: "1px",
                    background: "rgba(11,11,11,.08)",
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: "50%",
                    top: "50%",
                    height: "1px",
                    background: "#0B0B0B",
                    transformOrigin: "left",
                    transform: `scaleX(${r.ls})`,
                    transition: "transform 1.3s cubic-bezier(.16,1,.3,1)",
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "50%",
                    right: 0,
                    top: "50%",
                    height: "1px",
                    background: "#0B0B0B",
                    transformOrigin: "right",
                    transform: `scaleX(${r.ls})`,
                    transition: "transform 1.3s cubic-bezier(.16,1,.3,1)",
                  }}
                />

                {/* Badge Center */}
                <span
                  style={{
                    position: "relative",
                    margin: "0 auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    height: "26px",
                    padding: "0 12px",
                    borderRadius: "999px",
                    fontSize: "10px",
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    background: r.pbg,
                    color: r.pfg,
                    border: `1px solid ${r.pbd}`,
                    transition:
                      "background 1s cubic-bezier(.16,1,.3,1), color 1s, border-color 1s",
                  }}
                >
                  {r.k}
                  <span style={{ fontSize: "10px", letterSpacing: 0, opacity: r.ck, transition: "opacity .8s" }}>
                    ✓
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Investor Surface (Right) */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              transform: `translateX(${(1 - cl(progress * 1.6)) * 90}px) translate(calc(var(--mx, 0) * 4px), calc(var(--my, 0) * 3px))`,
              opacity: 0.35 + cl(progress * 2.5) * 0.65,
            }}
          >
            <div
              style={{
                borderRadius: "16px",
                background: "#0B0B0B",
                color: "#F7F7F5",
                boxShadow: "0 30px 60px -30px rgba(11,11,11,.55)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "118px",
                  boxSizing: "border-box",
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(247,247,245,.08)",
                }}
              >
                <span className="lab" style={{ fontSize: "9px", color: "#9A9A96" }}>
                  Investor
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "#2A2A2A",
                      color: "#C9C9C5",
                      fontSize: 11,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    [ ]
                  </span>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 500 }}>[Investor name]</div>
                    <div style={{ marginTop: "2px", fontSize: "11.5px", color: "#9A9A96" }}>
                      Angel investor · India
                    </div>
                  </div>
                </div>
              </div>

              {rows.map((r, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    height: "56px",
                    boxSizing: "border-box",
                    padding: "0 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(247,247,245,.05)",
                    background: r.ibg,
                    transition: "background 1s cubic-bezier(.16,1,.3,1)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-4px",
                      top: "50%",
                      width: 7,
                      height: 7,
                      marginTop: "-3.5px",
                      borderRadius: "50%",
                      background: "#F7F7F5",
                      border: "1px solid #0B0B0B",
                      boxSizing: "border-box",
                      transform: `scale(${r.dot})`,
                      transition: "transform .9s cubic-bezier(.16,1,.3,1)",
                    }}
                  />
                  <span style={{ fontSize: "11px", color: "#9A9A96" }}>{r.k}</span>
                  <span style={{ fontSize: "13px", fontWeight: r.fw }}>{r.inv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Connection Match Bridge at Bottom */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "calc(27% + 400px)",
            width: "1060px",
            marginLeft: "-530px",
            height: "90px",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "150px",
              right: "150px",
              top: "44px",
              height: "1px",
              background: "#0B0B0B",
              transform: `scaleX(${lineScale})`,
              transition: "transform 1.8s cubic-bezier(.16,1,.3,1)",
            }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "150px",
              top: "-30px",
              width: "1px",
              height: "75px",
              background: "#0B0B0B",
              transformOrigin: "top",
              transform: `scaleY(${lineScale})`,
              transition: "transform 1.2s cubic-bezier(.16,1,.3,1)",
            }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "150px",
              top: "-30px",
              width: "1px",
              height: "75px",
              background: "#0B0B0B",
              transformOrigin: "top",
              transform: `scaleY(${lineScale})`,
              transition: "transform 1.2s cubic-bezier(.16,1,.3,1)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "44px",
              transform: "translate(-50%, -50%)",
              padding: "0 26px",
              background: "#F7F7F5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: wordOp,
              transition: "opacity 1.4s cubic-bezier(.16,1,.3,1)",
            }}
          >
            <span
              className="serif i"
              style={{
                fontSize: "56px",
                lineHeight: 1,
                transform: `translateY(${wordY})`,
                transition: "transform 1.6s cubic-bezier(.16,1,.3,1)",
              }}
            >
              Match.
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "86px",
              textAlign: "center",
              fontSize: "12.5px",
              color: "#6B6B6B",
              opacity: capOp,
              transition: "opacity 1.2s cubic-bezier(.16,1,.3,1) .3s",
            }}
          >
            NovaNest and [Investor name] can now start the conversation.
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
