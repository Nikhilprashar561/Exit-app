"use strict";
"use client";

import React from "react";

interface FinalCtaProps {
  magneticRef?: React.Ref<HTMLAnchorElement>;
}

export default function FinalCtaSection({ magneticRef }: FinalCtaProps) {
  return (
    <section
      id="final"
      className="final-cta-section"
      data-theme="dark"
      aria-label="Your next move is waiting"
      style={{
        position: "relative",
        overflow: "clip",
        background: "#090909",
        color: "#F7F7F5",
        paddingTop: "120px",
        paddingBottom: "40px",
      }}
    >
      {/* Central Final Message */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h2
          className="serif rv sec-heading-final"
          style={{
            margin: 0,
            fontSize: "clamp(34px, 7vw, 108px)",
            lineHeight: 1.02,
            letterSpacing: "-.015em",
          }}
        >
          Your <span className="i">next move</span>
          <br />
          is waiting.
        </h2>

        <p className="rv sec-sub-text" style={{ margin: "20px 0 0", fontSize: "clamp(13px, 3.8vw, 16px)", color: "#B5B5B1" }}>
          Make it count.
        </p>

        <div
          className="rv"
          style={{
            marginTop: "36px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            ref={magneticRef}
            className="pill"
            href="#top"
            style={{
              padding: "16px 26px",
              background: "#F7F7F5",
              color: "#0B0B0B",
              letterSpacing: ".12em",
              fontSize: "12.5px",
            }}
          >
            ENTER EXIT <span className="ar">→</span>
          </a>
          <a className="ln" href="#investors" style={{ color: "#F7F7F5" }}>
            Explore opportunities
          </a>
        </div>
      </div>

      {/* Traveling Particle along glowing line */}
      <div
        className="final-travel-line"
        aria-hidden="true"
        style={{
          position: "relative",
          width: "calc(50% - 150px)",
          marginTop: "48px",
          height: "1px",
        }}
      >
        <div
          className="drawx"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(247,247,245,0), rgba(247,247,245,.5))",
          }}
        />
        <span className="travel" />
      </div>

      {/* Footer without huge dead space */}
      <footer
        className="site-footer"
        style={{
          margin: "48px 48px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "24px",
          borderTop: "1px solid rgba(247,247,245,.1)",
          fontSize: "12px",
          color: "#9A9A96",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <a
          href="#top"
          aria-label="EXIT home"
          style={{ display: "flex", alignItems: "center", gap: "10px", color: "#F7F7F5" }}
        >
          <img
            src="/exit.svg"
            alt="EXIT"
            width="88.7"
            height="20"
            style={{ display: "block", width: "88.7px", height: "20px", filter: "invert(1)" }}
          />
        </a>

        <nav aria-label="Footer" style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
          <a className="nl" href="#founders" style={{ fontSize: "12px" }}>
            For Founders
          </a>
          <a className="nl" href="#investors" style={{ fontSize: "12px" }}>
            For Investors
          </a>
          <a className="nl" href="#how" style={{ fontSize: "12px" }}>
            How It Works
          </a>
          <a className="nl" href="#verify" style={{ fontSize: "12px" }}>
            Verification
          </a>
        </nav>

        <span>© 2026 EXIT</span>
      </footer>
    </section>
  );
}
