"use strict";
"use client";

import React, { useRef, useState } from "react";

interface HowItWorksProps {
  progress: number;
}

export default function HowItWorksSection({ progress }: HowItWorksProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="how"
      data-theme="light"
      aria-label="From search to the right fit"
      style={{
        position: "relative",
        background: "#F7F7F5",
        paddingBottom: "120px",
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
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "13%",
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
            className="serif"
            style={{
              margin: "24px 0 0",
              fontSize: "clamp(44px, 5.2vw, 78px)",
              lineHeight: 1.04,
              letterSpacing: "-.01em",
            }}
          >
            From search to the
            <br />
            <span className="i">right fit.</span>
          </h2>
          <p style={{ margin: "20px 0 0", fontSize: "15px", color: "#6B6B6B", maxWidth: "480px" }}>
            A simpler way to find and connect with the right investors or companies.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div
          className="how-grid-container"
          style={{
            position: "absolute",
            left: "50%",
            top: "58%",
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
      </div>

      {/* Video Content Section: "Watch how Exit works" */}
      <div
        style={{
          marginTop: "980px",
          padding: "60px 24px 0",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <span
            className="lab"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 12px",
              borderRadius: "999px",
              background: "#161616",
              color: "#C9C9C5",
              fontSize: "10px",
              letterSpacing: ".18em",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#F7F7F5",
              }}
            />
            See it in motion
          </span>

          <h2
            className="serif"
            style={{
              fontSize: "clamp(36px, 4.4vw, 56px)",
              lineHeight: 1.08,
              color: "#0B0B0B",
            }}
          >
            Watch how Exit <span className="i">works.</span>
          </h2>
          <p
            style={{
              marginTop: "14px",
              fontSize: "15px",
              color: "#6B6B6B",
              maxWidth: "520px",
              margin: "14px auto 0",
            }}
          >
            From first connection to a closed deal — the whole idea in under a minute.
          </p>

          {/* 16:9 Video Frame */}
          <div className="video-frame" onClick={handleTogglePlay}>
            <video
              ref={videoRef}
              id="exitVideo"
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source
                src="/video/Create_a_premium_minimalist_ha.mp4"
                type="video/mp4"
              />
            </video>

            {/* Custom Play Overlay */}
            <div className={`video-play ${isPlaying ? "hidden" : ""}`} id="videoPlay" aria-label="Play video">
              <div className="play-btn">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#0B0B0B">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
