"use strict";
"use client";

import React from "react";

interface HeroSectionProps {
  magneticRef?: React.Ref<HTMLAnchorElement>;
}

export default function HeroSection({ magneticRef }: HeroSectionProps) {
  return (
    <section
      id="top"
      data-theme="light"
      aria-label="Every company has a next move"
      style={{
        position: "relative",
        height: "940px",
        overflow: "clip",
        background: "#F7F7F5",
      }}
    >
      {/* Animated background grid */}
      <div className="grid drift" aria-hidden="true" style={{ position: "absolute", inset: 0 }} />

      {/* Floating blinking grid nodes */}
      <span className="node" aria-hidden="true" style={{ left: "calc(50% - 320px)", top: "256px", animationDelay: ".5s" }} />
      <span className="node" aria-hidden="true" style={{ left: "calc(50% + 384px)", top: "192px", animationDelay: "2.6s" }} />
      <span className="node" aria-hidden="true" style={{ left: "calc(50% + 256px)", top: "576px", animationDelay: "4.1s" }} />
      <span className="node" aria-hidden="true" style={{ left: "calc(50% - 448px)", top: "512px", animationDelay: "6s" }} />
      <span className="node" aria-hidden="true" style={{ left: "calc(50% - 64px)", top: "704px", animationDelay: "7.4s" }} />

      {/* Hero Center Content */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "196px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        {/* Avatars pill */}
        <div className="fade" style={{ animationDelay: "2.1s", display: "flex", alignItems: "center", gap: "12px" }}>
          <div aria-hidden="true" style={{ display: "flex" }}>
            <span style={{ width: 26, height: 26, borderRadius: "50%", border: "2px solid #F7F7F5", background: "#1A1A1A", color: "#F7F7F5", fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>A</span>
            <span style={{ width: 26, height: 26, marginLeft: -8, borderRadius: "50%", border: "2px solid #F7F7F5", background: "#6B6B6B", color: "#F7F7F5", fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>R</span>
            <span style={{ width: 26, height: 26, marginLeft: -8, borderRadius: "50%", border: "2px solid #F7F7F5", background: "#2A2A2A", color: "#F7F7F5", fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>S</span>
            <span style={{ width: 26, height: 26, marginLeft: -8, borderRadius: "50%", border: "2px solid #F7F7F5", background: "#9A9A96", color: "#0B0B0B", fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>M</span>
          </div>
          <span style={{ fontSize: "12px", lineHeight: 1.35, color: "#6B6B6B", textAlign: "left" }}>
            For ambitious founders<br />and serious investors
          </span>
        </div>

        {/* Headline */}
        <h1
          className="serif hero-heading"
          style={{
            margin: "44px 0 0",
            fontSize: "clamp(48px, 6.6vw, 100px)",
            lineHeight: 1.02,
            letterSpacing: "-.015em",
            color: "#0B0B0B",
          }}
        >
          <span className="mask">
            <span className="rise" style={{ animationDelay: ".25s" }}>
              Every company
            </span>
          </span>
          <span className="mask">
            <span className="rise" style={{ animationDelay: ".5s" }}>
              has a <span className="i">next move.</span>
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="fade"
          style={{
            animationDelay: "1.1s",
            margin: "30px 0 0",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "#6B6B6B",
            maxWidth: "540px",
          }}
        >
          Find the people, opportunities and capital<br />
          that can move it forward.
        </p>

        {/* CTAs */}
        <div
          className="fade"
          style={{
            animationDelay: "1.5s",
            marginTop: "44px",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            ref={magneticRef}
            className="pill"
            href="#pricing"
            style={{ padding: "15px 24px", background: "#0B0B0B", color: "#F7F7F5" }}
          >
            Get Started <span className="ar">→</span>
          </a>
          <a className="ln" href="#noise">
            Explore EXIT
          </a>
        </div>
      </div>

      {/* Founder Annotation (Left) */}
      <div
        className="fade hero-anno-founder"
        style={{
          animationDelay: "2.4s",
          position: "absolute",
          left: "calc(50% - 610px)",
          top: "350px",
        }}
      >
        <div className="float1">
          <div
            className="anno"
            style={{
              transform:
                "translate(calc(var(--mx, 0) * -10px), calc(var(--my, 0) * -6px)) rotateY(calc(var(--mx, 0) * 4deg))",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "214px",
                padding: "14px 16px",
                background: "#FFFFFF",
                border: "1px solid rgba(11,11,11,.08)",
                borderRadius: "12px",
                boxShadow: "0 24px 50px -24px rgba(11,11,11,.18)",
              }}
            >
              <div className="lab" style={{ fontSize: "9px", color: "#6B6B6B" }}>
                Founder
              </div>
              <div className="serif" style={{ marginTop: "8px", fontSize: "18px", lineHeight: 1.1 }}>
                NovaNest
              </div>
              <div style={{ marginTop: "4px", fontSize: "11.5px", color: "#6B6B6B" }}>
                Raising a <span className="serif i" style={{ color: "#0B0B0B" }}>seed</span> round
              </div>
            </div>
            <svg width="70" height="30" viewBox="0 0 70 30" aria-hidden="true" style={{ marginTop: "22px" }}>
              <path d="M0 1 H40 L66 26" fill="none" stroke="#0B0B0B" strokeOpacity=".35" strokeWidth="1" />
              <circle cx="66" cy="26" r="2.5" fill="#0B0B0B" />
            </svg>
          </div>
        </div>
      </div>

      {/* Investor Annotation (Right) */}
      <div
        className="fade hero-anno-investor"
        style={{
          animationDelay: "2.7s",
          position: "absolute",
          left: "calc(50% + 330px)",
          top: "520px",
        }}
      >
        <div className="float2">
          <div
            className="anno"
            style={{
              transform:
                "translate(calc(var(--mx, 0) * 12px), calc(var(--my, 0) * 7px)) rotateY(calc(var(--mx, 0) * -4deg))",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <svg width="60" height="30" viewBox="0 0 60 30" aria-hidden="true" style={{ marginTop: "20px" }}>
              <path d="M60 4 H26 L4 26" fill="none" stroke="#0B0B0B" strokeOpacity=".35" strokeWidth="1" />
              <circle cx="4" cy="26" r="2.5" fill="#0B0B0B" />
            </svg>
            <div
              style={{
                width: "214px",
                padding: "14px 16px",
                background: "#FFFFFF",
                border: "1px solid rgba(11,11,11,.08)",
                borderRadius: "12px",
                boxShadow: "0 24px 50px -24px rgba(11,11,11,.18)",
              }}
            >
              <div className="lab" style={{ fontSize: "9px", color: "#6B6B6B" }}>
                Investor · looking for
              </div>
              <div
                style={{
                  marginTop: "10px",
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  rowGap: "5px",
                  fontSize: "11.5px",
                }}
              >
                <span style={{ color: "#6B6B6B" }}>Stage</span>
                <span>Seed</span>
                <span style={{ color: "#6B6B6B" }}>Industry</span>
                <span>FinTech</span>
                <span style={{ color: "#6B6B6B" }}>Ticket</span>
                <span>₹50L – ₹1Cr</span>
                <span style={{ color: "#6B6B6B" }}>Location</span>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="fade"
        style={{
          animationDelay: "2.9s",
          position: "absolute",
          left: "50%",
          bottom: "38px",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          color: "#6B6B6B",
        }}
      >
        <span className="lab" style={{ fontSize: "9px" }}>
          Scroll
        </span>
        <span
          aria-hidden="true"
          style={{
            display: "block",
            width: "1px",
            height: "38px",
            background: "linear-gradient(#0B0B0B, rgba(11,11,11,0))",
          }}
        />
      </div>
    </section>
  );
}
